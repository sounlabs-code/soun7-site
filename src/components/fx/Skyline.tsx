// A stylised night skyline, generated deterministically so server and client
// render the same markup. Purely decorative.

function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

type B = { x: number; w: number; h: number; windows: { x: number; y: number }[]; spire: boolean };

function buildings(seed: number, count: number, maxH: number): B[] {
  const r = rng(seed);
  const out: B[] = [];
  let x = 0;
  for (let i = 0; i < count; i++) {
    const w = 18 + r() * 46;
    // taller towers towards the centre, like a skyline seen from the water
    const centre = 1 - Math.abs(i / count - 0.5) * 1.4;
    const h = 30 + r() * maxH * Math.max(0.25, centre);
    const windows: { x: number; y: number }[] = [];
    for (let wy = 8; wy < h - 6; wy += 9) {
      for (let wx = 4; wx < w - 4; wx += 7) {
        if (r() < 0.22) windows.push({ x: x + wx, y: wy });
      }
    }
    out.push({ x, w, h, windows, spire: r() < 0.15 && h > maxH * 0.5 });
    x += w + 2 + r() * 6;
  }
  return out;
}

export default function Skyline({
  className = "",
  seed = 7,
  count = 46,
  maxH = 220,
}: {
  className?: string;
  seed?: number;
  count?: number;
  maxH?: number;
}) {
  const bs = buildings(seed, count, maxH);
  const width = bs.length ? bs[bs.length - 1].x + bs[bs.length - 1].w : 1600;
  const height = maxH + 60;
  const gid = `sky-${seed}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={`${gid}-b`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0d2a5a" />
          <stop offset="1" stopColor="#030814" />
        </linearGradient>
        <linearGradient id={`${gid}-fade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#02040b" stopOpacity="0" />
          <stop offset="1" stopColor="#02040b" stopOpacity="1" />
        </linearGradient>
      </defs>
      {bs.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={height - b.h} width={b.w} height={b.h} fill={`url(#${gid}-b)`} />
          <rect x={b.x} y={height - b.h} width={b.w} height={1.2} fill="#59d5ff" opacity={0.35} />
          {b.spire && (
            <rect x={b.x + b.w / 2 - 1} y={height - b.h - 26} width={2} height={26} fill="#1e78dc" />
          )}
          {b.windows.map((w, j) => (
            <rect
              key={j}
              x={w.x}
              y={height - b.h + w.y}
              width={3}
              height={3}
              fill={j % 5 === 0 ? "#cfe9ff" : "#59d5ff"}
              opacity={0.35 + ((i + j) % 4) * 0.15}
            />
          ))}
        </g>
      ))}
      <rect x={0} y={height * 0.55} width={width} height={height * 0.45} fill={`url(#${gid}-fade)`} />
    </svg>
  );
}
