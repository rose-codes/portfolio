"use server";

import { Resend } from "resend"
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')

    // server-side verification
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email"
        }
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message"
        }
    }
    try {

        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: 'rosehle33@gmail.com',
            subject: 'Message from contact form',
            text: message as string,
            reply_to: senderEmail as string
        })
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        };
    }
};