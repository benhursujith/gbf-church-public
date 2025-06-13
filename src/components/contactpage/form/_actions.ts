'use server';

import { Resend } from 'resend';
import { z } from 'zod';

import ContactFormEmail from '@/components/contactpage/form/contact-form-email';
import { ContactFormSchema } from '@/components/contactpage/form/schema';

type ContactFormInputs = z.infer<typeof ContactFormSchema>;
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.success) {
    const { name, email, message } = result.data;
    try {
      const data = await resend.emails.send({
        from: 'Calvary Bible Fellowship. <reachout@cbf-church.org>',
        to: ['cbfmember001@gmail.com'],
        subject: 'Contact form submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        react: ContactFormEmail({ name, email, message }),
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}
