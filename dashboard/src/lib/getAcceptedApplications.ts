import { adminDb } from "./fireBase-Admin";
import { ApplicationExtractedData } from "@/validators/ApplicationForm";

function formatTimestamp(value: unknown): string | null {
  if (
    value &&
    typeof value === "object" &&
    "toDate" in value &&
    typeof (value as { toDate: () => Date }).toDate === "function"
  ) {
    return (value as { toDate: () => Date }).toDate().toISOString();
  }

  if (typeof value === "string") {
    return value;
  }

  return null;
}

export async function allAcceptedApplications(): Promise<ApplicationExtractedData[]> {
  try {
    const snapshot = await adminDb
      .collection("job_applications")
      .where("status", "==", "accepted")
      .get();

    return snapshot.docs.map((doc) => {
      const data = doc.data() as ApplicationExtractedData;

      return {
        ...data,
        id: doc.id,
        createdAt: formatTimestamp(data.createdAt)??"",
        expiresAt: formatTimestamp(data.expiresAt)??"",
      };
    });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return [];
  }
}