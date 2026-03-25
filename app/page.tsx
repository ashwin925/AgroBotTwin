import { redirect } from "next/navigation";
import { AgroDashboard } from "@/components/agro-dashboard";
import { verifySession } from "@/lib/auth";

export default async function HomePage() {
  const session = await verifySession();
  if (!session) {
    redirect("/login");
  }

  return <AgroDashboard />;
}
