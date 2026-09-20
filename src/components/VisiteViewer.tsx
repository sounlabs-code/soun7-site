"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import type { PieceVisite } from "@/lib/visites-360";

// Three.js est chargé depuis un CDN plutôt qu'ajouté aux dépendances du
// site : la visionneuse est la seule page qui en a besoin, et l'embarquer
// alourdirait le bundle de toutes les autres. `window.THREE` est donc typé
// a minima ici, juste ce que cette page utilise.
type TroisD = {
  WebGLRenderer: new (o: { canvas: HTMLCanvasElement; antialias: boolean }) => {
    setPixelRatio: (n: number) => void;
    setSize: (l: number, h: number) => void;
    render: (s: unknown, c: unknown) => void;
    dispose: () => void;
  };
  Scene: new () => { add: (o: unknown) => void };
  PerspectiveCamera: new (
    fov: number,
    ratio: number,
    proche: number,
    loin: number,
  ) => {
    aspect: number;
    fov: number;
    updateProjectionMatrix: () => void;
    lookAt: (x: number, y: number, z: number) => void;
  };
  SphereGeometry: new (r: number, l: number, h: number) => { scale: (x: number, y: number, z: number) => void };
  MeshBasicMaterial: new () => { map: unknown; needsUpdate: boolean };
  Mesh: new (g: unknown, m: unknown) => { material: { map: unknown; needsUpdate: boolean } };
  TextureLoader: new () => {
    setCrossOrigin: (v: string) => void;
    load: (
      url: string,
      ok: (t: { dispose: () => void }) => void,
      progression: undefined,
      erreur: () => void,
    ) => void;
  };
  MathUtils: { degToRad: (d: number) => number };
};

declare global {
  interface Window {
    THREE?: TroisD;
  }
}

