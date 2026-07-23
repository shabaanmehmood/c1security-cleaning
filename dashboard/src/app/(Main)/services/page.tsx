"use client";

import React, { useState } from "react";

import { ServicesSection } from "@/app/(Main)/_components/ServiceSection";
import QuoteForm   from "@/app/(Main)/get-a-quote/_component/quoteForm";
import { Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <main className="min-h-screen relative overflow-x-hidden pt-28">
    

      <section className="py-16 text-center relative max-w-4xl mx-auto px-4 bg-white">
  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
    <Sparkles className="w-3.5 h-3.5" /> ISO 9001 & TGA Accredited Services
  </span>
  <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 font-heading tracking-tight mb-4">
    Commercial Cleaning <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Catalog</span>
  </h1>
  <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
    Explore our 9 specialized commercial cleaning protocols designed specifically for Australian property managers and corporate facility executives.
  </p>
</section>

      <ServicesSection onOpenQuoteModal={() => setQuoteModalOpen(true)} />
      <QuoteForm />

    </main>
  );
}
