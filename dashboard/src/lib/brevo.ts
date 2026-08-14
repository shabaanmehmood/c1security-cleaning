// lib/brevo.ts

import { BrevoClient } from "@getbrevo/brevo";

const apiKey = process.env.BREVO_API_KEY;

if (!apiKey) {
  throw new Error("BREVO_API_KEY is not configured");
}

export const brevo = new BrevoClient({
  apiKey,
});