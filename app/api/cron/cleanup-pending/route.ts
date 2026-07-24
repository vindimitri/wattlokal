import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

/** Days after which unconfirmed (pending) rows are removed even if token meta is odd. */
const PENDING_MAX_AGE_DAYS = 7;

function isAuthorized(request: Request): boolean {
  const secret = process.env.CRON_SECRET?.trim();
  if (!secret) return false;

  const auth = request.headers.get("authorization");
  if (auth === `Bearer ${secret}`) return true;

  // Allow manual trigger with same secret header used elsewhere
  const header = request.headers.get("x-cron-secret")?.trim();
  return header === secret;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const supabase = getSupabaseAdmin();
    const cutoff = new Date(
      Date.now() - PENDING_MAX_AGE_DAYS * 24 * 60 * 60 * 1000,
    ).toISOString();
    const now = new Date().toISOString();

    // 1) Token expired
    const expired = await supabase
      .from("registrations")
      .delete()
      .eq("status", "pending")
      .not("confirm_token_expires_at", "is", null)
      .lt("confirm_token_expires_at", now)
      .select("id");

    if (expired.error) {
      console.error("[cleanup-pending] expired delete:", expired.error);
      return NextResponse.json(
        { error: "Cleanup fehlgeschlagen (expired)." },
        { status: 500 },
      );
    }

    // 2) Older than max age (safety net)
    const old = await supabase
      .from("registrations")
      .delete()
      .eq("status", "pending")
      .lt("created_at", cutoff)
      .select("id");

    if (old.error) {
      console.error("[cleanup-pending] old delete:", old.error);
      return NextResponse.json(
        { error: "Cleanup fehlgeschlagen (old)." },
        { status: 500 },
      );
    }

    const deletedExpired = expired.data?.length ?? 0;
    const deletedOld = old.data?.length ?? 0;

    return NextResponse.json({
      ok: true,
      deletedExpired,
      deletedOld,
      deletedTotal: deletedExpired + deletedOld,
      pendingMaxAgeDays: PENDING_MAX_AGE_DAYS,
      ranAt: now,
    });
  } catch (err) {
    console.error("[cleanup-pending]", err);
    return NextResponse.json({ error: "Unerwarteter Fehler." }, { status: 500 });
  }
}
