import axios from "axios";
import { QuoteFormData } from "@/validators/quoteFormValidator";

const FORMSPREEE_URL = "https://formspree.io/f/mgoglwne";
export async function submitQuote(data: QuoteFormData) {
  const response = await axios.post(
    FORMSPREEE_URL,
    data,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
}