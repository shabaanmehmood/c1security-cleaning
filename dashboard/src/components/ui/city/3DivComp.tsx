"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles, RefreshCw, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SwappingCardsProps {
  img: string;
  text: string;
  description: string;
}

export default function SwappingCards({
  img,
  text,
  description,
}: SwappingCardsProps) {
  // Store order of element keys: ["img", "text", "description"]
  const [order, setOrder] = useState<("img" | "text" | "description")[]>([
    "img",
    "text",
    "description",
  ]);

  // Track hover state to pause auto-swap when user is hovering
  const [isPaused, setIsPaused] = useState(false);

  // Function to rotate positions array: [0, 1, 2] -> [1, 2, 0]
  const swapPositions = () => {
    setOrder((prevOrder) => [prevOrder[1], prevOrder[2], prevOrder[0]]);
  };

  // Automatically trigger position swap every 2 seconds (1s pause + ~1s animation time)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      swapPositions();
    }, 1000); // Adjust duration here: 2000ms = 1s pause between transitions

    return () => clearInterval(interval);
  }, [isPaused]);

  // Render individual div based on key
  const renderDiv = (type: "img" | "text" | "description") => {
    switch (type) {
      case "img":
        return (
          <motion.div
            key="img"
            layout
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative h-60 sm:h-auto overflow-hidden rounded-2xl bg-blue-950 border border-blue-100 shadow-md group"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={img}
              alt={text}
              className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />
            <Badge className="absolute bottom-3 left-3 bg-white/90 text-blue-950 font-bold backdrop-blur-md">
              Visual Focus
            </Badge>
          </motion.div>
        );

      case "text":
        return (
          <motion.div
            key="text"
            layout
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="flex flex-col justify-center rounded-2xl border border-blue-100 bg-blue-50/70 p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <Badge
                variant="outline"
                className="border-blue-200 bg-white text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full"
              >
                <Sparkles className="h-3 w-3 text-blue-600 mr-1" />
                Feature Highlight
              </Badge>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-blue-950 tracking-tight leading-snug">
              {text}
            </h3>
          </motion.div>
        );

      case "description":
        return (
          <motion.div
            key="description"
            layout
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="flex flex-col justify-center rounded-2xl border border-slate-100 bg-white p-6 shadow-sm space-y-2"
          >
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
              <FileText className="h-3.5 w-3.5" />
              <span>Full Details</span>
            </div>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              {description}
            </p>
          </motion.div>
        );
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Outer Card Container */}
      <div 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 sm:p-8 shadow-2xl shadow-blue-950/5"
      >
        
        {/* TOP ACTION BAR */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
          <Button
            onClick={swapPositions}
            variant="outline"
            size="sm"
            className="rounded-full border-blue-200 bg-blue-50/50 text-blue-800 hover:bg-blue-100 font-medium flex items-center gap-2"
          >
            <RefreshCw className="h-3.5 w-3.5 text-blue-600" />
            <span>Swap Positions</span>
          </Button>

          <Link href="/cleaning/get-a-quote">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-600/20 px-4 py-2 text-xs sm:text-sm flex items-center gap-1.5"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </Link>
        </div>

        {/* 3 SWAPPING DIVS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[260px]">
          <AnimatePresence>
            {order.map((itemKey) => renderDiv(itemKey))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}