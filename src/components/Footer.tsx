"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import Brand from "@/components/Brand";

export default function Footer() {
  const { locale } = useLanguage();
  const t = content[locale];

  const links = [
    { id: "accueil", label: t.nav.home },
    { id: "solutions", label: t.nav.solutions },
    { id: "realisations", label: t.nav.realisations },
    { id: "a-propos", label: t.nav.apropos },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <footer className="relative border-t border-white/[0.07] bg-s7-abyss py-10">
      <span aria-hidden className="absolute inset-x-0 -top-px mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-s7-sky-blue/60 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 sm:px-8 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center gap-1 lg:items-start">
          <Brand size="sm" />
          <span className="text-xs text-s7-silver-metal/60">{t.footer.brandNote}</span>
        </div>

        <nav aria-label="Pied de page" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <Link key={l.id} href={`/#${l.id}`} className="text-xs text-s7-silver-light/60 hover:text-s7-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <p className="text-center text-xs text-s7-silver-metal/50 lg:text-right">
            {t.footer.rights(new Date().getFullYear())}
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label={t.footer.top}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-s7-electric-blue text-s7-white shadow-[0_0_24px_-4px_rgba(30,120,220,0.9)] transition-transform hover:-translate-y-1"
          >
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
