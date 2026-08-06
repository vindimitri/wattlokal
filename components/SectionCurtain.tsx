"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type TransitionEvent,
} from "react";

type SectionCurtainProps = {
  id: string;
  ariaLabel: string;
  buttonLabel: string;
  className?: string;
  children: ReactNode;
};

/**
 * Orange logo cover: click opens like a curtain; closes when section
 * leaves the viewport. Button only appears once the curtain is fully shut.
 */
export function SectionCurtain({
  id,
  ariaLabel,
  buttonLabel,
  className = "",
  children,
}: SectionCurtainProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [fullyClosed, setFullyClosed] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
    const onChange = () => setReduceMotion(query.matches);
    query.addEventListener("change", onChange);
    setReady(true);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reduceMotion) return;

    const closeIfOutOfView = () => {
      const rect = section.getBoundingClientRect();
      const outOfView = rect.bottom <= 0 || rect.top >= window.innerHeight;
      if (outOfView) {
        setOpen(false);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setOpen(false);
        }
      },
      { threshold: 0, rootMargin: "0px" },
    );

    observer.observe(section);
    closeIfOutOfView();
    window.addEventListener("scroll", closeIfOutOfView, { passive: true });
    window.addEventListener("resize", closeIfOutOfView);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", closeIfOutOfView);
      window.removeEventListener("resize", closeIfOutOfView);
    };
  }, [reduceMotion]);

  const openCurtain = () => {
    setFullyClosed(false);
    setOpen(true);
  };

  const onCoverTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== "transform") return;
    if (event.target !== event.currentTarget) return;
    if (!open) {
      setFullyClosed(true);
    }
  };

  const showButton = fullyClosed && !open;

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`was-door-section scroll-mt-24 ${className}`.trim()}
      aria-label={ariaLabel}
    >
      <div
        className={`was-door-frame${open ? " is-open" : ""}${ready ? " is-ready" : ""}`}
      >
        <div className="was-door-body site-shell">{children}</div>

        {!reduceMotion ? (
          <div className="was-door-stage" aria-hidden={open}>
            <div
              className="was-door-cover was-door-cover-left"
              onTransitionEnd={onCoverTransitionEnd}
            />
            <div
              className="was-door-cover was-door-cover-right"
              onTransitionEnd={onCoverTransitionEnd}
            />
            {showButton ? (
              <button
                type="button"
                className="was-door-btn"
                onClick={openCurtain}
              >
                {buttonLabel}
              </button>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
