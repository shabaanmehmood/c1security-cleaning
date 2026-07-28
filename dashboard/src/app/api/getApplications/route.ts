import { adminDb } from "@/lib/fireBase-Admin";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const snapshot = await adminDb
      .collection("job_applications")
      .get();

    const jobs = snapshot.docs.map((doc) => {
      const data = doc.data();

      const formatTimestamp = (
        value: unknown
      ): string | null => {
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
      };

      return {
        id: doc.id,
        ...data,
        createdAt: formatTimestamp(data.createdAt),
        expiresAt: formatTimestamp(data.expiresAt),
      };
    });

    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error fetching applications:", error);

    return NextResponse.json(
      { error: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}