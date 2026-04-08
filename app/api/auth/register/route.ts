import { NextResponse } from "next/server";
import { z } from "zod";
import { createSession, setSessionCookie } from "@/lib/auth";
import { registerUser } from "@/lib/firebase-auth";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6)
});

export async function POST(request: Request) {
  try {
    const body = schema.parse(await request.json());
    const firebaseUser = await registerUser(body);
    const token = await createSession(firebaseUser.email);
    await setSessionCookie(token);

    return NextResponse.json({ ok: true, user: { email: firebaseUser.email } });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to register.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
