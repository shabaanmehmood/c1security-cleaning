"use client";

import FerroFluid from "@/components/Ferrofluid";
import { Shield, Sparkles, Moon } from "lucide-react";

export default function Right() {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }} className="overflow-hidden rounded-3xl">
      {/* Background FerroFluid Animation */}
      <FerroFluid />

      {/* Service Overlay Badges */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-slate-950/20 p-6 backdrop-blur-[2px]">
        {/* Security Service Tag */}
        <div className="flex items-center gap-3 rounded-2xl border border-blue-500/30 bg-slate-900/80 px-6 py-3.5 text-blue-400 shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:border-blue-400">
          <Shield className="h-6 w-6 text-blue-400" />
          <span className="text-base font-semibold text-white">Security Services</span>
        </div>

        {/* Cleaning Service Tag */}
        <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-slate-900/80 px-6 py-3.5 text-emerald-400 shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:border-emerald-400">
          <Sparkles className="h-6 w-6 text-emerald-400" />
          <span className="text-base font-semibold text-white">Commercial Cleaning</span>
        </div>

        {/* Night Audit Service Tag */}
        <div className="flex items-center gap-3 rounded-2xl border border-purple-500/30 bg-slate-900/80 px-6 py-3.5 text-purple-400 shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:border-purple-400">
          <Moon className="h-6 w-6 text-purple-400" />
          <span className="text-base font-semibold text-white">Night Audit</span>
        </div>
      </div>
    </div>
  );
}