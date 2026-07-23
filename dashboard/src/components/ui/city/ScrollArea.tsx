"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, FileText } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SplitScrollCardProps {
  img: string;
  text: string;
  description: string;
}

export default function SplitScrollCard({
  img,
  text,
  description,
}: SplitScrollCardProps) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Outer Motion Card Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="group relative grid grid-cols-1 md:grid-cols-12 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-2xl shadow-blue-950/5 backdrop-blur-xl"
      >
        {/* Subtle Background Glow Accent */}
        <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-blue-400/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20 pointer-events-none" />

        {/* TOP RIGHT PINNED BUTTON */}
        <div className="absolute top-4 right-4 z-20">
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

        {/* LEFT SIDE: Image Container */}
        <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden bg-blue-950">
          <motion.img
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.4 }}
            src={img}
            alt={text}
            className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
          />
          {/* Overlay Gradient on Image */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-blue-950/20" />
        </div>

        {/* RIGHT SIDE: Shadcn ScrollArea */}
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-center">
          <ScrollArea className="h-[260px] w-full pr-4">
            <div className="space-y-4 pt-2 pb-4">
              
              {/* SCROLLING DIV 1: Main Text & Badge */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="outline"
                    className="border-blue-200 bg-white text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                  >
                    <Sparkles className="h-3 w-3 text-blue-600 mr-1" />
                    Overview
                  </Badge>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-blue-950 tracking-tight leading-snug">
                  {text}
                </h3>
              </motion.div>

              {/* SCROLLING DIV 2: Detailed Description */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm space-y-2"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
                  <FileText className="h-3.5 w-3.5" />
                  <span>Service Details</span>
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  {description}
                </p>
              </motion.div>

            </div>
          </ScrollArea>
        </div>

      </motion.div>
    </div>
  );
}