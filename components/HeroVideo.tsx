"use client";

import { useEffect, useRef, useState } from "react";

/** Bump when hero media files are replaced (cache bust). */
const HERO_V = "3";

/**
 * Hero: final-video encodes in /public
 * - WebM desktop + mobile, MP4 Safari fallback
 * - Desktop: direct video; mobile: poster while buffering
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

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
      className="absolute inset-0 h-full w-full object-cover bg-black"
      poster={isMobile ? `/hero-poster.jpg?v=${HERO_V}` : undefined}
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
