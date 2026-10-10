export default function SectionHeading({
  eyebrow,
  title,
  accent,
  intro,
  align = "split",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  intro?: string;
  align?: "split" | "left";
}) {
  return (
    <div
      className={
        align === "split"
          ? "grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
          : "max-w-2xl"
      }
    >
      <div>
        <span data-reveal="fade" className="s7-eyebrow">
          {eyebrow}
        </span>
        <h2
          data-reveal="up"
          className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-s7-white sm:text-4xl lg:text-[3.1rem]"
        >
          {title}
          {accent && (
            <>
              {" "}
              <span className="bg-gradient-to-r from-s7-sky-blue to-s7-electric-blue bg-clip-text text-transparent">
                {accent}
              </span>
            </>
          )}
        </h2>
      </div>
      {intro && (
        <p
          data-reveal="up"
          data-reveal-delay="0.1"
          className={`text-sm leading-relaxed text-s7-silver-light/65 sm:text-base ${
            align === "split" ? "lg:max-w-sm lg:justify-self-end" : "mt-5"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
