"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import {
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

const storageKey = "agroai_chat_state";

export function AgroDashboard() {
  const router = useRouter();
  const chatBottomRef = useRef<HTMLDivElement | null>(null);
  const [language, setLanguage] = useState<LanguageCode>("en");
  const [soilType, setSoilType] = useState("");
  const [climateType, setClimateType] = useState("");
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isPending, setIsPending] = useState(false);
  const [copiedId, setCopiedId] = useState("");
  const [currentPromptSet, setCurrentPromptSet] = useState(0);
  const [checklist, setChecklist] = useState<{ id: string; text: string; completed: boolean }[]>([]);
  const [newTask, setNewTask] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [stockPrices, setStockPrices] = useState({
    fertilizers: 0,
    seeds: 0,
    machinery: 0,
    foodProcessing: 0,
    plantations: 0,
    edibleOils: 0
  });

  const labels = dictionaries[language];

  const initialMessage = useMemo((): Message => ({
    id: "welcome",
    role: "assistant",
    content: labels.welcomeMessage || "Hello! I am AgroAI, your expert agricultural assistant.\n\nHow can I help you today? Please feel free to ask me anything about crop selection, soil management, pest control, yield optimization, or any other farming-related topic.",
    createdAt: new Date().toISOString()
  }), [labels]);

  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      setMessages([initialMessage]);
      return;
    }

    try {
      const parsed = JSON.parse(raw) as {
        language?: LanguageCode;
        soilType?: string;
        climateType?: string;
        messages?: Message[];
        checklist?: { id: string; text: string; completed: boolean }[];
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
      } else {
        setMessages([initialMessage]);
      }
      if (parsed.checklist) {
        setChecklist(parsed.checklist);
      }
    } catch {
      localStorage.removeItem(storageKey);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify({ language, soilType, climateType, messages, checklist })
    );
  }, [language, soilType, climateType, messages, checklist]);

  useEffect(() => {
    setStockPrices({
      fertilizers: Math.floor(Math.random() * 1000) + 500,
      seeds: Math.floor(Math.random() * 800) + 300,
      machinery: Math.floor(Math.random() * 1500) + 1000,
      foodProcessing: Math.floor(Math.random() * 1200) + 700,
      plantations: Math.floor(Math.random() * 900) + 400,
      edibleOils: Math.floor(Math.random() * 600) + 200
    });
  }, []);

  const questionsAsked = useMemo(
    () => messages.filter((message) => message.role === "user").slice(-5).reverse(),
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
          language,
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

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const langMap: Record<LanguageCode, string> = {
      en: "en-IN",
      ta: "ta-IN",
      hi: "hi-IN",
      bn: "bn-IN",
      mr: "mr-IN",
      te: "te-IN",
      gu: "gu-IN",
      ur: "ur-IN",
      kn: "kn-IN",
      or: "or-IN"
    };

    const utterance = new SpeechSynthesisUtterance(message.content);
    utterance.lang = langMap[language] || "en-IN";
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }

  function refreshPrompts() {
    setCurrentPromptSet(Math.floor(Math.random() * quickPrompts.length));
  }

  function addTask() {
    if (!newTask.trim()) return;
    const task = { id: crypto.randomUUID(), text: newTask.trim(), completed: false };
    setChecklist([...checklist, task]);
    setNewTask("");
  }

  function toggleTask(id: string) {
    setChecklist(checklist.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  }

  function removeTask(id: string) {
    setChecklist(checklist.filter(task => task.id !== id));
  }

  function scrollToMessage(id: string) {
    const element = document.getElementById(`message-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
          <Link className="button" href="/market">
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
                <option value="Alluvial Soil">{labels.soilAlluvial}</option>
                <option value="Black Cotton Soil">{labels.soilBlackCotton}</option>
                <option value="Red Soil">{labels.soilRed}</option>
                <option value="Laterite Soil">{labels.soilLaterite}</option>
                <option value="Sandy Soil">{labels.soilSandy}</option>
                <option value="Loamy Soil">{labels.soilLoamy}</option>
                <option value="Clay Soil">{labels.soilClay}</option>
                <option value="Mountain Soil">{labels.soilMountain}</option>
              </select>

              <select
                className="field"
                value={climateType}
                onChange={(event) => setClimateType(event.target.value)}
              >
                <option value="">{labels.selectClimateType}</option>
                <option value="Tropical Wet">{labels.climateTropicalWet}</option>
                <option value="Tropical Dry">{labels.climateTropicalDry}</option>
                <option value="Subtropical Humid">{labels.climateSubtropicalHumid}</option>
                <option value="Temperate">{labels.climateTemperate}</option>
                <option value="Semi-Arid">{labels.climateSemiArid}</option>
                <option value="Arid Desert">{labels.climateAridDesert}</option>
                <option value="Coastal Humid">{labels.climateCoastalHumid}</option>
                <option value="Highland Cool">{labels.climateHighlandCool}</option>
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

              <div className="insight-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3>{labels.quickPrompts}</h3>
                  <button className="button" type="button" onClick={refreshPrompts} style={{ fontSize: "0.8rem", padding: "0.4rem 0.8rem" }}>
                    {labels.refresh}
                  </button>
                </div>
                <div className="chip-row">
                  {quickPrompts[currentPromptSet].map((prompt) => (
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
                <button
                  onClick={() => router.push("/news")}
                  style={{ border: "none", background: "none", textAlign: "left", cursor: "pointer", width: "100%" }}
                >
                  <h3>{labels.dailyNews}</h3>
                  <p className="subtle">Click to view daily agriculture news</p>
                </button>
              </div>

              <div className="insight-card">
                <h3>{labels.checklist}</h3>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <input
                    className="field"
                    value={newTask}
                    placeholder={labels.addTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    style={{ flex: 1 }}
                  />
                  <button className="button" onClick={addTask} style={{ padding: "0.5rem" }}>+</button>
                </div>
                {checklist.map((task) => (
                  <div key={task.id} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                    />
                    <span style={{ textDecoration: task.completed ? "line-through" : "none", flex: 1 }}>
                      {task.text}
                    </span>
                    <button className="button" onClick={() => removeTask(task.id)} style={{ padding: "0.2rem 0.5rem", fontSize: "0.8rem" }}>
                      {labels.delete}
                    </button>
                  </div>
                ))}
              </div>

              <div className="insight-card">
                <h3>{labels.questionsAsked}</h3>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <button className="button" onClick={() => setMessages([initialMessage])} style={{ flex: 1 }}>
                    New Chat
                  </button>
                  <button className="button" onClick={() => {/* TODO: show history */ }} style={{ flex: 1 }}>
                    Chat History
                  </button>
                </div>
                {questionsAsked.map((message) => (
                  <p
                    key={message.id}
                    className="subtle"
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollToMessage(message.id)}
                  >
                    {message.content.slice(0, 110)}
                    {message.content.length > 110 ? "..." : ""}
                  </p>
                ))}
              </div>

              <div className="insight-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3>{labels.stockPrices}</h3>
                  <button className="button" type="button" style={{ fontSize: "0.8rem", padding: "0.4rem 0.8rem" }}>
                    {labels.refresh}
                  </button>
                </div>
                <div style={{ display: "grid", gap: "0.5rem" }}>
                  <div>Fertilisers and Agrochemicals: ₹{stockPrices.fertilizers}</div>
                  <div>Seeds: ₹{stockPrices.seeds}</div>
                  <div>Agricultural Machinery: ₹{stockPrices.machinery}</div>
                  <div>Food Processing: ₹{stockPrices.foodProcessing}</div>
                  <div>Plantations: ₹{stockPrices.plantations}</div>
                  <div>Edible Oils: ₹{stockPrices.edibleOils}</div>
                </div>
              </div>
            </div>
          </section>

          <section className="column-card chat-panel">
            <div className="chat-scroll">
              {messages.map((message) => (
                <article key={message.id} id={`message-${message.id}`} className={`message ${message.role}`}>
                  <p>{message.content}</p>
                  <time suppressHydrationWarning>{formatDateTime(message.createdAt)}</time>
                  {message.role === "assistant" ? (
                    <div className="reply-tools">
                      <button type="button" onClick={() => void copyReply(message)}>
                        {copiedId === message.id ? "Copied" : labels.copyReply}
                      </button>
                      <button type="button" onClick={() => speakReply(message)}>
                        {isSpeaking ? "Stop Speaking" : labels.speakReply}
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
