import { GoogleGenerativeAI } from "@google/generative-ai";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function getModel() {
  const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GOOGLE_GEMINI_API_KEY is not configured.");
  }

  const client = new GoogleGenerativeAI(apiKey);
  return client.getGenerativeModel({ model: "gemini-2.5-flash" });
}

export async function generateAgroResponse(input: {
  question: string;
  soilType?: string;
  climateType?: string;
  messages: ChatMessage[];
}) {
  const model = getModel();
  const context = [
    "You are AgroAI Assistant, an agricultural advisor for Indian farmers.",
    "Default to English unless the user explicitly asks for another language in their own message.",
    "Keep answers practical, safe, and well-structured.",
    "Never claim live market data unless it is provided separately.",
    "When relevant, tailor the answer to Indian farming conditions and mention low-cost recommendations."
  ].join(" ");

  const transcript = input.messages
    .slice(-8)
    .map((message) => `${message.role.toUpperCase()}: ${message.content}`)
    .join("\n");

  const prompt = `
${context}

Selected soil type: ${input.soilType || "Not selected"}
Selected climate type: ${input.climateType || "Not selected"}

Conversation so far:
${transcript || "No prior conversation."}

Latest user question:
${input.question}

Respond in a warm expert tone. Use concise sections and bullet points only when they add clarity.
`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}
