"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Eye,
  EyeOff,
  Loader2,
  Mail,
  Lock,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";

import { useAuthStore } from "@/store/useAuthStore";
import { loginSchema, LoginSchema } from "@/validators/Auth";
import { AuthService } from "@/lib/auth.service";

export default function LoginForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const setUser = useAuthStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  async function createServerSession(user: {
    getIdToken: () => Promise<string>;
  }) {
    const idToken = await user.getIdToken();

    const response = await fetch("/api/auth/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create authentication session.");
    }
  }
  async function handlePostLoginNavigation(uid: string) {
    try {
      const response = await fetch(`/api/auth/role?uid=${uid}`, {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) {
        router.push("/");
        return;
      }

      const data = await response.json();

      if (data.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } catch {
      router.push("/");
    }
  }

async function onSubmit(data: LoginSchema) {
  setAuthError(null);

  try {
    // Firebase User
    const firebaseUser = await AuthService.signInWithEmail(
      data.email,
      data.password
    );

    // Create server session using Firebase User
    await createServerSession(firebaseUser);

    // Get your application UserProfile
    const userProfile = await AuthService.getUserProfile(
      firebaseUser.uid
    );

    // Zustand expects UserProfile
    setUser(userProfile);

    // Server-side AdminLayout will verify authorization
    if (userProfile.role === "admin") {
      router.push("/admin");
    } else {
      router.push("/");
    }
  } catch (err: unknown) {
    setAuthError(
      err instanceof Error
        ? err.message
        : "Failed to sign in. Please try again."
    );
  }
}

async function handleGoogleSignIn() {
  setAuthError(null);
  setGoogleLoading(true);

  try {
    const firebaseUser = await AuthService.signInWithGoogle();

    // Create HTTP-only session cookie
    await createServerSession(firebaseUser);

    // Get application profile
    const userProfile = await AuthService.getUserProfile(
      firebaseUser.uid
    );

    // Store UserProfile, not Firebase User
    setUser(userProfile);

    if (userProfile.role === "admin") {
      router.push("/admin");
    } else {
      router.push("/");
    }
  } catch (err: unknown) {
    setAuthError(
      err instanceof Error
        ? err.message
        : "Failed to sign in with Google."
    );
  } finally {
    setGoogleLoading(false);
  }
}

  return (
    <div className="w-full max-w-md rounded-3xl border border-blue-100 bg-white p-8 shadow-2xl shadow-blue-100/50">
      {/* Back */}
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      {/* Header */}
      <div className="mb-8 text-center">
        <div className="flex w-full items-center justify-center">
          <Link href="/" className="z-50 flex shrink-0 items-center gap-2">
            <Image
              src="/Logo.svg"
              alt="C1SCURITY Logo"
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        <h1 className="mt-4 text-3xl font-bold text-slate-900">
          Welcome Back
        </h1>

        <p className="mt-2 text-slate-500">
          Sign in to continue to your account
        </p>
      </div>

      {/* Error */}
      {authError && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-3 text-center text-sm font-medium text-red-600">
          {authError}
        </div>
      )}

      {/* Google */}
      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={isSubmitting || googleLoading}
        className="mb-6 flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white font-medium text-slate-700 transition-all hover:border-blue-300 hover:bg-blue-50 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
      >
        {googleLoading ? (
          <Loader2 className="animate-spin" size={18} />
        ) : (
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
        )}

        <span>Continue with Google</span>
      </button>

      {/* Divider */}
      <div className="mb-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
          OR
        </span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email Address
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              {...register("email")}
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {errors.email && (
            <p className="mt-2 text-sm font-medium text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Password
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-12 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-blue-600"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          {errors.password && (
            <p className="mt-2 text-sm font-medium text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Remember me */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex cursor-pointer items-center gap-2 text-slate-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            Remember me
          </label>

          <Link
            href="/forgot-password"
            className="font-medium text-blue-600 transition hover:text-blue-700"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting || googleLoading}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Signing In...
            </>
          ) : (
            "Sign In"
          )}
        </button>
      </form>

      {/* Footer */}
      <p className="mt-8 text-center text-sm text-slate-600">
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="font-semibold text-blue-600 transition hover:text-blue-700"
        >
          Create Account
        </Link>
      </p>
    </div>
  );
}