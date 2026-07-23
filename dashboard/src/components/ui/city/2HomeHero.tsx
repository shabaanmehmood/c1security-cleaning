"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroBannerCardProps {
  title: string;
  description: string;
}

export default function HeroBannerCard({
  title,
  description,
}: HeroBannerCardProps) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Outer Motion Card Wrapper */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="group relative overflow-hidden rounded-3xl border border-blue-200/80 bg-gradient-to-br from-white via-blue-50/40 to-sky-100/50 p-8 sm:p-10 shadow-xl shadow-blue-900/5 backdrop-blur-md"
      >
        {/* Subtle Decorative Background Glow */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

        {/* TOP RIGHT PINNED BUTTON (Interactive Motion & Link) */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-10">
          <Link href="/get-a-quote">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="sm"
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-600/20 px-4 py-2 text-xs sm:text-sm flex items-center gap-1.5 transition-colors duration-200"
              >
                <span>Get a Quote</span>
                <motion.div
                  initial={{ x: 0, y: 0 }}
                  whileHover={{ x: 2, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>
          </Link>
        </div>

        {/* CARD CONTENT */}
        <div className="relative z-0 max-w-2xl pr-24 sm:pr-32 space-y-4">
          {/* Badge */}
          <Badge
            variant="outline"
            className="inline-flex items-center gap-1.5 rounded-full border-blue-200 bg-blue-100/60 px-3 py-1 text-xs font-semibold text-blue-800"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Top-Tier Protection</span>
          </Badge>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-blue-950 leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-blue-900/70 font-normal leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}