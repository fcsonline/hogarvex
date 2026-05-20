import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "../dictionaries";

export default async function AvisoLegal({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">
        {lang === "ca" ? "Avís Legal" : lang === "en" ? "Legal Notice" : "Aviso Legal"}
      </h1>

      <div className="prose prose-gray max-w-none space-y-6 text-sm text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            {lang === "ca" ? "Identificació del titular" : lang === "en" ? "Owner identification" : "Identificación del titular"}
          </h2>
          <ul className="list-none space-y-1 mt-2">
            <li><strong>{lang === "en" ? "Owner" : "Titular"}:</strong> Hogarvex</li>
            <li><strong>NIF:</strong> 53637255J</li>
            <li><strong>{lang === "ca" ? "Adreça" : lang === "en" ? "Address" : "Dirección"}:</strong> Calle Lola Anglada 15, Tiana, Barcelona</li>
            <li><strong>Email:</strong> hogarvex@gmail.com</li>
            <li><strong>{lang === "ca" ? "Telèfon" : lang === "en" ? "Phone" : "Teléfono"}:</strong> +34 633 45 04 17</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            {lang === "ca" ? "Condicions d'ús" : lang === "en" ? "Terms of use" : "Condiciones de uso"}
          </h2>
          <p>
            {lang === "ca"
              ? "L'accés a aquest lloc web és gratuït. L'usuari es compromet a fer un ús adequat dels continguts i serveis oferts, abstenint-se de realitzar activitats il·lícites o contràries a la bona fe."
              : lang === "en"
              ? "Access to this website is free. Users agree to make proper use of the content and services offered, refraining from carrying out illegal activities or activities contrary to good faith."
              : "El acceso a este sitio web es gratuito. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos, absteniéndose de realizar actividades ilícitas o contrarias a la buena fe."}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            {lang === "ca" ? "Propietat intel·lectual" : lang === "en" ? "Intellectual property" : "Propiedad intelectual"}
          </h2>
          <p>
            {lang === "ca"
              ? "Tots els continguts d'aquest lloc web (textos, imatges, logotips, etc.) són propietat de Hogarvex o dels seus legítims propietaris. Queda prohibida la seva reproducció sense autorització."
              : lang === "en"
              ? "All content on this website (texts, images, logos, etc.) is the property of Hogarvex or its legitimate owners. Reproduction without authorization is prohibited."
              : "Todos los contenidos de este sitio web (textos, imágenes, logotipos, etc.) son propiedad de Hogarvex o de sus legítimos propietarios. Queda prohibida su reproducción sin autorización."}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            {lang === "ca" ? "Legislació aplicable" : lang === "en" ? "Applicable law" : "Legislación aplicable"}
          </h2>
          <p>
            {lang === "ca"
              ? "El present avís legal es regeix per la legislació espanyola vigent."
              : lang === "en"
              ? "This legal notice is governed by current Spanish legislation."
              : "El presente aviso legal se rige por la legislación española vigente."}
          </p>
        </section>
      </div>
    </div>
  );
}
