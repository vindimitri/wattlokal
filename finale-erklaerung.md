# Wattlokal – Finale Erklärung & Checkliste

Dieses Dokument beschreibt, was für die **finale, öffentliche Website** nötig ist — nicht nur fürs MVP.
Stand: Juli 2026

---

## 1. Was Wattlokal ist (kurz)

Wattlokal ist die digitale Einstiegsseite für eine lokale Energiegemeinschaft:

1. Nachbar öffnet die Website  
2. Füllt das Formular aus  
3. Bekommt eine Bestätigungsmail  
4. Klickt den Link → Anmeldung gilt als bestätigt  
5. Nur bestätigte Daten zählen für die Machbarkeitsstudie  

Es gibt (noch) **keine Verträge und keine Abrechnung** über die Website — nur Interessensbekundung und Datenerhebung für die Studie.

---

## 2. Architektur (final relevant)

| Teil | Dienst | Aufgabe |
|------|--------|---------|
| Website + API | **Vercel** | Öffentliche Seite, Formular, Admin |
| Domain | **IONOS** + Vercel DNS | `wattlokal.de` / `www.wattlokal.de` |
| Datenbank | **Supabase** (EU) | Anmeldungen `pending` / `confirmed` |
| E-Mail | **Resend** (`@wattlokal.de`) | Double-Opt-in-Mails |
| Captcha | **Cloudflare Turnstile** | Spam-/Bot-Schutz |
| Admin | `/admin` + `ADMIN_SECRET` | Tabelle + CSV (Studie) |

Details zum Datenfluss: siehe `datenflow.md`.

---

## 3. Rechtliches (für die finale Seite Pflicht)

### 3.1 Datenschutzerklärung (Privacy Policy)
Seite: `/datenschutz`

Muss enthalten:
- Verantwortliche Stelle (Name, Anschrift, E-Mail)
- Welche Daten erhoben werden
- Zwecke (Energiegemeinschaft, Studie, Kontakt)
- Rechtsgrundlagen (Einwilligung, berechtigtes Interesse)
- Speicherdauer (konkret, keine Platzhalter)
- Empfänger/Dienstleister (Vercel, Supabase, Resend, Cloudflare, IONOS)
- Cookies / Captcha
- Betroffenenrechte + Widerruf
- Stand-Datum

**Status jetzt:** Struktur enterprise-mäßig vorhanden, **Platzhalter für Kontaktdaten/Speicherdauer noch ersetzen**.

### 3.2 Impressum
Seite: `/impressum` (noch anlegen, falls fehlend)

Muss enthalten:
- Name / Organisation
- Anschrift
- Kontakt (E-Mail, ggf. Telefon)
- ggf. Register / Vertretungsberechtigte

Im Footer verlinken: **Impressum | Datenschutz**

### 3.3 Einwilligungen (bereits im Produkt)
- Checkbox Datenschutz (nicht vorausgefüllt)
- Checkbox anonymisierte Studie
- Double-Opt-in per E-Mail

### 3.4 Empfohlen vor großem Launch
- Kurzer rechtlicher Check (Anwalt / seriöser Generator + Anpassung)
- Auftragsverarbeitungsverträge (AVV) mit den Dienstleistern, soweit nötig

**Hinweis:** Eine Datenschutzerklärung muss man **nicht kaufen**. Kaufen kann man Vorlagen/Prüfung — Pflicht ist eine korrekte, zu eurem Setup passende Erklärung.

---

## 4. Technik – Final-Checkliste

### Bereits erledigt
- [x] Landingpage + Formular
- [x] Speicherung in Supabase
- [x] Double-Opt-in (Resend)
- [x] Domain `wattlokal.de`
- [x] Captcha (Turnstile)
- [x] Admin-Seite + CSV-Export
- [x] Design (Tiefblau / Blitzgelb / Karten)
- [x] Favicon

### Für final noch empfohlen / offen
- [ ] Impressum-Seite + Footer-Links
- [ ] Datenschutz-Platzhalter durch echte Daten ersetzen
- [x] Pending-Cleanup (unbestätigte Anmeldungen automatisch löschen)
      → `/api/cron/cleanup-pending` täglich 03:00 UTC, Env `CRON_SECRET`
