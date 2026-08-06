"use client";

import { useEffect, useRef, useState } from "react";

/** Bump when hero media files are replaced (cache bust). */
const HERO_V = "4";

type RevealPhase = "sun" | "opening" | "done";

/**
 * Soft sun “opens” the hero (CSS only), then yields to the video.
 * Covers the buffer gap so nothing is a black void.
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<RevealPhase>("sun");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      setPhase("done");
      video.muted = true;
      void video.play().catch(() => {});
      return;
    }

    const startedAt = performance.now();
    const MIN_SUN_MS = 700;
    let opened = false;

    const openReveal = () => {
      if (opened) return;
      opened = true;
      const wait = Math.max(0, MIN_SUN_MS - (performance.now() - startedAt));
      window.setTimeout(() => setPhase("opening"), wait);
    };

    const tryPlay = () => {
      video.muted = true;
      void video.play().then(openReveal).catch(() => {
        const onCanPlay = () => {
          void video.play().then(openReveal).catch(openReveal);
        };
        video.addEventListener("canplay", onCanPlay, { once: true });
        // Safety: never stick on sun forever
        window.setTimeout(openReveal, 2500);
      });
    };

    tryPlay();

    return () => {
      video.pause();
    };
  }, []);

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
            if (event.propertyName === "opacity" && phase === "opening") {
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
    </div>
  );
}
