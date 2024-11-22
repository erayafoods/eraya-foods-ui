import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const { email } = await req.json();

    if (!email) {
        return NextResponse.json(
            { error: "Email is required." },
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
                rejectUnauthorized: true,
            },
        });

        // Define the email list
        const mailList = process.env.EMAIL_RECIPIENTS?.split(",") || [];

        // Loop through the email list and send the email to each recipient
        for (let i = 0; i < mailList.length; i++) {
            const mailOptions = {
                from: "Blog subscriber",
                to: mailList[i],
                subject: "Subscriber",
                text: `You have a new subscribor for blogs (${email}):
        
                
                
                Contact Details:
                
                Email: ${email}
               
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
