const reasons = [
  {
    title: "Innovation",
    description:
      "Une veille technologique constante pour proposer des solutions actuelles, jamais figées dans les standards d'hier.",
  },
  {
    title: "Expertise technologique",
    description:
      "Un socle technique solide, du développement logiciel aux infrastructures télécoms, réuni sous un même toit.",
  },
  {
    title: "Solutions sur mesure",
    description:
      "Chaque produit est pensé pour un contexte précis : votre marché, vos utilisateurs, vos contraintes réelles.",
  },
  {
    title: "Vision africaine et internationale",
    description:
      "Des solutions ancrées dans les réalités du continent, conçues avec des standards de qualité internationaux.",
  },
  {
    title: "Accompagnement de bout en bout",
    description:
      "De l'idée initiale à l'exploitation en production, une même équipe vous suit tout au long du projet.",
  },
];

export default function Pourquoi() {
  return (
    <section id="pourquoi" className="relative overflow-hidden bg-black-soft py-28">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-electric/[0.06] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <span className="bridge-rule text-xs font-semibold uppercase tracking-[0.28em] text-sky">
          Pourquoi SOUN7
        </span>
        <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold italic text-white sm:text-4xl lg:text-5xl">
          Un partenaire technologique, pas seulement un prestataire
        </h2>

        <div className="mt-16 grid gap-x-10 gap-y-12 lg:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-5">
              <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-sky to-electric" />
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-silver-light/65 sm:text-base">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
