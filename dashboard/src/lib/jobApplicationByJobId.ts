import { adminDb } from "./fireBase-Admin";
import { ApplicationExtractedData } from "@/validators/ApplicationForm";

export async function getApplicationById(
  userId: string
): Promise<ApplicationExtractedData | null> {
  try {
    const snapshot = await adminDb
      .collection("job_applications")
      .where("userId", "==", userId.trim())
      .limit(1)
      .get();

    if (snapshot.empty) {
      return null;
    }

    const doc = snapshot.docs[0];
    const data = doc.data() as ApplicationExtractedData;
      console.log(data);
    return {
      ...data,
    };
  } catch (error) {
    console.error("Error fetching application:", error);
    return null;
  }
}