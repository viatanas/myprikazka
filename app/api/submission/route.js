import dbConnect from "@/lib/db/dbConect";
import Character from "@/lib/models/Character";
import mongoose from "mongoose";
import { Resend } from "resend";

import EmailTemplate from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Connect to database
    await dbConnect();

    // Parse form data
    const formData = await request.formData();

    // Extract form fields
    const childName = formData.get("child_name");
    const childGender = formData.get("child_gender");
    const childAge = formData.get("child_age");
    const email = formData.get("email");
    const phone = formData.get("phone");

    const character = await Character.create({
      name: childName,
      gender: childGender,
      age: childAge,
      email,
      phoneNumber: phone,
    });

    await resend.emails.send({
      from: "Viktor @ MyPrikazka <info@myprikazka.com>",
      to: "viktor_atanasov@icloud.com",
      subject: `📣 Нова заявка за книжка: ${childName}`,
      react: EmailTemplate({
        childName,
        childGender,
        childAge,
        email,
        phone,
      }),
    });

    return new Response(
      JSON.stringify({ characterId: character._id.toString() }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Failed to save form data:", error);
    return Response.json(
      {
        success: false,
        message: "Failed to save form data to MongoDB",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
