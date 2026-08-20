const STEPS = [
  {
    n: "01",
    title: "Comprendre",
    desc: "Nous prenons le temps d'écouter le besoin réel, le contexte métier et les contraintes du terrain avant toute proposition technique.",
  },
  {
    n: "02",
    title: "Concevoir",
    desc: "Nous structurons une solution claire : architecture, parcours utilisateur et périmètre fonctionnel, validés avant le développement.",
  },
  {
    n: "03",
    title: "Développer",
    desc: "Nous construisons la solution avec une exigence de qualité et de sécurité, en gardant le client informé à chaque étape.",
  },
  {
    n: "04",
    title: "Déployer",
    desc: "Nous mettons en production, formons les équipes et assurons le suivi nécessaire pour que la solution vive dans la durée.",
  },
];

export default function Approche() {
  return (
    <section id="approche" className="relative py-28 sm:py-36 bg-white/[0.02] border-y border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-s7-sky-blue">
            Notre approche
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-s7-white">
            Un processus en quatre étapes
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className={`relative p-8 sm:p-9 ${
                i !== 0 ? "lg:border-l border-white/10" : ""
              } ${i % 2 === 1 ? "sm:border-l border-white/10 lg:border-l" : ""}`}
            >
              <span className="font-tech text-3xl sm:text-4xl text-transparent [-webkit-text-stroke:1px_var(--s7-silver-metal)]">
                {s.n}
              </span>
              <h3 className="mt-6 font-display font-bold text-xl text-s7-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-s7-silver-light/65">
                {s.desc}
              </p>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="hidden lg:block absolute top-9 right-0 translate-x-1/2 text-s7-silver-metal/40"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
