"use client";

import { SectionCurtain } from "@/components/SectionCurtain";

export function WasIstDoor() {
  return (
    <SectionCurtain
      id="was-ist-wattlokal"
      ariaLabel="Was ist Wattlokal?"
      buttonLabel="Was ist Wattlokal?"
    >
      <p className="enwg-kicker">Über uns</p>
      <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-[color:var(--enwg-navy)]">
        Was ist Wattlokal?
      </h2>
      <article className="mt-8 enwg-card max-w-3xl">
        <span className="enwg-icon enwg-icon-yellow" aria-hidden>
          🏠
        </span>
        <p className="text-lg text-[color:var(--enwg-muted)] leading-relaxed">
          <strong className="font-semibold text-[color:var(--enwg-navy)]">
            Wattlokal
          </strong>{" "}
          ist eine{" "}
          <strong className="font-semibold text-[color:var(--enwg-navy)]">
            Gemeinschaft
          </strong>
          , die{" "}
          <strong className="font-semibold text-[color:var(--enwg-navy)]">
            Watt
          </strong>{" "}
          teilt. Seit dem{" "}
          <strong className="font-semibold text-[color:var(--enwg-navy)]">
            01.06.2026
          </strong>{" "}
          dürfen{" "}
          <strong className="font-semibold text-[color:var(--enwg-navy)]">
            Haushalte
          </strong>{" "}
          und{" "}
          <strong className="font-semibold text-[color:var(--enwg-navy)]">
            Privatpersonen
          </strong>{" "}
          ihren{" "}
          <strong className="font-semibold text-[color:var(--enwg-navy)]">
            Strom
          </strong>{" "}
          untereinander{" "}
          <strong className="font-semibold text-[color:var(--enwg-navy)]">
            aufteilen
          </strong>
          ,{" "}
          <strong className="font-semibold text-[color:var(--enwg-navy)]">
            kaufen
          </strong>{" "}
          und{" "}
          <strong className="font-semibold text-[color:var(--enwg-navy)]">
            verkaufen
          </strong>
          . Und genau das haben wir vor.
        </p>
      </article>
    </SectionCurtain>
  );
}
