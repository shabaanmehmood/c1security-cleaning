"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { JobSectionProps } from "@/types/JobDescription";
export default function JobSection({
  title,
  subtitle,
  icon,
  children,
  className = "",
}: JobSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={`relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-xl ${className}`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-cyan-50/20" />

      {/* Decorative Blur */}
      <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 p-8 md:p-10">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-4">
              {icon && (
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
                  {icon}
                </div>
              )}

              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  {title}
                </h2>

                {subtitle && (
                  <p className="mt-2 max-w-2xl text-slate-500">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>

          <ChevronRight
            className="hidden text-slate-300 lg:block"
            size={34}
          />
        </div>

        {/* Divider */}
        <div className="mb-8 h-px bg-gradient-to-r from-blue-200 via-slate-200 to-transparent" />

        {/* Content */}
        <div>{children}</div>
      </div>
    </motion.section>
  );
}