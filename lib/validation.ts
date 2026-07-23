import type { RegistrationInput, Rolle, SmartMeterStatus } from "./types";

export type ValidationResult =
  | { ok: true; data: RegistrationInput }
  | { ok: false; error: string };

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function asBool(value: unknown): boolean {
  return value === true || value === "true" || value === "on" || value === "1";
}

function asOptionalNumber(value: unknown): number | null {
  if (value === null || value === undefined || value === "") return null;
  const n = typeof value === "number" ? value : Number(String(value).replace(",", "."));
  return Number.isFinite(n) ? n : NaN;
}

const ROLLEN: Rolle[] = ["erzeuger", "verbraucher", "beides"];
const SMART: SmartMeterStatus[] = ["ja", "nein", "unsicher"];

export function validateRegistration(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Ungültige Anfrage." };
  }

  const raw = body as Record<string, unknown>;
  const name = asString(raw.name);
  const email = asString(raw.email).toLowerCase();
  const plz = asString(raw.plz);
  const ort = asString(raw.ort);
  const rolle = asString(raw.rolle) as Rolle;
  const smart_meter = asString(raw.smart_meter) as SmartMeterStatus;
  const consent_dsgvo = asBool(raw.consent_dsgvo);
  const consent_studie = asBool(raw.consent_studie);
  let pv_kwp = asOptionalNumber(raw.pv_kwp);
  let verbrauch_kwh = asOptionalNumber(raw.verbrauch_kwh);

  if (!name || name.length < 2) {
    return { ok: false, error: "Bitte einen Namen angeben." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Bitte eine gültige E-Mail-Adresse angeben." };
  }
  if (!/^\d{5}$/.test(plz)) {
    return { ok: false, error: "Bitte eine gültige PLZ (5 Ziffern) angeben." };
  }
  if (!ort || ort.length < 2) {
    return { ok: false, error: "Bitte einen Ort angeben." };
  }
  if (!ROLLEN.includes(rolle)) {
    return { ok: false, error: "Bitte eine Rolle wählen." };
  }
  if (!SMART.includes(smart_meter)) {
    return { ok: false, error: "Bitte den Smart-Meter-Status wählen." };
  }
  if (!consent_dsgvo || !consent_studie) {
    return {
      ok: false,
      error: "Bitte beide Einwilligungen bestätigen.",
    };
  }

  if (rolle === "verbraucher") {
    pv_kwp = null;
  } else if (pv_kwp === null || Number.isNaN(pv_kwp) || pv_kwp <= 0 || pv_kwp > 500) {
    return {
      ok: false,
      error: "Bitte die PV-Anlagengröße in kWp angeben.",
    };
  }

  if (verbrauch_kwh === null || Number.isNaN(verbrauch_kwh) || verbrauch_kwh < 0 || verbrauch_kwh > 100000) {
    return {
      ok: false,
      error: "Bitte den geschätzten Jahresverbrauch in kWh angeben.",
    };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      plz,
      ort,
      rolle,
      pv_kwp,
      verbrauch_kwh: Math.round(verbrauch_kwh),
      smart_meter,
      consent_dsgvo,
      consent_studie,
    },
  };
}
