import { NextResponse } from "next/server";
import { Readable } from "stream";
import cloudinary from "@/lib/cloudinary";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded." },
        { status: 400 }
      );
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Only PDF files are allowed." },
        { status: 400 }
      );
    }

    const MAX_SIZE = 1 * 1024 * 1024; // 1MB

    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: "File size must be less than 1MB." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const uploadResult = await new Promise<any>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "resumes",
          resource_type: "raw", // Required for PDFs
          public_id: `${Date.now()}-${file.name.replace(".pdf", "")}`,
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );

      Readable.from(buffer).pipe(uploadStream);
    });

    return NextResponse.json(
      {
        success: true,
        resumeUrl: uploadResult.secure_url,
        publicId: uploadResult.public_id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Upload failed.",
      },
      { status: 500 }
    );
  }
}