import { Job } from "@/types/JobDescription";
import getBaseUrl from "./getBaseUrl";

export async function getJobBySlug(
  slug: string
): Promise<Job | null> {
  try {
    const ress = await fetch(`${getBaseUrl()}/api/jobs/${slug}`);
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