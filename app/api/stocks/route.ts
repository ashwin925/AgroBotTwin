import { NextResponse } from "next/server";
import { requireSession } from "@/lib/auth";
import { getStockPriceBoard } from "@/lib/stocks";

export async function GET() {
  try {
    await requireSession();
    const board = await getStockPriceBoard();
    return NextResponse.json(board);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to fetch stock prices.";
    const status = message === "Unauthorized" ? 401 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
