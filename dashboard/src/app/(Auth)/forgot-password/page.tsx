"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2, Mail, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { forgotPassword } from "@/lib/auth.service";

interface FormData {
  email: string;
}

export default async function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    const result = await forgotPassword(data.email);
       
    console.log("Reset email sent");
    setLoading(false);

    setMessage(result.message);

    if (result.success) {
      setSuccess(true);
    }
  };

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center  p-6">
        <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-lg border">
          <div className="flex justify-center">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>

          <h1 className="mt-6 text-center text-3xl font-bold text-blue-950">
            Email Sent
          </h1>

          <p className="mt-4 text-center text-slate-600">
            We've sent you a password reset email.
          </p>

          <Link
            href="/login"
            className="mt-8 block rounded-xl bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700"
          >
            Back to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl border bg-white p-8 shadow-lg">

        <h1 className="text-center text-3xl font-bold text-blue-950">
          Forgot Password
        </h1>

        <p className="mt-2 text-center text-slate-500">
          Enter your email to receive a password reset link.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-6"
        >
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Email
            </label>

            <div className="flex items-center rounded-xl border px-3">
              <Mail className="mr-2 h-5 w-5 text-gray-400" />

              <input
                type="email"
                placeholder="john@example.com"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full py-3 outline-none"
              />
            </div>

            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {message && (
            <div className="rounded-lg bg-slate-100 p-3 text-center text-sm">
              {message}
            </div>
          )}

          <button
            disabled={loading}
            className="flex w-full items-center justify-center rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Reset Link"
            )}
          </button>
        </form>

        <Link
          href="/login"
          className="mt-6 block text-center text-blue-600 hover:underline"
        >
          Back to Login
        </Link>

      </div>
    </div>
  );
}