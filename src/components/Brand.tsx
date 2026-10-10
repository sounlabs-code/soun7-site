import Image from "next/image";

/** Official S7 icon + SOUN7 wordmark (Orbitron, the brand's technical face). */
export default function Brand({ size = "md" }: { size?: "sm" | "md" }) {
  const icon = size === "sm" ? "h-7" : "h-9";
  const text = size === "sm" ? "text-base" : "text-lg sm:text-xl";
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/brand/soun7_icone_couleur.png"
        alt=""
        width={40}
        height={38}
        className={`${icon} w-auto drop-shadow-[0_0_12px_rgba(30,120,220,0.55)]`}
        priority
      />
      <span className={`font-tech font-bold tracking-[0.08em] text-s7-white ${text}`}>
        SOUN<span className="text-s7-electric-blue">7</span>
      </span>
    </span>
  );
}
