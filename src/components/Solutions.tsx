const SOLUTIONS = [
  {
    n: "01",
    title: "Applications Web & Mobile",
    desc: "Conception et développement d'applications sur mesure, pensées pour la performance et l'expérience utilisateur, du prototype au déploiement.",
  },
  {
    n: "02",
    title: "Intelligence Artificielle",
    desc: "Intégration de l'IA dans des produits concrets : automatisation, assistance, analyse de données et outils intelligents adaptés aux réalités locales.",
  },
  {
    n: "03",
    title: "Solutions Digitales",
    desc: "Outils numériques pensés pour les entreprises et institutions : gestion, paiement, coordination des équipes et pilotage de l'activité.",
  },
  {
    n: "04",
    title: "Télécommunications & Fibre Optique",
    desc: "Déploiement et accompagnement technique sur des projets d'infrastructure télécoms et de connectivité fibre optique.",
  },
  {
    n: "05",
    title: "Communication & Écrans LED",
    desc: "Exploitation d'écrans LED et solutions de communication digitale pour donner de la visibilité aux marques et aux institutions.",
  },
  {
    n: "06",
    title: "Plateformes Numériques",
    desc: "Création et déploiement de plateformes complètes, de la marketplace à l'outil métier, avec une architecture pensée pour durer.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-s7-sky-blue">
            Nos solutions
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-s7-white">
            Une expertise technologique complète
          </h2>
          <p className="mt-5 text-s7-silver-light/70 leading-relaxed">
            De l&apos;application mobile à l&apos;infrastructure télécoms,
            SOUN7 couvre l&apos;ensemble de la chaîne technologique
            nécessaire à la transformation digitale.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {SOLUTIONS.map((s) => (
            <div
              key={s.n}
              className="group relative bg-s7-black p-8 sm:p-9 transition-colors duration-300 hover:bg-white/[0.03]"
            >
              <div
                className="absolute inset-x-0 top-0 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                style={{
                  background:
                    "linear-gradient(90deg, var(--s7-sky-blue), var(--s7-electric-blue))",
                }}
              />
              <span className="font-tech text-xs text-s7-silver-metal/60">
                {s.n}
              </span>
              <h3 className="mt-5 font-display font-semibold text-lg text-s7-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-s7-silver-light/65">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
