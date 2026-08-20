import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-black pt-28 pb-20"
    >
      {/* Ambient tech background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-[-50%] opacity-[0.14] animate-drift"
          style={{
            backgroundImage:
              "linear-gradient(rgba(89,213,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(89,213,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/25 blur-[140px] animate-pulse-slow" />
        <div className="absolute right-[8%] top-[18%] h-[280px] w-[280px] rounded-full bg-sky/15 blur-[110px]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-30"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M -50 620 L 260 620 L 340 540 L 640 540 L 720 460 L 1250 460"
            stroke="url(#heroLine)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M -50 220 L 300 220 L 380 300 L 700 300 L 780 220 L 1250 220"
            stroke="url(#heroLine)"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#59D5FF" stopOpacity="0" />
              <stop offset="50%" stopColor="#1E78DC" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#59D5FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 grain opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-10">
        <div className="animate-rise">
          <div className="bridge-rule text-xs font-semibold uppercase tracking-[0.28em] text-sky">
            SOUN SET SARL — Innovation numérique
          </div>

          <h1 className="mt-6 font-display text-[2.6rem] font-extrabold italic leading-[1.05] text-white sm:text-6xl lg:text-[4.2rem]">
            Là où{" "}
            <span className="text-gradient">l&rsquo;innovation</span>
            <br />
            prend vie.
          </h1>

          <p className="mt-7 max-w-xl font-slogan text-lg italic leading-relaxed text-silver-light/85 sm:text-xl">
            Nous concevons des solutions numériques qui transforment les
            idées en expériences, services et entreprises digitales.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#solutions"
              className="rounded-full bg-gradient-to-r from-sky to-electric px-7 py-3.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.03]"
            >
              Découvrir SOUN7
            </a>
            <a
              href="#contact"
              className="rounded-full border border-silver/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-sky hover:text-sky"
            >
              Démarrer un projet
            </a>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-sm animate-rise [animation-delay:150ms] lg:block">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-electric/20 via-transparent to-transparent blur-2xl" />
          <div className="relative rounded-[1.75rem] border border-silver/15 bg-gradient-to-b from-white/[0.04] to-transparent p-10 backdrop-blur-sm">
            <Image
              src="/logo/soun7_icone_couleur.png"
              alt="Symbole SOUN7 — monogramme S7"
              width={520}
              height={520}
              className="mx-auto w-full max-w-[260px] object-contain drop-shadow-[0_0_60px_rgba(30,120,220,0.35)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
