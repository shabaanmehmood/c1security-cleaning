import { QuoteFormData } from "@/validators/quoteFormValidator";
import emailjs from "@emailjs/browser";

export async function submitQuote(data: QuoteFormData) {
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceID || !templateID || !publicKey) {
    throw new Error("Missing EmailJS environment variables in .env.local");
  }

  const response = await emailjs.send(
    serviceID,
    templateID,
    data as unknown as Record<string, unknown>,
    publicKey
  );

  return response;
} 