export default function VisiteViewer({ pieces }: { pieces: PieceVisite[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [indexPiece, setIndexPiece] = useState(0);
  const [pret, setPret] = useState(false);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState<string | null>(null);
  const [indiceVisible, setIndiceVisible] = useState(true);

  // Conservés hors du cycle de rendu React : ce sont des objets mutables
  // pilotés à 60 images par seconde, les passer par l'état provoquerait un
  // rendu à chaque mouvement de souris.
  const scene3D = useRef<{
    appliquer: (url: string) => void;
    detruire: () => void;
  } | null>(null);

  useEffect(() => {
    if (!pret || !canvasRef.current || scene3D.current) return;
    const THREE = window.THREE;
    const canvas = canvasRef.current;
    if (!THREE) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      72,
      window.innerWidth / window.innerHeight,
      1,
      1100,
    );

    // Sphère retournée sur elle-même : on regarde la texture de l'intérieur.
    const geometrie = new THREE.SphereGeometry(500, 60, 40);
    geometrie.scale(-1, 1, 1);
    const sphere = new THREE.Mesh(geometrie, new THREE.MeshBasicMaterial());
    scene.add(sphere);

    let lon = 0;
    let lat = 0;
    let saisie = false;
    let x0 = 0;
    let y0 = 0;
    let lon0 = 0;
    let lat0 = 0;
    let anime = true;

    const debut = (x: number, y: number) => {
      saisie = true;
      x0 = x;
      y0 = y;
      lon0 = lon;
      lat0 = lat;
      setIndiceVisible(false);
    };
    const bouge = (x: number, y: number) => {
      if (!saisie) return;
      // Sens inversé volontairement : on attrape le décor et on le tire,
      // comme dans toutes les visites virtuelles.
      lon = (x0 - x) * 0.13 + lon0;
      lat = Math.max(-85, Math.min(85, (y - y0) * 0.13 + lat0));
    };
    const fin = () => {
      saisie = false;
    };

    const surMouseDown = (e: MouseEvent) => debut(e.clientX, e.clientY);
    const surMouseMove = (e: MouseEvent) => bouge(e.clientX, e.clientY);
    const surTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) debut(e.touches[0].clientX, e.touches[0].clientY);
    };
    const surTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        bouge(e.touches[0].clientX, e.touches[0].clientY);
        e.preventDefault();
      }
    };
    const surWheel = (e: WheelEvent) => {
      camera.fov = Math.max(32, Math.min(95, camera.fov + e.deltaY * 0.04));
      camera.updateProjectionMatrix();
      e.preventDefault();
    };
    const surResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    canvas.addEventListener("mousedown", surMouseDown);
    window.addEventListener("mousemove", surMouseMove);
    window.addEventListener("mouseup", fin);
    canvas.addEventListener("touchstart", surTouchStart, { passive: true });
    canvas.addEventListener("touchmove", surTouchMove, { passive: false });
    canvas.addEventListener("touchend", fin);
    canvas.addEventListener("wheel", surWheel, { passive: false });
    window.addEventListener("resize", surResize);

    const boucle = () => {
      if (!anime) return;
      requestAnimationFrame(boucle);
      const phi = THREE.MathUtils.degToRad(90 - lat);
      const theta = THREE.MathUtils.degToRad(lon);
      camera.lookAt(
        500 * Math.sin(phi) * Math.cos(theta),
        500 * Math.cos(phi),
        500 * Math.sin(phi) * Math.sin(theta),
      );
      renderer.render(scene, camera);
    };
    boucle();

    scene3D.current = {
      appliquer: (url: string) => {
        setChargement(true);
        const chargeur = new THREE.TextureLoader();
        chargeur.setCrossOrigin("anonymous");
        chargeur.load(
          url,
          (texture) => {
            const ancienne = sphere.material.map as { dispose: () => void } | null;
            sphere.material.map = texture;
            sphere.material.needsUpdate = true;
            if (ancienne) ancienne.dispose();
            setChargement(false);
          },
          undefined,
          () => setErreur("Une image de cette visite n'a pas pu être chargée."),
        );
      },
      detruire: () => {
        anime = false;
        canvas.removeEventListener("mousedown", surMouseDown);
        window.removeEventListener("mousemove", surMouseMove);
        window.removeEventListener("mouseup", fin);
        canvas.removeEventListener("touchstart", surTouchStart);
        canvas.removeEventListener("touchmove", surTouchMove);
        canvas.removeEventListener("touchend", fin);
        canvas.removeEventListener("wheel", surWheel);
        window.removeEventListener("resize", surResize);
        renderer.dispose();
      },
    };

    scene3D.current.appliquer(pieces[0].panorama_url);

    return () => {
      scene3D.current?.detruire();
      scene3D.current = null;
    };
  }, [pret, pieces]);

  const ouvrir = (index: number) => {
    setIndexPiece(index);
    scene3D.current?.appliquer(pieces[index].panorama_url);
  };

  useEffect(() => {
    const t = setTimeout(() => setIndiceVisible(false), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#0d1117] text-white">
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        strategy="afterInteractive"
        onReady={() => setPret(true)}
      />

      <canvas ref={canvasRef} className="block h-full w-full touch-none cursor-grab active:cursor-grabbing" />

      <header className="pointer-events-none fixed inset-x-0 top-0 z-10 flex items-center gap-3 bg-gradient-to-b from-black/65 to-transparent px-5 py-4">
        <span className="text-[15px] font-bold tracking-wide">DISPO</span>
        <span className="text-[13px] text-white/75">{pieces[indexPiece]?.piece_nom ?? ""}</span>
      </header>

      {(chargement || erreur) && (
        <div className="fixed inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-[#0d1117] px-6 text-center">
          {erreur ? (
            <>
              <p className="text-[17px] font-semibold">Visite indisponible</p>
              <p className="max-w-xs text-[15px] leading-relaxed text-[#c9d1d9]">{erreur}</p>
            </>
          ) : (
            <>
              <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-white/15 border-t-[#2f6df6]" />
              <p className="text-[15px] text-[#c9d1d9]">Chargement de la visite…</p>
            </>
          )}
        </div>
      )}

      {indiceVisible && !chargement && !erreur && (
        <div className="pointer-events-none fixed bottom-[74px] left-1/2 z-10 -translate-x-1/2 rounded-2xl bg-black/45 px-4 py-2 text-[12.5px] text-white/75">
          Fais glisser pour regarder autour de toi
        </div>
      )}

      {pieces.length > 1 && (
        <nav className="fixed inset-x-0 bottom-0 z-10 flex gap-2 overflow-x-auto bg-gradient-to-t from-black/75 to-transparent px-3 pb-[calc(0.875rem+env(safe-area-inset-bottom))] pt-3.5">
          {pieces.map((piece, index) => (
            <button
              key={piece.piece_id}
              onClick={() => ouvrir(index)}
              aria-current={index === indexPiece}
              className={`flex-none rounded-full border px-4 py-2 text-[13.5px] transition ${
                index === indexPiece
                  ? "border-[#2f6df6] bg-[#2f6df6] font-semibold"
                  : "border-white/20 bg-[#141821]/70 hover:bg-[#2f6df6]/35"
              }`}
            >
              {piece.piece_nom ?? `Pièce ${index + 1}`}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
