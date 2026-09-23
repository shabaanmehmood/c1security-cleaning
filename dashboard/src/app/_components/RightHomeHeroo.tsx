"use client";

import FerroFluid from "@/components/Ferrofluid";
import { Shield, Sparkles, Moon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Right() {
  const router = useRouter();

  const services = [
    {
      title: "Security Services",
      path: "/security",
      icon: Shield,
      color: "blue",
      border: "border-blue-500/30",
      hoverBorder: "hover:border-blue-400",
      text: "text-blue-400",
    },
    {
      title: "Cleaning Services",
      path: "/cleaning",
      icon: Sparkles,
      color: "emerald",
      border: "border-emerald-500/30",
      hoverBorder: "hover:border-emerald-400",
      text: "text-emerald-400",
    },
    {
      title: "Night Audit Services",
      path: "/night-audit",
      icon: Moon,
      color: "purple",
      border: "border-purple-500/30",
      hoverBorder: "hover:border-purple-400",
      text: "text-purple-400",
    },
  ];

  return (
    <div
      style={{ width: "100%", height: "600px", position: "relative" }}
      className="overflow-hidden rounded-3xl"
    >
      {/* Background */}
      <FerroFluid />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 p-6 backdrop-blur-[2px]">
        <div className="grid w-full max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <button
                key={service.path}
                type="button"
                onClick={() => router.push(service.path)}
                className={`group flex min-h-[150px] flex-col items-center justify-center gap-4 rounded-3xl border ${service.border} bg-slate-900/80 p-6 text-center shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] ${service.hoverBorder}`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950/70 ${service.text} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <span className="text-sm font-semibold text-white sm:text-base">
                  {service.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}