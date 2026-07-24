"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  caption: string;
};

const SLIDES: Slide[] = [
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
    alt: "Solaranlage auf einem Dach bei Sonnenschein",
    caption: "Lokaler Sonnenstrom – erzeugt dort, wo er gebraucht wird.",
  },
  {
    src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
    alt: "Strommasten und Energieinfrastruktur in der Landschaft",
    caption: "Weniger Umwege: Energie in der Nachbarschaft halten.",
  },
  {
    src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80",
    alt: "Solarpaneele unter blauem Himmel",
    caption: "Gemeinschaftlich statt anonym – Strom teilen vor Ort.",
  },
];

export function EnergyCarousel() {
  const [index, setIndex] = useState(0);

  function go(dir: -1 | 1) {
    setIndex((current) => (current + dir + SLIDES.length) % SLIDES.length);
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const slide = SLIDES[index];

  return (
    <div className="overflow-hidden rounded-[1.25rem] bg-card text-[color:var(--bg)]">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(max-width: 896px) 100vw, 896px"
          priority={index === 0}
          className="object-cover carousel-fade"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--brand-deep)]/85 via-[color:var(--brand-deep)]/25 to-transparent"
        />
        <p className="absolute bottom-0 left-0 right-0 z-[1] p-5 sm:p-6 text-base sm:text-lg font-medium leading-snug max-w-2xl">
          {slide.caption}
        </p>

        <button
          type="button"
          aria-label="Vorheriges Bild"
          onClick={() => go(-1)}
          className="carousel-nav left-3 sm:left-4"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Nächstes Bild"
          onClick={() => go(1)}
          className="carousel-nav right-3 sm:right-4"
        >
          ›
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 px-4 py-3">
        {SLIDES.map((item, i) => (
          <button
            key={item.src}
            type="button"
            aria-label={`Bild ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index
                ? "w-8 bg-accent"
                : "w-2.5 bg-white/35 hover:bg-white/55"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
