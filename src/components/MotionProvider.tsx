"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/**
 * Scroll-driven reveals for every element marked `data-reveal`
 * ("up" | "fade" | "left" | "right" | "scale"), plus the top progress bar.
 * Content is fully visible without JS: the hidden start state only applies
 * once the `s7-motion` class is set here.
 */
export default function MotionProvider() {
  const bar = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const root = document.documentElement;
    (window as unknown as { __s7motion?: boolean }).__s7motion = true;
    root.classList.add("s7-motion");

    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      els.forEach((el) => {
        const kind = el.dataset.reveal || "up";
        const delay = Number(el.dataset.revealDelay || 0);
        const from: gsap.TweenVars = { opacity: 0 };
        if (kind === "up") from.y = 40;
        if (kind === "left") from.x = -50;
        if (kind === "right") from.x = 50;
        if (kind === "scale") from.scale = 0.9;
        gsap.fromTo(el, from, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1.1,
          delay,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      if (bar.current) {
        gsap.to(bar.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        });
      }
    });

    // Images and fonts can shift layout after first paint.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [pathname]);

  return <div ref={bar} className="s7-progress" aria-hidden />;
}
