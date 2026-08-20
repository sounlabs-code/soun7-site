// Pour ajouter un nouveau projet : ajouter un objet à ce tableau.
// "status" affiche un badge ("En ligne" / "En développement") — à ajuster selon l'avancement réel.
type Project = {
  name: string;
  category: string;
  description: string;
  status: string;
};

const projects: Project[] = [
  {
    name: "Bénin Explore",
    category: "Application mobile · Tourisme",
    description:
      "Guide touristique du Bénin : suggestions de proximité, itinéraires GPS et espaces professionnels pour restaurants et agences.",
    status: "En développement",
  },
  {
    name: "DISPO",
    category: "Marketplace · Afrique de l'Ouest & Centrale",
    description:
      "Plateforme d'annonces multi-pays pensée pour l'espace francophone, avec paiement intégré et modules dédiés aux professionnels.",
    status: "En développement",
  },
  {
    name: "RACINES",
    category: "Application mobile · Patrimoine",
    description:
      "Application dédiée à la mémoire familiale et au patrimoine culturel, conçue pour préserver et transmettre les héritages.",
    status: "En développement",
  },
  {
    name: "Autres projets SOUN7",
    category: "Écosystème numérique",
    description:
      "D'autres solutions sont en cours de conception au sein de l'écosystème SOUN7. Cet espace est prévu pour s'enrichir au fil des lancements.",
    status: "À venir",
  },
];

export default function Realisations() {
  return (
    <section id="realisations" className="relative bg-black py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="bridge-rule text-xs font-semibold uppercase tracking-[0.28em] text-sky">
              Nos réalisations
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold italic text-white sm:text-4xl lg:text-5xl">
              Des idées transformées en produits
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative overflow-hidden rounded-2xl card-border bg-gradient-to-br from-white/[0.03] to-transparent p-9 transition-all duration-500 hover:border-electric/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-silver/60">
                    {project.category}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold italic text-white">
                    {project.name}
                  </h3>
                </div>
                <span className="shrink-0 rounded-full border border-silver/25 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-silver-light/70">
                  {project.status}
                </span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-silver-light/65">
                {project.description}
              </p>
              <div className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-silver/15 to-transparent transition-colors duration-500 group-hover:via-electric/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
