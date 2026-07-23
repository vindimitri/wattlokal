import { createHash, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import type { Rolle, SmartMeterStatus } from "@/lib/types";

export const ADMIN_COOKIE = "wattlokal_admin";

export type ConfirmedRegistration = {
  id: string;
  created_at: string;
  confirmed_at: string | null;
  name: string;
  email: string;
  plz: string;
  ort: string;
  rolle: Rolle;
  pv_kwp: number | null;
  verbrauch_kwh: number | null;
  smart_meter: SmartMeterStatus;
};

export function getAdminSecret(): string | null {
  const secret = process.env.ADMIN_SECRET?.trim();
  return secret && secret.length >= 12 ? secret : null;
}

function hashSecret(secret: string): string {
  return createHash("sha256").update(secret).digest("hex");
}

export function secretsMatch(provided: string, expected: string): boolean {
  const a = Buffer.from(hashSecret(provided));
  const b = Buffer.from(hashSecret(expected));
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function cookieValueForSecret(secret: string): string {
  return hashSecret(secret);
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const expected = getAdminSecret();
  if (!expected) return false;

  const jar = await cookies();
  const value = jar.get(ADMIN_COOKIE)?.value;
  if (!value) return false;

  const expectedCookie = cookieValueForSecret(expected);
  const a = Buffer.from(value);
  const b = Buffer.from(expectedCookie);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function authorizeAdminRequest(request: Request): boolean {
  const expected = getAdminSecret();
  if (!expected) return false;

  const header = request.headers.get("x-admin-secret")?.trim();
  if (header && secretsMatch(header, expected)) return true;

  return false;
}

export function toCsv(rows: ConfirmedRegistration[]): string {
  const headers = [
    "confirmed_at",
    "created_at",
    "name",
    "email",
    "plz",
    "ort",
    "rolle",
    "pv_kwp",
    "verbrauch_kwh",
    "smart_meter",
  ];

  const escape = (value: string | number | null) => {
    if (value === null || value === undefined) return "";
    const s = String(value);
    if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
    return s;
  };

  const lines = [headers.join(",")];
  for (const row of rows) {
    lines.push(
      [
        row.confirmed_at,
        row.created_at,
        row.name,
        row.email,
        row.plz,
        row.ort,
        row.rolle,
        row.pv_kwp,
        row.verbrauch_kwh,
        row.smart_meter,
      ]
        .map(escape)
        .join(","),
    );
  }

  return `\uFEFF${lines.join("\n")}`;
}
