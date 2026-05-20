import { notFound } from "next/navigation";
import { hasLocale } from "../dictionaries";

export default async function Privacidad({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">
        {lang === "ca" ? "Política de Privacitat" : lang === "en" ? "Privacy Policy" : "Política de Privacidad"}
      </h1>

      <div className="prose prose-gray max-w-none space-y-6 text-sm text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            {lang === "ca" ? "Responsable del tractament" : lang === "en" ? "Data controller" : "Responsable del tratamiento"}
          </h2>
          <ul className="list-none space-y-1 mt-2">
            <li><strong>{lang === "en" ? "Owner" : "Titular"}:</strong> Hogarvex</li>
            <li><strong>NIF:</strong> 53637255J</li>
            <li><strong>Email:</strong> hogarvex@gmail.com</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            {lang === "ca" ? "Finalitat del tractament" : lang === "en" ? "Purpose of processing" : "Finalidad del tratamiento"}
          </h2>
          <p>
            {lang === "ca"
              ? "Les dades personals recollides a través del formulari de contacte seran tractades amb la finalitat de gestionar la seva sol·licitud de pressupost i comunicar-nos amb vostè en relació als nostres serveis."
              : lang === "en"
              ? "Personal data collected through the contact form will be processed for the purpose of managing your quote request and communicating with you regarding our services."
              : "Los datos personales recogidos a través del formulario de contacto serán tratados con la finalidad de gestionar su solicitud de presupuesto y comunicarnos con usted en relación a nuestros servicios."}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            {lang === "ca" ? "Base jurídica" : lang === "en" ? "Legal basis" : "Base jurídica"}
          </h2>
          <p>
            {lang === "ca"
              ? "El tractament de les seves dades es basa en el consentiment atorgat en enviar el formulari de contacte i en l'interès legítim per atendre la seva sol·licitud."
              : lang === "en"
              ? "The processing of your data is based on the consent given when submitting the contact form and on the legitimate interest in attending to your request."
              : "El tratamiento de sus datos se basa en el consentimiento otorgado al enviar el formulario de contacto y en el interés legítimo para atender su solicitud."}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            {lang === "ca" ? "Drets" : lang === "en" ? "Rights" : "Derechos"}
          </h2>
          <p>
            {lang === "ca"
              ? "Pot exercir els seus drets d'accés, rectificació, supressió, portabilitat i oposició enviant un correu electrònic a hogarvex@gmail.com."
              : lang === "en"
              ? "You can exercise your rights of access, rectification, erasure, portability and objection by sending an email to hogarvex@gmail.com."
              : "Puede ejercer sus derechos de acceso, rectificación, supresión, portabilidad y oposición enviando un correo electrónico a hogarvex@gmail.com."}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">
            {lang === "ca" ? "Conservació de dades" : lang === "en" ? "Data retention" : "Conservación de datos"}
          </h2>
          <p>
            {lang === "ca"
              ? "Les dades es conservaran durant el temps necessari per atendre la seva sol·licitud i, posteriorment, durant els terminis legalment establerts."
              : lang === "en"
              ? "Data will be retained for as long as necessary to attend to your request and, subsequently, for the legally established periods."
              : "Los datos se conservarán durante el tiempo necesario para atender su solicitud y, posteriormente, durante los plazos legalmente establecidos."}
          </p>
        </section>
      </div>
    </div>
  );
}
