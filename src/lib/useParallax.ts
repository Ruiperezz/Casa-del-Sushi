import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxOptions {
  /** Scale from → to (e.g. [1.12, 1.0] = starts zoomed in, expands out) */
  scale?: [number, number];
  /** yPercent from → to relative to element height */
  yPercent?: [number, number];
  /** Scrub smoothing: true = instant, number = seconds of lag */
  scrub?: number | boolean;
  /** GSAP start/end for the ScrollTrigger */
  start?: string;
  end?: string;
}

export function useParallax<T extends HTMLElement>({
  scale = [1.12, 1.0],
  yPercent = [-6, 6],
  scrub = 1.5,
  start = "top bottom",
  end = "bottom top",
}: ParallaxOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = el.parentElement ?? el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: scale[0], yPercent: yPercent[0] },
        {
          scale: scale[1],
          yPercent: yPercent[1],
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start,
            end,
            scrub,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
}

/** Simpler hook for y-only parallax (hero section) */
export function useHeroParallax<T extends HTMLElement>(speed = 0.35) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const section = el.closest("section") ?? el.parentElement ?? el;
    const distance = section.clientHeight * speed;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 0 },
        {
          y: distance,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
}
