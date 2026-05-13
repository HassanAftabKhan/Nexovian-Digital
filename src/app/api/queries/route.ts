import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface QueryRequest {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: QueryRequest = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { message: "Missing required fields: name, email, and message" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Validate message length
    if (body.message.trim().length < 10) {
      return NextResponse.json(
        { message: "Message must be at least 10 characters long" },
        { status: 400 }
      );
    }

    // Send email to company inbox
    const companyEmailResult = await resend.emails.send({
      from: "onboard@resend.dev",
      to: "blackwatch4321@gmail.com",
      subject: `New Query from ${body.name}`,
      html: `
        <h2>New Query Received</h2>
        <p><strong>From:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (companyEmailResult.error) {
      console.error("Error sending company email:", companyEmailResult.error);
      return NextResponse.json(
        { message: "Failed to send query. Please try again." },
        { status: 500 }
      );
    }

    // Note: Customer confirmation email skipped in test mode
    // When domain is verified, enable: customerEmailResult below

    return NextResponse.json(
      { message: "Query sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing query:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
