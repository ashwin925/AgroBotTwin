"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type LoginFormProps = {
  labels: {
    loginTitle: string;
    loginSubtitle: string;
    email: string;
    password: string;
    signIn: string;
    loginHint: string;
  };
};

export function LoginForm({ labels }: LoginFormProps) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setError("");
    setIsPending(true);
    const payload = {
      email: String(formData.get("email") || ""),
      password: String(formData.get("password") || "")
    };

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const result = (await response.json()) as { error?: string };
      setError(result.error || "Login failed");
      setIsPending(false);
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <div className="login-card">
      <h1>{labels.loginTitle}</h1>
      <p className="subtle">{labels.loginSubtitle}</p>
      <form
        action={(formData) => {
          void handleSubmit(formData);
        }}
      >
        <label>
          <div>{labels.email}</div>
          <input className="field" name="email" type="email" placeholder="admin@agroai.com" required />
        </label>
        <label>
          <div>{labels.password}</div>
          <input className="field" name="password" type="password" placeholder="••••••••" required />
        </label>
        {error ? <div className="error">{error}</div> : null}
        <button className="button" type="submit" disabled={isPending}>
          {isPending ? "Signing in..." : labels.signIn}
        </button>
      </form>
      <p className="subtle tip">{labels.loginHint}</p>
    </div>
  );
}
