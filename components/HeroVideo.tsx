"use client";

import { useEffect, useRef } from "react";

/**
 * Hero video:
 * - WebM first (Chrome/Firefox/Edge), MP4 fallback (Safari)
 * - Desktop: no poster, preload auto
 * - Mobile: poster while buffering, smaller WebM when supported
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
        // Retry once media can play — some browsers block the first attempt
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
      poster="/hero-poster.jpg"
      width={1920}
      height={1080}
      muted
      playsInline
      loop
      autoPlay
      preload="auto"
      disablePictureInPicture
      disableRemotePlayback
      aria-label="Wattlokal Hero"
    >
      {/* Order: browser picks first supported. Mobile WebM only if media matches. */}
      <source
        src="/hero-mobile.webm"
        type="video/webm"
        media="(max-width: 768px)"
      />
      <source src="/hero.webm" type="video/webm" />
      <source src="/hero.mp4" type="video/mp4" />
    </video>
  );
}
