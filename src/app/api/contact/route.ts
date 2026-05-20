import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      description: formData.get("description") as string,
      lang: formData.get("lang") as string,
      // photo: formData.get("photo") - handle file upload
    };

    // TODO: Integrate with Holded CRM
    // https://developers.holded.com/reference
    // For now, log the data and return success
    console.log("Contact form submission:", data);

    // TODO: Send email notification to hogarvex@gmail.com
    // TODO: Create contact/lead in Holded

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
