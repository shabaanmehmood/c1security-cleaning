import { NextResponse } from "next/server";
import { bucket } from "@/lib/fireBase-Admin";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file") as File | null;
    const jobId = formData.get("jobId") as string | null;
    const userId = formData.get("userId") as string | null;

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded." },
        { status: 400 }
      );
    }

    if (!jobId) {
      return NextResponse.json(
        { error: "jobId is required." },
        { status: 400 }
      );
    }

    if (!userId) {
      return NextResponse.json(
        { error: "userId is required." },
        { status: 400 }
      );
    }

    // Allow only PDF
    if (file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Only PDF files are allowed." },
        { status: 400 }
      );
    }

    
    const MAX_SIZE = 1 * 1024 * 1024;

    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: "File size must be less than 1MB." },
        { status: 400 }
      );
    }

    const bytes = Buffer.from(await file.arrayBuffer());

    const fileName = `${Date.now()}-${file.name}`;

    const storagePath = `resumes/${jobId}/${userId}/${fileName}`;

    const storageFile = bucket.file(storagePath);

    await storageFile.save(bytes, {
      metadata: {
        contentType: file.type,
      },
    });

    
    const [downloadURL] = await storageFile.getSignedUrl({
      action: "read",
      expires: "03-01-2500",
    });

    return NextResponse.json(
      {
        success: true,

        resumePath: storagePath,

        resumeUrl: downloadURL,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Upload failed.",
      },
      {
        status: 500,
      }
    );
  }
}