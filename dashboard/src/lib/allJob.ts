import { Job } from "@/types/JobDescription";
import { adminDb } from "./fireBase-Admin";
import { DocumentData } from "firebase-admin/firestore";

function formatTimestamp(value: any): string {
  if (value?.toDate) {
    return value.toDate().toISOString();
  }

  if (typeof value === "string") {
    return value;
  }

  return "";
}

export async function allJob(): Promise<Job[]> {
  try {
    const snapshot = await adminDb
      .collection("jobs")
      .orderBy("createdAt", "desc")
      .get();

    return snapshot.docs.map((doc) => {
      const data = doc.data() as DocumentData &
        Omit<Job, "createdAt" | "expiresAt">;

      return {
        ...data,
        id: doc.id,
        createdAt: formatTimestamp((doc.data() as DocumentData).createdAt),
        expiresAt: formatTimestamp((doc.data() as DocumentData).expiresAt),
      };
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
}