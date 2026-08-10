import Link from "next/link";
import Image from "next/image";
import { Shield, Sparkles, Moon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Brand Logo & Tagline */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/" className="flex items-center rounded p-1">
              <Image
                src="/C1_navbar_logo_white.png"
                alt="C1Security Logo"
                width={130}
                height={35}
                className="h-8 w-auto object-contain brightness-200 contrast-200"
              />
            </Link>
            <p className="text-xs text-slate-400">
              Professional Security & Cleaning Solutions
            </p>
          </div>

          {/* Core Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/security"
              className="flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-800/80 px-5 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-blue-400"
            >
              <Shield size={16} className="text-blue-500" />
              <span>Security</span>
            </Link>

            <Link
              href="/cleaning"
              className="flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-800/80 px-5 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-emerald-400"
            >
              <Sparkles size={16} className="text-emerald-500" />
              <span>Cleaning</span>
            </Link>

            <Link
              href="/night-audit"
              className="flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-800/80 px-5 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-purple-400"
            >
              <Moon size={16} className="text-purple-500" />
              <span>Night Audit</span>
            </Link>
          </div>

        </div>

        {/* Bottom Copyright Divider */}
        <div className="mt-8 border-t border-slate-800/60 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} C1Security. All rights reserved.
        </div>
      </div>
    </footer>
  );
}