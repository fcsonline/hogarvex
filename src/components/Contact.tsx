"use client";

import { useState } from "react";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";

export function Contact({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {dict.contact.title}
          </h2>
          <p className="text-lg text-gray-600">
            {dict.contact.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {dict.contact.name} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder={dict.contact.namePlaceholder}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {dict.contact.phone} *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder={dict.contact.phonePlaceholder}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              {dict.contact.email} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder={dict.contact.emailPlaceholder}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              {dict.contact.service} *
            </label>
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors bg-white"
            >
              <option value="" disabled>{dict.contact.servicePlaceholder}</option>
              <option value="fontaneria">{dict.contact.servicePlumbing}</option>
              <option value="electricidad">{dict.contact.serviceElectrical}</option>
              <option value="reparaciones">{dict.contact.serviceRepairs}</option>
              <option value="otros">{dict.contact.serviceOther}</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              {dict.contact.description} *
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              placeholder={dict.contact.descriptionPlaceholder}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors resize-none"
            />
          </div>

          <input type="hidden" name="lang" value={lang} />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-gold hover:bg-gold-dark text-white font-semibold py-4 px-8 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            {status === "sending" ? dict.contact.sending : dict.contact.submit}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-center font-medium">
              {dict.contact.success}
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center font-medium">
              {dict.contact.error}
            </p>
          )}
        </form>

        <p className="text-center mt-6 text-sm text-gray-500">
          <a
            href="https://wa.me/34633450417?text=Hola%2C%20necesito%20un%20presupuesto%20para..."
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            {dict.contact.whatsappAlt}
          </a>
        </p>
      </div>
    </section>
  );
}
