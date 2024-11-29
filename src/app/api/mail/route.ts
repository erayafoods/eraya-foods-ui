import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Assert that the environment variables are defined
const sendGridApiKey = process.env.SENDGRID_API_KEY;
const emailId = process.env.EMAIL_ID;

if (!sendGridApiKey || !emailId) {
    throw new Error(
        "SENDGRID_API_KEY and EMAIL_ID must be set in environment variables GOt it ."
    );
}

// Set your SendGrid API Key from environment variables
sgMail.setApiKey(sendGridApiKey);

export async function POST(req: NextRequest) {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json(
            { error: "Name, email, and message are required." },
            { status: 400 }
        );
    }

    try {
        // Define the email list
        const mailList = process.env.EMAIL_RECIPIENTS?.split(",") || [];

        // Ensure `from` is a valid email before using it
        if (!emailId) {
            return NextResponse.json(
                { error: "The sender email (EMAIL_ID) is not defined." },
                { status: 500 }
            );
        }

        // Create the email content
        const messages = mailList.map((recipient) => ({
            to: recipient,
            from: emailId, // Your verified SendGrid email
            subject: "MESSAGE FROM VISITOR",
            text: `You have received a new message from ${name} (${email}):
        
                Message:
                ${message}
                
                Contact Details:
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Message: ${message}
            `,
        }));

        // Send all emails in parallel using SendGrid
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
