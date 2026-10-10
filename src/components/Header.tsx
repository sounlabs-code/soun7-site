"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import Brand from "@/components/Brand";

const SECTIONS = ["accueil", "solutions", "realisations", "approche", "a-propos", "contact"] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("accueil");
  const { locale, toggleLocale } = useLanguage();
  const pathname = usePathname();
  const t = content[locale];
  const onHome = pathname === "/";

  const navLinks = [
    { id: "accueil", label: t.nav.home },
    { id: "solutions", label: t.nav.solutions },
    { id: "realisations", label: t.nav.realisations },
    { id: "approche", label: t.nav.approche },
    { id: "a-propos", label: t.nav.apropos },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy: highlight the section currently in view.
  useEffect(() => {
    if (!onHome) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [onHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.07] bg-s7-abyss/75 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/#accueil" aria-label="SOUN7 — Accueil" className="shrink-0">
          <Brand />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = onHome && active === link.id;
            return (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-s7-white" : "text-s7-silver-light/65 hover:text-s7-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-gradient-to-r from-s7-electric-blue to-s7-sky-blue shadow-[0_0_8px_#59d5ff] transition-transform duration-500 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/#contact" className="s7-btn s7-btn-primary !px-5 !py-2.5">
            {t.nav.cta}
          </Link>
          <button
            type="button"
            onClick={toggleLocale}
            aria-label="Changer de langue / Switch language"
            className="rounded-full border border-white/15 px-3 py-2 font-tech text-[0.7rem] font-semibold text-s7-silver-light/80 transition-colors hover:border-s7-sky-blue hover:text-s7-white"
          >
            {locale === "fr" ? "FR" : "EN"} <span className="text-s7-silver-metal/50">/ {locale === "fr" ? "EN" : "FR"}</span>
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label="Changer de langue / Switch language"
            className="rounded-full border border-white/15 px-3 py-1.5 font-tech text-xs font-semibold text-s7-silver-light/80"
          >
            {locale === "fr" ? "EN" : "FR"}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.menuLabel}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          >
            <span className={`block h-px w-6 bg-s7-white transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-s7-white transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="menu-mobile"
          className="s7-glass mx-4 mt-3 flex flex-col gap-1 rounded-2xl !bg-s7-deep/95 px-4 py-4 lg:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`/#${link.id}`}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-s7-silver-light hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="s7-btn s7-btn-primary mt-2"
          >
            {t.nav.cta}
          </Link>
        </div>
      )}
    </header>
  );
}
