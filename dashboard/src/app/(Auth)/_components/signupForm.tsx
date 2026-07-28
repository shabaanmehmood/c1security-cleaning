"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/fireBase";
import {
  Eye,
  EyeOff,
  Loader2,
  Mail,
  Lock,
  User as UserIcon,
  Check,
  X,
  ArrowLeft,
} from "lucide-react";

import { signupSchema, SignupSchema } from "@/validators/Auth";
import { useAuthStore } from "@/store/useAuthStore";
import Image from "next/image";

export default function SignupForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Use the global store state and actions exclusively
  const { signUpWithEmail, signUpWithGoogle, loading, error, clearError } =
    useAuthStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const password = watch("password") || "";

  const passwordChecks = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  /**
   * Helper function to check role from Firestore and navigate appropriately
   */
  async function handlePostSignupNavigation(uid?: string) {
    if (!uid) {
      router.push("/");
      return;
    }

    try {
      const userDocRef = doc(db, "users", uid);
      const userSnap = await getDoc(userDocRef);

      if (userSnap.exists() && userSnap.data().role === "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } catch {
      // Fallback navigation if Firestore fetch fails
      router.push("/");
    }
  }

  async function onSubmit(data: SignupSchema) {
    clearError();
    try {
      // 1. Delegates authentication, profile update, and Firestore sync to the store
      const user = await signUpWithEmail(data.name, data.email, data.password);
      
      // 2. Navigate user to landing page or dashboard
      await handlePostSignupNavigation(user?.uid);
    } catch {
      // Errors are handled and set directly inside `useAuthStore`
    }
  }

  async function handleGoogleSignUp() {
    clearError();
    try {
      // 1. Delegates Google authentication and Firestore sync to the store
      const user = await signUpWithGoogle();

      // 2. Navigate user according to their role
      await handlePostSignupNavigation(user?.uid);
    } catch {
      // Errors are handled and set directly inside `useAuthStore`
    }
  }

  function Rule({ passed, text }: { passed: boolean; text: string }) {
    return (
      <div
        className={`flex items-center gap-2 text-sm ${
          passed ? "text-green-500 font-medium" : "text-slate-400"
        }`}
      >
        {passed ? <Check size={15} /> : <X size={15} />}
        {text}
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg rounded-3xl border border-blue-100 bg-white p-8 shadow-2xl shadow-blue-100/50">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="flex justify-center items-center w-full">
          <Link href="/" className="flex items-center gap-2 shrink-0 z-50">
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
          Create Account
        </h1>

        <p className="mt-2 text-slate-500">
          Get started with your free account today
        </p>
      </div>

      {/* Error Banner */}
      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-3 text-center text-sm font-medium text-red-600">
          {error}
        </div>
      )}

      {/* Google Sign Up */}
      <button
        type="button"
        onClick={handleGoogleSignUp}
        disabled={isSubmitting || loading}
        className="mb-6 flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white font-medium text-slate-700 transition-all hover:border-blue-300 hover:bg-blue-50 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? (
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

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Full Name
          </label>

          <div className="relative">
            <UserIcon
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              {...register("name")}
              placeholder="John Doe"
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {errors.name && (
            <p className="mt-2 text-sm font-medium text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

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
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-12 text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-blue-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {errors.password && (
            <p className="mt-2 text-sm font-medium text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Password Strength */}
        <div className="space-y-2 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
          <Rule passed={passwordChecks.length} text="At least 8 characters" />
          <Rule passed={passwordChecks.upper} text="One uppercase letter" />
          <Rule passed={passwordChecks.lower} text="One lowercase letter" />
          <Rule passed={passwordChecks.number} text="One number" />
          <Rule passed={passwordChecks.special} text="One special character" />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Confirm Password
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              {...register("confirmPassword")}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-12 text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-blue-600"
            >
              {showConfirmPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          {errors.confirmPassword && (
            <p className="mt-2 text-sm font-medium text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Terms */}
        <div>
          <label className="flex items-start gap-3 text-sm text-slate-600 cursor-pointer">
            <input
              type="checkbox"
              {...register("acceptTerms")}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />

            <span>
              I agree to the{" "}
              <Link
                href="/terms"
                className="font-medium text-blue-600 hover:text-blue-700 hover:underline"
              >
                Terms & Conditions
              </Link>
            </span>
          </label>

          {errors.acceptTerms && (
            <p className="mt-2 text-sm font-medium text-red-500">
              {errors.acceptTerms.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!isDirty || !isValid || isSubmitting || loading}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting || loading ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Creating Account...
            </>
          ) : (
            "Create Account"
          )}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}