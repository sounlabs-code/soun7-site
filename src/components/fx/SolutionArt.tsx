import type { SolutionKey } from "@/lib/content";

// Six animated "universes", one per expertise. Pure SVG + CSS keyframes:
// cheap to render, crisp at any size, paused by prefers-reduced-motion.

const BLUE = "#1e78dc";
const SKY = "#59d5ff";
const VIOLET = "#7b5cff";

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={SKY} />
        <stop offset="1" stopColor={BLUE} />
      </linearGradient>
      <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor={SKY} stopOpacity="0.55" />
        <stop offset="1" stopColor={SKY} stopOpacity="0" />
      </radialGradient>
      <filter id={`${id}-blur`} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" />
      </filter>
    </defs>
  );
}

function Apps() {
  const id = "apps";
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full">
      <Defs id={id} />
      <ellipse cx="160" cy="160" rx="110" ry="14" fill={`url(#${id}-glow)`} />
      <g className="s7-float">
        <rect x="128" y="22" width="64" height="124" rx="12" fill="#06142c" stroke={`url(#${id}-g)`} strokeWidth="2" />
        <rect x="136" y="36" width="48" height="10" rx="3" fill={BLUE} opacity="0.8" />
        <rect x="136" y="52" width="48" height="30" rx="4" fill={SKY} opacity="0.25" />
        <rect x="136" y="88" width="22" height="22" rx="4" fill={BLUE} opacity="0.6" />
        <rect x="162" y="88" width="22" height="22" rx="4" fill={VIOLET} opacity="0.5" />
        <rect x="136" y="116" width="48" height="6" rx="3" fill="#fff" opacity="0.25" />
        <rect x="136" y="126" width="34" height="6" rx="3" fill="#fff" opacity="0.15" />
      </g>
      <g className="s7-float" style={{ animationDelay: "-1.5s" }}>
        <rect x="58" y="50" width="54" height="40" rx="8" fill="#071a38" stroke={SKY} strokeOpacity="0.5" />
        <circle cx="72" cy="64" r="6" fill={SKY} opacity="0.8" />
        <rect x="82" y="60" width="22" height="4" rx="2" fill="#fff" opacity="0.5" />
        <rect x="68" y="76" width="36" height="4" rx="2" fill="#fff" opacity="0.2" />
      </g>
      <g className="s7-float" style={{ animationDelay: "-2.6s" }}>
        <rect x="208" y="70" width="58" height="44" rx="8" fill="#071a38" stroke={BLUE} strokeOpacity="0.7" />
        <path d="M216 104 L228 92 L238 98 L256 80" fill="none" stroke={SKY} strokeWidth="2" />
      </g>
      <path d="M112 70 C 120 70 122 60 128 60" className="s7-flow" stroke={SKY} strokeWidth="1.5" fill="none" />
      <path d="M192 90 C 200 90 202 92 208 92" className="s7-flow" stroke={SKY} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function AI() {
  const id = "ai";
  const layers = [
    [40, [40, 80, 120, 150]],
    [110, [30, 65, 100, 135, 160]],
    [210, [30, 65, 100, 135, 160]],
    [280, [55, 95, 135]],
  ] as const;
  const lines: string[] = [];
  for (let l = 0; l < layers.length - 1; l++) {
    const [x1, ys1] = layers[l];
    const [x2, ys2] = layers[l + 1];
    ys1.forEach((y1) => ys2.forEach((y2) => lines.push(`M${x1} ${y1} L${x2} ${y2}`)));
  }
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full">
      <Defs id={id} />
      <circle cx="160" cy="95" r="70" fill={`url(#${id}-glow)`} />
      {lines.map((d, i) => (
        <path key={i} d={d} stroke={i % 7 === 0 ? SKY : BLUE} strokeOpacity={i % 7 === 0 ? 0.7 : 0.18} strokeWidth="1" className={i % 7 === 0 ? "s7-flow" : ""} />
      ))}
      {layers.map(([x, ys], li) =>
        ys.map((y, i) => (
          <circle key={`${li}-${i}`} cx={x} cy={y} r="4" fill={SKY} className="s7-node" style={{ animationDelay: `${(li * 0.3 + i * 0.17).toFixed(2)}s` }} />
        )),
      )}
      <g>
        <rect x="136" y="72" width="48" height="46" rx="10" fill="#06142c" stroke={`url(#${id}-g)`} strokeWidth="2" />
        <text x="160" y="103" textAnchor="middle" fontFamily="Orbitron, sans-serif" fontWeight="700" fontSize="18" fill="#fff">IA</text>
      </g>
    </svg>
  );
}

