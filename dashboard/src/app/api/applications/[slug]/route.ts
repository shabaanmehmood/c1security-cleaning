import { NextResponse } from "next/server";
import { adminDb } from "@/lib/fireBase-Admin";
import { revalidateTag } from "next/cache";
interface Context {
  params: Promise<{
    slug: string;
  }>;
}



export async function PATCH(
  request: Request,
  { params }: Context
) {
  try {
    const { slug } = await params;
    const { status } = await request.json();

    if (
      !["pending", "accepted", "rejected", "reviewed"].includes(status)
    ) {
      return NextResponse.json(
        { error: "Invalid status" },
        { status: 400 }
      );
    }

    const snapshot = await adminDb
      .collection("job_applications")
      .where("userId", "==", slug)
      .limit(1)
      .get();

    if (snapshot.empty) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 }
      );
    }

    await snapshot.docs[0].ref.update({
      status,
    });

    return NextResponse.json(
      {
        message: "Application updated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to update application" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: Context
) {
  try {
    const { slug } = await params;

    const snapshot = await adminDb
      .collection("job_applications")
      .where("userId", "==", slug)
      .limit(1)
      .get();

    if (snapshot.empty) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 }
      );
    }

    await snapshot.docs[0].ref.delete();

    return NextResponse.json(
      {
        message: "Application deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to delete application" },
      { status: 500 }
    );
  }
}