import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Assert that the environment variables are defined
const sendGridApiKey = process.env.SENDGRID_API_KEY;
const emailId = process.env.EMAIL_ID;

if (!sendGridApiKey || !emailId) {
    throw new Error(
        "SENDGRID_API_KEY and EMAIL_ID must be set in environment variables."
    );
}

// Set your SendGrid API Key from environment variables
sgMail.setApiKey(sendGridApiKey);

export async function POST(req: NextRequest) {
    const { email } = await req.json();
    console.log("SendGrid API Key:", email); // Log email (or remove in production)

    if (!email) {
        return NextResponse.json(
            { error: "Email is required." },
            { status: 400 }
        );
    }

    try {
        // Define the email list
        const mailList = process.env.EMAIL_RECIPIENTS?.split(",") || [];

        // Loop through the email list and send the email to each recipient
        const messages = mailList.map((recipient) => ({
            to: recipient,
            from: emailId, // Your verified SendGrid email
            subject: "New Blog Subscriber",
            text: `You have a new subscriber for blogs (${email}):\n\nContact Details:\n\nEmail: ${email}`,
        }));

        // Send all emails in parallel
        await sgMail.send(messages);

        return NextResponse.json({
            message: "Your message has been sent successfully!",
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email. Please try again later." },
            { status: 500 }
        );
    }
}

export async function GET(req: NextRequest) {
    return NextResponse.json(
        { message: "GET request not supported here" },
        { status: 405 }
    );
}
