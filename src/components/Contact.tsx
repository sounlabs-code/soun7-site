"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

type Errors = Partial<Record<"name" | "email" | "projectType" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Contact() {
  const { locale } = useLanguage();
  const t = content[locale].contact;
  const [status, setStatus] = useState<"idle" | "opening" | "sent">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [projectType, setProjectType] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // A solution card can pre-select the project type.
  useEffect(() => {
    const onPick = (e: Event) => {
      const i = (e as CustomEvent<number>).detail;
      const value = content[locale].contact.projectTypes[i];
      if (value) setProjectType(value);
    };
    window.addEventListener("s7:project-type", onPick);
    return () => window.removeEventListener("s7:project-type", onPick);
  }, [locale]);

  function validate(form: FormData): Errors {
    const e: Errors = {};
    if (!String(form.get("name") || "").trim()) e.name = t.errors.required;
    const email = String(form.get("email") || "").trim();
    if (!email) e.email = t.errors.required;
    else if (!EMAIL_RE.test(email)) e.email = t.errors.email;
    if (!String(form.get("projectType") || "")) e.projectType = t.errors.required;
    if (!String(form.get("message") || "").trim()) e.message = t.errors.required;
    return e;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // Honeypot: real visitors never see or fill this field.
    if (String(form.get("website") || "")) return;

    const errs = validate(form);
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("opening");
    const subject = encodeURIComponent(`${t.subjectPrefix} — ${form.get("projectType") || "SOUN7"}`);
    const body = encodeURIComponent(
      `${t.fields.name} : ${form.get("name")}\n` +
        `${t.fields.company} : ${form.get("company")}\n` +
        `${t.fields.email} : ${form.get("email")}\n` +
        `${t.fields.phone} : ${form.get("phone")}\n` +
        `${t.fields.projectType} : ${form.get("projectType")}\n\n` +
        `${t.fields.message} :\n${form.get("message")}`,
    );
    // The site has no mail backend: the visitor's own mail app sends it.
    window.location.href = `mailto:${t.email}?subject=${subject}&body=${body}`;
    window.setTimeout(() => setStatus("sent"), 700);
  }

  const inputCls = (bad?: string) =>
    `w-full rounded-xl border bg-s7-abyss/60 px-4 py-3 text-sm text-s7-white placeholder:text-s7-silver-metal/40 transition-all focus:outline-none focus:ring-2 focus:ring-s7-sky-blue/40 ${
      bad ? "border-red-400/70" : "border-white/10 focus:border-s7-sky-blue"
    }`;

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 85% 70%, rgba(30,120,220,0.22), transparent 70%), radial-gradient(ellipse 40% 40% at 10% 20%, rgba(123,92,255,0.10), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <span data-reveal="fade" className="s7-eyebrow">
            {t.eyebrow}
          </span>
          <h2 data-reveal="up" className="mt-4 font-display text-3xl font-bold leading-[1.1] text-s7-white sm:text-4xl lg:text-5xl">
            {t.title1}{" "}
            <span className="bg-gradient-to-r from-s7-sky-blue to-s7-electric-blue bg-clip-text text-transparent">{t.titleAccent}</span>
          </h2>
          <p data-reveal="up" className="mt-6 max-w-md leading-relaxed text-s7-silver-light/65">
            {t.intro}
          </p>

          <ul data-reveal="up" className="mt-10 space-y-4 text-sm">
            <li className="flex items-center gap-3 text-s7-silver-light/80">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-s7-sky-blue/25 bg-s7-electric-blue/10 text-s7-sky-blue">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="M12 21s-7-6.3-7-12a7 7 0 0 1 14 0c0 5.7-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>
              </span>
              {t.location}
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-s7-sky-blue/25 bg-s7-electric-blue/10 text-s7-sky-blue">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
              </span>
              <a href={`mailto:${t.email}`} className="text-s7-silver-light/80 hover:text-s7-sky-blue">
                {t.email}
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs text-s7-silver-metal/50">{t.socialsNote}</p>

          {/* Laptop showing the brand mark */}
          <div data-reveal="up" className="relative mt-12 hidden max-w-sm lg:block" aria-hidden>
            <div className="relative rounded-t-xl border border-white/15 bg-[#050b18] p-2 shadow-[0_0_60px_-10px_rgba(30,120,220,0.6)]">
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-md bg-[radial-gradient(circle_at_50%_60%,#0f3a7a,#02040b_70%)]">
                <div className="absolute inset-0 s7-grid opacity-50" />
                <Image src="/brand/soun7_icone_couleur.png" alt="" width={120} height={114} className="relative w-24 drop-shadow-[0_0_25px_rgba(89,213,255,0.7)] s7-float" />
              </div>
            </div>
            <div className="mx-auto h-3 w-[112%] -translate-x-[5%] rounded-b-xl bg-gradient-to-b from-[#3a424c] to-[#14181e]" />
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          data-reveal="up"
          className="s7-glass relative grid gap-5 self-start rounded-3xl p-6 shadow-[0_40px_120px_-40px_rgba(30,120,220,0.6)] sm:grid-cols-2 sm:p-9"
        >
          <span aria-hidden className="pointer-events-none absolute inset-x-10 -top-px h-px bg-gradient-to-r from-transparent via-s7-sky-blue to-transparent" />

          <Field label={t.fields.name} name="name" required error={errors.name} cls={inputCls(errors.name)} autoComplete="name" />
          <Field label={t.fields.email} name="email" type="email" required error={errors.email} cls={inputCls(errors.email)} autoComplete="email" />
          <Field label={t.fields.phone} name="phone" type="tel" cls={inputCls()} autoComplete="tel" />
          <Field label={t.fields.company} name="company" cls={inputCls()} autoComplete="organization" />

          <label className="flex flex-col gap-2 sm:col-span-2">
            <span className="text-xs font-medium uppercase tracking-wide text-s7-silver-metal">
              {t.fields.projectType} <span className="text-s7-sky-blue">*</span>
            </span>
            <select
              name="projectType"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              aria-invalid={!!errors.projectType}
              aria-describedby={errors.projectType ? "err-projectType" : undefined}
              className={`${inputCls(errors.projectType)} [color-scheme:dark]`}
            >
              <option value="" disabled>
                {t.selectPlaceholder}
              </option>
              {t.projectTypes.map((pt) => (
                <option key={pt} value={pt}>
                  {pt}
                </option>
              ))}
            </select>
            {errors.projectType && <span id="err-projectType" className="text-xs text-red-300">{errors.projectType}</span>}
          </label>

          <label className="flex flex-col gap-2 sm:col-span-2">
            <span className="text-xs font-medium uppercase tracking-wide text-s7-silver-metal">
              {t.fields.message} <span className="text-s7-sky-blue">*</span>
            </span>
            <textarea
              name="message"
              rows={5}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "err-message" : undefined}
              className={`${inputCls(errors.message)} resize-none`}
              placeholder={t.messagePlaceholder}
            />
            {errors.message && <span id="err-message" className="text-xs text-red-300">{errors.message}</span>}
          </label>

          {/* honeypot */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute left-[-9999px] h-0 w-0 opacity-0" />

          <div className="sm:col-span-2">
            <button type="submit" disabled={status === "opening"} className="s7-btn s7-btn-primary w-full disabled:opacity-70">
              {status === "opening" ? t.sending : t.submitLabel}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M4 12h15M13 6l6 6-6 6" /></svg>
            </button>
            <p role="status" aria-live="polite" className="mt-4 min-h-5 text-center text-xs leading-relaxed text-s7-sky-blue">
              {status === "sent" ? t.sentNote : ""}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  error,
  cls,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  cls: string;
  autoComplete?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-wide text-s7-silver-metal">
        {label} {required && <span className="text-s7-sky-blue">*</span>}
      </span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `err-${name}` : undefined}
        className={cls}
      />
      {error && (
        <span id={`err-${name}`} className="text-xs text-red-300">
          {error}
        </span>
      )}
    </label>
  );
}
