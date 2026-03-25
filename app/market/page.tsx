import { redirect } from "next/navigation";
import { MarketPage } from "@/components/market-page";
import { verifySession } from "@/lib/auth";

export default async function MarketRoutePage() {
  const session = await verifySession();
  if (!session) {
    redirect("/login");
  }

  return <MarketPage />;
}
