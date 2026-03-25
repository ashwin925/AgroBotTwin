import { NextResponse } from "next/server";
import { z } from "zod";
import { createSession, setSessionCookie, validateLogin } from "@/lib/auth";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
});

export async function POST(request: Request) {
  try {
    const body = schema.parse(await request.json());

    if (!validateLogin(body.email, body.password)) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const token = await createSession(body.email);
    await setSessionCookie(token);

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to sign in.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
