import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  cookieValueForSecret,
  getAdminSecret,
  secretsMatch,
} from "@/lib/admin";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

function clientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(request: Request) {
  const ip = clientIp(request);
  // 5 attempts per 15 minutes per IP
  const limited = rateLimit(`admin-login:${ip}`, 5, 15 * 60_000);
  if (!limited.ok) {
    return NextResponse.json(
      {
        error:
          "Zu viele Login-Versuche. Bitte warte und versuche es später erneut.",
      },
      {
        status: 429,
        headers: { "Retry-After": String(limited.retryAfterSec) },
      },
    );
  }

  const expected = getAdminSecret();
  if (!expected) {
    return NextResponse.json(
      { error: "Admin-Login ist nicht konfiguriert." },
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
