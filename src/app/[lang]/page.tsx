import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "./dictionaries";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Projects } from "@/components/Projects";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <Hero dict={dict} lang={lang as Locale} />
      <Services dict={dict} />
      <HowItWorks dict={dict} />
      <Projects dict={dict} />
      <Reviews dict={dict} />
      <Faq dict={dict} lang={lang as Locale} />
      <Contact dict={dict} lang={lang as Locale} />
    </>
  );
}
