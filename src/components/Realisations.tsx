"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { useTilt } from "@/lib/use-tilt";
import SectionHeading from "@/components/SectionHeading";
import VideoModal from "@/components/VideoModal";

type Project = (typeof content)["fr"]["realisations"]["projects"][number];

function RacinesArt() {
  // No product screenshots published yet for RACINES: an abstract tree of
  // roots instead of an invented interface.
  const roots = Array.from({ length: 14 }, (_, i) => {
    const a = -Math.PI / 2 + ((i - 6.5) / 14) * Math.PI * 0.9;
    const x = 160 + Math.cos(a + Math.PI) * 120;
    const y = 300 + Math.abs(Math.sin(a)) * 40;
    return `M160 200 C ${160 + (x - 160) * 0.3} 250, ${x} ${y - 60}, ${x} ${y}`;
  });
  const branches = Array.from({ length: 12 }, (_, i) => {
    const x = 40 + i * 22;
    return `M160 200 C 160 140, ${x} 120, ${x} ${60 + ((i * 29) % 50)}`;
  });
  return (
    <svg viewBox="0 0 320 340" className="h-full w-full" aria-hidden>
      <defs>
        <radialGradient id="rac-g" cx="0.5" cy="0.55" r="0.55">
          <stop offset="0" stopColor="#e8a547" stopOpacity="0.45" />
          <stop offset="1" stopColor="#02040b" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="320" height="340" fill="#07101f" />
      <circle cx="160" cy="190" r="170" fill="url(#rac-g)" />
      {branches.map((d, i) => (
        <path key={`b${i}`} d={d} stroke="#59d5ff" strokeOpacity="0.55" strokeWidth="1.2" fill="none" className="s7-flow" style={{ animationDuration: `${3 + (i % 4)}s` }} />
      ))}
      {roots.map((d, i) => (
        <path key={`r${i}`} d={d} stroke="#e8a547" strokeOpacity="0.7" strokeWidth="1.3" fill="none" className="s7-flow" style={{ animationDuration: `${3.5 + (i % 3)}s` }} />
      ))}
      {branches.map((_, i) => (
        <circle key={`n${i}`} cx={40 + i * 22} cy={60 + ((i * 29) % 50)} r="3.5" fill="#cfe9ff" className="s7-node" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
      <rect x="156" y="150" width="8" height="70" rx="3" fill="#e8a547" opacity="0.8" />
    </svg>
  );
}

function ProjectCard({
  p,
  t,
  index,
  onWatch,
}: {
  p: Project;
  t: (typeof content)["fr"]["realisations"];
  index: number;
  onWatch: (p: Project) => void;
}) {
  const ref = useTilt<HTMLElement>(5);
  const preview = useRef<HTMLVideoElement>(null);
  const [hovering, setHovering] = useState(false);

  // Muted preview of the real film on hover (desktop only, loaded on demand).
  const enter = () => {
    if (!p.video || !window.matchMedia("(hover: hover)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setHovering(true);
    const v = preview.current;
    if (v) {
      if (!v.src) v.src = p.video.src;
      v.play().catch(() => {});
    }
  };
  const leave = () => {
    setHovering(false);
    preview.current?.pause();
  };

  return (
    <article
      ref={ref}
      data-reveal="up"
      data-reveal-delay={String(index * 0.1)}
      onPointerEnter={enter}
      onPointerLeave={leave}
      className="s7-tilt group relative flex w-[78vw] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#050d1f] hover:border-s7-sky-blue/40 hover:shadow-[0_30px_80px_-30px_rgba(30,120,220,0.75)] sm:w-[46vw] lg:w-auto"
    >
      <span className="s7-spot z-10" aria-hidden />
      <div className="relative aspect-[4/4.2] overflow-hidden">
        {p.cover ? (
          <Image
            src={p.cover}
            alt={`${p.name} — ${p.category}`}
            fill
            sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 25vw"
            className="object-cover object-top transition-transform duration-[1.2s] [transition-timing-function:var(--ease-out-expo)] group-hover:scale-105"
          />
        ) : (
          <RacinesArt />
        )}
        {p.video && (
          <video
            ref={preview}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden
            className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${
              hovering ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d1f] via-[#050d1f]/35 via-30% to-transparent" />
        {!p.slug && (
          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-s7-silver-light/80 backdrop-blur">
            {t.soon}
          </span>
        )}
        {p.video && (
          <button
            type="button"
            onClick={() => onWatch(p)}
            aria-label={`${t.watch} — ${p.name}`}
            className="absolute right-3 top-3 z-20 inline-flex items-center gap-2 rounded-full border border-white/25 bg-s7-abyss/60 py-1.5 pl-1.5 pr-3.5 text-xs font-semibold text-s7-white backdrop-blur-md transition-all duration-300 hover:border-s7-sky-blue hover:bg-s7-electric-blue/60 hover:shadow-[0_0_30px_rgba(89,213,255,0.6)]"
          >
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-s7-electric-blue">
              <span className="absolute inset-0 animate-ping rounded-full bg-s7-sky-blue/40" aria-hidden />
              <svg viewBox="0 0 24 24" className="relative ml-0.5 h-3.5 w-3.5" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            {t.watch}
          </button>
        )}
      </div>

      <div className="relative -mt-6 flex flex-1 flex-col p-5">
        <span className="font-tech text-[0.6rem] uppercase tracking-[0.2em] text-s7-sky-blue/90">{p.category}</span>
        <h3 className="mt-2 font-display text-xl font-bold text-s7-white">{p.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-s7-silver-light/60">{p.desc}</p>
        {p.slug ? (
          <Link
            href={`/realisations/${p.slug}`}
            className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-s7-white transition-all duration-300 hover:border-s7-sky-blue hover:bg-s7-electric-blue/20"
          >
            {t.view} <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        ) : (
          <span className="mt-5 text-xs text-s7-silver-metal/60">{t.more}</span>
        )}
      </div>
    </article>
  );
}

export default function Realisations() {
  const { locale } = useLanguage();
  const t = content[locale].realisations;
  const [playing, setPlaying] = useState<Project | null>(null);
  const [active, setActive] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setPlaying(null), []);

  // Carousel dots (mobile / tablet): follow the snapped card.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const cards = Array.from(el.children) as HTMLElement[];
      const mid = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestD = Infinity;
      cards.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid);
        if (d < bestD) {
          bestD = d;
          best = i;
        }
      });
      setActive(best);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    const el = track.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2, behavior: "smooth" });
  };

  return (
    <section
      id="realisations"
      className="relative scroll-mt-20 overflow-hidden border-y border-white/[0.06] py-24 sm:py-32"
      style={{ background: "linear-gradient(180deg, #02040b, #040d22 50%, #02040b)" }}
    >
      <div aria-hidden className="pointer-events-none absolute -left-40 top-1/3 h-[36rem] w-[36rem] rounded-full bg-s7-electric-blue/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title1} accent={t.titleAccent} intro={t.intro} />

        <div
          ref={track}
          className="-mx-5 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {t.projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} t={t} index={i} onWatch={setPlaying} />
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2 lg:hidden" role="tablist" aria-label={t.eyebrow}>
          {t.projects.map((p, i) => (
            <button
              key={p.name}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={p.name}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                active === i ? "w-8 bg-s7-sky-blue shadow-[0_0_10px_#59d5ff]" : "w-3 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>

      {playing?.video && (
        <VideoModal
          src={playing.video.src}
          poster={playing.video.poster}
          title={playing.name}
          closeLabel={t.close}
          onClose={close}
        />
      )}
    </section>
  );
}
