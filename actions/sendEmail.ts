"use server";

import React from "react"
import { Resend } from "resend"
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
import { ContactFormEmail } from "@/email/contact-form-email";

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
    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.com>",
            to: 'rosehle33@gmail.com',
            subject: 'Message from contact form',
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string
            }),
            reply_to: senderEmail as string
        })
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        };
    }
    return {
        data,
    }
};