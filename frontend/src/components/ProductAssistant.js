"use client";

import { Bot, MessageCircle, Send, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const quickQuestions = [
  "Which product is right for my application?",
  "Compare the ATS product families",
  "What does ATS do?",
];

const assistantApiUrl =
  process.env.NEXT_PUBLIC_ASSISTANT_API_URL || "http://localhost:5000/api/assistant";

export default function ProductAssistant() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi — I’m the ATS product assistant. Ask me about a product, model or application, and I’ll help you narrow it down.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    inputRef.current?.focus();
  }, [open, messages, loading]);

  async function askQuestion(question) {
    const trimmedQuestion = question.trim();
    if (!trimmedQuestion || loading) return;

    const nextMessages = [...messages, { role: "user", content: trimmedQuestion }];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch(assistantApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.slice(-8),
          currentPath: pathname || "/",
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || "The assistant is unavailable right now.");
      }

      if (!response.body) {
        throw new Error("The assistant did not return a readable response.");
      }

      setMessages((current) => [...current, { role: "assistant", content: "" }]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      const handleEvent = (rawEvent) => {
        const data = rawEvent
          .split(/\r?\n/)
          .filter((line) => line.startsWith("data:"))
          .map((line) => line.slice(5).trim())
          .join("\n");

        if (!data) return;

        const event = JSON.parse(data);
        if (event.type === "error") throw new Error(event.message);
        if (event.type !== "text" || !event.text) return;

        setMessages((current) => {
          const updated = [...current];
          const lastMessage = updated[updated.length - 1];
          if (lastMessage?.role === "assistant") {
            updated[updated.length - 1] = {
              ...lastMessage,
              content: `${lastMessage.content}${event.text}`,
            };
          }
          return updated;
        });
      };

      while (true) {
        const { value, done } = await reader.read();
        buffer += decoder.decode(value || new Uint8Array(), { stream: !done });
        const events = buffer.split(/\r?\n\r?\n/);
        buffer = events.pop() || "";
        events.forEach(handleEvent);
        if (done) break;
      }

      if (buffer.trim()) handleEvent(buffer);
    } catch (requestError) {
      setMessages((current) => {
        const lastMessage = current[current.length - 1];
        return lastMessage?.role === "assistant" && !lastMessage.content
          ? current.slice(0, -1)
          : current;
      });
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    askQuestion(input);
  }

  return (
    <div className={`product-assistant ${open ? "is-open" : ""}`}>
      {open && (
        <section className="product-assistant-panel" aria-label="ATS product assistant">
          <header className="product-assistant-header">
            <div className="product-assistant-title">
              <span className="product-assistant-avatar" aria-hidden="true">
                <Bot size={18} strokeWidth={2.2} />
              </span>
              <div>
                <strong>ATS Assistant</strong>
                <span>Product guidance</span>
              </div>
            </div>
            <button
              className="product-assistant-close"
              type="button"
              aria-label="Close ATS Assistant"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </header>

          <div className="product-assistant-messages" aria-live="polite">
            {messages.map((message, index) => (
              message.content ? (
                <div
                  className={`product-assistant-message ${message.role}`}
                  key={`${message.role}-${index}`}
                >
                  {message.content}
                </div>
              ) : null
            ))}
            {loading && (
              <div className="product-assistant-message assistant is-loading">
                <span />
                <span />
                <span />
              </div>
            )}
            {messages.length === 1 && !loading && (
              <div className="product-assistant-quick-list">
                {quickQuestions.map((question) => (
                  <button type="button" key={question} onClick={() => askQuestion(question)}>
                    {question}
                  </button>
                ))}
              </div>
            )}
            {error && (
              <div className="product-assistant-error" role="alert">
                <span>{error}</span>
                <Link href="/form" onClick={() => setOpen(false)}>
                  Contact ATS <span aria-hidden="true">↗</span>
                </Link>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="product-assistant-form" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about a product or model…"
              aria-label="Ask a product question"
              maxLength={1400}
              disabled={loading}
            />
            <button type="submit" aria-label="Send question" disabled={!input.trim() || loading}>
              <Send size={17} />
            </button>
          </form>
        </section>
      )}

      <button
        className="product-assistant-launcher"
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close ATS Assistant" : "Open ATS Assistant"}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        <span>{open ? "Close" : "Ask ATS"}</span>
      </button>
    </div>
  );
}
