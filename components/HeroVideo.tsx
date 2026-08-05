"use client";

import { useEffect, useRef } from "react";

/**
 * Hero background video — efficient embed:
 * - WebM first (smaller/modern), MP4 fallback (Safari/older)
 * - muted + playsInline + autoPlay required for autoplay policies
 * - poster for instant paint while video buffers (helps LCP)
 * - preload="auto" because this is above-the-fold hero (must start ASAP)
 * - loop for endless playback
 * - respects prefers-reduced-motion
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const applyMotionPreference = () => {
      if (motionQuery.matches) {
        video.pause();
        video.removeAttribute("autoplay");
        return;
      }
      video.setAttribute("autoplay", "");
      void video.play().catch(() => {
        /* autoplay may be blocked until interaction */
      });
    };

    applyMotionPreference();
    motionQuery.addEventListener("change", applyMotionPreference);

    return () => {
      motionQuery.removeEventListener("change", applyMotionPreference);
      video.pause();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      poster="/hero.png"
      width={1920}
      height={1080}
      muted
      playsInline
      loop
      autoPlay
      preload="auto"
      disablePictureInPicture
      disableRemotePlayback
      aria-hidden
    >
      <source src="/hero.webm" type="video/webm" />
      <source src="/kling_vid.mp4" type="video/mp4" />
    </video>
  );
}
