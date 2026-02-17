"use client";

import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface HeroChatProps {
  lang?: "tr" | "en";
}

const SESSION_KEY = "tonla_chat_session";

function getOrCreateSession(): string {
  if (typeof window === "undefined") return uuidv4();
  const existing = localStorage.getItem(SESSION_KEY);
  if (existing) return existing;
  const newId = uuidv4();
  localStorage.setItem(SESSION_KEY, newId);
  return newId;
}

export default function HeroChat({ lang = "tr" }: HeroChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [initialized, setInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const placeholder =
    lang === "en" ? "Ask something..." : "Bir \u015fey sorun...";

  const welcomeMessage =
    lang === "en"
      ? "Welcome to TONLA! I\u2019m here to help with your raw material needs. Are you a manufacturer or a trader?"
      : "TONLA\u2019ya ho\u015f geldiniz! Hammadde ihtiya\u00e7lar\u0131n\u0131z konusunda size yard\u0131mc\u0131 olmak i\u00e7in buraday\u0131m. \u00dcretici misiniz yoksa t\u00fcccar m\u0131s\u0131n\u0131z?";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const sid = getOrCreateSession();
    setSessionId(sid);

    async function loadExisting() {
      try {
        const res = await fetch(`/api/chat/history?sessionId=${sid}`);
        if (res.ok) {
          const data = await res.json();
          if (data.messages && data.messages.length > 0) {
            setMessages(data.messages);
            setInitialized(true);
            return;
          }
        }
      } catch {
        // ignore - will show default welcome
      }
      setMessages([{ role: "assistant", content: welcomeMessage }]);
      setInitialized(true);
    }

    loadExisting();
  }, [welcomeMessage]);

  useEffect(() => {
    if (initialized) {
      inputRef.current?.focus();
    }
  }, [initialized]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading || !sessionId) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          sessionId,
          lang,
        }),
      });

      const data = await res.json();

      if (data.message) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.message },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            lang === "en"
              ? "Sorry, an error occurred. Please try again."
              : "\u00dczg\u00fcn\u00fcm, bir hata olu\u015ftu. L\u00fctfen tekrar deneyin.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-zinc-200">
        <div className="bg-zinc-900 text-white px-6 py-4 flex items-center gap-3">
          <div className="w-9 h-9 bg-red-800 rounded-full flex items-center justify-center text-sm font-bold">
            T
          </div>
          <div>
            <h3 className="font-semibold text-sm">
              {lang === "en" ? "TONLA Assistant" : "TONLA Asistan"}
            </h3>
            <p className="text-xs text-zinc-400">
              {lang === "en" ? "Online" : "\u00c7evrimi\u00e7i"}
            </p>
          </div>
        </div>

        <div className="h-[320px] overflow-y-auto p-5 space-y-3 bg-zinc-50">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-red-800 text-white rounded-br-md"
                    : "bg-white text-zinc-800 border border-zinc-200 rounded-bl-md shadow-sm"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-zinc-400 px-4 py-2.5 rounded-2xl rounded-bl-md text-sm border border-zinc-200 shadow-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-zinc-200 bg-white">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder={placeholder}
              className="flex-1 px-4 py-3 bg-zinc-100 border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-800/20 focus:border-red-700 transition-all"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="px-5 py-3 bg-red-800 text-white rounded-xl hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-sm font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
