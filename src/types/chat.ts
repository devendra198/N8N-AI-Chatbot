export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  status?: 'sending' | 'sent' | 'error';
}

export interface ChatRequestPayload {
  message: string;
  sessionId: string;
}

export interface ChatResponsePayload {
  reply: string;
  raw?: unknown;
}
