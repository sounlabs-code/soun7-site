"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { locale, toggleLocale } = useLanguage();
  const t = content[locale];

  const navLinks = [
    { href: "/#solutions", label: t.nav.solutions },
    { href: "/#realisations", label: t.nav.realisations },
    { href: "/#pourquoi", label: t.nav.pourquoi },
    { href: "/#approche", label: t.nav.approche },
    { href: "/#a-propos", label: t.nav.apropos },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-s7-black/85 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between gap-4">
        <Link href="/#accueil" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/brand/soun7_icone_couleur.png"
            alt="SOUN7"
            width={40}
            height={38}
            className="h-9 w-auto"
            priority
          />
          <span className="font-display font-extrabold italic tracking-tight text-lg sm:text-xl text-s7-white">
            SOUN<span className="text-s7-electric-blue">7</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-s7-silver-light/80 hover:text-s7-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-s7-sky-blue transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label="Changer de langue / Switch language"
            className="inline-flex items-center rounded-full border border-white/15 text-xs font-semibold overflow-hidden"
          >
            <span
              className={`px-3 py-1.5 transition-colors ${
                locale === "fr"
                  ? "bg-s7-electric-blue text-s7-white"
                  : "text-s7-silver-light/60"
              }`}
            >
              FR
            </span>
            <span
              className={`px-3 py-1.5 transition-colors ${
                locale === "en"
                  ? "bg-s7-electric-blue text-s7-white"
                  : "text-s7-silver-light/60"
              }`}
            >
              EN
            </span>
          </button>

          <Link
            href="/#contact"
            className="inline-flex items-center rounded-full border border-s7-electric-blue/60 bg-s7-electric-blue/10 px-5 py-2.5 text-sm font-semibold text-s7-white hover:bg-s7-electric-blue hover:border-s7-electric-blue transition-colors duration-300"
          >
            {t.nav.cta}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label="Changer de langue / Switch language"
            className="inline-flex items-center rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-s7-silver-light/80"
          >
            {locale === "fr" ? "EN" : "FR"}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.menuLabel}
            aria-expanded={open}
            className="flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          >
            <span
              className={`block h-px w-6 bg-s7-white transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-s7-white transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mx-5 mt-4 rounded-2xl border border-white/10 bg-s7-black/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-s7-silver-light"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-s7-electric-blue px-5 py-3 text-sm font-semibold text-s7-white"
          >
            {t.nav.cta}
          </Link>
        </div>
      )}
    </header>
  );
}
