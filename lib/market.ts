import { marketFallback } from "@/data/agro";

export type MarketResponse = {
  crop: string;
  tamilNaduPrice: string;
  msp: string;
  shortDescription: string;
  healthBenefits: string;
  calories: string;
  arrivals: string;
  quality: string;
  trend: string;
  source: string;
  updatedAt: string;
};

function normalizeCropName(name: string) {
  return name.trim().toLowerCase();
}

export async function getMarketData(query: string): Promise<MarketResponse> {
  const normalized = normalizeCropName(query);
  const fallback = marketFallback[normalized] ?? {
    crop: query,
    msp: "Not available",
    price: "Data unavailable",
    shortDescription: "Commodity details are limited for this search term.",
    healthBenefits: "Nutritional information unavailable in fallback mode.",
    calories: "N/A",
    arrivals: "No verified arrivals data",
    quality: "No quality summary available",
    trend: "Unknown"
  };

  const apiKey = process.env.DATA_GOV_IN_API_KEY;

  if (apiKey) {
    try {
      const resourceId = "9ef84268-d588-465a-a308-a864a43d0070";
      const url = new URL(`https://api.data.gov.in/resource/${resourceId}`);
      url.searchParams.set("api-key", apiKey);
      url.searchParams.set("format", "json");
      url.searchParams.set("limit", "10");
      url.searchParams.set("filters[state]", "Tamil Nadu");
      url.searchParams.set("filters[commodity]", query);

      const response = await fetch(url.toString(), {
        next: { revalidate: 1800 }
      });

      if (response.ok) {
        const payload = (await response.json()) as {
          records?: Array<Record<string, string>>;
        };
        const first = payload.records?.[0];

        if (first) {
          const modalPrice = first.modal_price || first.modalprice || fallback.price;
          return {
            crop: first.commodity || fallback.crop,
            tamilNaduPrice: modalPrice.toString().includes("Rs.")
              ? modalPrice.toString()
              : `Rs. ${modalPrice}/quintal`,
            msp: fallback.msp,
            shortDescription: fallback.shortDescription,
            healthBenefits: fallback.healthBenefits,
            calories: fallback.calories,
            arrivals: first.arrivals || fallback.arrivals,
            quality: `Market: ${first.market || "Tamil Nadu mandi"} | District: ${first.district || "N/A"}`,
            trend: fallback.trend,
            source: "data.gov.in agricultural market dataset",
            updatedAt: new Date().toISOString()
          };
        }
      }
    } catch {
      // Fallback is used when the public dataset is unavailable or the crop has no exact match.
    }
  }

  return {
    crop: fallback.crop,
    tamilNaduPrice: fallback.price,
    msp: fallback.msp,
    shortDescription: fallback.shortDescription,
    healthBenefits: fallback.healthBenefits,
    calories: fallback.calories,
    arrivals: fallback.arrivals,
    quality: fallback.quality,
    trend: fallback.trend,
    source: apiKey ? "Fallback cache because live data was unavailable" : "Fallback demo data",
    updatedAt: new Date().toISOString()
  };
}
