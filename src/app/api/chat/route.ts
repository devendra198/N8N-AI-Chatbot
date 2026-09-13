import { NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK_URL =
  process.env.N8N_WEBHOOK_URL ||
  "https://dev01.app.n8n.cloud/webhook/b1de20e9-a151-40f5-87c5-77baf8911eee/chat";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, sessionId } = body;

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "A non-empty message string is required." },
        { status: 400 }
      );
    }

    const trimmedMessage = message.trim();
    const activeSessionId =
      sessionId && typeof sessionId === "string" ? sessionId : "default-session";

    // Standard n8n chat trigger payload format
    const n8nPayload = {
      chatInput: trimmedMessage,
      sessionId: activeSessionId,
      message: trimmedMessage, // fallback compatibility field
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 45000); // 45s timeout for AI workflows

    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
      },
      body: JSON.stringify(n8nPayload),
      signal: controller.signal,
    }).finally(() => {
      clearTimeout(timeoutId);
    });

    if (!n8nResponse.ok) {
      const errorText = await n8nResponse.text().catch(() => "");
      console.error(
        `[n8n Webhook Error] Status: ${n8nResponse.status}`,
        errorText
      );
      return NextResponse.json(
        {
          error:
            "Our AI assistant is temporarily unreachable. Please try again in a few moments.",
          status: n8nResponse.status,
        },
        { status: 502 }
      );
    }

    // Try parsing response as JSON first
    const contentType = n8nResponse.headers.get("content-type") || "";
    let replyText = "";

    if (contentType.includes("application/json")) {
      const data = await n8nResponse.json();
      // Handle common n8n chat node response patterns
      if (typeof data === "string") {
        replyText = data;
      } else if (data && typeof data === "object") {
        if ("output" in data && typeof data.output === "string") {
          replyText = data.output;
        } else if ("text" in data && typeof data.text === "string") {
          replyText = data.text;
        } else if ("message" in data && typeof data.message === "string") {
          replyText = data.message;
        } else if ("response" in data && typeof data.response === "string") {
          replyText = data.response;
        } else {
          // If complex json object or array
          replyText = JSON.stringify(data, null, 2);
        }
      }
    } else {
      replyText = await n8nResponse.text();
    }

    if (!replyText || !replyText.trim()) {
      replyText = "Thank you for reaching out. Your request has been received.";
    }

    return NextResponse.json({
      reply: replyText.trim(),
    });
  } catch (error: unknown) {
    console.error("[Chat Route Error]", error);

    const isAbort =
      error instanceof Error && error.name === "AbortError";
    const errorMessage = isAbort
      ? "Request timed out while waiting for the AI response. Please try again."
      : "Unable to connect to the assistant service. Please check your connection and try again.";

    return NextResponse.json(
      {
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