function Digital() {
  const id = "dig";
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full">
      <Defs id={id} />
      <ellipse cx="160" cy="160" rx="120" ry="12" fill={`url(#${id}-glow)`} />
      <g className="s7-float" style={{ animationDelay: "-0.8s" }}>
        <rect x="64" y="30" width="150" height="100" rx="10" fill="#061430" stroke={`url(#${id}-g)`} strokeWidth="1.5" />
        <circle cx="76" cy="41" r="2.5" fill={SKY} />
        <circle cx="85" cy="41" r="2.5" fill={BLUE} />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x={80 + i * 20} y={120 - (20 + ((i * 37) % 50))} width="12" height={20 + ((i * 37) % 50)} rx="2" fill={i % 2 ? BLUE : SKY} opacity="0.85" />
        ))}
      </g>
      <g className="s7-float" style={{ animationDelay: "-2s" }}>
        <rect x="190" y="70" width="80" height="70" rx="10" fill="#071a38" stroke={SKY} strokeOpacity="0.5" />
        <circle cx="230" cy="105" r="20" fill="none" stroke={BLUE} strokeWidth="8" opacity="0.35" />
        <circle cx="230" cy="105" r="20" fill="none" stroke={SKY} strokeWidth="8" strokeDasharray="80 126" transform="rotate(-90 230 105)" />
      </g>
      <g className="s7-float" style={{ animationDelay: "-3s" }}>
        <rect x="40" y="96" width="70" height="44" rx="8" fill="#071a38" stroke={VIOLET} strokeOpacity="0.6" />
        <path d="M48 128 L60 116 L72 122 L84 108 L100 112" fill="none" stroke={VIOLET} strokeWidth="2" />
      </g>
    </svg>
  );
}

function Telecom() {
  const id = "tel";
  const paths = [
    "M0 150 C 90 150, 140 100, 320 40",
    "M0 165 C 110 160, 170 110, 320 70",
    "M0 135 C 70 130, 120 80, 320 20",
    "M0 175 C 130 170, 200 130, 320 100",
    "M0 120 C 60 110, 110 70, 320 5",
  ];
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full">
      <Defs id={id} />
      {paths.map((d, i) => (
        <g key={i}>
          <path d={d} stroke={BLUE} strokeOpacity="0.35" strokeWidth="3" fill="none" filter={`url(#${id}-blur)`} />
          <path d={d} stroke={i % 2 ? SKY : "#cfe9ff"} strokeWidth="1.4" fill="none" className="s7-flow" style={{ animationDuration: `${1.6 + i * 0.4}s` }} />
        </g>
      ))}
      <circle cx="300" cy="40" r="26" fill={`url(#${id}-glow)`} />
      <circle cx="300" cy="40" r="4" fill="#fff" />
    </svg>
  );
}

