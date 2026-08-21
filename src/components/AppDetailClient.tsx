"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { appsContent, localizedApp } from "@/lib/apps-content";

export default function AppDetailClient({ slug }: { slug: string }) {
  const { locale } = useLanguage();
  const t = content[locale].appDetail;
  const app = localizedApp(appsContent[slug], locale);

  return (
    <>
      <Header />
      <main className="pt-32 pb-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Link
            href="/#realisations"
            className="inline-flex items-center gap-2 text-sm text-s7-silver-light/60 hover:text-s7-white transition-colors"
          >
            <span aria-hidden>←</span>
            {t.back}
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-s7-silver-metal">
              {app.category}
            </span>
            <span className="rounded-full border border-s7-electric-blue/40 bg-s7-electric-blue/10 px-3 py-1 text-xs font-semibold text-s7-sky-blue">
              {app.status}
            </span>
          </div>

          <h1 className="mt-5 font-display font-extrabold italic text-4xl sm:text-5xl lg:text-6xl text-s7-white">
            {app.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-s7-silver-light/70 leading-relaxed">
            {app.tagline}
          </p>

          {/* Screens */}
          <div className="mt-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-s7-sky-blue">
              {t.screensLabel}
            </span>
            <div className="mt-5 flex gap-5 overflow-x-auto pb-4 -mx-5 px-5 sm:mx-0 sm:px-0 snap-x snap-mandatory">
              {app.screens.map((screen) => (
                <figure
                  key={screen.src}
                  className="shrink-0 w-[220px] sm:w-[260px] snap-start"
                >
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-black">
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      width={900}
                      height={1820}
                      className="w-full h-auto"
                      sizes="260px"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs leading-relaxed text-s7-silver-light/55">
                    {screen.alt}
                  </figcaption>
                </figure>
              ))}

              <div className="shrink-0 w-[220px] sm:w-[260px] snap-start flex items-center justify-center rounded-[1.5rem] border border-dashed border-white/15 text-center px-5">
                <p className="text-xs text-s7-silver-light/45">
                  {t.videoSoon}
                </p>
              </div>
            </div>
          </div>

          {/* Problem / Solution */}
          <div className="mt-16 grid sm:grid-cols-2 gap-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-s7-sky-blue">
                {t.problemLabel}
              </span>
              <p className="mt-4 text-base leading-relaxed text-s7-silver-light/75">
                {app.problem}
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-s7-sky-blue">
                {t.solutionLabel}
              </span>
              <p className="mt-4 text-base leading-relaxed text-s7-silver-light/75">
                {app.solution}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-s7-sky-blue">
              {t.featuresLabel}
            </span>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-10 gap-y-5">
              {app.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 h-1.5 w-1.5 rounded-full bg-s7-electric-blue"
                  />
                  <span className="text-sm leading-relaxed text-s7-silver-light/70">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-20 rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-s7-white">
              {t.ctaTitle}
            </h2>
            <p className="mt-3 text-sm text-s7-silver-light/65">
              {t.ctaText}
            </p>
            <Link
              href="/#contact"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-s7-electric-blue px-7 py-3.5 text-sm font-semibold text-s7-white hover:brightness-110 transition-all duration-300"
            >
              {t.ctaButton}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
