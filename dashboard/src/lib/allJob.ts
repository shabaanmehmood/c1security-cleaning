import { Job } from "@/types/JobDescription";
import { adminDb } from "./fireBase-Admin";
import { DocumentData } from "firebase-admin/firestore";

function formatTimestamp(value: any): string {
  if (value?.toDate && typeof value.toDate === "function") {
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
      const data = doc.data() as DocumentData;

      return {
        ...(data as Omit<Job, "id" | "createdAt" | "expiresAt">),
        id: doc.id,
        createdAt: formatTimestamp(data.createdAt),
        expiresAt: formatTimestamp(data.expiresAt),
      } as Job;
    });
  } catch (error) {
    console.error("Error fetching jobs from Firestore:", error);
    return [];
  }
}