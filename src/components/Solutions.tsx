"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { content, type SolutionKey } from "@/lib/content";
import { useTilt } from "@/lib/use-tilt";
import SectionHeading from "@/components/SectionHeading";
import SolutionArt, { SolutionIcon } from "@/components/fx/SolutionArt";

// Which contact-form project type each expertise pre-selects.
const PROJECT_TYPE_INDEX: Record<SolutionKey, number> = {
  apps: 0,
  ai: 2,
  digital: 1,
  telecom: 3,
  led: 4,
  platforms: 1,
};

export function preselectProjectType(index: number) {
  window.dispatchEvent(new CustomEvent("s7:project-type", { detail: index }));
}

type Item = (typeof content)["fr"]["solutions"]["items"][number];

function SolutionCard({ item, cta, index }: { item: Item; cta: string; index: number }) {
  const ref = useTilt<HTMLElement>(6);
  const [open, setOpen] = useState(false);

  return (
    <article
      ref={ref}
      data-reveal="up"
      data-reveal-delay={String((index % 3) * 0.1)}
      className="s7-tilt group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#071530] to-[#030916] hover:border-s7-sky-blue/40 hover:shadow-[0_30px_80px_-30px_rgba(30,120,220,0.7)]"
    >
      <span className="s7-spot" aria-hidden />
      <div className="relative h-44 overflow-hidden border-b border-white/[0.06] bg-[radial-gradient(ellipse_at_50%_100%,rgba(30,120,220,0.28),transparent_70%)] sm:h-48">
        <div className="absolute inset-0 s7-grid opacity-40" aria-hidden />
        <div className="absolute inset-0 transition-transform duration-700 [transition-timing-function:var(--ease-out-expo)] group-hover:scale-[1.06]">
          <SolutionArt kind={item.key} />
        </div>
        <span className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl border border-s7-sky-blue/30 bg-s7-abyss/70 text-s7-sky-blue shadow-[0_0_20px_-4px_rgba(89,213,255,0.7)] backdrop-blur">
          <SolutionIcon kind={item.key} />
        </span>
        <span className="absolute right-4 top-3 font-tech text-[0.65rem] text-s7-silver-metal/60">{item.n}</span>
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-s7-white">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-s7-silver-light/60">{item.short}</p>
        <div className="h-5" aria-hidden />

        <div
          id={`sol-${item.key}`}
          className={`grid transition-[grid-template-rows] duration-500 [transition-timing-function:var(--ease-out-expo)] ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <p className="pt-3 text-sm leading-relaxed text-s7-silver-light/75">{item.desc}</p>
            <a
              href="#contact"
              onClick={() => preselectProjectType(PROJECT_TYPE_INDEX[item.key])}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-s7-sky-blue hover:text-s7-white"
            >
              {cta} <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`sol-${item.key}`}
          aria-label={item.title}
          className="mt-auto ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-s7-silver-light transition-all duration-300 hover:border-s7-sky-blue hover:bg-s7-electric-blue/20 hover:text-s7-white"
        >
          <span aria-hidden className={`transition-transform duration-300 ${open ? "rotate-90" : ""}`}>
            →
          </span>
        </button>
      </div>
    </article>
  );
}

export default function Solutions() {
  const { locale } = useLanguage();
  const t = content[locale].solutions;

  return (
    <section id="solutions" className="relative scroll-mt-20 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[40rem]"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(30,120,220,0.12), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title1} accent={t.titleAccent} intro={t.intro} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, i) => (
            <SolutionCard key={item.key} item={item} cta={t.contactCta} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
