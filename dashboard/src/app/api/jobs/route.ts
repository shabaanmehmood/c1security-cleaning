import { NextResponse } from "next/server";
import { adminDb, adminAuth } from "@/lib/fireBase-Admin";
import { FieldValue , Timestamp} from "firebase-admin/firestore";
import { jobSchema } from "@/validators/addJob";
import { revalidateTag } from "next/cache";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized: Missing or invalid token format." },
        { status: 401 }
      );
    }

    const token = authHeader.split("Bearer ")[1];
    let decodedToken;

    try {
      decodedToken = await adminAuth.verifyIdToken(token);
    } catch (authError) {
      console.error("Token verification failed:", authError);
      return NextResponse.json(
        { error: "Unauthorized: Invalid or expired token." },
        { status: 401 }
      );
    }

    const userDoc = await adminDb.collection("users").doc(decodedToken.uid).get();
    const userData = userDoc.data();

    if (!userData || userData.role !== "admin") {
      return NextResponse.json(
        { error: "Forbidden: Admin privileges required." },
        { status: 403 }
      );
    }

    const rawBody = await request.json();
    const parsed = jobSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed.",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const validatedData = parsed.data;

    const { expiresAt, ...data } = validatedData;
    console.log("expiresAt:", expiresAt);
console.log("Date:", new Date(expiresAt));
console.log("isValid:", !isNaN(new Date(expiresAt).getTime()));

    const docRef = await adminDb.collection("jobs").add({
      ...data,
      expiresAt: Timestamp.fromDate(new Date(expiresAt)),
      createdAt: FieldValue.serverTimestamp(),
      createdBy: decodedToken.uid,
      isActive: true,
    });
     revalidateTag("alljobs", "max");

    return NextResponse.json(
      {
        message: "Job opportunity created successfully!",
        id: docRef.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating job posting:", error);
    return NextResponse.json(
      { error: "Internal server error while creating job." },
      { status: 500 }
    );
  }
}