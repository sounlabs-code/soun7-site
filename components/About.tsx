import Image from "next/image";

export default function About() {
  return (
    <section id="apropos" className="relative overflow-hidden bg-black-soft py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
        <div className="relative order-2 flex items-center justify-center lg:order-1">
          <div className="absolute h-72 w-72 rounded-full bg-electric/15 blur-[100px]" />
          <div className="relative rounded-[2rem] border border-silver/15 bg-gradient-to-b from-white/[0.04] to-transparent p-12">
            <Image
              src="/logo/soun7_icone_couleur.png"
              alt="Monogramme SOUN7"
              width={400}
              height={400}
              className="mx-auto w-full max-w-[220px] object-contain"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="bridge-rule text-xs font-semibold uppercase tracking-[0.28em] text-sky">
            À propos
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold italic text-white sm:text-4xl lg:text-5xl">
            SOUN7, la marque numérique de SOUN SET SARL
          </h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-silver-light/75 sm:text-lg">
            <p>
              SOUN7 est la signature technologique de SOUN SET SARL, une
              entreprise tournée vers l&rsquo;innovation numérique et la
              création de solutions technologiques pour les entreprises,
              institutions et particuliers.
            </p>
            <p>
              Notre ambition est simple : concevoir des outils qui
              fonctionnent réellement, pensés pour le terrain autant que
              pour l&rsquo;avenir, avec une vision à la fois africaine et
              internationale.
            </p>
            <p>
              Du développement logiciel aux infrastructures télécoms, en
              passant par l&rsquo;intelligence artificielle et la
              communication digitale, SOUN7 accompagne chaque projet avec la
              même exigence : celle de l&rsquo;innovation qui prend vie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
