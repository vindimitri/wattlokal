"use client";

import { useEffect, useRef } from "react";

/**
 * Plays forward, then reverse scrub, forever.
 * Native reverse playback isn't reliable across browsers.
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let raf = 0;
    let reversing = false;
    let cancelled = false;

    const cancelRaf = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const playForward = () => {
      if (cancelled) return;
      reversing = false;
      cancelRaf();
      video.playbackRate = 1;
      void video.play().catch(() => {
        /* autoplay may be blocked until interaction */
      });
    };

    const reverseStep = (lastTs: number) => {
      if (cancelled || !reversing) return;
      raf = requestAnimationFrame((ts) => {
        const dt = Math.min(0.05, (ts - lastTs) / 1000);
        const next = video.currentTime - dt;
        if (next <= 0.02) {
          video.currentTime = 0;
          cancelRaf();
          playForward();
          return;
        }
        video.currentTime = next;
        reverseStep(ts);
      });
    };

    const startReverse = () => {
      if (cancelled) return;
      reversing = true;
      video.pause();
      reverseStep(performance.now());
    };

    const onEnded = () => startReverse();

    video.addEventListener("ended", onEnded);
    playForward();

    return () => {
      cancelled = true;
      cancelRaf();
      video.removeEventListener("ended", onEnded);
      video.pause();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      src="/kling_vid.mp4"
      muted
      playsInline
      preload="auto"
      aria-hidden
    />
  );
}
