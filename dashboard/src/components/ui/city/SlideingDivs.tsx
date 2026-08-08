"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface InfiniteMarqueeProps {
  description1: string;
  description2: string;
  description3: string;
}

export default function InfiniteMarquee({
  description1,
  description2,
  description3,
}: InfiniteMarqueeProps) {
  // Construct the array of descriptions
  const items = [
    {
      id: 1,
      badge: "Security",
      icon: ShieldCheck,
      text: description1,
    },
    {
      id: 2,
      badge: "Sanitation",
      icon: Sparkles,
      text: description2,
    },
    {
      id: 3,
      badge: "Maintenance",
      icon: CheckCircle2,
      text: description3,
    },
  ];

  // Duplicate the array twice so the loop seamlessly repeats without gaps
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Outer Card Container */}
      <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white/90 p-6 sm:p-8 shadow-2xl shadow-blue-950/5 backdrop-blur-xl">
        
        {/* Top Header Row with Pinned Quote Button */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-blue-50">
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full"
            >
              <Sparkles className="h-3.5 w-3.5 mr-1 text-blue-600" />
              Live Feed
            </Badge>
            <span className="text-xs sm:text-sm text-slate-500 font-medium hidden sm:inline">
              Hover to pause scrolling
            </span>
          </div>

          <Link href="/cleaning/get-a-quote">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-600/20 px-4 py-2 text-xs sm:text-sm flex items-center gap-1.5"
              >
                <span>Get a Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </Link>
        </div>

        {/* Marquee Track Wrapper with Gradient Fades at Edges */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-4 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {marqueeItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.id}-${index}`}
                  className="w-[280px] sm:w-[320px] flex-shrink-0 rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/50 via-white to-sky-50/30 p-5 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant="outline"
                      className="border-blue-200 bg-white text-blue-800 text-[11px] font-bold"
                    >
                      {item.badge}
                    </Badge>
                    <Icon className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-sm text-slate-700 font-normal leading-relaxed line-clamp-3">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </div>
  );
}