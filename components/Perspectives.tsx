type Item = {
  name: string;
  tag: string;
  description: string;
};

const items: Item[] = [
  {
    name: "MIND BENIN",
    tag: "Projet stratégique",
    description:
      "SOUN SET SARL travaille actuellement sur MIND BENIN, un projet de grande envergure conçu dès le départ pour être exportable au-delà du Bénin. Les détails seront communiqués à mesure que le projet avance.",
  },
  {
    name: "AMAZONE PARC",
    tag: "Partenariat technologique",
    description:
      "AMAZONE PARC est un projet porté par le fondateur de SOUN7. SOUN SET SARL y intervient comme partenaire technologique, actuellement en développement.",
  },
  {
    name: "KONDO",
    tag: "Participation · Streaming vidéo",
    description:
      "Le fondateur de SOUN7 est actionnaire à hauteur de 25 % de KONDO, une application de streaming vidéo dont la mise en ligne s'effectue en partenariat avec AFRICA SPARK CORPORATION.",
  },
];

export default function Perspectives() {
  return (
    <section id="perspectives" className="relative bg-black-soft py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <span className="bridge-rule text-xs font-semibold uppercase tracking-[0.28em] text-sky">
          Projets en cours &amp; partenariats
        </span>
        <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold italic text-white sm:text-4xl lg:text-5xl">
          Ce qui se construit en ce moment
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-silver-light/70 sm:text-lg">
          Au-delà de ses propres produits, SOUN7 collabore avec d&rsquo;autres
          porteurs de projets et fait avancer, en parallèle, des initiatives
          de plus grande ampleur.
        </p>

        <div className="mt-14 divide-y divide-silver/10 border-y border-silver/10">
          {items.map((item) => (
            <div
              key={item.name}
              className="grid gap-3 py-8 sm:grid-cols-[220px_1fr] sm:gap-8"
            >
              <div>
                <h3 className="font-display text-xl font-bold italic text-white">
                  {item.name}
                </h3>
                <span className="mt-2 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-sky/80">
                  {item.tag}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-silver-light/70 sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
