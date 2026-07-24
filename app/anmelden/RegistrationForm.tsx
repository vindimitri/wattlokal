"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef, useState, type FormEvent } from "react";
import type { Rolle } from "@/lib/types";

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          theme?: "light" | "dark" | "auto";
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
      getResponse: (widgetId?: string) => string;
    };
  }
}

type Props = {
  turnstileSiteKey?: string;
};

export function RegistrationForm({ turnstileSiteKey = "" }: Props) {
  const router = useRouter();
  const [rolle, setRolle] = useState<Rolle>("verbraucher");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [scriptReady, setScriptReady] = useState(false);
  const [mountId, setMountId] = useState(0);
  const siteKey = turnstileSiteKey.trim();
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const showPv = rolle === "erzeuger" || rolle === "beides";

  useEffect(() => {
    if (typeof window !== "undefined" && window.turnstile) {
      setScriptReady(true);
    }
  }, []);

  useEffect(() => {
    if (!siteKey || !scriptReady || !widgetRef.current || !window.turnstile) {
      return;
    }

    if (widgetIdRef.current) {
      try {
        window.turnstile.remove(widgetIdRef.current);
      } catch {
        // ignore
      }
      widgetIdRef.current = null;
    }

    widgetRef.current.innerHTML = "";
    setTurnstileToken("");

    widgetIdRef.current = window.turnstile.render(widgetRef.current, {
      sitekey: siteKey,
      theme: "dark",
      callback: (token) => setTurnstileToken(token),
      "expired-callback": () => setTurnstileToken(""),
      "error-callback": () => setTurnstileToken(""),
    });

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // ignore
        }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, scriptReady, mountId]);

  // Browser-Zurück / bfcache: Widget neu mounten
  useEffect(() => {
    function remount() {
      setMountId((id) => id + 1);
      if (window.turnstile) setScriptReady(true);
    }

    function onPageShow(event: PageTransitionEvent) {
      if (event.persisted) remount();
    }

    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  function resetTurnstile() {
    setTurnstileToken("");
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setPending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const token =
      turnstileToken ||
      (widgetIdRef.current
        ? window.turnstile?.getResponse?.(widgetIdRef.current)
        : "") ||
      "";

    if (siteKey && !token) {
      setError("Bitte Captcha abschließen.");
      setPending(false);
      return;
    }

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      plz: String(formData.get("plz") ?? ""),
      ort: String(formData.get("ort") ?? ""),
      rolle: String(formData.get("rolle") ?? ""),
      pv_kwp: showPv ? String(formData.get("pv_kwp") ?? "") : null,
      verbrauch_kwh: String(formData.get("verbrauch_kwh") ?? ""),
      smart_meter: String(formData.get("smart_meter") ?? ""),
      consent_dsgvo: formData.get("consent_dsgvo") === "on",
      consent_studie: formData.get("consent_studie") === "on",
      turnstileToken: token,
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { error?: string };

      if (!res.ok) {
        setError(json.error ?? "Absenden fehlgeschlagen.");
        setPending(false);
        resetTurnstile();
        return;
      }

      router.push("/danke");
    } catch {
      setError("Netzwerkfehler. Bitte erneut versuchen.");
      setPending(false);
      resetTurnstile();
    }
  }

  return (
    <>
      {siteKey ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onLoad={() => setScriptReady(true)}
        />
      ) : null}

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="field sm:col-span-2">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" required autoComplete="name" />
          </div>
          <div className="field sm:col-span-2">
            <label htmlFor="email">E-Mail</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
            <p className="hint">
              Nach dem Absenden erhältst du eine Bestätigungsmail. Erst danach
              zählen deine Daten für die Studie.
            </p>
          </div>
          <div className="field">
            <label htmlFor="plz">PLZ</label>
            <input
              id="plz"
              name="plz"
              required
              inputMode="numeric"
              pattern="\d{5}"
              maxLength={5}
              autoComplete="postal-code"
            />
          </div>
          <div className="field">
            <label htmlFor="ort">Ort</label>
            <input id="ort" name="ort" required autoComplete="address-level2" />
          </div>
        </div>

        <fieldset className="space-y-3">
          <legend className="font-semibold">Rolle</legend>
          {(
            [
              ["verbraucher", "Verbraucher"],
              ["erzeuger", "Erzeuger (PV)"],
              ["beides", "Beides"],
            ] as const
          ).map(([value, label]) => (
            <label key={value} className="checkbox-row">
              <input
                type="radio"
                name="rolle"
                value={value}
                checked={rolle === value}
                onChange={() => setRolle(value)}
                required
              />
              <span>{label}</span>
            </label>
          ))}
        </fieldset>

        {showPv && (
          <div className="field">
            <label htmlFor="pv_kwp">PV-Anlagengröße (kWp)</label>
            <input
              id="pv_kwp"
              name="pv_kwp"
              type="number"
              min={0.1}
              max={500}
              step={0.1}
              required={showPv}
            />
          </div>
        )}

        <div className="field">
          <label htmlFor="verbrauch_kwh">Geschätzter Jahresverbrauch (kWh)</label>
          <input
            id="verbrauch_kwh"
            name="verbrauch_kwh"
            type="number"
            min={0}
            max={100000}
            step={1}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="smart_meter">Smart-Meter vorhanden?</label>
          <select id="smart_meter" name="smart_meter" required defaultValue="">
            <option value="" disabled>
              Bitte wählen
            </option>
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
            <option value="unsicher">Unsicher</option>
          </select>
        </div>

        <div className="space-y-3 rounded-2xl border border-[rgba(248,250,252,0.14)] bg-white/5 p-4">
          <label className="checkbox-row">
            <input type="checkbox" name="consent_dsgvo" required />
            <span>
              Ich willige ein, dass Wattlokal meine Angaben zur Organisation einer
              lokalen Energiegemeinschaft verarbeitet. Details in der{" "}
              <Link href="/datenschutz" className="underline text-accent">
                Datenschutzerklärung
              </Link>
              .
            </span>
          </label>
          <label className="checkbox-row">
            <input type="checkbox" name="consent_studie" required />
            <span>
              Ich willige ein, dass meine Daten anonymisiert für eine
              Machbarkeitsstudie genutzt werden dürfen.
            </span>
          </label>
        </div>

        {siteKey ? <div ref={widgetRef} className="min-h-[65px]" /> : null}

        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="btn" disabled={pending}>
          {pending ? "Wird gesendet…" : "Absenden & E-Mail bestätigen"}
        </button>
      </form>
    </>
  );
}
