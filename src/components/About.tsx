import Image from "next/image";

export default function About() {
  return (
    <section id="a-propos" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-s7-sky-blue">
          À propos
        </span>
        <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-s7-white">
          SOUN7, la marque technologique de SOUN SET SARL
        </h2>
        <p className="mt-8 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-s7-silver-light/70">
          SOUN7 est tournée vers l&apos;innovation numérique et la création
          de solutions technologiques pour les entreprises, les
          institutions et les particuliers. Basée à Cotonou, au Bénin, et
          active sur plusieurs marchés d&apos;Afrique de l&apos;Ouest et
          du Centre, SOUN7 conçoit, développe et déploie des produits
          numériques pensés pour durer : applications, plateformes,
          intelligence artificielle et infrastructures télécoms.
        </p>
        <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-s7-silver-light/70">
          Chaque projet est abordé avec la même exigence : comprendre le
          besoin, concevoir une solution adaptée et accompagner sa mise en
          vie sur le long terme.
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
            Connecting Vision to Reality
          </span>
        </div>
      </div>
    </section>
  );
}
