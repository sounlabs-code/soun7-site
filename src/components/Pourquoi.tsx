import Image from "next/image";

const POINTS = [
  {
    title: "Innovation",
    desc: "Une veille technologique constante pour intégrer les bonnes idées au bon moment, sans effet de mode.",
  },
  {
    title: "Expertise technologique",
    desc: "Une maîtrise de bout en bout, du développement mobile à l'infrastructure télécoms.",
  },
  {
    title: "Solutions sur mesure",
    desc: "Chaque projet part d'un besoin réel, pas d'un modèle générique appliqué par défaut.",
  },
  {
    title: "Vision africaine et internationale",
    desc: "Des solutions conçues depuis le Bénin et le Gabon, avec des standards internationaux.",
  },
  {
    title: "Accompagnement de bout en bout",
    desc: "De l'idée au déploiement, puis dans la durée : maintenance, évolution et support.",
  },
];

export default function Pourquoi() {
  return (
    <section id="pourquoi" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm aspect-[4/5] rounded-3xl border border-white/10 overflow-hidden">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  "linear-gradient(160deg, var(--s7-night-blue) 0%, #000 60%)",
              }}
            />
            <div className="absolute inset-0 s7-noise opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/brand/soun7_icone_couleur.png"
                alt="Icône SOUN7"
                width={180}
                height={172}
                className="w-32 sm:w-40 h-auto opacity-90"
              />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-s7-sky-blue">
            Pourquoi SOUN7 ?
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-s7-white max-w-lg">
            Un partenaire technologique, pas un simple prestataire
          </h2>

          <dl className="mt-12 space-y-8">
            {POINTS.map((p, i) => (
              <div key={p.title} className="flex gap-5">
                <span className="font-tech text-sm text-s7-electric-blue pt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <dt className="font-display font-semibold text-s7-white">
                    {p.title}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-s7-silver-light/65">
                    {p.desc}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
