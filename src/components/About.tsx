"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function About() {
  const { locale } = useLanguage();
  const t = content[locale].about;

  return (
    <section id="a-propos" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-s7-sky-blue">
          {t.eyebrow}
        </span>
        <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-s7-white">
          {t.title}
        </h2>
        <p className="mt-8 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-s7-silver-light/70">
          {t.p1}
        </p>
        <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-s7-silver-light/70">
          {t.p2}
        </p>
        <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-s7-silver-light/70">
          {t.p3}
        </p>

        <div className="mt-14 flex items-center justify-center gap-3 opacity-80">
          <Image
            src="/brand/soun7_icone_couleur.png"
            alt="SOUN7"
            width={28}
            height={27}
            className="h-6 w-auto"
          />
          <span className="font-slogan italic text-s7-silver-metal">
            {t.tagline}
          </span>
        </div>
      </div>
    </section>
  );
}
