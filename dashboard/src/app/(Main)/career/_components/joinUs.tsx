"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Briefcase } from "lucide-react";

export default function JoinUsBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-blue-50/40 py-20 px-4 sm:px-6 lg:px-8 border-y border-blue-100/60">
      
      {/* Decorative background blur shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" /> We Are Hiring
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-950 tracking-tight leading-tight">
          Do You Want to Join Us?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-blue-900/70 max-w-2xl mx-auto font-medium leading-relaxed">
          We’re constantly looking for passionate, driven professionals to join our expanding team. Discover open positions and take the next step in your career.
        </p>

        {/* Call to Action Button */}
        <div className="pt-2">
          <Link
            href="/career/jobs"
            className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Briefcase className="w-5 h-5" />
            <span>Join Us</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}