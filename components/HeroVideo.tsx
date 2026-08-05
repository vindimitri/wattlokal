"use client";

import { useEffect, useRef } from "react";

/** Bump when hero media files are replaced (cache bust). */
const HERO_V = "4";

/**
 * Poster paints immediately so the hero is never a black void
 * while WebM/MP4 buffers. Video replaces it as soon as playback starts.
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const tryPlay = () => {
      if (motionQuery.matches) {
        video.pause();
        return;
      }
      video.muted = true;
      void video.play().catch(() => {
        const onCanPlay = () => {
          void video.play().catch(() => {});
        };
        video.addEventListener("canplay", onCanPlay, { once: true });
      });
    };

    tryPlay();
    motionQuery.addEventListener("change", tryPlay);

    return () => {
      motionQuery.removeEventListener("change", tryPlay);
      video.pause();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      poster={`/hero-poster.jpg?v=${HERO_V}`}
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
  );
}
