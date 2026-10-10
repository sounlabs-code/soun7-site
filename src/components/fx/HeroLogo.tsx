"use client";

import { useEffect, useRef } from "react";
import { gsap, isLowPower, prefersReducedMotion } from "@/lib/gsap";

const LOGO = "/brand/soun7_icone_couleur.png";

type P = {
  // current
  x: number;
  y: number;
  // start (scattered) and target (on the logo)
  sx: number;
  sy: number;
  tx: number;
  ty: number;
  r: number;
  c: string;
  d: number; // per-particle delay in [0, 0.35]
  ph: number; // drift phase
};

/**
 * The real S7 mark, materialised from particles: the PNG's own pixels are
 * sampled, scattered into the dark, then pulled back into place. Once
 * formed, the crisp logo takes over and the particles become an ambient halo.
 */
export default function HeroLogo({ onFormed }: { onFormed?: () => void }) {
  const wrap = useRef<HTMLDivElement>(null);
  const tilt = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const img = useRef<HTMLImageElement>(null);
  const shine = useRef<HTMLDivElement>(null);
  const rings = useRef<HTMLDivElement>(null);
  const onFormedRef = useRef(onFormed);

  useEffect(() => {
    onFormedRef.current = onFormed;
  }, [onFormed]);

  useEffect(() => {
    const cv = canvas.current;
    const box = wrap.current;
    const imgEl = img.current;
    const shineEl = shine.current;
    const ringsEl = rings.current;
    if (!cv || !box) return;

    const reduced = prefersReducedMotion();
    if (reduced) {
      gsap.set(img.current, { opacity: 1 });
      onFormedRef.current?.();
      return;
    }

    const low = isLowPower();
    const ctx2d = cv.getContext("2d");
    if (!ctx2d) {
      gsap.set(img.current, { opacity: 1 });
      onFormedRef.current?.();
      return;
    }

    let W = 0;
    let H = 0;
    let dpr = 1;
    let parts: P[] = [];
    const state = { p: 0, halo: 0 };
    let raf = 0;
    let alive = true;
    let visible = true;
    const t0 = performance.now();

    const source = new Image();
    source.src = LOGO;

    const build = () => {
      const rect = cv.getBoundingClientRect();
      const lr = box.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, low ? 1.5 : 2);
      W = rect.width;
      H = rect.height;
      cv.width = Math.round(W * dpr);
      cv.height = Math.round(H * dpr);
      cv.style.width = `${W}px`;
      cv.style.height = `${H}px`;
      ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Sample the logo at the same box the <img> occupies (object-contain).
      const iw = source.naturalWidth;
      const ih = source.naturalHeight;
      const scale = Math.min(lr.width / iw, lr.height / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const ox = lr.left - rect.left + (lr.width - dw) / 2;
      const oy = lr.top - rect.top + (lr.height - dh) / 2;

      const off = document.createElement("canvas");
      const sw = 160;
      const sh = Math.round((ih / iw) * sw);
      off.width = sw;
      off.height = sh;
      const octx = off.getContext("2d", { willReadFrequently: true });
      if (!octx) return;
      octx.drawImage(source, 0, 0, sw, sh);
      const data = octx.getImageData(0, 0, sw, sh).data;

      const step = low ? 3 : 2;
      const next: P[] = [];
      for (let y = 0; y < sh; y += step) {
        for (let x = 0; x < sw; x += step) {
          const i = (y * sw + x) * 4;
          if (data[i + 3] < 140) continue;
          const tx = ox + (x / sw) * dw;
          const ty = oy + (y / sh) * dh;
          const ang = Math.random() * Math.PI * 2;
          const dist = (0.15 + Math.random() * 0.45) * Math.max(W, H);
          next.push({
            x: 0,
            y: 0,
            sx: W / 2 + Math.cos(ang) * dist,
            sy: H / 2 + Math.sin(ang) * dist * 0.7,
            tx,
            ty,
            r: (low ? 1.25 : 1) * (0.7 + Math.random() * 0.9),
            c: `rgb(${data[i]},${data[i + 1]},${data[i + 2]})`,
            d: Math.random() * 0.35,
            ph: Math.random() * Math.PI * 2,
          });
        }
      }
      parts = next;
    };

    const ease = (t: number) => 1 - Math.pow(1 - t, 4);

    const draw = (now: number) => {
      if (!alive) return;
      raf = requestAnimationFrame(draw);
      if (!visible) return;
      const time = (now - t0) / 1000;
      ctx2d.clearRect(0, 0, W, H);
      ctx2d.globalCompositeOperation = "lighter";

      for (const q of parts) {
        const local = Math.min(1, Math.max(0, (state.p - q.d) / (1 - 0.35)));
        const k = ease(local);
        // drift after formation: particles breathe out into a halo
        const hx = Math.cos(time * 0.6 + q.ph) * 14 * state.halo;
        const hy = Math.sin(time * 0.8 + q.ph) * 10 * state.halo - state.halo * 6;
        q.x = q.sx + (q.tx - q.sx) * k + hx;
        q.y = q.sy + (q.ty - q.sy) * k + hy;
        const a = (0.15 + 0.85 * k) * (1 - state.halo * 0.82);
        if (a < 0.02) continue;
        ctx2d.globalAlpha = a;
        ctx2d.fillStyle = q.c;
        ctx2d.fillRect(q.x, q.y, q.r * 1.6, q.r * 1.6);
      }
      ctx2d.globalAlpha = 1;
      ctx2d.globalCompositeOperation = "source-over";
    };

    const start = () => {
      build();
      raf = requestAnimationFrame(draw);

      const tl = gsap.timeline({ delay: 0.35 });
      tl.to(state, { p: 1, duration: low ? 2 : 2.6, ease: "power2.inOut" })
        .to(img.current, { opacity: 1, scale: 1, duration: 0.9, ease: "expo.out" }, "-=0.35")
        .add(() => onFormedRef.current?.(), "<0.1")
        .fromTo(
          shine.current,
          { backgroundPosition: "150% 0" },
          { backgroundPosition: "-50% 0", duration: 1.4, ease: "power2.inOut" },
          "<",
        )
        .to(state, { halo: 1, duration: 1.6, ease: "power2.out" }, "<0.2");

      // Pedestal pulses, forever, quietly.
      const ringEls = rings.current?.children;
      if (ringEls) {
        gsap.fromTo(
          ringEls,
          { scale: 0.4, opacity: 0.9 },
          {
            scale: 2.3,
            opacity: 0,
            duration: 3.2,
            ease: "power1.out",
            stagger: { each: 1.05, repeat: -1 },
            delay: 2.6,
          },
        );
      }
      // Shine sweep repeats every few seconds after the reveal.
      gsap.fromTo(
        shine.current,
        { backgroundPosition: "150% 0" },
        {
          backgroundPosition: "-50% 0",
          duration: 1.6,
          ease: "power2.inOut",
          repeat: -1,
          repeatDelay: 4.5,
          delay: 5.5,
        },
      );
    };

    if (source.complete && source.naturalWidth) start();
    else source.onload = start;

    // Subtle reaction to the pointer (desktop) — rotation + float.
    const el = tilt.current;
    let qx: ((v: number) => void) | null = null;
    let qy: ((v: number) => void) | null = null;
    if (el && !low) {
      qx = gsap.quickTo(el, "rotationY", { duration: 1.2, ease: "power3.out" });
      qy = gsap.quickTo(el, "rotationX", { duration: 1.2, ease: "power3.out" });
    }
    const onMove = (e: PointerEvent) => {
      if (!qx || !qy) return;
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      qx(nx * 22);
      qy(-ny * 14);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    const float = gsap.to(el, { y: -14, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1 });

    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(box);

    let resizeT = 0;
    const onResize = () => {
      window.clearTimeout(resizeT);
      resizeT = window.setTimeout(() => {
        if (source.naturalWidth) build();
      }, 150);
    };
    window.addEventListener("resize", onResize);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      float.kill();
      gsap.killTweensOf([state, imgEl, shineEl]);
      if (ringsEl) gsap.killTweensOf(ringsEl.children);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="relative w-full aspect-square [perspective:1200px]">
      {/* Pedestal */}
      <div className="s7-pedestal" aria-hidden />
      <div ref={rings} aria-hidden>
        <span className="s7-ring-pulse" />
        <span className="s7-ring-pulse" />
        <span className="s7-ring-pulse" />
      </div>
      {/* Light column under the mark */}
      <div
        aria-hidden
        className="absolute left-1/2 bottom-[10%] h-[45%] w-[38%] -translate-x-1/2 opacity-60"
        style={{
          background:
            "linear-gradient(to top, rgba(89,213,255,0.35), rgba(30,120,220,0.08) 60%, transparent)",
          clipPath: "polygon(20% 0, 80% 0, 100% 100%, 0 100%)",
          filter: "blur(10px)",
        }}
      />

      <div ref={tilt} className="absolute inset-[10%_14%_19%_14%] [transform-style:preserve-3d]">
        <div
          aria-hidden
          className="absolute inset-[8%] rounded-full opacity-70 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(30,120,220,0.55), transparent 65%)" }}
        />
        <div ref={wrap} className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element -- needs the raw element for canvas sampling parity */}
          <img
            ref={img}
            src={LOGO}
            alt="Emblème S7 de SOUN7"
            width={448}
            height={426}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-contain opacity-0 scale-95 drop-shadow-[0_25px_60px_rgba(30,120,220,0.55)]"
          />
          <div ref={shine} className="s7-logo-shine" aria-hidden />
          <canvas ref={canvas} className="pointer-events-none absolute -inset-[45%]" aria-hidden />
        </div>
      </div>
    </div>
  );
}
