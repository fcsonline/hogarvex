import { notFound } from "next/navigation";
import { Geist } from "next/font/google";
import { getDictionary, hasLocale, locales, type Locale } from "./dictionaries";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SchemaOrg } from "@/components/SchemaOrg";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang as Locale);

  const languages: Record<string, string> = {};
  locales.forEach((l) => {
    languages[l] = `https://hogarvex.es/${l}`;
  });

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    metadataBase: new URL("https://hogarvex.es"),
    alternates: {
      canonical: `https://hogarvex.es/${lang}`,
      languages,
    },
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      url: `https://hogarvex.es/${lang}`,
      siteName: "Hogarvex",
      locale: lang === "ca" ? "ca_ES" : lang === "en" ? "en_US" : "es_ES",
      type: "website",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Hogarvex - Instalaciones, Reparaciones y Mantenimiento",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      images: ["/images/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <html lang={lang} className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          defer
          data-domain="hogarvex.es"
          src="https://stats.thegreenvintage.com/js/script.js"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans">
        <SchemaOrg lang={lang as Locale} />
        <Header dict={dict} lang={lang as Locale} />
        <main className="flex-1">{children}</main>
        <Footer dict={dict} lang={lang as Locale} />
        <WhatsAppButton dict={dict} />
      </body>
    </html>
  );
}
