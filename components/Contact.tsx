"use client";

import { useState, type FormEvent } from "react";
import { socialLinks } from "@/lib/nav";

const projectTypes = [
  "Application web",
  "Application mobile",
  "Intelligence artificielle",
  "Télécommunications / Fibre optique",
  "Communication & écrans LED",
  "Plateforme numérique",
  "Autre",
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Nouveau projet — ${data.get("projectType") || "Non précisé"}`
    );
    const body = encodeURIComponent(
      `Nom : ${data.get("name")}\n` +
        `Entreprise : ${data.get("company")}\n` +
        `Email : ${data.get("email")}\n` +
        `Téléphone : ${data.get("phone")}\n` +
        `Type de projet : ${data.get("projectType")}\n\n` +
        `Message :\n${data.get("message")}`
    );
    // Adresse à confirmer avant mise en ligne — placeholder cohérent avec le nom de domaine.
    window.location.href = `mailto:contact@soun7.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-black py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-silver/15 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="bridge-rule text-xs font-semibold uppercase tracking-[0.28em] text-sky">
              Contact
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold italic text-white sm:text-4xl lg:text-5xl">
              Parlons de votre projet
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-silver-light/70">
              Décrivez-nous votre besoin : notre équipe reviendra vers vous
              pour échanger sur la meilleure façon de le concrétiser.
            </p>

            <div className="mt-10 space-y-3 text-sm text-silver-light/70">
              <p>
                <span className="text-silver-light/50">Email — </span>
                contact@soun7.com
                <span className="ml-2 text-xs text-silver/40">
                  (à confirmer)
                </span>
              </p>
              <p>
                <span className="text-silver-light/50">Localisation — </span>
                Cotonou, Bénin
              </p>
            </div>

            <div className="mt-10 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  title={
                    social.placeholder
                      ? `${social.label} — lien à ajouter`
                      : social.label
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-silver/20 text-xs font-semibold text-silver-light/70 transition-colors hover:border-sky hover:text-sky"
                >
                  {social.label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl card-border bg-gradient-to-b from-white/[0.03] to-transparent p-8 sm:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Nom complet" name="name" required />
              <Field label="Entreprise" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Téléphone" name="phone" type="tel" />
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-silver-light/60">
                Type de projet
              </label>
              <select
                name="projectType"
                required
                defaultValue=""
                className="w-full rounded-xl border border-silver/20 bg-black-soft px-4 py-3 text-sm text-white outline-none transition-colors focus:border-sky"
              >
                <option value="" disabled>
                  Sélectionnez une option
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-silver-light/60">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Parlez-nous de votre projet…"
                className="w-full resize-none rounded-xl border border-silver/20 bg-black-soft px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-silver/40 focus:border-sky"
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-gradient-to-r from-sky to-electric px-7 py-3.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.01]"
            >
              Parlons de votre projet
            </button>

            {status === "sent" && (
              <p className="mt-4 text-center text-sm text-sky">
                Votre messagerie s&rsquo;ouvre avec les informations
                pré-remplies — il ne reste qu&rsquo;à envoyer.
              </p>
            )}
          </form>
        </div>
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
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-silver-light/60">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-silver/20 bg-black-soft px-4 py-3 text-sm text-white outline-none transition-colors focus:border-sky"
      />
    </div>
  );
}
