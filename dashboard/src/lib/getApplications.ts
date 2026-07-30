import { adminDb } from "./fireBase-Admin";
import { ApplicationPayload } from "@/validators/ApplicationForm";

function formatTimestamp(value: unknown): string {
  if (
    value &&
    typeof value === "object" &&
    "toDate" in value &&
    typeof (value as { toDate: () => Date }).toDate === "function"
  ) {
    return (value as { toDate: () => Date }).toDate().toISOString();
  }

  return typeof value === "string" ? value : "";
}

export async function allApplications(): Promise<ApplicationPayload[]> {
  try {
    const snapshot = await adminDb
      .collection("job_applications")
      .get();

    return snapshot.docs.map((doc) => {
      const data = doc.data() as ApplicationPayload;

      return {
        id: doc.id,
        ...data,
      };
    });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return [];
  }
}