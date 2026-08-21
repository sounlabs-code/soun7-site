"use client";

import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function Approche() {
  const { locale } = useLanguage();
  const t = content[locale].approche;

  return (
    <section
      id="approche"
      className="relative py-28 sm:py-36 bg-white/[0.02] border-y border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-s7-sky-blue">
            {t.eyebrow}
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-s7-white">
            {t.title}
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((s, i) => (
            <div
              key={s.n}
              className={`relative p-8 sm:p-9 ${
                i !== 0 ? "lg:border-l border-white/10" : ""
              } ${i % 2 === 1 ? "sm:border-l border-white/10 lg:border-l" : ""}`}
            >
              <span className="font-tech text-3xl sm:text-4xl text-transparent [-webkit-text-stroke:1px_var(--s7-silver-metal)]">
                {s.n}
              </span>
              <h3 className="mt-6 font-display font-bold text-xl text-s7-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-s7-silver-light/65">
                {s.desc}
              </p>
              {i < t.steps.length - 1 && (
                <span
                  aria-hidden
                  className="hidden lg:block absolute top-9 right-0 translate-x-1/2 text-s7-silver-metal/40"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
