const solutions = [
  {
    title: "Applications Web & Mobile",
    description:
      "Conception et développement d'applications sur mesure, pensées pour la performance et l'usage réel de vos utilisateurs.",
    icon: (
      <path
        d="M8 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm2 14h4M6 8h12"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Intelligence Artificielle",
    description:
      "Intégration de briques d'IA dans vos produits pour automatiser, analyser et enrichir l'expérience de vos clients.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" strokeWidth="1.6" />
        <path
          d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    title: "Solutions Digitales",
    description:
      "Des plateformes métier qui digitalisent vos processus internes et vos parcours clients, de bout en bout.",
    icon: (
      <path
        d="M4 19h16M6 19V9l6-4 6 4v10M10 19v-6h4v6"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Télécommunications & Fibre Optique",
    description:
      "Étude, déploiement et supervision d'infrastructures télécoms et fibre optique pour opérateurs et entreprises.",
    icon: (
      <path
        d="M12 2v6M8.5 5.5a5 5 0 0 0 0 7l3.5 3.5 3.5-3.5a5 5 0 0 0 0-7M5 9a9 9 0 0 0 0 6M19 9a9 9 0 0 1 0 6M12 15v7"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Communication & Écrans LED",
    description:
      "Exploitation d'écrans LED et solutions de communication digitale pour donner de la visibilité à votre marque.",
    icon: (
      <path
        d="M4 5h16v11H4zM9 20h6M12 16v4"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Plateformes Numériques",
    description:
      "Création et déploiement de plateformes évolutives, prêtes à accompagner la croissance de vos activités.",
    icon: (
      <path
        d="M4 7a8 4 0 0 0 16 0 8 4 0 1 0-16 0ZM4 7v10a8 4 0 0 0 16 0V7M4 12a8 4 0 0 0 16 0"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    ),
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative bg-black py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="bridge-rule text-xs font-semibold uppercase tracking-[0.28em] text-sky">
            Nos solutions
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold italic text-white sm:text-4xl lg:text-5xl">
            Une expertise technologique complète
          </h2>
          <p className="mt-5 text-base leading-relaxed text-silver-light/70 sm:text-lg">
            SOUN7 réunit, sous une même signature, les compétences
            nécessaires pour concevoir, construire et déployer des
            technologies destinées aux entreprises, institutions et
            particuliers.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, i) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl card-border bg-gradient-to-b from-white/[0.03] to-transparent p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-electric/40 hover:from-electric/[0.08]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-electric/0 blur-2xl transition-colors duration-500 group-hover:bg-electric/20" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-silver/20 text-sky transition-colors duration-500 group-hover:border-sky/50 group-hover:text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  {item.icon}
                </svg>
              </div>
              <h3 className="relative mt-6 font-display text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-silver-light/65">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
