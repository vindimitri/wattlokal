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

/**
 * Hero video with friendly loading:
 * - Poster paints immediately
 * - preload=metadata (not auto) so we don't yank the full file first
 * - Mobile gets a smaller 1080p source
 * - Slow connections / Save-Data keep the poster only
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [allowVideo, setAllowVideo] = useState(true);

  useEffect(() => {
    if (shouldDeferHeavyVideo()) {
      setAllowVideo(false);
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
  }, [allowVideo]);

  if (!allowVideo) {
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
      className="absolute inset-0 h-full w-full object-cover"
      poster="/hero-poster.jpg"
      width={3840}
      height={2160}
      muted
      playsInline
      loop
      autoPlay
      preload="metadata"
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
