# Wattlokal

Lokale Energiegemeinschaft – Landingpage, Anmeldeformular und Double-Opt-in für die Machbarkeitsstudie.

**Live:** [https://www.wattlokal.de](https://www.wattlokal.de)  
(`wattlokal.de` und `wattlokal.vercel.app` leiten auf `www` um.)

## Flow

1. Formular unter `/anmelden`
2. Speichern als `pending` + Bestätigungsmail
3. Klick auf `/bestaetigen?token=…` → `confirmed`
4. Nur `confirmed` zählt für die Studie (Admin/CSV)

## Repo-Struktur

```
app/           Seiten & API-Routen (Next.js App Router)
components/    Gemeinsame UI (Header, Footer, Carousel)
lib/           Server-Logik (DB, Mail, Captcha, Validierung, Admin)
docs/          Architektur, Checkliste, Verbesserungen
supabase/      schema.sql
```

## Setup

### 1. Abhängigkeiten

```bash
npm install
```

### 2. Supabase

1. Projekt in Region **West EU (Paris)** anlegen  
2. SQL aus `supabase/schema.sql` im SQL Editor ausführen  
3. URL + **service_role**-Key kopieren  

### 3. Umgebungsvariablen

```bash
cp .env.example .env.local
```

Werte eintragen. Lokal ohne Resend: `RESEND_API_KEY` leer lassen – der Bestätigungslink erscheint in der Terminal-Ausgabe von `npm run dev`.

Secrets nie committen (`.env*`, `api-keys.txt` sind in `.gitignore`).

### 4. Starten

```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

## Admin

1. `ADMIN_SECRET` setzen (mind. 12 Zeichen)
2. `/admin` öffnen
3. Bestätigte Anmeldungen + CSV

Nicht öffentlich verlinken.

## Pending-Cleanup

Vercel Cron täglich 03:00 UTC → `/api/cron/cleanup-pending`  
(Token abgelaufen oder Eintrag älter als 7 Tage.)

Env: `CRON_SECRET`

```bash
curl -H "Authorization: Bearer DEIN_CRON_SECRET" https://www.wattlokal.de/api/cron/cleanup-pending
```

## Deploy (Vercel)

1. Repo verbinden  
2. Env-Vars setzen (`NEXT_PUBLIC_APP_URL=https://www.wattlokal.de`)  
3. Deploy  

## Dokumentation

- [docs/datenflow.md](docs/datenflow.md) – Datenfluss  
- [docs/finale-erklaerung.md](docs/finale-erklaerung.md) – Finale Checkliste  
- [docs/verbesserungen.txt](docs/verbesserungen.txt) – Offene Verbesserungen  

## Sicherheit (MVP)

- HTTPS (Vercel), Service Role nur serverseitig  
- RLS ohne Public-Policies, Tokens gehasht (48h)  
- Turnstile + Rate Limit; Production fail-closed  
- Admin-Login Rate Limit; Security-Headers/CSP  
