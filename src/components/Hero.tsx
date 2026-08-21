"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

// Pixel positions echo the dispersing squares of the S7 mark: a trail
// breaking away from the icon, used here as the page's ambient signature.
const PIXELS = [
  { x: "62%", y: "18%", s: 14, dur: 5.2, delay: 0, op: 0.5 },
  { x: "68%", y: "12%", s: 9, dur: 6.1, delay: 0.4, op: 0.4 },
  { x: "74%", y: "22%", s: 11, dur: 4.8, delay: 0.2, op: 0.6 },
  { x: "80%", y: "15%", s: 7, dur: 7, delay: 0.8, op: 0.35 },
  { x: "70%", y: "30%", s: 16, dur: 5.6, delay: 0.1, op: 0.5 },
  { x: "85%", y: "26%", s: 8, dur: 6.4, delay: 0.6, op: 0.45 },
  { x: "78%", y: "36%", s: 10, dur: 5, delay: 0.3, op: 0.4 },
  { x: "90%", y: "18%", s: 6, dur: 7.5, delay: 1, op: 0.3 },
  { x: "58%", y: "8%", s: 6, dur: 6.8, delay: 0.7, op: 0.3 },
  { x: "82%", y: "44%", s: 12, dur: 5.4, delay: 0.5, op: 0.4 },
];

export default function Hero() {
  const { locale } = useLanguage();
  const t = content[locale].hero;

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 s7-noise opacity-40" />
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[60rem] w-[60rem] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--s7-night-blue) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[40rem] w-[40rem] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--s7-electric-blue) 0%, transparent 70%)",
        }}
      />

      {/* Dispersing pixel trail signature */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        {PIXELS.map((p, i) => (
          <span
            key={i}
            className="s7-pixel absolute rounded-[2px]"
            style={{
              left: p.x,
              top: p.y,
              width: p.s,
              height: p.s,
              background:
                i % 3 === 0
                  ? "var(--s7-sky-blue)"
                  : i % 3 === 1
                  ? "var(--s7-electric-blue)"
                  : "var(--s7-silver-metal)",
              // @ts-expect-error custom css vars
              "--drift-dur": `${p.dur}s`,
              "--drift-delay": `${p.delay}s`,
              "--drift-op": p.op,
              "--drift-x": `${(i % 2 === 0 ? 1 : -1) * 8}px`,
              "--drift-y": `${(i % 2 === 0 ? -1 : 1) * 10}px`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 w-full grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-16">
        <div>
          <div className="s7-reveal inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-s7-silver-metal uppercase">
            {t.badge}
          </div>

          <h1
            className="s7-reveal mt-7 font-display font-extrabold italic leading-[1.05] tracking-tight text-[2.6rem] sm:text-6xl lg:text-[4.2rem]"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-s7-white">{t.title1}</span>
            <span className="s7-gradient-text block">{t.title2}</span>
          </h1>

          <p
            className="s7-reveal mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-s7-silver-light/75"
            style={{ animationDelay: "0.2s" }}
          >
            {t.paragraph}
          </p>

          <div
            className="s7-reveal mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#solutions"
              className="inline-flex items-center justify-center rounded-full bg-s7-white px-7 py-3.5 text-sm font-semibold text-s7-black transition-transform duration-300 hover:scale-[1.03]"
            >
              {t.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-s7-white hover:border-s7-sky-blue hover:text-s7-sky-blue transition-colors duration-300"
            >
              {t.ctaSecondary}
              <span aria-hidden>→</span>
            </a>
          </div>

          <p
            className="s7-reveal mt-6 font-slogan italic text-s7-silver-metal text-sm sm:text-base"
            style={{ animationDelay: "0.35s" }}
          >
            {t.tagline}
          </p>
        </div>

        <div
          className="s7-reveal relative mx-auto w-full max-w-md lg:max-w-none"
          style={{ animationDelay: "0.25s" }}
        >
          <div className="relative aspect-square">
            <div
              className="absolute inset-6 rounded-full opacity-60 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle, var(--s7-electric-blue) 0%, transparent 65%)",
              }}
            />
            <Image
              src="/brand/soun7_icone_couleur.png"
              alt="Symbole SOUN7 — S7"
              fill
              sizes="(max-width: 1024px) 60vw, 32vw"
              className="relative object-contain drop-shadow-[0_20px_60px_rgba(30,120,220,0.35)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
