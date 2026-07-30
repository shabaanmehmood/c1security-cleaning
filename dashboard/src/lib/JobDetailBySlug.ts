import { adminDb } from "./fireBase-Admin";
import { Job } from "@/types/JobDescription";

export async function getJobBySlug(
  slug: string
): Promise<Job | null> {
  try {
    const snapshot = await adminDb
      .collection("jobs")
      .where("slug", "==", slug)
      .where("isActive", "==", true)
      .limit(1)
      .get();

    if (snapshot.empty) {
      return null;
    }

    const doc = snapshot.docs[0];
    const data = doc.data();

    return {
      ...data,
      id: doc.id,
      expiresAt: data.expiresAt?.toDate?.().toISOString() ?? "",
    } as Job;
  } catch (error) {
    console.error("Error fetching job:", error);
    return null;
  }
}