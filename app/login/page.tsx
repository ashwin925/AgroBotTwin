import { dictionaries } from "@/data/agro";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  const labels = dictionaries.en;

  return (
    <main className="login-wrap">
      <LoginForm labels={labels} />
    </main>
  );
}
