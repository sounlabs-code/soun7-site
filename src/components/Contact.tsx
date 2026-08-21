"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

const SOCIALS = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "X (Twitter)", href: "#" },
];

export default function Contact() {
  const { locale } = useLanguage();
  const t = content[locale].contact;
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `${t.subjectPrefix} — ${form.get("projectType") || "SOUN7"}`
    );
    const body = encodeURIComponent(
      `${t.fields.name} : ${form.get("name")}\n` +
        `${t.fields.company} : ${form.get("company")}\n` +
        `${t.fields.email} : ${form.get("email")}\n` +
        `${t.fields.phone} : ${form.get("phone")}\n` +
        `${t.fields.projectType} : ${form.get("projectType")}\n\n` +
        `${t.fields.message} :\n${form.get("message")}`
    );
    window.location.href = `mailto:${t.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 bg-white/[0.02] border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-s7-sky-blue">
            {t.eyebrow}
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-s7-white">
            {t.title}
          </h2>
          <p className="mt-6 text-s7-silver-light/65 leading-relaxed max-w-sm">
            {t.intro}
          </p>

          <div className="mt-12 space-y-3 text-sm text-s7-silver-light/70">
            <p>{t.location}</p>
            <p>{t.email}</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-s7-silver-light/70 hover:border-s7-sky-blue hover:text-s7-white transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
          <p className="mt-3 text-xs text-s7-silver-metal/50">
            {t.socialsNote}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid sm:grid-cols-2 gap-6 rounded-2xl border border-white/10 p-6 sm:p-10"
        >
          <Field label={t.fields.name} name="name" required />
          <Field label={t.fields.company} name="company" />
          <Field label={t.fields.email} name="email" type="email" required />
          <Field label={t.fields.phone} name="phone" type="tel" />

          <label className="sm:col-span-2 flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wide text-s7-silver-metal">
              {t.fields.projectType}
            </span>
            <select
              name="projectType"
              required
              defaultValue=""
              className="rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm text-s7-white focus:border-s7-sky-blue focus:outline-none [color-scheme:dark]"
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
          </label>

          <label className="sm:col-span-2 flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wide text-s7-silver-metal">
              {t.fields.message}
            </span>
            <textarea
              name="message"
              required
              rows={5}
              className="rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm text-s7-white placeholder:text-s7-silver-metal/40 focus:border-s7-sky-blue focus:outline-none resize-none"
              placeholder={t.messagePlaceholder}
            />
          </label>

          <div className="sm:col-span-2 flex items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-s7-electric-blue px-7 py-3.5 text-sm font-semibold text-s7-white hover:brightness-110 transition-all duration-300"
            >
              {t.submitLabel}
            </button>
            {sent && (
              <span className="text-xs text-s7-sky-blue">{t.sentNote}</span>
            )}
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-wide text-s7-silver-metal">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm text-s7-white placeholder:text-s7-silver-metal/40 focus:border-s7-sky-blue focus:outline-none"
      />
    </label>
  );
}
