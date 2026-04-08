import { dictionaries } from "@/data/agro";
import { LoginForm } from "@/components/login-form";
import { verifySession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await verifySession();
  if (session) {
    redirect("/");
  }

  const labels = dictionaries.en;

  return (
    <main className="login-wrap">
      <LoginForm labels={labels} />
    </main>
  );
}
