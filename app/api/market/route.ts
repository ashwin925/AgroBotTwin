import { NextResponse } from "next/server";
import { requireSession } from "@/lib/auth";
import { getMarketData } from "@/lib/market";

export async function GET(request: Request) {
  try {
    await requireSession();
    const { searchParams } = new URL(request.url);
    const crop = searchParams.get("crop")?.trim();

    if (!crop) {
      return NextResponse.json({ error: "Crop name is required." }, { status: 400 });
    }

    const result = await getMarketData(crop);
    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to fetch market details.";
    const status = message === "Unauthorized" ? 401 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
