import { NextResponse } from "next/server";
import { adminDb } from "@/lib/fireBase-Admin";

interface Context {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: Context
) {
  try {
    const { slug } = await params;

    const snapshot = await adminDb
      .collection("jobs")
      .where("slug", "==", slug)
      .where("isActive", "==", true)
      .limit(1)
      .get();

    if (snapshot.empty) {
      return NextResponse.json(
        { error: "Job not found" },
        { status: 404 }
      );
    }

    const doc = snapshot.docs[0];

    return NextResponse.json(
      {
        id: doc.id,
        ...doc.data(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch job" },
      { status: 500 }
    );
  }
}