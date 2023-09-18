"use server"
import {Resend} from 'resend';
import cFormEmail from '@/email/cFormEmail';
import React from 'react';


const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength:number) => {
    if (!value || typeof value !== 'string' || value.length > maxLength){
        return false
    }

    return true;
}

export const sendEmail = async (data: FormData) => {
    const message = data.get("message");
    const email = data.get("senderEmail");

    
    if (!validateString(message, 5000) || typeof message !== 'string'){
        return{
            error: "Invalid message",
        }
    }

    if (!validateString(email, 500) || typeof email !== 'string'){
        return{
            error: "Invalid email",
        }
    }

    try{
        await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: 'baolamleh@gmail.com',
            subject: "Message from portfolio",
            reply_to: email,
            react: React.createElement(cFormEmail, 
                {
                    message: message as string,
                    email: email as string
                }),

        })
    }
    catch(error:any){
        throw new Error(`Failed to send email: ${error.message}`)
    }

  }