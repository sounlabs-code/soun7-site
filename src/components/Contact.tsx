"use client";

import { useState, type FormEvent } from "react";

const PROJECT_TYPES = [
  "Application mobile",
  "Application web / Plateforme",
  "Intelligence artificielle",
  "Fibre optique / Télécoms",
  "Communication & écrans LED",
  "Autre projet",
];

const SOCIALS = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "X (Twitter)", href: "#" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Nouveau projet — ${form.get("projectType") || "SOUN7"}`
    );
    const body = encodeURIComponent(
      `Nom : ${form.get("name")}\n` +
        `Entreprise : ${form.get("company")}\n` +
        `Email : ${form.get("email")}\n` +
        `Téléphone : ${form.get("phone")}\n` +
        `Type de projet : ${form.get("projectType")}\n\n` +
        `Message :\n${form.get("message")}`
    );
    window.location.href = `mailto:contact@soun7.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-white/[0.02] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-s7-sky-blue">
            Contact
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-s7-white">
            Parlons de votre projet
          </h2>
          <p className="mt-6 text-s7-silver-light/65 leading-relaxed max-w-sm">
            Décrivez-nous votre projet : notre équipe reviendra vers vous
            pour échanger sur les objectifs, le périmètre et les prochaines
            étapes.
          </p>

          <div className="mt-12 space-y-3 text-sm text-s7-silver-light/70">
            <p>Cotonou, Bénin</p>
            <p>contact@soun7.com</p>
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
            Liens réseaux sociaux à venir.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid sm:grid-cols-2 gap-6 rounded-2xl border border-white/10 p-6 sm:p-10"
        >
          <Field label="Nom" name="name" required />
          <Field label="Entreprise" name="company" />
          <Field label="Email" name="email" type="email" required />
          <Field label="Téléphone" name="phone" type="tel" />

          <label className="sm:col-span-2 flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wide text-s7-silver-metal">
              Type de projet
            </span>
            <select
              name="projectType"
              required
              defaultValue=""
              className="rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm text-s7-white focus:border-s7-sky-blue focus:outline-none [color-scheme:dark]"
            >
              <option value="" disabled>
                Sélectionnez un type de projet
              </option>
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>

          <label className="sm:col-span-2 flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wide text-s7-silver-metal">
              Message
            </span>
            <textarea
              name="message"
              required
              rows={5}
              className="rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm text-s7-white placeholder:text-s7-silver-metal/40 focus:border-s7-sky-blue focus:outline-none resize-none"
              placeholder="Décrivez votre projet en quelques lignes..."
            />
          </label>

          <div className="sm:col-span-2 flex items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-s7-electric-blue px-7 py-3.5 text-sm font-semibold text-s7-white hover:brightness-110 transition-all duration-300"
            >
              Parlons de votre projet
            </button>
            {sent && (
              <span className="text-xs text-s7-sky-blue">
                Votre client mail va s&apos;ouvrir pour finaliser l&apos;envoi.
              </span>
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
