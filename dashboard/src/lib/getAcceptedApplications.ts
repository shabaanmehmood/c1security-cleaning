import getBaseUrl from "./getBaseUrl";
import { ApplicationExtractedData} from "@/validators/ApplicationForm";

export async function allAcceptedApplications(): Promise<ApplicationExtractedData[]> {
  try {
    const res = await fetch(`${getBaseUrl()}/api/AcceptedApplications`);

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}