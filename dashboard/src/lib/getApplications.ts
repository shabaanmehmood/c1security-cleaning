import getBaseUrl from "./getBaseUrl";
import { ApplicationPayload } from "@/validators/ApplicationForm";

export async function allApplications(): Promise<ApplicationPayload[]> {
  try {
    const res = await fetch(`${getBaseUrl()}/api/getApplications`,{
      next:{
        tags:["applications"]
      }
    });

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