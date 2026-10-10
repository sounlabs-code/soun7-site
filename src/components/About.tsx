"use client";

import dynamic from "next/dynamic";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import Skyline from "@/components/fx/Skyline";
import { SolutionIcon } from "@/components/fx/SolutionArt";

// The globe is a secondary scene: loaded after the main bundle.
const AfricaGlobe = dynamic(() => import("@/components/fx/AfricaGlobe"), { ssr: false });

export default function About() {
  const { locale } = useLanguage();
  const t = content[locale].about;
  const expertises = content[locale].solutions.items;

  return (
    <section
      id="a-propos"
      className="relative scroll-mt-20 overflow-hidden border-y border-white/[0.06] py-24 sm:py-32"
      style={{ background: "linear-gradient(180deg, #02040b, #051330 60%, #02040b)" }}
    >
      <Skyline seed={21} count={60} maxH={170} className="pointer-events-none absolute bottom-0 left-0 h-[30%] w-full opacity-60" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr_0.75fr] lg:gap-8">
        <div className="relative z-10">
          <span data-reveal="fade" className="s7-eyebrow">
            {t.eyebrow}
          </span>
          <h2 data-reveal="up" className="mt-4 font-display text-3xl font-bold leading-[1.12] text-s7-white sm:text-4xl">
            {t.title1}{" "}
            <span className="bg-gradient-to-r from-s7-sky-blue to-s7-electric-blue bg-clip-text text-transparent">{t.title2}</span>
          </h2>
          <p data-reveal="up" className="mt-6 text-sm leading-relaxed text-s7-silver-light/70 sm:text-base">
            {t.p1}
          </p>
          <p data-reveal="up" className="mt-4 text-sm leading-relaxed text-s7-silver-light/60">
            {t.p2}
          </p>
          <p data-reveal="up" className="mt-4 text-sm leading-relaxed text-s7-silver-light/60">
            {t.p3}
          </p>
          <a data-reveal="up" href="#contact" className="s7-btn s7-btn-primary mt-8">
            {t.cta} <span aria-hidden>→</span>
          </a>
        </div>

        <div data-reveal="scale" className="relative mx-auto aspect-square w-full max-w-[34rem]">
          <AfricaGlobe className="absolute inset-0 h-full w-full" />
        </div>

        <div className="relative z-10">
          <p data-reveal="fade" className="font-tech text-[0.65rem] uppercase tracking-[0.25em] text-s7-silver-metal/70">
            {t.expertiseLabel}
          </p>
          <ul className="mt-5 space-y-2">
            {expertises.map((e, i) => (
              <li
                key={e.key}
                data-reveal="right"
                data-reveal-delay={String(i * 0.06)}
                className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-colors hover:border-white/10 hover:bg-white/[0.03]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-s7-sky-blue/25 bg-s7-electric-blue/10 text-s7-sky-blue transition-shadow group-hover:shadow-[0_0_18px_-2px_rgba(89,213,255,0.7)]">
                  <SolutionIcon kind={e.key} className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-s7-silver-light/85">{e.title}</span>
              </li>
            ))}
          </ul>
          <p data-reveal="fade" className="mt-8 font-slogan text-lg italic text-s7-silver-metal">
            {t.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
