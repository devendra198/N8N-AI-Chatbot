'use client';

import React, { useEffect, useState } from 'react';
import { CloseIcon } from './Icons';

declare global {
  interface Window {
    n8nChatInstance?: unknown;
  }
}

export default function N8nChatWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    // 1. Inject official n8n Chat stylesheet (prepended so custom responsive rules take precedence)
    const styleId = 'n8n-chat-stylesheet';
    if (!document.getElementById(styleId)) {
      const link = document.createElement('link');
      link.id = styleId;
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
      if (document.head.firstChild) {
        document.head.insertBefore(link, document.head.firstChild);
      } else {
        document.head.appendChild(link);
      }
    }

    let isMounted = true;

    // 2. Load official n8n Chat module via browser ESM import
    const loadN8nChat = async () => {
      try {
        if (
          document.querySelector('.chat-window-wrapper') ||
          window.n8nChatInstance
        ) {
          return;
        }

        const dynamicImport = new Function(
          'moduleUrl',
          'return import(moduleUrl);'
        );
        const { createChat } = await dynamicImport(
          'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js'
        );

        if (!isMounted) return;

        const chat = createChat({
          webhookUrl:
            'https://dev01.app.n8n.cloud/webhook/b1de20e9-a151-40f5-87c5-77baf8911eee/chat',
          webhookConfig: {
            headers: {
              'X-Instance-Id':
                '60936ccffaf5015c677c81412d4d0bf52a4d05d1008297877615b39d38472c59',
            },
          },
          mode: 'window',
          showWelcomeScreen: false,
          loadPreviousSession: false,
          allowFileUploads: false,
          initialMessages: [
            'Hello👋',
            "We're CODEXSTREAM. How can I assist you today with our software engineering, web development, or AI automation solutions?",
          ],
          enableStreaming: false,
        });

        window.n8nChatInstance = chat;
      } catch (err) {
        console.error('Failed to load official n8n chat widget:', err);
      }
    };

    loadN8nChat();

    // Observe DOM to track open/close status of n8n chat window
    const interval = setInterval(() => {
      const chatWindow = document.querySelector<HTMLElement>(
        '.chat-window-wrapper .chat-window'
      );
      if (chatWindow) {
        const isHidden =
          chatWindow.style.display === 'none' ||
          window.getComputedStyle(chatWindow).display === 'none';
        setIsChatOpen(!isHidden);
      } else {
        setIsChatOpen(false);
      }
    }, 300);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const handleToggle = () => {
    const toggleBtn = document.querySelector<HTMLElement>('.chat-window-toggle');
    if (toggleBtn) {
      toggleBtn.click();
    }
  };

  return (
    <div className="custom-chat-launcher-root">
      {/* Interactive Speech Bubble with "Hey let's talk 👋" */}
      {!isChatOpen && (
        <div
          className="funny-speech-bubble"
          onClick={handleToggle}
          role="button"
          tabIndex={0}
        >
          <span className="bubble-text">Hey let&apos;s talk 👋</span>
          <span className="bubble-dots" aria-hidden="true">
            <span className="bubble-dot" />
            <span className="bubble-dot" />
            <span className="bubble-dot" />
          </span>
          <div className="bubble-arrow" aria-hidden="true" />
        </div>
      )}

      {/* Robot Face Launcher Button */}
      <button
        type="button"
        className={`custom-robot-btn ${isChatOpen ? 'is-active' : ''}`}
        onClick={handleToggle}
        title={isChatOpen ? 'Close chat' : 'Chat with CODEXSTREAM AI Assistant'}
        aria-label={isChatOpen ? 'Close chat' : 'Open chat'}
      >
        {isChatOpen ? (
          <div className="robot-close-icon">
            <CloseIcon className="w-6 h-6 text-white" />
          </div>
        ) : (
          <div className="funny-robot-body">
            <svg
              viewBox="0 0 100 100"
              className="funny-robot-svg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="robotBodyGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#168DD0" />
                  <stop offset="70%" stopColor="#071B33" />
                  <stop offset="100%" stopColor="#040e1b" />
                </linearGradient>
                <linearGradient
                  id="robotFaceGrad"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#0d2847" />
                  <stop offset="100%" stopColor="#071B33" />
                </linearGradient>
                <linearGradient
                  id="robotEyeGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#41C7F4" />
                  <stop offset="100%" stopColor="#168DD0" />
                </linearGradient>
                <filter
                  id="robotGlow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Antenna Stem & Glowing Orb */}
              <line
                x1="50"
                y1="22"
                x2="50"
                y2="8"
                stroke="#41C7F4"
                strokeWidth="4"
                strokeLinecap="round"
                className="robot-antenna-stem"
              />
              <circle
                cx="50"
                cy="7"
                r="6"
                fill="#41C7F4"
                filter="url(#robotGlow)"
                className="robot-antenna-orb"
              />

              {/* Ears / Side Bolts */}
              <rect
                x="13"
                y="43"
                width="8"
                height="14"
                rx="4"
                fill="#168DD0"
              />
              <rect
                x="79"
                y="43"
                width="8"
                height="14"
                rx="4"
                fill="#168DD0"
              />

              {/* Main Head / Helmet */}
              <rect
                x="19"
                y="20"
                width="62"
                height="60"
                rx="18"
                fill="url(#robotBodyGrad)"
                stroke="#41C7F4"
                strokeWidth="2.5"
              />

              {/* Screen Face Inner */}
              <rect
                x="25"
                y="28"
                width="50"
                height="44"
                rx="11"
                fill="url(#robotFaceGrad)"
                stroke="#168DD0"
                strokeWidth="1.5"
              />

              {/* Animated Blinking Eyes */}
              <g className="robot-eyes-group">
                <ellipse
                  cx="38"
                  cy="46"
                  rx="6"
                  ry="8"
                  fill="url(#robotEyeGrad)"
                  filter="url(#robotGlow)"
                />
                <circle cx="39.5" cy="44" r="2.5" fill="#ffffff" />

                <ellipse
                  cx="62"
                  cy="46"
                  rx="6"
                  ry="8"
                  fill="url(#robotEyeGrad)"
                  filter="url(#robotGlow)"
                />
                <circle cx="63.5" cy="44" r="2.5" fill="#ffffff" />
              </g>

              {/* Friendly Smile */}
              <path
                d="M40 59 Q 50 67 60 59"
                stroke="#41C7F4"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />

              {/* Cute Cheek Blushes */}
              <circle cx="31" cy="56" r="3" fill="#41C7F4" opacity="0.4" />
              <circle cx="69" cy="56" r="3" fill="#41C7F4" opacity="0.4" />
            </svg>
          </div>
        )}

        {/* Pulsing online indicator */}
        {!isChatOpen && <span className="robot-online-badge" />}
      </button>
    </div>
  );
}
