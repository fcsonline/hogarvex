import { NextResponse } from "next/server";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const serviceLabels: Record<string, string> = {
  fontaneria: "Fontanería",
  electricidad: "Electricidad",
  reparaciones: "Reparaciones",
  otros: "Otros",
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const formGet = (name: string) => {
      const value = formData.get(name);
      return value ? value.toString() : "";
    };

    // Bot detection - Check 1: The bot didn't fill out the fields with key strokes
    if (formGet("ty") === "false") {
      console.log(`Bot detected - Check 1: '${formGet("name").slice(0, 150)}'`);
      return NextResponse.json({ success: true });
    }

    // Bot detection - Check 2: The bot filled out the honeypot hidden input
    if (Boolean(formData.get("message"))) {
      console.log(`Bot detected - Check 2: '${formGet("name").slice(0, 150)}'`);
      return NextResponse.json({ success: true });
    }

    // Bot detection - Check 3: Testing purposes
    if (formGet("name").includes("Bot")) {
      console.log(`Bot detected - Check 3: '${formGet("name").slice(0, 150)}'`);
      return NextResponse.json({ success: true });
    }

    const name = formGet("name");
    const phone = formGet("phone");
    const email = formGet("email");
    const service = formGet("service");
    const description = formGet("description");
    const lang = formGet("lang");

    const serviceLabel = serviceLabels[service] || service;
    const subject = `[Hogarvex] ${serviceLabel} - ${name}`;

    const text = `
Nombre: ${name}
Email: ${email}
Teléfono: ${phone}
Servicio: ${serviceLabel}
Idioma: ${lang}
Descripción:
${description}

Enviado desde: https://www.hogarvex.es
    `.trim();

    const html = `
<p><strong>Nombre:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Teléfono:</strong> ${phone}</p>
<p><strong>Servicio:</strong> ${serviceLabel}</p>
<p><strong>Idioma:</strong> ${lang}</p>
<p><strong>Descripción:</strong></p>
<p>${description}</p>
<br>
<p>Enviado desde: <a href="https://www.hogarvex.es">Hogarvex</a></p>
    `.trim();

    const from = `${name} <${email}>`;

    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
      username: "api",
      timeout: 10000,
      key: process.env.MAILGUN_API_KEY ?? "empty-api-key",
      url: "https://api.eu.mailgun.net",
    });

    const domain = process.env.MAILGUN_DOMAIN ?? "sandbox.mailgun.org";

    await mg.messages.create(domain, {
      from,
      to: "hogarvex@gmail.com",
      bcc: "fcsonline@gmail.com",
      subject,
      text,
      html,
    });

    console.log("Mail sent!");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
