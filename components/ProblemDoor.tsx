"use client";

import { PriceGapGraphic } from "@/components/PriceGapGraphic";
import { SectionCurtain } from "@/components/SectionCurtain";

export function ProblemDoor() {
  return (
    <SectionCurtain
      id="das-problem"
      ariaLabel="Das Problem"
      buttonLabel="Das Problem"
      className="bg-[#eef2f5]"
    >
      <p className="enwg-kicker">Das Problem</p>
      <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-[color:var(--enwg-navy)] max-w-3xl">
        Warum zahlen die einen zu viel – und die anderen bekommen zu wenig?
      </h2>
      <p className="mt-4 max-w-3xl text-[color:var(--enwg-muted)] leading-relaxed">
        Aktuell liegt der Durchschnittspreis für{" "}
        <strong className="font-semibold text-[color:var(--enwg-navy)]">
          Strom
        </strong>{" "}
        weit auseinander vom Preis, den Haushalte mit Solaranlage für ihren
        Überschuss bekommen.
      </p>

      <PriceGapGraphic />

      <article className="mt-4 enwg-card max-w-3xl">
        <span className="enwg-icon enwg-icon-blue" aria-hidden>
          ❓
        </span>
        <p className="text-lg text-[color:var(--enwg-muted)] leading-relaxed">
          Warum also solltest du als{" "}
          <strong className="font-semibold text-[color:var(--enwg-navy)]">
            Verbraucher
          </strong>{" "}
          mehr Geld zahlen und du als{" "}
          <strong className="font-semibold text-[color:var(--enwg-navy)]">
            Erzeuger
          </strong>{" "}
          weniger Geld bekommen? Das haben wir uns auch gefragt.
        </p>
      </article>
    </SectionCurtain>
  );
}
