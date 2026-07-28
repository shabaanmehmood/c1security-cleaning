//this is to extract expiredate from job doc as application has jobId field so we extract expireAt field
// from jobId then store it into application so with the help to TTL(BLAZINE) these doc delete on arrival of ExpireAT DATE
import { adminDb } from "@/lib/fireBase-Admin";
import { Timestamp } from "firebase-admin/firestore";

export async function getJobExpireDate(
  jobId: string
): Promise<Timestamp | null> {
  try {
    const doc = await adminDb.collection("jobs").doc(jobId).get();

    if (!doc.exists) {
      return null;
    }

    const data = doc.data();

    return (data?.expiresAt as Timestamp) ?? null;
  } catch (error) {
    console.error("Error getting job expiry date:", error);
    throw error;
  }
}