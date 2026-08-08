"use client";

import Link from "next/link";
import Image from "next/image";
import { Shield, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/Logo.svg"
                alt="C1Security Logo"
                width={130}
                height={35}
                className="h-8 w-auto brightness-200 contrast-200 object-contain"
              />
            </Link>
            <p className="text-xs text-slate-400">
              Professional Security & Cleaning Solutions
            </p>
          </div>

          {/* Core Navigation Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/security"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-blue-400 font-medium text-sm transition-all border border-slate-700/50 hover:border-slate-600"
            >
              <Shield size={16} className="text-blue-500" />
              <span>Security</span>
            </Link>

            <Link
              href="/cleaning"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-emerald-400 font-medium text-sm transition-all border border-slate-700/50 hover:border-slate-600"
            >
              <Sparkles size={16} className="text-emerald-500" />
              <span>Cleaning</span>
            </Link>
          </div>

        </div>

        {/* Bottom Copyright Divider */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} C1Security. All rights reserved.
        </div>
      </div>
    </footer>
  );
}