"use client";

import { useEffect, useRef } from "react";
import { isLowPower, prefersReducedMotion } from "@/lib/gsap";

// Simplified coastlines (lon, lat). Accuracy is "recognisable at a glance",
// which is all a dotted silhouette needs.
const AFRICA: [number, number][] = [
  [-17.5, 14.7], [-16.7, 19.5], [-13, 27.7], [-9.8, 29.9], [-6, 35.8], [0, 35.9], [10.2, 37.2],
  [11, 33], [20, 30.5], [25, 31.6], [32.3, 31.3], [34.5, 28], [37.3, 21.5], [39.5, 15.5],
  [43.3, 12.6], [51.3, 11.8], [49, 6], [44, 0.5], [41.5, -1.8], [39.6, -6], [40.5, -10.5],
  [40.6, -15], [35.5, -22], [32.9, -26], [31, -29.5], [27.5, -33.5], [20, -34.8], [18.4, -34],
  [17, -29], [14.5, -22.5], [11.8, -17], [13.4, -12.5], [12.2, -6], [9.5, -1], [9.8, 3],
  [8.5, 4.5], [6, 4.3], [3, 6.3], [2.4, 6.35], [-1.5, 5], [-4, 5.2], [-7.5, 4.4], [-11.5, 6.9],
  [-13.3, 9.2], [-15, 11], [-16.8, 12.5],
];
const MADAGASCAR: [number, number][] = [
  [49.3, -12], [50.4, -15.5], [47.1, -24.9], [44, -25], [43.3, -22], [44.4, -16.2], [47, -15.5],
];

// Places where SOUN7 actually operates.
const HUBS = [
  { name: "Cotonou", lon: 2.42, lat: 6.37, main: true },
  { name: "Libreville", lon: 9.45, lat: 0.39, main: false },
];

function inside(poly: [number, number][], x: number, y: number) {
  let r = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) r = !r;
  }
  return r;
}

const RAD = Math.PI / 180;

