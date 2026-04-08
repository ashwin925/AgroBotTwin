"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { dictionaries, type LanguageCode } from "@/data/agro";

const latestNews = [
  {
    id: 1,
    title: "Advanced Agriculture Festival 2026 to open in Raisen this week",
    summary:
      "The Ministry of Agriculture & Farmers Welfare said the Advanced Agriculture Festival 2026 in Raisen will showcase crop-to-market technologies, scientist guidance, soil testing, drones, hydroponics, and waste-to-wealth solutions for farmers.",
    content:
      "According to a Press Information Bureau release published on April 5, 2026, the Advanced Agriculture Festival 2026 - Exhibition and Training will begin in Raisen from April 11. The event is designed as a large farmer-facing platform where growers can interact with agricultural scientists, see live demonstrations of modern farming systems, and receive guidance on the full chain from crop management to markets. The release specifically highlights soil testing models, drones, hydroponics, and integrated farming systems as part of the knowledge sessions and exhibition.",
    date: "2026-04-09",
    source: "PIB Delhi"
  },
  {
    id: 2,
    title: "National agriculture exhibition and training fair announced for April 11-13",
    summary:
      "A national-level agriculture festival-exhibition and training event has been announced in Raisen, with a focus on laboratory-to-field innovation, seed-to-market learning, and farmer training.",
    content:
      "A PIB release dated April 3, 2026 announced that a national-level advanced Agriculture Festival-Exhibition & Training will be held at Dussehra Ground, Raisen, from April 11 to April 13. The event is intended to bring together technology demonstrations, farmer training, innovation showcases, and a region-focused agriculture roadmap. The ministry described it as a three-day mega-confluence built to help farmers connect scientific innovation with practical field adoption.",
    date: "2026-04-09",
    source: "PIB Delhi"
  },
  {
    id: 3,
    title: "ICAR workshop highlights microbial innovations for sustainable agriculture",
    summary:
      "ICAR's March 2026 workshop at Mau focused on microbial technologies, research-industry collaboration, and commercialization pathways for sustainable agriculture.",
    content:
      "ICAR reported that the National Workshop-cum Research-Industry Interface on Microbial Innovations for Sustainable Agriculture (MISA-2026) was held on March 18-19, 2026 in Mau, Uttar Pradesh. The event brought together scientists, industry stakeholders, startup founders, Farmer Producer Companies, and policymakers to discuss microbial-based agricultural technologies. The workshop emphasized sustainable production, technology dissemination, and industry linkage around microbial solutions that can support soil health and resilient farming systems.",
    date: "2026-04-09",
    source: "ICAR"
  },
  {
    id: 4,
    title: "Pusa Krishi Vigyan Mela 2026 showcases precision and value-added farming ideas",
    summary:
      "ICAR-IARI's Pusa Krishi Vigyan Mela 2026 brought together farmers, scientists, startups, and agri-entrepreneurs around improved varieties, digital advisories, precision agriculture, and value addition.",
    content:
      "ICAR-IARI's Pusa Krishi Vigyan Mela 2026 concluded on February 27, 2026 in New Delhi after three days of farmer-scientist interaction. Official coverage highlighted discussions on improved crop varieties, digital advisories, precision agriculture, entrepreneurship, hydroponics, vertical farming, food processing, and value addition. The event aimed to strengthen practical field adoption by connecting innovations directly with farmers, women entrepreneurs, and rural youth.",
    date: "2026-04-09",
    source: "ICAR"
  },
  {
    id: 5,
    title: "ICAR's National Potato Fair 2026 promotes improved and heat-tolerant potato varieties",
    summary:
      "At the National Potato Fair 2026 in Meerut, ICAR highlighted improved, nutrient-rich, heat-tolerant, and disease-resistant potato varieties along with virus-free seed technologies.",
    content:
      "The National Potato Fair 2026 was organized on February 15, 2026 by ICAR-Central Potato Research Institute, Regional Station, Modipuram, Meerut. Official event coverage noted farmer participation alongside scientists and industry representatives. The institute used the fair to demonstrate improved potato varieties, nutrient-rich selections, heat-tolerant lines, and virus-free seed production technologies, with a strong focus on field-level problem solving and technology outreach.",
    date: "2026-04-09",
    source: "ICAR"
  }
];

export function NewsPage({ initialLanguage = "en" }: { initialLanguage?: LanguageCode }) {
  const [activeLanguage, setActiveLanguage] = useState<LanguageCode>(initialLanguage);
  const [expandedNews, setExpandedNews] = useState<Set<number>>(new Set());

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
      // Ignore malformed local storage.
    }
  }, []);

  const labels = dictionaries[activeLanguage];

  const toggleExpanded = (newsId: number) => {
    const next = new Set(expandedNews);
    if (next.has(newsId)) {
      next.delete(newsId);
    } else {
      next.add(newsId);
    }
    setExpandedNews(next);
  };

  return (
    <main className="page-shell">
      <section className="glass-panel market-shell">
        <h1 className="top-title">{labels.dailyNews}</h1>
        <p className="subtle" style={{ textAlign: "center", marginTop: "0.3rem" }}>
          Daily agriculture briefing prepared for April 9, 2026
        </p>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
          <Link className="button" href="/">
            Back
          </Link>
        </div>

        <div style={{ marginTop: "1rem", display: "grid", gap: "1rem" }}>
          {latestNews.map((item) => (
            <article
              key={item.id}
              style={{
                backgroundColor: "white",
                border: "2px solid lime",
                borderRadius: "8px",
                padding: "1.5rem",
                fontFamily: "Arial, sans-serif",
                color: "#333"
              }}
            >
              <h2 style={{ marginTop: 0, color: "#2d5a27", fontSize: "1.5rem" }}>{item.title}</h2>
              <p style={{ lineHeight: 1.6, fontSize: "1rem", marginBottom: "1rem", whiteSpace: "pre-wrap" }}>
                {expandedNews.has(item.id) ? item.content : item.summary}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                <button
                  onClick={() => toggleExpanded(item.id)}
                  style={{
                    backgroundColor: "#2d5a27",
                    color: "white",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "0.9rem"
                  }}
                >
                  {expandedNews.has(item.id) ? "Read Less" : "Read More"}
                </button>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#666", textAlign: "right" }}>
                  <small>
                    {item.date} | {item.source}
                  </small>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
