import getBaseUrl from "./getBaseUrl";
import { ApplicationExtractedData } from "@/validators/ApplicationForm";

export async function getApplicationByid(
  slug: string
): Promise<ApplicationExtractedData | null> {
  try {
    console.log(slug)
    const ress = await fetch(`${getBaseUrl()}/api/applications/${slug}`);
    console.log(ress);
    if (!ress.ok) {
      return null;
    }

    return await ress.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}