export default function AfricaGlobe({ className = "" }: { className?: string }) {
  const cv = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = cv.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const low = isLowPower();
    const reduced = prefersReducedMotion();

    const step = low ? 2.2 : 1.5;
    const land: [number, number][] = [];
    for (let lat = -36; lat <= 38; lat += step) {
      for (let lon = -18; lon <= 52; lon += step) {
        if (inside(AFRICA, lon, lat) || inside(MADAGASCAR, lon, lat)) land.push([lon, lat]);
      }
    }
    // Outbound routes: from Cotonou towards the rest of the world (off the disc).
    const routes = [
      [-30, 40], [-60, 20], [60, 45], [75, 10], [-40, -20], [45, -45],
    ].map(([lon, lat]) => ({ lon, lat }));

    let W = 0;
    let H = 0;
    let R = 0;
    let raf = 0;
    let visible = true;
    const t0 = performance.now();

    const size = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, low ? 1.5 : 2);
      W = r.width;
      H = r.height;
      R = Math.min(W, H) * 0.45;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const project = (lon: number, lat: number, lon0: number, lat0: number) => {
      const l = lon * RAD;
      const p = lat * RAD;
      const l0 = lon0 * RAD;
      const p0 = lat0 * RAD;
      const cosc = Math.sin(p0) * Math.sin(p) + Math.cos(p0) * Math.cos(p) * Math.cos(l - l0);
      const x = Math.cos(p) * Math.sin(l - l0);
      const y = Math.cos(p0) * Math.sin(p) - Math.sin(p0) * Math.cos(p) * Math.cos(l - l0);
      return { x: W / 2 + x * R, y: H / 2 - y * R, front: cosc > 0, depth: cosc };
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      const time = reduced ? 0 : Math.max(0, now - t0) / 1000;
      const lon0 = 16 + Math.sin(time * 0.15) * 9;
      const lat0 = 4;
      ctx.clearRect(0, 0, W, H);

      // Atmosphere + disc
      const g = ctx.createRadialGradient(W / 2, H / 2, R * 0.2, W / 2, H / 2, R * 1.1);
      g.addColorStop(0, "rgba(30,120,220,0.20)");
      g.addColorStop(0.78, "rgba(11,47,99,0.25)");
      g.addColorStop(0.82, "rgba(89,213,255,0.35)");
      g.addColorStop(1, "rgba(89,213,255,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(W / 2, H / 2, R * 1.1, 0, Math.PI * 2);
      ctx.fill();

      // Graticule
      ctx.strokeStyle = "rgba(89,213,255,0.08)";
      ctx.lineWidth = 0.8;
      for (let lon = -180; lon < 180; lon += 20) {
        ctx.beginPath();
        let started = false;
        for (let lat = -90; lat <= 90; lat += 5) {
          const q = project(lon, lat, lon0, lat0);
          if (!q.front) { started = false; continue; }
          if (!started) { ctx.moveTo(q.x, q.y); started = true; } else ctx.lineTo(q.x, q.y);
        }
        ctx.stroke();
      }
      for (let lat = -60; lat <= 60; lat += 20) {
        ctx.beginPath();
        let started = false;
        for (let lon = -180; lon <= 180; lon += 5) {
          const q = project(lon, lat, lon0, lat0);
          if (!q.front) { started = false; continue; }
          if (!started) { ctx.moveTo(q.x, q.y); started = true; } else ctx.lineTo(q.x, q.y);
        }
        ctx.stroke();
      }

      // Land dots
      for (const [lon, lat] of land) {
        const q = project(lon, lat, lon0, lat0);
        if (!q.front) continue;
        const shimmer = 0.55 + 0.45 * Math.sin(time * 1.4 + lon * 0.35 + lat * 0.22);
        ctx.fillStyle = `rgba(${Math.round(89 + 80 * shimmer)},${Math.round(190 + 40 * shimmer)},255,${0.25 + q.depth * 0.6 * shimmer})`;
        const s = (low ? 1.9 : 1.6) * (0.6 + q.depth * 0.6);
        ctx.fillRect(q.x - s / 2, q.y - s / 2, s, s);
      }

      // Routes: arcs lifted above the surface, with a travelling pulse.
      const hub = HUBS[0];
      const targets = [
        ...HUBS.slice(1).map((h) => ({ lon: h.lon, lat: h.lat })),
        ...routes,
      ];
      targets.forEach((tg, i) => {
        const steps = 40;
        ctx.beginPath();
        let ok = false;
        const pts: { x: number; y: number }[] = [];
        for (let s = 0; s <= steps; s++) {
          const f = s / steps;
          const lon = hub.lon + (tg.lon - hub.lon) * f;
          const lat = hub.lat + (tg.lat - hub.lat) * f;
          const q = project(lon, lat, lon0, lat0);
          // lift
          const lift = 1 + Math.sin(f * Math.PI) * (i === 0 ? 0.05 : 0.22);
          const x = W / 2 + (q.x - W / 2) * lift;
          const y = H / 2 + (q.y - H / 2) * lift;
          pts.push({ x, y });
          if (!ok) { ctx.moveTo(x, y); ok = true; } else ctx.lineTo(x, y);
        }
        const grad = ctx.createLinearGradient(pts[0].x, pts[0].y, pts[steps].x, pts[steps].y);
        grad.addColorStop(0, "rgba(89,213,255,0.9)");
        grad.addColorStop(1, i === 0 ? "rgba(89,213,255,0.9)" : "rgba(123,92,255,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = i === 0 ? 1.6 : 1.1;
        ctx.stroke();

        const f = (time * 0.35 + i * 0.17) % 1;
        const k = Math.floor(f * steps);
        const pt = pts[k];
        ctx.fillStyle = "rgba(255,255,255,0.95)";
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Hubs
      HUBS.forEach((h) => {
        const q = project(h.lon, h.lat, lon0, lat0);
        if (!q.front) return;
        const pulse = (time * 0.8) % 1;
        ctx.strokeStyle = `rgba(89,213,255,${1 - pulse})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(q.x, q.y, 4 + pulse * (h.main ? 22 : 14), 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = "#fff";
        ctx.shadowColor = "#59d5ff";
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.arc(q.x, q.y, h.main ? 4 : 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.font = `${h.main ? 600 : 500} ${low ? 10 : 11}px Montserrat, sans-serif`;
        ctx.fillStyle = h.main ? "#ffffff" : "rgba(242,243,244,0.75)";
        ctx.fillText(h.name, q.x + 9, q.y + (h.main ? -6 : 14));
      });
    };

    size();
    raf = requestAnimationFrame(frame);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);
    window.addEventListener("resize", size);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", size);
    };
  }, []);

  return (
    <canvas
      ref={cv}
      className={className}
      role="img"
      aria-label="Afrique en réseau lumineux : Cotonou (siège) relié à Libreville et au reste du monde"
    />
  );
}
