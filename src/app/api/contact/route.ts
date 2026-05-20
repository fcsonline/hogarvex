import { NextResponse } from "next/server";

const HOLDED_API_URL = "https://api.holded.com/api/invoicing/v1";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const service = formData.get("service") as string;
    const description = formData.get("description") as string;
    const lang = formData.get("lang") as string;

    const apiKey = process.env.HOLDED_API_KEY;
    if (!apiKey) {
      console.error("HOLDED_API_KEY not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // 1. Create contact (lead) in Holded
    const contactRes = await fetch(`${HOLDED_API_URL}/contacts`, {
      method: "POST",
      headers: {
        key: apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        type: "lead",
        tags: ["web", service, lang],
        note: description,
      }),
    });

    if (!contactRes.ok) {
      const err = await contactRes.text();
      console.error("Holded contact creation failed:", err);
      return NextResponse.json(
        { error: "Failed to create contact" },
        { status: 500 }
      );
    }

    const contact = await contactRes.json();
    const contactId = contact.id || contact._id;
    console.log("Holded contact created:", JSON.stringify(contact));

    // 2. Create deal linked to the contact
    const serviceLabels: Record<string, string> = {
      fontaneria: "Fontanería",
      electricidad: "Electricidad",
      reparaciones: "Reparaciones",
      otros: "Otros",
    };

    const dealBody = {
      name: `Presupuesto - ${serviceLabels[service] || service} - ${name}`,
      contact: contactId,
      pipeline: "6a0dfaf3ebcdfad76906e5e3",
      notes: `Servicio: ${serviceLabels[service] || service}\nIdioma: ${lang}\n\n${description}`,
    };
    console.log("Holded deal request body:", JSON.stringify(dealBody));

    const dealRes = await fetch(`${HOLDED_API_URL}/deals`, {
      method: "POST",
      headers: {
        key: apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dealBody),
    });

    const dealResponseText = await dealRes.text();
    console.log("Holded deal response status:", dealRes.status);
    console.log("Holded deal response body:", dealResponseText);

    if (!dealRes.ok) {
      console.error("Holded deal creation failed:", dealRes.status, dealResponseText);
      // Contact was created, so we still return success
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
