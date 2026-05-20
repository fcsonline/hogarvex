import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hogarvex - Instalaciones, Reparaciones y Mantenimiento",
  description:
    "Servicio profesional de fontanería, electricidad y reparaciones en Barcelona y Maresme. Presupuesto en 1 hora. Equipo técnico certificado con 20 años de experiencia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
