"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function Realisations() {
  const { locale } = useLanguage();
  const t = content[locale].realisations;

  return (
    <section
      id="realisations"
      className="relative py-28 sm:py-36 bg-white/[0.02] border-y border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-s7-sky-blue">
              {t.eyebrow}
            </span>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-s7-white">
              {t.title}
            </h2>
          </div>
          <p className="max-w-sm text-sm text-s7-silver-light/60 leading-relaxed">
            {t.intro}
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.map((p) => {
            const inner = (
              <>
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle, var(--s7-electric-blue), transparent 70%)",
                  }}
                />
                <div className="relative">
                  <span className="text-xs font-semibold uppercase tracking-wide text-s7-silver-metal">
                    {p.category}
                  </span>
                  <h3 className="mt-3 font-display font-bold italic text-2xl text-s7-white">
                    {p.name}
                  </h3>
                </div>
                <p className="relative mt-6 text-sm leading-relaxed text-s7-silver-light/65">
                  {p.desc}
                </p>
                {p.slug && (
                  <span className="relative mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-s7-sky-blue">
                    {locale === "fr" ? "En savoir plus" : "Learn more"}
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                )}
              </>
            );

            const className =
              "group relative rounded-2xl border border-white/10 p-8 flex flex-col justify-between min-h-[280px] overflow-hidden transition-colors duration-300 hover:border-s7-electric-blue/50";

            return p.slug ? (
              <Link key={p.name} href={`/realisations/${p.slug}`} className={className}>
                {inner}
              </Link>
            ) : (
              <article key={p.name} className={className}>
                {inner}
              </article>
            );
          })}

          <article className="relative rounded-2xl border border-dashed border-white/15 p-8 flex flex-col items-start justify-center min-h-[280px] text-s7-silver-light/50">
            <span className="font-tech text-sm">+</span>
            <p className="mt-3 text-sm leading-relaxed">{t.more}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