- [ ] Speicherdauer technisch umsetzen (nicht nur im Text)
- [ ] Secrets prüfen/rotieren, falls je öffentlich gewesen
- [ ] Optional: Monitoring / Fehler-Alerts
- [ ] Optional später: echtes Admin-Login statt Shared-Secret

---

## 5. Inhalt & Vertrauen (final)

- [ ] Landing-Text klar: Gemeinde, Ziel, dass es erst um Interesse/Studie geht
- [ ] Keine irreführenden Versprechen (keine „Vertrag jetzt“-Sprache)
- [ ] Kontaktweg für Rückfragen / Datenschutzanfragen definiert
- [ ] Mobile + Desktop geprüft

---

## 6. Betrieb (wer macht was)

Festlegen:
- [ ] Wer ist Verantwortlicher (Impressum/Datenschutz)?
- [ ] Wer hat `ADMIN_SECRET` / schaut Anmeldungen?
- [ ] Wer beantwortet Auskunfts-/Löschanfragen?
- [ ] Wer pflegt Env-Vars (Vercel) und Domain/DNS?

Admin-URL: `https://www.wattlokal.de/admin`  
(nicht öffentlich bewerben)

---

## 7. Go-Live-Check (vor Nachbar-Kampagne)

1. `https://www.wattlokal.de` öffnet Landing  
2. Formular absenden mit Test-Mail  
3. Bestätigungsmail kommt (auch Spam prüfen)  
4. Link → Status in Supabase = `confirmed`  
5. `/admin` → Eintrag sichtbar + CSV funktioniert  
6. `/datenschutz` und `/impressum` erreichbar und korrekt  
7. Captcha erscheint / Absenden ohne Token scheitert  
8. Handy-Test

---

## 8. Was „final“ vs. „späteres Produkt“ heißt

### Final genug zum öffentlichen Bewerben
Rechtliches fertig + aktuelle Technik + klare Verantwortung + Cleanup-Prozess.

### Später (wenn aus Studie ein Betrieb wird)
- Echtes Benutzer-/Admin-Login mit Rollen
- AGB / Nutzungsbedingungen (bei Verträgen)
- Matching Erzeuger/Verbraucher, Abrechnung, Verträge
- Stärkere Security (2FA, Audit-Logs)
- Cookie-Banner nur bei Tracking/Marketing

Das Shared-Secret-Admin ist für die **Studie ok**, für ein **langfristiges Betriebsprodukt** später ersetzen.

---

## 9. Offene Platzhalter (jetzt ausfüllen)

Bitte final festlegen und in die Website eintragen:

1. **Verantwortlicher**  
   Name / Organisation: ____________________  
   Straße: ____________________  
   PLZ Ort: ____________________  
   E-Mail: ____________________  

2. **Speicherdauer unbestätigt** (Vorschlag: 7 Tage): ____  

3. **Speicherdauer bestätigt** (Vorschlag: max. 24 Monate / bis Studienende): ____  

4. **Impressum-Zusatz** (Telefon, Register, Vertretung — falls vorhanden): ____  

**Status:** Platzhalter-Versionen von `/impressum` und `/datenschutz` sind online-fertig im Code.
Sobald die echten Daten da sind, Platzhalter `[…]` ersetzen.  

---

## 10. Empfohlene Reihenfolge bis „final“

1. Kontaktdaten + Speicherdauer liefern  
2. Datenschutz finalisieren + Impressum anlegen  
3. Pending-Cleanup bauen  
4. Go-Live-Check (Abschnitt 7)  
5. Optional Rechtscheck  
6. Nachbarn einladen  

---

## Kurzfassung

| Bereich | Final nötig? | Status |
|---------|--------------|--------|
| Website + Formular + Mail + Captcha | Ja | ✅ weitgehend fertig |
| Admin + CSV | Ja (für Studie) | ✅ |
| Datenschutzerklärung | Ja | 🟡 Text da, Daten eintragen |
| Impressum | Ja | ❌ noch anlegen |
| Pending-Cleanup | Ja (für echte Speicherdauer) | ❌ |
| AGB / Tracking-Banner | Nein (jetzt) | später |
| Enterprise-Auth | Nein (jetzt) | später |

**Bottom line:** Die Plattform ist technisch startklar. Für die **finale öffentliche Nutzung** fehlen vor allem **Impressum, finale Datenschutz-Daten und Löschprozess** — dann ist Wattlokal „richtig“ live, nicht nur MVP.
