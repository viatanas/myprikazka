import dbConnect from "@/lib/db/dbConect";
import Character from "@/lib/models/Character";
import mongoose from "mongoose";
import { Resend } from "resend";
import { after } from "next/server";

const resend = new Resend("re_WAstFQKP_6F6rZiRxk5LfbLcrswBSVps6");

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

    // after(async () => {
    //   resend.emails.send({
    //     from: "dreamstimebg@gmail.com",
    //     to: "viktor_atanasov@icloud.com",
    //     subject: "Hello World",
    //     html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    //   });
    // });

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
