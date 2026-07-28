import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/fireBase-Admin";

export async function POST(req: NextRequest) {
  const { idToken } = await req.json();

  await adminAuth.verifyIdToken(idToken);

  const response = NextResponse.json({ success: true });

  response.cookies.set("token", idToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return response;
}