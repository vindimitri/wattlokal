import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  cookieValueForSecret,
  getAdminSecret,
  secretsMatch,
} from "@/lib/admin";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const expected = getAdminSecret();
  if (!expected) {
    return NextResponse.json(
      { error: "ADMIN_SECRET ist nicht konfiguriert." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const secret =
    body && typeof body === "object" && "secret" in body
      ? String((body as { secret?: unknown }).secret ?? "")
      : "";

  if (!secretsMatch(secret, expected)) {
    return NextResponse.json({ error: "Ungültiges Passwort." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, cookieValueForSecret(expected), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return response;
}
