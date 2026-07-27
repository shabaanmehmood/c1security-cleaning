import getBaseUrl from "./getBaseUrl";
import { ApplicationPayload } from "@/validators/ApplicationForm";

export async function allApplications(): Promise<ApplicationPayload[]> {
  try {
    const res = await fetch(`${getBaseUrl()}/api/jobs`);

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}