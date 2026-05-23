"use client";

import { useState, useRef } from "react";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";

export function Contact({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const typedRef = useRef(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.set("ty", typedRef.current ? "true" : "false");

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

        <form onSubmit={handleSubmit} onKeyDown={() => { typedRef.current = true; }} className="space-y-6">
          {/* Honeypot field - hidden from real users */}
          <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
            <input type="text" name="message" tabIndex={-1} autoComplete="off" />
          </div>
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
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-green-800 text-xl font-semibold mb-2">
                {dict.contact.success}
              </p>
              <p className="text-green-600 text-sm">
                {dict.contact.whatsappAlt}
              </p>
            </div>
          )}
          {status === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-red-800 text-lg font-semibold mb-2">
                {dict.contact.error}
              </p>
            </div>
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
