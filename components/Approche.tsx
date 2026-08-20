const steps = [
  {
    n: "01",
    title: "Comprendre",
    description:
      "Nous prenons le temps d'étudier votre contexte, vos utilisateurs et vos objectifs avant toute proposition technique.",
  },
  {
    n: "02",
    title: "Concevoir",
    description:
      "Nous structurons une solution claire : architecture, parcours, priorités — pour que chaque choix ait un sens.",
  },
  {
    n: "03",
    title: "Développer",
    description:
      "Nous construisons la solution avec des technologies modernes, en gardant la qualité et la sécurité au centre.",
  },
  {
    n: "04",
    title: "Déployer",
    description:
      "Nous mettons la solution en production et accompagnons son exploitation, son évolution et sa montée en charge.",
  },
];

export default function Approche() {
  return (
    <section id="approche" className="relative bg-black py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <span className="bridge-rule text-xs font-semibold uppercase tracking-[0.28em] text-sky">
          Notre approche
        </span>
        <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold italic text-white sm:text-4xl lg:text-5xl">
          Un processus en quatre étapes
        </h2>

        <div className="relative mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-[18px] hidden h-px bg-gradient-to-r from-transparent via-silver/20 to-transparent lg:block" />
          {steps.map((step) => (
            <div key={step.n} className="relative">
              <span
                className="font-display text-4xl font-extrabold italic text-transparent"
                style={{ WebkitTextStroke: "1.5px #b0b7bd" }}
              >
                {step.n}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-silver-light/65">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
