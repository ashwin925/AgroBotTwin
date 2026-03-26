"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { dictionaries, type LanguageCode } from "@/data/agro";

export function NewsPage({ initialLanguage = "en" }: { initialLanguage?: LanguageCode }) {
  const [news, setNews] = useState<{ id: number; title: string; summary: string; date: string }[]>([]);
  const [currentNewsSet, setCurrentNewsSet] = useState(0);
  const [activeLanguage, setActiveLanguage] = useState<LanguageCode>(initialLanguage);

  const newsSets = [
    [
      {
        id: 1,
        title: "New Government Scheme for Farmers",
        summary: "The government has announced a new scheme to support small farmers with subsidies.",
        date: "2024-03-26"
      },
      {
        id: 2,
        title: "Climate Change Impact on Crops",
        summary: "Experts discuss how changing weather patterns affect agricultural productivity.",
        date: "2024-03-25"
      },
      {
        id: 3,
        title: "Organic Farming Trends",
        summary: "Rising demand for organic produce drives innovation in farming techniques.",
        date: "2024-03-24"
      }
    ],
    [
      {
        id: 4,
        title: "Drought-Resistant Crop Varieties Released",
        summary: "New crop varieties that can withstand prolonged dry spells have been developed.",
        date: "2024-03-23"
      },
      {
        id: 5,
        title: "Pesticide-Free Farming Gains Popularity",
        summary: "Farmers are adopting natural pest control methods to reduce chemical usage.",
        date: "2024-03-22"
      },
      {
        id: 6,
        title: "Agricultural Technology Innovations",
        summary: "Latest tech tools helping farmers optimize yields and reduce costs.",
        date: "2024-03-21"
      }
    ],
    [
      {
        id: 7,
        title: "Sustainable Water Management in Agriculture",
        summary: "New techniques for efficient water use in farming practices.",
        date: "2024-03-20"
      },
      {
        id: 8,
        title: "Market Trends for Cash Crops",
        summary: "Analysis of current market prices and future predictions for cash crops.",
        date: "2024-03-19"
      },
      {
        id: 9,
        title: "Community Farming Initiatives",
        summary: "Local communities coming together for collective farming efforts.",
        date: "2024-03-18"
      }
    ],
    [
      {
        id: 10,
        title: "Soil Health Improvement Programs",
        summary: "Government programs focused on enhancing soil quality and fertility.",
        date: "2024-03-17"
      },
      {
        id: 11,
        title: "Export Opportunities for Indian Agriculture",
        summary: "New markets opening up for Indian agricultural products abroad.",
        date: "2024-03-16"
      },
      {
        id: 12,
        title: "Youth Engagement in Farming",
        summary: "Increasing number of young people taking up modern farming techniques.",
        date: "2024-03-15"
      }
    ],
    [
      {
        id: 13,
        title: "Precision Agriculture Adoption",
        summary: "Farmers using GPS and sensors for precise crop management.",
        date: "2024-03-14"
      },
      {
        id: 14,
        title: "Biodiversity in Agricultural Lands",
        summary: "Importance of maintaining biodiversity for sustainable farming.",
        date: "2024-03-13"
      },
      {
        id: 15,
        title: "Post-Harvest Technology Advances",
        summary: "New methods for better storage and processing of agricultural produce.",
        date: "2024-03-12"
      }
    ]
  ];

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
      // Ignore
    }
  }, []);

  const labels = dictionaries[activeLanguage];

  // Set initial news
  useEffect(() => {
    setNews(newsSets[currentNewsSet]);
  }, [currentNewsSet]);

  function refreshNews() {
    setCurrentNewsSet(Math.floor(Math.random() * newsSets.length));
  }

  return (
    <main className="page-shell">
      <section className="glass-panel market-shell">
        <h1 className="top-title">{labels.dailyNews}</h1>
        <p className="subtle" style={{ textAlign: "center", marginTop: "0.3rem" }}>
          Latest agriculture news and updates
        </p>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
          <Link className="button" href="/">
            ← Back
          </Link>
          <button className="button" type="button" onClick={refreshNews}>
            {labels.refresh}
          </button>
        </div>

        <div style={{ marginTop: "1rem" }}>
          {news.map((item) => (
            <article key={item.id} className="market-result" style={{ marginBottom: "1rem" }}>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <p><small>{item.date}</small></p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}