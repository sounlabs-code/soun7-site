"use client";

import { useCallback, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import HeroLogo from "@/components/fx/HeroLogo";
import Skyline from "@/components/fx/Skyline";

function Words({ text, className = "", wordClass = "" }: { text: string; className?: string; wordClass?: string }) {
  // The gradient must sit on each word: background-clip:text does not paint
  // through transformed inline-block children.
  return (
    <span className={`block ${className}`}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="s7-word">
          <span data-word className={wordClass}>{w}</span>
          {" "}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const { locale } = useLanguage();
  const t = content[locale].hero;
  const root = useRef<HTMLElement>(null);
  const textTl = useRef<gsap.core.Timeline | null>(null);
  const played = useRef(false);

  // Text intro is prepared paused, then released when the S7 has formed.
  useEffect(() => {
    if (prefersReducedMotion() || !root.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });
      tl.fromTo(
        "[data-hero-badge]",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" },
      )
        .fromTo(
          "[data-word]",
          { yPercent: 135, y: 0, rotate: 4 },
          { yPercent: 0, y: 0, rotate: 0, duration: 1.1, ease: "expo.out", stagger: 0.06 },
          "<0.1",
        )
        .fromTo(
          "[data-hero-fade]",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1, ease: "expo.out", stagger: 0.12 },
          "<0.35",
        );
      textTl.current = tl;

      // Cinematic light beam crossing the dark before the reveal.
      gsap.fromTo(
        "[data-beam]",
        { xPercent: -160 },
        { xPercent: 620, duration: 3.2, ease: "power2.inOut", delay: 0.2 },
      );
      gsap.fromTo("[data-hero-bg]", { opacity: 0 }, { opacity: 1, duration: 2.4, ease: "power2.out" });

      // Leaving the hero: the scene recedes into depth.
      gsap.to("[data-hero-visual]", {
        yPercent: 18,
        scale: 0.9,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to("[data-hero-copy]", {
        yPercent: -12,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "35% top", end: "bottom top", scrub: true },
      });
    }, root);

    // Safety net: never leave the title hidden if the logo never "forms".
    const fallback = window.setTimeout(() => {
      if (!played.current) {
        played.current = true;
        textTl.current?.play();
      }
    }, 3800);

    return () => {
      window.clearTimeout(fallback);
      ctx.revert();
    };
  }, []);

  const onFormed = useCallback(() => {
    if (played.current) return;
    played.current = true;
    textTl.current?.play();
  }, []);

  return (
    <section
      ref={root}
      id="accueil"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24"
    >
      {/* Atmosphere */}
      <div data-hero-bg className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 72% 40%, rgba(30,120,220,0.32), transparent 65%), radial-gradient(ellipse 50% 40% at 15% 85%, rgba(123,92,255,0.14), transparent 70%), linear-gradient(180deg, #02040b 0%, #04112a 55%, #02040b 100%)",
          }}
        />
        <div className="absolute inset-0 s7-noise opacity-30" />
        <Skyline className="absolute bottom-0 left-0 h-[34%] w-full opacity-45" />
        {/* Perspective floor grid */}
        <div className="absolute inset-x-[-20%] bottom-[-10%] h-[45%] [perspective:600px]">
          <div className="s7-grid h-full w-full [transform:rotateX(62deg)] origin-bottom opacity-60" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-s7-abyss to-transparent" />
        <div data-beam className="s7-beam" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-6 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div data-hero-copy className="relative z-10 order-2 lg:order-1">
          <div
            data-hero-badge
            className="inline-flex items-center gap-2 rounded-full border border-s7-sky-blue/25 bg-s7-electric-blue/10 px-4 py-1.5 font-tech text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-s7-sky-blue"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-s7-sky-blue shadow-[0_0_10px_#59d5ff]" />
            {t.badge}
          </div>

          <h1 className="mt-6 font-display font-extrabold leading-[1.02] tracking-tight text-[2.7rem] sm:text-6xl lg:text-[4.6rem]">
            <Words text={t.title1} className="text-s7-white" />
            <Words text={t.title2} wordClass="s7-gradient-text" />
          </h1>

          <p
            data-hero-fade
            className="mt-6 max-w-xl text-base leading-relaxed text-s7-silver-light/75 sm:text-lg"
          >
            {t.paragraph}
          </p>

          <div data-hero-fade className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#solutions" className="s7-btn s7-btn-primary">
              {t.ctaPrimary}
              <span aria-hidden>→</span>
            </a>
            <a href="#contact" className="s7-btn s7-btn-ghost">
              {t.ctaSecondary}
            </a>
          </div>

          <p data-hero-fade className="mt-7 font-slogan italic text-s7-silver-metal sm:text-lg">
            {t.tagline}
          </p>
        </div>

        <div
          data-hero-visual
          className="relative order-1 mx-auto -mb-6 w-full max-w-[15.5rem] sm:max-w-sm lg:order-2 lg:mb-0 lg:max-w-none"
        >
          <HeroLogo onFormed={onFormed} />
        </div>
      </div>

      <a
        href="#solutions"
        className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] font-tech uppercase tracking-[0.3em] text-s7-silver-metal/70 hover:text-s7-sky-blue sm:flex"
      >
        <span className="relative h-9 w-5 rounded-full border border-current">
          <span className="absolute left-1/2 top-1.5 h-2 w-[2px] -translate-x-1/2 rounded bg-current s7-float" />
        </span>
        {t.scroll}
      </a>
    </section>
  );
}
