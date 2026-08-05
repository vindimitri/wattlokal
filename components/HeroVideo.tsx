"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    void video.play().catch(() => {
      /* autoplay may be blocked until interaction */
    });
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      src="/kling_vid.mp4"
      muted
      playsInline
      loop
      autoPlay
      preload="auto"
      aria-hidden
    />
  );
}
