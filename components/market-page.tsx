"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { dictionaries, type LanguageCode } from "@/data/agro";
import type { MarketResponse } from "@/lib/market";
import { formatDateTime } from "@/lib/utils";

export function MarketPage({ initialLanguage = "en" }: { initialLanguage?: LanguageCode }) {
  const [query, setQuery] = useState("wheat");
  const [result, setResult] = useState<MarketResponse | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<LanguageCode>(initialLanguage);

  useEffect(() => {
    const raw = localStorage.getItem("agroai_chat_state");
    if (!raw) {
      return;
    }

    try {
      const parsed = JSON.parse(raw) as { language?: LanguageCode };
      if (parsed.language && dictionaries[parsed.language]) {
        setActiveLanguage(parsed.language);
      }
    } catch {
      // Ignore corrupted local storage and fall back to English labels.
    }
  }, []);

  useEffect(() => {
    void (async () => {
      setIsPending(true);
      const response = await fetch("/api/market?crop=wheat");
      const payload = (await response.json()) as MarketResponse;
      setResult(payload);
      setIsPending(false);
    })();
  }, []);

  const labels = dictionaries[activeLanguage];

  function handleSearch() {
    if (!query.trim()) {
      return;
    }

    void (async () => {
      setIsPending(true);
      const response = await fetch(`/api/market?crop=${encodeURIComponent(query)}`);
      const payload = (await response.json()) as MarketResponse;
      setResult(payload);
      setIsPending(false);
    })();
  }

  return (
    <main className="page-shell">
      <section className="glass-panel market-shell">
        <h1 className="top-title">{labels.onlineMarketTitle}</h1>
        <p className="subtle" style={{ textAlign: "center", marginTop: "0.3rem" }}>
          {labels.onlineMarketSubtitle}
        </p>

        <div className="market-search">
          <Link className="pill-link" href="/">
            ← {labels.back}
          </Link>

          <input
            className="field"
            value={query}
            placeholder={labels.searchCrop}
            onChange={(event) => setQuery(event.target.value)}
          />

          <button className="button" type="button" onClick={handleSearch} disabled={isPending}>
            {isPending ? "Loading..." : labels.search}
          </button>
        </div>

        {result ? (
          <>
            <article className="market-result">
              <h2>
                {result.crop} - Tamil Nadu Market Snapshot
              </h2>
              <p>MSP: {result.msp}</p>
              <p>Today&apos;s Price: {result.tamilNaduPrice}</p>
              <p>Short Description: {result.shortDescription}</p>
              <p>Health Benefits: {result.healthBenefits}</p>
              <p>Calories per gram: {result.calories}</p>
              <p>Arrivals: {result.arrivals}</p>
              <p>Quality Notes: {result.quality}</p>
              <p>Trend: {result.trend}</p>
              <p>Updated: {formatDateTime(result.updatedAt)}</p>
              <p>Source: {result.source}</p>
            </article>
          </>
        ) : null}
      </section>
    </main>
  );
}
