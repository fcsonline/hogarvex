import Link from "next/link";
import Image from "next/image";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";

export function Footer({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Hogarvex"
              width={140}
              height={47}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              {dict.footer.description}
            </p>
          </div>

          {/* Info */}
          <div className="space-y-3 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {dict.footer.schedule}
            </p>
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {dict.footer.zone}
            </p>
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {dict.footer.warranty}
            </p>
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {dict.footer.experience}
            </p>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-3 text-sm">
            <p className="text-gray-400">
              <a href="mailto:hogarvex@gmail.com" className="hover:text-gold transition-colors">
                hogarvex@gmail.com
              </a>
            </p>
            <p className="text-gray-400">
              <a href="tel:+34633450417" className="hover:text-gold transition-colors">
                +34 633 45 04 17
              </a>
            </p>
            <p className="text-gray-400">
              <a href="/hogarvex.vcf" download className="hover:text-gold transition-colors">
                Guardar contacto
              </a>
            </p>
            <div className="flex gap-4 pt-2">
              <Link href={`/${lang}/aviso-legal`} className="text-gray-500 hover:text-gold transition-colors">
                {dict.footer.legal}
              </Link>
              <Link href={`/${lang}/privacidad`} className="text-gray-500 hover:text-gold transition-colors">
                {dict.footer.privacy}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Hogarvex. {dict.footer.rights}
        </div>
      </div>
    </footer>
  );
}
