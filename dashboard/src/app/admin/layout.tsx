// app/admin/layout.tsx
export const runtime = "nodejs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { adminAuth, adminDb } from "@/lib/fireBase-Admin";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = (await cookies()).get("token")?.value;



  if (!token) {
    redirect("/login");
  }

  const decoded = await adminAuth.verifyIdToken(token);

  const userDoc = await adminDb
    .collection("users")
    .doc(decoded.uid)
    .get();

  if (!userDoc.exists) {
    redirect("/");
  }

  const user = userDoc.data();

  if (user?.role !== "admin") {
    redirect("/");
  }

  return children;
}