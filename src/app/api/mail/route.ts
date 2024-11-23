import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json(
            { error: "Name, email, and message are required." },
            { status: 400 }
        );
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_ID,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        // Define the email list
        const mailList = process.env.EMAIL_RECIPIENTS?.split(",") || [];

        // Loop through the email list and send the email to each recipient
        for (let i = 0; i < mailList.length; i++) {
            const mailOptions = {
                from: "Eraya Foods Message",
                to: mailList[i],
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
            };

            await transporter.sendMail(mailOptions);
        }

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
