import { NextResponse } from "next/server";
import { getAdminSecret, isAdminAuthenticated, toCsv } from "@/lib/admin";
import { getSupabaseAdmin } from "@/lib/supabase";
import type { ConfirmedRegistration } from "@/lib/admin";

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

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("registrations")
    .select(
      "id, created_at, confirmed_at, name, email, plz, ort, rolle, pv_kwp, verbrauch_kwh, smart_meter",
    )
    .eq("status", "confirmed")
    .order("confirmed_at", { ascending: false });

  if (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Export fehlgeschlagen." },
      { status: 500 },
    );
  }

  const rows = (data ?? []) as ConfirmedRegistration[];
  const csv = toCsv(rows);
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
