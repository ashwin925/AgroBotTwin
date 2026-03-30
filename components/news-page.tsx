"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { dictionaries, type LanguageCode } from "@/data/agro";

export function NewsPage({ initialLanguage = "en" }: { initialLanguage?: LanguageCode }) {
  const [news, setNews] = useState<{ id: number; title: string; summary: string; content: string; date: string }[]>([]);
  const [activeLanguage, setActiveLanguage] = useState<LanguageCode>(initialLanguage);
  const [expandedNews, setExpandedNews] = useState<Set<number>>(new Set());

  const newsSets = [
    [
      {
        id: 1,
        title: "Revolutionary Drought-Resistant Rice Variety Launched in India",
        summary: "The Indian Council of Agricultural Research (ICAR) has introduced a groundbreaking rice variety that can withstand prolonged droughts, potentially increasing yields by up to 30% in water-scarce regions. This new cultivar, developed through advanced genetic techniques, promises to transform farming practices in arid and semi-arid areas of the country. Farmers in Rajasthan and Gujarat are already showing keen interest in adopting this technology.",
        content: "New Delhi, March 26, 2024 - In a major breakthrough for Indian agriculture, the Indian Council of Agricultural Research (ICAR) today unveiled 'DroughtGuard Rice', a revolutionary rice variety engineered to thrive in water-scarce conditions. The new cultivar, developed through marker-assisted breeding techniques at the ICAR-Indian Institute of Rice Research in Hyderabad, can maintain yields even with 50% less water than traditional varieties.\n\nThe DroughtGuard Rice incorporates genes from African rice varieties known for their drought tolerance, combined with high-yielding traits from popular Indian varieties. Field trials conducted across 12 states over three years showed an average yield increase of 28% in drought-prone areas, while using 40% less irrigation water.\n\nDr. R.K. Singh, Director of ICAR-IIRR, stated, 'This variety addresses the critical challenge of water scarcity affecting millions of farmers. With climate change making droughts more frequent, DroughtGuard Rice could be a game-changer for sustainable rice production in India.'\n\nThe variety is particularly suited for rainfed areas of Rajasthan, Gujarat, Maharashtra, Karnataka, and Andhra Pradesh. Farmers in these regions can expect to harvest 4-5 tons per hectare even during poor monsoon years.\n\nThe government has approved the variety for commercial cultivation, and seed production has already begun at certified seed centers. Agricultural extension services are being mobilized to train farmers on optimal cultivation practices for the new variety.\n\nIndustry experts predict that widespread adoption of DroughtGuard Rice could save billions of liters of irrigation water annually and help India maintain its position as the world's second-largest rice producer despite growing water constraints.",
        date: "2024-03-26"
      },
      {
        id: 2,
        title: "Organic Farming Incentives Boost Sustainable Agriculture",
        summary: "The Ministry of Agriculture has announced comprehensive incentives for farmers transitioning to organic farming methods. These include subsidies for organic certification, premium prices for organic produce through dedicated markets, and training programs for sustainable farming techniques. The initiative aims to reduce chemical pesticide use by 50% within the next five years while improving soil health and farmer incomes.",
        content: "New Delhi, March 25, 2024 - The Ministry of Agriculture and Farmers Welfare today launched the 'Bharat Organic Mission 2.0', a comprehensive program designed to accelerate the transition to organic farming across India. The initiative, with an allocation of ₹10,000 crore over five years, aims to bring 5 million hectares under organic cultivation by 2029.\n\nKey components of the mission include:\n\n1. **Certification Support**: 100% subsidy for organic certification costs for small and marginal farmers, covering third-party verification and documentation.\n\n2. **Market Linkages**: Establishment of 500 organic mandis (markets) across states, ensuring premium prices of 20-50% higher than conventional produce.\n\n3. **Training and Capacity Building**: Nationwide training programs for 2 million farmers, focusing on natural pest management, composting techniques, and soil health improvement.\n\n4. **Input Support**: Subsidies for organic seeds, bio-fertilizers, and bio-pesticides, with special provisions for tribal and hilly areas.\n\n5. **Research and Development**: Funding for research institutions to develop region-specific organic farming packages.\n\nThe mission targets a 50% reduction in chemical pesticide use and a 30% increase in farmer incomes through organic premium pricing. States like Sikkim, which achieved 100% organic status in 2016, will serve as model regions.\n\nUnion Agriculture Minister Narendra Singh Tomar emphasized, 'Organic farming is not just about healthy food; it's about sustainable livelihoods. This mission will create a healthier ecosystem while ensuring food security for future generations.'\n\nEarly adopters in Punjab and Haryana report significant benefits, including reduced input costs and improved soil fertility. The mission also includes export promotion components to tap into the growing global demand for organic products from India.",
        date: "2024-03-25"
      },
      {
        id: 3,
        title: "AI-Powered Crop Disease Detection App Gains Popularity",
        summary: "A new mobile application using artificial intelligence to detect crop diseases in real-time has been downloaded by over 100,000 farmers across India. The app, developed by agricultural scientists at IIT Delhi, can identify diseases from leaf photos with 95% accuracy. Early detection helps farmers apply targeted treatments, reducing crop losses and unnecessary pesticide use.",
        content: "Delhi, March 24, 2024 - 'AgriScan AI', a revolutionary mobile application developed by researchers at IIT Delhi's Centre for Rural Development and Technology, has crossed 100,000 downloads in just six months of launch. The app uses advanced machine learning algorithms to diagnose crop diseases from smartphone photos with remarkable accuracy.\n\nThe application currently supports identification of over 50 common crop diseases affecting major Indian crops including rice, wheat, cotton, sugarcane, and vegetables. Using a database of 100,000+ disease images collected from farmers across 15 states, the AI model achieves 95% accuracy in disease identification.\n\nKey features of AgriScan AI:\n\n- **Instant Diagnosis**: Upload a leaf photo and receive diagnosis within 30 seconds\n- **Treatment Recommendations**: AI-suggested remedies based on local availability and farmer budget\n- **Disease Tracking**: Monitor disease progression and treatment effectiveness\n- **Expert Consultation**: Direct connection to agricultural extension officers\n- **Offline Capability**: Works without internet in remote areas\n\nDr. Anjali Sharma, lead developer, explained, 'Our AI model uses convolutional neural networks trained on diverse datasets representing different lighting conditions, angles, and disease stages. The app also considers local climate and soil conditions for more accurate recommendations.'\n\nFarmers using the app report average crop loss reduction of 25% through early intervention. The app has been particularly effective in managing fungal diseases like blast in rice and blight in potatoes.\n\nThe Ministry of Agriculture has recognized AgriScan AI as a 'Digital India Initiative' and is planning to integrate it with existing farmer helpline services. The developers are working on expanding the app to cover horticultural crops and adding features for nutrient deficiency detection.\n\nWith smartphone penetration reaching 60% in rural India, such AI-powered tools are democratizing access to expert agricultural knowledge, bridging the gap between farmers and agricultural scientists.",
        date: "2024-03-24"
      },
      {
        id: 4,
        title: "Government's Solar-Powered Irrigation Scheme Expands",
        summary: "The Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM) scheme has been expanded to cover an additional 2 million farmers. This solar irrigation initiative provides subsidies for installing solar pumps, reducing dependence on diesel and grid electricity. Farmers report significant cost savings and increased irrigation reliability, especially during power outages.",
        content: "New Delhi, March 23, 2024 - The Government of India today announced the expansion of the Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM) scheme, extending solar irrigation benefits to an additional 2 million farmers. The scheme, launched in 2019, now covers a total of 3.5 million farmers across the country.\n\nUnder Component-A of PM-KUSUM, farmers receive 60% subsidy (up to ₹1.8 lakh) for installing solar pumps to replace diesel pumps. The scheme has already facilitated installation of 2.8 million solar pumps, saving farmers approximately ₹25,000 crore in diesel costs annually.\n\nKey achievements of the expanded scheme:\n\n- **Energy Independence**: Farmers in Gujarat and Rajasthan report 100% reduction in diesel consumption\n- **Cost Savings**: Average annual savings of ₹50,000-₹80,000 per farmer\n- **Reliability**: Irrigation possible even during grid power outages\n- **Environmental Impact**: Reduction of 15 million tons of CO2 emissions annually\n- **Employment Generation**: Creation of 50,000 jobs in solar pump manufacturing and installation\n\nThe scheme includes three components:\n\n1. **Component-A**: Decentralized solar power plants for farmers (60% subsidy)\n2. **Component-B**: Solarization of existing grid-connected pumps (30% subsidy)\n3. **Component-C**: Solar power plants on barren land with power sale to DISCOMs\n\nFarmers like Rajesh Kumar from Uttar Pradesh shared, 'My solar pump irrigates 5 acres throughout the year. No more waiting for electricity or buying diesel. My farming costs have reduced by 40%.'\n\nThe Ministry of New and Renewable Energy has set up 1,200 solar pump service centers across states for maintenance and repair. Training programs have been conducted for 100,000 rural youth as solar technicians.\n\nWith India's agricultural sector consuming 18% of total electricity, PM-KUSUM is crucial for achieving energy security in farming. The government aims to solarize 10 million pumps by 2027, making Indian agriculture more sustainable and climate-resilient.",
        date: "2024-03-23"
      },
      {
        id: 5,
        title: "Climate-Smart Agriculture Training Programs Launched",
        summary: "State agricultural universities have launched comprehensive training programs focused on climate-smart farming techniques. These programs cover topics like conservation agriculture, agroforestry, and precision farming. Over 50,000 farmers have already participated, learning how to adapt to changing weather patterns and build resilience against climate change impacts.",
        content: "Hyderabad, March 22, 2024 - Agricultural universities across India have launched comprehensive 'Climate-Smart Agriculture' training programs, equipping farmers with tools to combat climate change impacts. The programs, supported by the Indian Council of Agricultural Research (ICAR) and World Bank, have trained over 50,000 farmers in the first phase.\n\nThe training curriculum covers:\n\n1. **Conservation Agriculture**: Minimum tillage, crop residue management, and permanent soil cover techniques\n\n2. **Agroforestry**: Integration of trees with crops for improved microclimate and additional income\n\n3. **Precision Farming**: Use of sensors, drones, and AI for optimized resource use\n\n4. **Water Management**: Rainwater harvesting, drip irrigation, and drought-resistant crop varieties\n\n5. **Climate Risk Management**: Weather forecasting integration and crop insurance\n\n6. **Sustainable Practices**: Natural pest management and organic farming methods\n\nParticipating institutions include:\n- Professor Jayashankar Telangana State Agricultural University\n- Tamil Nadu Agricultural University\n- Punjab Agricultural University\n- Indian Agricultural Research Institute\n\nFarmers from climate-vulnerable regions of Odisha, Andhra Pradesh, and Karnataka have shown particular interest. A pilot program in Bundelkhand region demonstrated 25% higher yields and 30% water savings through climate-smart techniques.\n\nDr. S.K. Chaudhari, ICAR Deputy Director General, stated, 'Climate change is altering traditional farming patterns. These programs empower farmers to adapt and thrive in changing conditions.'\n\nThe training includes both classroom sessions and hands-on field demonstrations. Mobile training vans equipped with modern farming tools visit remote villages. Online modules are available for farmers with smartphone access.\n\nSuccess stories include:\n- A farmer in Maharashtra who adopted agroforestry and increased income by 40%\n- Rice farmers in West Bengal using precision irrigation to reduce water use by 35%\n- Cotton growers in Gujarat implementing conservation agriculture for better soil health\n\nThe government aims to train 1 million farmers annually through these programs. Integration with digital platforms like the Farmer Portal and Kisan Call Centers ensures continuous support and knowledge dissemination.\n\nAs India faces increasing climate variability, these training programs are building a resilient agricultural foundation for the future.",
        date: "2024-03-22"
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
    setNews(newsSets[0]);
  }, []);

  const toggleExpanded = (newsId: number) => {
    const newExpanded = new Set(expandedNews);
    if (newExpanded.has(newsId)) {
      newExpanded.delete(newsId);
    } else {
      newExpanded.add(newsId);
    }
    setExpandedNews(newExpanded);
  };

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
        </div>

        <div style={{ marginTop: "1rem", display: "grid", gap: "1rem" }}>
          {news.map((item) => (
            <article key={item.id} style={{
              backgroundColor: "white",
              border: "2px solid lime",
              borderRadius: "8px",
              padding: "1.5rem",
              fontFamily: "Arial, sans-serif",
              color: "#333"
            }}>
              <h2 style={{ marginTop: 0, color: "#2d5a27", fontSize: "1.5rem" }}>{item.title}</h2>
              <p style={{ lineHeight: 1.6, fontSize: "1rem", marginBottom: "1rem" }}>
                {expandedNews.has(item.id) ? item.content : item.summary}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>
                  <small>{item.date}</small>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}