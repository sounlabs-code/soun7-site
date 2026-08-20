import Image from "next/image";
import { navLinks, socialLinks } from "@/lib/nav";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-silver/10 bg-black-soft pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/logo/soun7_icone_blanc.png"
                alt="SOUN7"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="font-display text-lg font-extrabold italic text-white">
                SOUN7
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-silver-light/60">
              La marque numérique de SOUN SET SARL — conception et
              exploitation de solutions technologiques pour l&rsquo;Afrique
              et au-delà.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-silver-light/50">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-silver-light/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-silver-light/50">
              Réseaux
            </h4>
            <ul className="mt-5 space-y-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-sm text-silver-light/65 transition-colors hover:text-white"
                  >
                    {social.label}
                    {social.placeholder && (
                      <span className="ml-1.5 text-xs text-silver/35">
                        (lien à venir)
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-silver/10 pt-8 text-xs text-silver-light/45 sm:flex-row">
          <p>© {year} SOUN SET SARL (SOUN7). Tous droits réservés.</p>
          <p className="font-slogan italic text-silver-light/40">
            Là où l&rsquo;innovation prend vie.
          </p>
        </div>
      </div>
    </footer>
  );
}
