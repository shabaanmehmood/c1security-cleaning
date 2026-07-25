import { Job } from "@/types/JobDescription";
import getBaseUrl from "./getBaseUrl";

export async function getJobBySlug(
  slug: string
): Promise<Job | null> {
  try {
    const res = await fetch(`${getBaseUrl()}/api/jobs/${slug}`);

    if (!res.ok) {
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}