function Led() {
  const id = "led";
  const cells: { x: number; y: number; o: number }[] = [];
  for (let y = 0; y < 9; y++)
    for (let x = 0; x < 20; x++) cells.push({ x, y, o: ((x * 7 + y * 13) % 10) / 10 });
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full">
      <Defs id={id} />
      <rect x="20" y="120" width="40" height="60" fill="#061430" />
      <rect x="262" y="100" width="44" height="80" fill="#061430" />
      <g>
        <rect x="70" y="24" width="180" height="96" rx="4" fill="#030a18" stroke={`url(#${id}-g)`} strokeWidth="2" />
        <clipPath id={`${id}-clip`}>
          <rect x="74" y="28" width="172" height="88" />
        </clipPath>
        <g clipPath={`url(#${id}-clip)`}>
          {cells.map((c, i) => (
            <rect key={i} x={76 + c.x * 8.5} y={30 + c.y * 9.5} width="6" height="7" rx="1" fill={c.o > 0.6 ? SKY : BLUE} opacity={0.2 + c.o * 0.6} />
          ))}
          <rect x="74" y="28" width="172" height="40" fill="url(#led-scan)" style={{ animation: "ledScan 2.8s linear infinite" }} />
        </g>
        <linearGradient id="led-scan" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <rect x="156" y="120" width="8" height="40" fill="#0b2f63" />
      </g>
      <ellipse cx="160" cy="165" rx="110" ry="10" fill={`url(#${id}-glow)`} />
    </svg>
  );
}

function Platforms() {
  const id = "plat";
  const cube = (x: number, y: number, s: number, c: string, delay: string) => (
    <g className="s7-float" style={{ animationDelay: delay }}>
      <path d={`M${x} ${y} l${s} ${-s / 2} l${s} ${s / 2} l${-s} ${s / 2} z`} fill={c} opacity="0.9" />
      <path d={`M${x} ${y} l${s} ${s / 2} v${s} l${-s} ${-s / 2} z`} fill="#0b2f63" />
      <path d={`M${x + s} ${y + s / 2} l${s} ${-s / 2} v${s} l${-s} ${s / 2} z`} fill="#071a38" />
      <path d={`M${x} ${y} l${s} ${-s / 2} l${s} ${s / 2}`} fill="none" stroke={SKY} strokeOpacity="0.8" />
    </g>
  );
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full">
      <Defs id={id} />
      <ellipse cx="160" cy="150" rx="130" ry="20" fill={`url(#${id}-glow)`} />
      <path d="M90 110 L160 80 L230 110" className="s7-flow" stroke={SKY} strokeWidth="1.2" fill="none" />
      <path d="M160 80 L160 40" className="s7-flow" stroke={SKY} strokeWidth="1.2" fill="none" />
      {cube(130, 50, 30, BLUE, "0s")}
      {cube(60, 105, 28, SKY, "-1s")}
      {cube(200, 105, 28, VIOLET, "-2s")}
      {cube(130, 120, 30, BLUE, "-3s")}
    </svg>
  );
}

export default function SolutionArt({ kind }: { kind: SolutionKey }) {
  switch (kind) {
    case "apps":
      return <Apps />;
    case "ai":
      return <AI />;
    case "digital":
      return <Digital />;
    case "telecom":
      return <Telecom />;
    case "led":
      return <Led />;
    case "platforms":
      return <Platforms />;
  }
}

export function SolutionIcon({ kind, className = "h-5 w-5" }: { kind: SolutionKey; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...common}>
      {kind === "apps" && (<><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></>)}
      {kind === "ai" && (<><rect x="5" y="5" width="14" height="14" rx="3" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /><path d="M9.5 14.5l1.5-5 1.5 5M10 13h2M14.5 9.5v5" /></>)}
      {kind === "digital" && (<><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4M7 13l3-3 2 2 4-4" /></>)}
      {kind === "telecom" && (<><path d="M2 18c5 0 7-12 20-12" /><path d="M2 21c6 0 9-8 20-8" /><circle cx="22" cy="6" r="0.5" /></>)}
      {kind === "led" && (<><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M12 16v4M8 20h8" /><path d="M7 8h.01M11 8h.01M15 8h.01M7 12h.01M11 12h.01M15 12h.01" /></>)}
      {kind === "platforms" && (<><path d="M12 3l8 4.5-8 4.5-8-4.5z" /><path d="M4 12l8 4.5 8-4.5" /><path d="M4 16.5l8 4.5 8-4.5" /></>)}
    </svg>
  );
}
