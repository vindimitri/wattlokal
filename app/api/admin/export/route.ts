import { NextResponse } from "next/server";
import {
  fetchConfirmedRegistrations,
  getAdminSecret,
  isAdminAuthenticated,
  toCsv,
} from "@/lib/admin";

export const runtime = "nodejs";

export async function GET() {
  if (!getAdminSecret()) {
    return NextResponse.json(
      { error: "ADMIN_SECRET ist nicht konfiguriert." },
      { status: 503 },
    );
  }

  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Nicht angemeldet." }, { status: 401 });
  }

  const result = await fetchConfirmedRegistrations();
  if (!result.ok) {
    return NextResponse.json({ error: "Export fehlgeschlagen." }, { status: 500 });
  }

  const csv = toCsv(result.rows);
  const stamp = new Date().toISOString().slice(0, 10);

  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="wattlokal-confirmed-${stamp}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
