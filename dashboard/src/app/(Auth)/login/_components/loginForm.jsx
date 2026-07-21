"use client";

import Link from "next/link";
import { useState } from "react";
import { Lock, Mail, ArrowRight, Eye, EyeOff,ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e ) => {
    e.preventDefault();
    console.log("Login details:", formData);
  };

  return (
    <div className="w-full max-w-md bg-white/90 backdrop-blur-md border border-slate-300/80 p-8 rounded-3xl shadow-xl">
      {/*Back buttonn */}
      <Link
              href="/"
              className="absolute left-6 top-6 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full"
              >
              <ArrowLeft className="h-3.5 w-3.5" />
              Home
            </Link>
      
      <div className="text-center mb-8">
      {/* Headaer */}
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Welcome Back
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          Sign in to your <span className="font-semibold text-blue-700">C1SCURITY-CLEANING</span> account
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email Input */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@company.com"
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Password Input */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-xs text-blue-600 hover:underline font-medium"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type={showPassword ? "text" : "password"}
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="••••••••"
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center">
          <input
            id="rememberMe"
            type="checkbox"
            checked={formData.rememberMe}
            onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="rememberMe" className="ml-2 text-xs text-slate-600 cursor-pointer">
            Remember me for 30 days
          </label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full py-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all"
        >
          Sign In <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>

      {/* Switch to Sign Up */}
      <div className="mt-6 text-center text-xs text-slate-600">
        Don't have an account?{" "}
        <Link
          href="/sign-up"
          className="font-semibold text-blue-600 hover:underline"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
}