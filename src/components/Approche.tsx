"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import SectionHeading from "@/components/SectionHeading";

const ICONS = [
  // Comprendre — loupe
  <g key="0"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l5 5" /></g>,
  // Concevoir — ampoule
  <g key="1"><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" /></g>,
  // Développer — code
  <g key="2"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" /></g>,
  // Déployer — fusée
  <g key="3"><path d="M5 19c1-3 2.5-4.5 4-5M14 4c3 0 6 3 6 6l-6 6-6-6 6-6z" /><circle cx="15" cy="9" r="1.5" /><path d="M9 14l-3 1 1-3" /></g>,
];

export default function Approche() {
  const { locale } = useLanguage();
  const t = content[locale].approche;
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !root.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: "[data-steps]", start: "top 75%", end: "bottom 55%", scrub: 0.6 },
      });
      tl.fromTo("[data-line-h]", { scaleX: 0 }, { scaleX: 1, ease: "none" }, 0).fromTo(
        "[data-line-v]",
        { scaleY: 0 },
        { scaleY: 1, ease: "none" },
        0,
      );

      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((step, i) => {
        const icon = step.querySelectorAll("[data-icon] path, [data-icon] circle");
        const stl = gsap.timeline({
          scrollTrigger: { trigger: step, start: "top 80%", once: true },
          delay: i * 0.12,
        });
        stl
          .fromTo(step.querySelector("[data-orb]"), { scale: 0.4, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.9, ease: "back.out(1.8)" })
          .fromTo(icon, { strokeDashoffset: 60, strokeDasharray: 60 }, { strokeDashoffset: 0, duration: 1.1, ease: "power2.out", stagger: 0.08 }, "<0.2")
          .fromTo(step.querySelectorAll("[data-step-text]"), { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.8, ease: "expo.out", stagger: 0.08 }, "<0.2");
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="approche" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 40% at 50% 55%, rgba(30,120,220,0.14), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title1} accent={t.titleAccent} intro={t.intro} />

        <ol data-steps className="relative mt-16 grid gap-12 pl-16 lg:grid-cols-4 lg:gap-8 lg:pl-0">
          {/* connecting light line */}
          <span aria-hidden className="absolute left-[2.45rem] top-2 bottom-2 w-px bg-white/10 lg:hidden" />
          <span
            data-line-v
            aria-hidden
            className="absolute left-[2.45rem] top-2 bottom-2 w-[2px] origin-top bg-gradient-to-b from-s7-sky-blue via-s7-electric-blue to-s7-violet shadow-[0_0_12px_#59d5ff] lg:hidden"
          />
          <span aria-hidden className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-white/10 lg:block" />
          <span
            data-line-h
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-[2px] origin-left bg-gradient-to-r from-s7-sky-blue via-s7-electric-blue to-s7-violet shadow-[0_0_14px_#59d5ff] lg:block"
          />

          {t.steps.map((s, i) => (
            <li key={s.n} data-step className="relative lg:text-center">
              <div
                data-orb
                className="absolute -left-16 top-0 flex h-[4.9rem] w-[4.9rem] scale-[0.82] items-center justify-center lg:relative lg:left-auto lg:mx-auto lg:h-24 lg:w-24 lg:scale-100"
              >
                <span aria-hidden className="absolute inset-0 rounded-full bg-s7-electric-blue/20 blur-xl" />
                <span aria-hidden className="absolute inset-0 rounded-full border border-s7-sky-blue/50 bg-[radial-gradient(circle_at_30%_30%,#0f3a7a,#030a18_70%)] shadow-[0_0_30px_-4px_rgba(89,213,255,0.7),inset_0_0_20px_rgba(89,213,255,0.25)]" />
                <span aria-hidden className="absolute -inset-2 rounded-full border border-dashed border-s7-sky-blue/20 s7-spin" />
                <svg
                  data-icon
                  viewBox="0 0 24 24"
                  className="relative h-8 w-8 text-s7-sky-blue drop-shadow-[0_0_6px_#59d5ff]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {ICONS[i]}
                </svg>
              </div>
              <div className="lg:mt-7">
                <span data-step-text className="block font-tech text-xs font-bold text-s7-sky-blue">
                  {s.n}
                </span>
                <h3 data-step-text className="mt-1 font-display text-xl font-bold text-s7-white">
                  {s.title}
                </h3>
                <p data-step-text className="mt-2 text-sm leading-relaxed text-s7-silver-light/60 lg:mx-auto lg:max-w-[15rem]">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
