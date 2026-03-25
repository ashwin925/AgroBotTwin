import { NextResponse } from "next/server";
import { z } from "zod";
import { requireSession } from "@/lib/auth";
import { generateAgroResponse } from "@/lib/gemini";

const chatSchema = z.object({
  question: z.string().min(2),
  soilType: z.string().optional(),
  climateType: z.string().optional(),
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1)
      })
    )
    .default([])
});

function buildFallbackAnswer(input: {
  question: string;
  soilType?: string;
  climateType?: string;
}) {
  return [
    "Gemini API key is not configured yet, so AgroAI is using fallback advisory mode.",
    `Question: ${input.question}`,
    `Soil context: ${input.soilType || "Not selected"}`,
    `Climate context: ${input.climateType || "Not selected"}`,
    "",
    "Practical guidance:",
    "- Start by validating soil moisture and drainage before changing irrigation schedules.",
    "- Match nutrient planning to the selected soil type, especially nitrogen and organic matter needs.",
    "- If the crop is under climate stress, prioritize mulching, shade timing, and pest scouting.",
    "- Add your Google Gemini API key in .env.local to unlock full real-time AI responses."
  ].join("\n");
}

export async function POST(request: Request) {
  try {
    await requireSession();
    const body = chatSchema.parse(await request.json());

    if (!process.env.GOOGLE_GEMINI_API_KEY) {
      return NextResponse.json({
        answer: buildFallbackAnswer(body)
      });
    }

    const answer = await generateAgroResponse(body);
    return NextResponse.json({ answer });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to answer the question.";
    const status = message === "Unauthorized" ? 401 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
