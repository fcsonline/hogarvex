"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";

const localeNames: Record<string, string> = {
  es: "ES",
  ca: "CA",
  en: "EN",
};

export function Header({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#servicios", label: dict.header.services },
    { href: "#proyectos", label: dict.header.projects },
    { href: "#resenas", label: dict.header.reviews },
    { href: "#faq", label: dict.header.faq },
    { href: "#contacto", label: dict.header.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex-shrink-0">
            <Image
              src="/images/logo-small.png"
              alt="Hogarvex - Instalaciones, Reparaciones y Mantenimiento"
              width={150}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Language switcher */}
            <div className="flex items-center gap-1 ml-4 border-l pl-4 border-gray-200">
              {Object.entries(localeNames).map(([locale, name]) => (
                <Link
                  key={locale}
                  href={`/${locale}`}
                  className={`text-xs px-2 py-1 rounded ${
                    locale === lang
                      ? "bg-gold text-white font-bold"
                      : "text-gray-500 hover:text-gold"
                  }`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-gold py-2 px-4"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 px-4 pt-2 border-t border-gray-100 mt-2">
                {Object.entries(localeNames).map(([locale, name]) => (
                  <Link
                    key={locale}
                    href={`/${locale}`}
                    className={`text-xs px-3 py-1 rounded ${
                      locale === lang
                        ? "bg-gold text-white font-bold"
                        : "text-gray-500 hover:text-gold"
                    }`}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
