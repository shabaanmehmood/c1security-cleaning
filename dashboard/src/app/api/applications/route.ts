import { NextRequest, NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";

import { adminDb } from "@/lib/fireBase-Admin";
import { applicationPayloadSchema } from "@/validators/ApplicationForm";
import { getJobExpireDate } from "@/lib/expireDateViaJobId";
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const result = applicationPayloadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten(),
        },
        {
          status: 400,
        }
      );
    }

    const data = result.data;
    const expireAt = await getJobExpireDate(data.jobId);
    if (!expireAt) {
      return NextResponse.json(
        {
          success: false,
          message: "Job not found.",
        },
        { status: 404 }
      );
    }
    const docRef = await adminDb.collection("job_applications").add({
      jobId: data.jobId,
      jobSlug: data.jobSlug,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      addressInformation: data.addressInformation,
      compliance: data.compliance,
      otherInformation: data.otherInformation,
      userId: data.userId,
      resumeUrl: data.resumeUrl,
      status: "pending",
      createdAt: FieldValue.serverTimestamp(),
      expireAt: expireAt,
    });

    return NextResponse.json(
      {
        success: true,
        applicationId: docRef.id,
        message: "Application submitted successfully.",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}