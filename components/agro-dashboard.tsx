"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  advisoryChecklist,
  climateTypes,
  dictionaries,
  languages,
  quickPrompts,
  soilTypes,
  type LanguageCode
} from "@/data/agro";
import { formatDateTime } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
};

const initialMessage: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Hello! I am AgroAI, your expert agricultural assistant.\n\nHow can I help you today? Please feel free to ask me anything about crop selection, soil management, pest control, yield optimization, or any other farming-related topic.",
  createdAt: new Date().toISOString()
};

const storageKey = "agroai_chat_state";

export function AgroDashboard() {
  const router = useRouter();
  const chatBottomRef = useRef<HTMLDivElement | null>(null);
  const [language, setLanguage] = useState<LanguageCode>("en");
  const [soilType, setSoilType] = useState("");
  const [climateType, setClimateType] = useState("");
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [isPending, setIsPending] = useState(false);
  const [copiedId, setCopiedId] = useState("");

  const labels = dictionaries[language];

  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      return;
    }

    try {
      const parsed = JSON.parse(raw) as {
        language?: LanguageCode;
        soilType?: string;
        climateType?: string;
        messages?: Message[];
      };

      if (parsed.language && dictionaries[parsed.language]) {
        setLanguage(parsed.language);
      }
      if (parsed.soilType) {
        setSoilType(parsed.soilType);
      }
      if (parsed.climateType) {
        setClimateType(parsed.climateType);
      }
      if (parsed.messages?.length) {
        setMessages(parsed.messages);
      }
    } catch {
      localStorage.removeItem(storageKey);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify({ language, soilType, climateType, messages })
    );
  }, [language, soilType, climateType, messages]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const recentReplies = useMemo(
    () => messages.filter((message) => message.role === "assistant").slice(-3).reverse(),
    [messages]
  );

  async function submitQuestion(promptOverride?: string) {
    const activeQuestion = (promptOverride ?? question).trim();
    if (!activeQuestion || isPending) {
      return;
    }

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: activeQuestion,
      createdAt: new Date().toISOString()
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setQuestion("");
    setIsPending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: activeQuestion,
          soilType,
          climateType,
          messages: nextMessages.map(({ role, content }) => ({ role, content }))
        })
      });

      if (response.status === 401) {
        router.push("/login");
        return;
      }

      const result = (await response.json()) as { answer?: string; error?: string };
      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: result.answer || result.error || "I could not generate a reply right now.",
        createdAt: new Date().toISOString()
      };

      setMessages((current) => [...current, assistantMessage]);
    } finally {
      setIsPending(false);
    }
  }

  async function exportHistory() {
    const exportPayload = {
      exportedAt: new Date().toISOString(),
      soilType,
      climateType,
      messages
    };

    const blob = new Blob([JSON.stringify(exportPayload, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `agroai-history-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  function clearHistory() {
    setMessages([initialMessage]);
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  async function copyReply(message: Message) {
    await navigator.clipboard.writeText(message.content);
    setCopiedId(message.id);
    window.setTimeout(() => setCopiedId(""), 1500);
  }

  function speakReply(message: Message) {
    if (!("speechSynthesis" in window)) {
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(message.content);
    utterance.lang = "en-IN";
    window.speechSynthesis.speak(utterance);
  }

  return (
    <main className="page-shell">
      <section className="glass-panel">
        <h1 className="top-title">{labels.appTitle}</h1>

        <div className="toolbar">
          <label htmlFor="language-select">{labels.language}:</label>
          <select
            id="language-select"
            className="field"
            style={{ maxWidth: "200px" }}
            value={language}
            onChange={(event) => setLanguage(event.target.value as LanguageCode)}
          >
            {languages.map((entry) => (
              <option key={entry.code} value={entry.code}>
                {entry.label}
              </option>
            ))}
          </select>
          <button className="button" type="button" onClick={exportHistory}>
            {labels.exportHistory}
          </button>
          <button className="button" type="button" onClick={clearHistory}>
            {labels.clearHistory}
          </button>
          <Link className="pill-link" href="/market">
            {labels.marketLink}
          </Link>
          <button className="button" type="button" onClick={logout}>
            {labels.logout}
          </button>
        </div>

        <div className="dashboard-grid">
          <section className="column-card">
            <div className="stack">
              <select className="field" value={soilType} onChange={(event) => setSoilType(event.target.value)}>
                <option value="">{labels.selectSoilType}</option>
                {soilTypes.map((soil) => (
                  <option key={soil} value={soil}>
                    {soil}
                  </option>
                ))}
              </select>

              <select
                className="field"
                value={climateType}
                onChange={(event) => setClimateType(event.target.value)}
              >
                <option value="">{labels.selectClimateType}</option>
                {climateTypes.map((climate) => (
                  <option key={climate} value={climate}>
                    {climate}
                  </option>
                ))}
              </select>

              <textarea
                className="textarea"
                value={question}
                placeholder={labels.askPlaceholder}
                onChange={(event) => setQuestion(event.target.value)}
              />

              <button className="button" type="button" disabled={isPending} onClick={() => void submitQuestion()}>
                {isPending ? "Thinking..." : labels.getAdvice}
              </button>

              <p className="tip">{labels.tip}</p>

              <div className="insight-card">
                <h3>{labels.quickPrompts}</h3>
                <div className="chip-row">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      className="chip"
                      type="button"
                      onClick={() => void submitQuestion(prompt)}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="insight-card">
                <h3>{labels.smartInsights}</h3>
                <div className="meta-grid">
                  <div>
                    <h4>{labels.cropHealth}</h4>
                    <p className="subtle">
                      {soilType ? `${soilType} selected.` : "Choose soil type for tailored crop guidance."}
                    </p>
                  </div>
                  <div>
                    <h4>{labels.weatherBadge}</h4>
                    <p className="subtle">
                      {climateType ? `${climateType} selected.` : "Choose climate zone for better recommendations."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="insight-card">
                <h3>{labels.farmChecklist}</h3>
                {advisoryChecklist.map((item) => (
                  <p key={item} className="subtle">
                    • {item}
                  </p>
                ))}
              </div>

              <div className="insight-card">
                <h3>{labels.recentReplies}</h3>
                {recentReplies.map((message) => (
                  <p key={message.id} className="subtle">
                    {message.content.slice(0, 110)}
                    {message.content.length > 110 ? "..." : ""}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section className="column-card chat-panel">
            <div className="chat-scroll">
              {messages.map((message) => (
                <article key={message.id} className={`message ${message.role}`}>
                  <p>{message.content}</p>
                  <time>{formatDateTime(message.createdAt)}</time>
                  {message.role === "assistant" ? (
                    <div className="reply-tools">
                      <button type="button" onClick={() => void copyReply(message)}>
                        {copiedId === message.id ? "Copied" : labels.copyReply}
                      </button>
                      <button type="button" onClick={() => speakReply(message)}>
                        {labels.speakReply}
                      </button>
                    </div>
                  ) : null}
                </article>
              ))}
              <div ref={chatBottomRef} />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
