import { adminDb } from "@/lib/fireBase-Admin";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const snapshot = await adminDb
      .collection("job_applications")
      .where("status","==","accepted")
      .get();

    const jobs = snapshot.docs.map((doc) => {
      const data = doc.data();
      
      let formattedCreatedAt = null;
      if (data.createdAt?.toDate) {
        formattedCreatedAt = data.createdAt.toDate().toISOString();
      } else if (typeof data.createdAt === "string") {
        formattedCreatedAt = data.createdAt;
      }

      return {
        id: doc.id,
        ...data,
        createdAt: formattedCreatedAt,
      };
    });

    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    // Corrected to return a proper 500 HTTP status code with error JSON
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}
