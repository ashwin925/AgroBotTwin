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
  const [mode, setMode] = useState<"login" | "register">("login");

  async function handleSubmit(formData: FormData) {
    setError("");
    setIsPending(true);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      password: String(formData.get("password") || "")
    };

    const response = await fetch(mode === "login" ? "/api/auth/login" : "/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const result = (await response.json()) as { error?: string };
      setError(result.error || (mode === "login" ? "Login failed" : "Registration failed"));
      setIsPending(false);
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <div className="login-card">
      <h1>{labels.loginTitle}</h1>
      <p className="subtle">
        {mode === "login"
          ? "Sign in with your own AgroAI account."
          : "Create your AgroAI account to enter the workspace."}
      </p>
      <form
        action={(formData) => {
          void handleSubmit(formData);
        }}
      >
        {mode === "register" ? (
          <label>
            <div>Full Name</div>
            <input className="field" name="name" type="text" placeholder="Your name" required />
          </label>
        ) : null}
        <label>
          <div>{labels.email}</div>
          <input className="field" name="email" type="email" placeholder="name@example.com" required />
        </label>
        <label>
          <div>{labels.password}</div>
          <input
            className="field"
            name="password"
            type="password"
            placeholder="Minimum 6 characters"
            required
          />
        </label>
        {error ? <div className="error">{error}</div> : null}
        <button className="button" type="submit" disabled={isPending}>
          {isPending ? "Please wait..." : mode === "login" ? labels.signIn : "Register"}
        </button>
      </form>
      <button
        type="button"
        className="chip"
        style={{ marginTop: "1rem" }}
        onClick={() => {
          setMode((current) => (current === "login" ? "register" : "login"));
          setError("");
        }}
      >
        {mode === "login" ? "New here? Create an account" : "Already have an account? Sign in"}
      </button>
    </div>
  );
}
