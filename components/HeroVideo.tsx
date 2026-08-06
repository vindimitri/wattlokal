"use client";

import { useHeroReveal } from "@/components/HeroRevealContext";
import { useEffect, useRef, useState } from "react";

/** Bump when hero media files are replaced (cache bust). */
const HERO_V = "4";

type RevealPhase = "sun" | "opening" | "done";

/**
 * Soft sun covers the buffer gap; once the video can play,
 * the sun opens and the sky line fades in from that moment.
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { reveal } = useHeroReveal();
  const [phase, setPhase] = useState<RevealPhase>("sun");
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      setPhase("done");
      setShowLine(true);
      reveal();
      video.muted = true;
      void video.play().catch(() => {});
      return;
    }

    let opened = false;
    let safetyTimer = 0;

    const onVideoReady = () => {
      if (opened) return;
      opened = true;
      window.clearTimeout(safetyTimer);
      // Video is playable → sun opens, tagline + brand fade in
      setPhase("opening");
      setShowLine(true);
      reveal();
    };

    const tryPlay = () => {
      video.muted = true;
      void video.play().then(onVideoReady).catch(() => {
        const onCanPlay = () => {
          void video.play().then(onVideoReady).catch(onVideoReady);
        };
        video.addEventListener("canplay", onCanPlay, { once: true });
        safetyTimer = window.setTimeout(onVideoReady, 2500);
      });
    };

    tryPlay();

    return () => {
      window.clearTimeout(safetyTimer);
      video.pause();
    };
  }, [reveal]);

  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        width={3840}
        height={2160}
        muted
        playsInline
        loop
        autoPlay
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        aria-label="Wattlokal Hero"
      >
        <source
          src={`/hero-mobile.webm?v=${HERO_V}`}
          type="video/webm"
          media="(max-width: 768px)"
        />
        <source src={`/hero.webm?v=${HERO_V}`} type="video/webm" />
        <source src={`/hero.mp4?v=${HERO_V}`} type="video/mp4" />
      </video>

      {phase !== "done" ? (
        <div
          className={`hero-sun-reveal${phase === "opening" ? " is-opening" : ""}`}
          aria-hidden
          onTransitionEnd={(event) => {
            if (
              event.target === event.currentTarget &&
              event.propertyName === "opacity" &&
              phase === "opening"
            ) {
              setPhase("done");
            }
          }}
        >
          <div className="hero-sun-sky" />
          <div className="hero-sun-haze" />
          <div className="hero-sun-rays" />
          <div className="hero-sun-glow" />
          <div className="hero-sun-corona" />
          <div className="hero-sun-core" />
        </div>
      ) : null}

      {showLine ? (
        <div className="hero-sky-copy">
          <p className="hero-sky-line">Wir teilen Watt.</p>
          <a
            href="#das-problem"
            className="hero-sky-cta"
            onClick={(event) => {
              event.preventDefault();
              document
                .getElementById("das-problem")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Mehr erfahren...
          </a>
        </div>
      ) : null}
    </div>
  );
}
