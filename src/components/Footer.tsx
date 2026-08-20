import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <Image
            src="/brand/soun7_icone_couleur.png"
            alt="SOUN7"
            width={26}
            height={25}
            className="h-6 w-auto"
          />
          <span className="font-display font-extrabold italic text-s7-white">
            SOUN<span className="text-s7-electric-blue">7</span>
          </span>
          <span className="hidden sm:inline text-s7-silver-metal/40">|</span>
          <span className="text-xs text-s7-silver-metal/60">
            Une marque de SOUN SET SARL
          </span>
        </div>

        <p className="text-xs text-s7-silver-metal/50 text-center">
          © {new Date().getFullYear()} SOUN SET SARL — Cotonou, Bénin. Tous droits réservés.
        </p>

        <p className="font-slogan italic text-xs text-s7-silver-metal/60">
          Connecting Vision to Reality
        </p>
      </div>
    </footer>
  );
}
