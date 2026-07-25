import { Job } from "@/types/JobDescription";
import getBaseUrl from "./getBaseUrl";

export async function allJob(): Promise<Job[]> {
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