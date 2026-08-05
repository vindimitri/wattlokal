"use client";

import { useEffect, useRef, useState } from "react";

type ConnectionLike = {
  saveData?: boolean;
  effectiveType?: string;
};

function shouldDeferHeavyVideo() {
  if (typeof navigator === "undefined") return false;
  const connection = (navigator as Navigator & { connection?: ConnectionLike })
    .connection;
  if (!connection) return false;
  if (connection.saveData) return true;
  return connection.effectiveType === "slow-2g" || connection.effectiveType === "2g";
}

function isMobileViewport() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px)").matches;
}

/**
 * Desktop: video immediately (no poster).
 * Mobile: smaller WebM + poster while it buffers.
 * Save-Data / 2G: poster only.
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<"video" | "poster-only">("video");
  const [usePoster, setUsePoster] = useState(false);

  useEffect(() => {
    const mobile = isMobileViewport();
    setUsePoster(mobile);

    if (shouldDeferHeavyVideo()) {
      setMode("poster-only");
      return;
    }

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
      void video.play().catch(() => {});
    };

    applyMotionPreference();
    motionQuery.addEventListener("change", applyMotionPreference);

    return () => {
      motionQuery.removeEventListener("change", applyMotionPreference);
      video.pause();
    };
  }, [mode]);

  if (mode === "poster-only") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/hero-poster.jpg"
        alt=""
        width={1280}
        height={720}
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover bg-black"
      poster={usePoster ? "/hero-poster.jpg" : undefined}
      width={3840}
      height={2160}
      muted
      playsInline
      loop
      autoPlay
      preload={usePoster ? "metadata" : "auto"}
      disablePictureInPicture
      disableRemotePlayback
      aria-label="Wattlokal Hero"
    >
      <source
        src="/hero-mobile.webm"
        type="video/webm"
        media="(max-width: 768px)"
      />
      <source src="/hero.webm" type="video/webm" />
    </video>
  );
}
