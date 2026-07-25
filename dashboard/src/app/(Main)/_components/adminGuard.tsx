"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function AdminGuard({ children }:any) {
  const { user, loading } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    // If auth state finished loading and user is not an admin, redirect
    if (!loading) {
      if (!user) {
        router.push("/login");
      } else if (user.role !== "admin") {
        router.push("/"); // Redirect regular customers to home
      }
    }
  }, [user, loading, router]);

  // Show a loading spinner while checking credentials
  if (loading || !user || user.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          <p className="text-sm text-slate-500 font-medium">Verifying admin permissions...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}