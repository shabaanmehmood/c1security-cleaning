"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { AnimatedChecklistProps } from "@/types/JobDescription";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    x: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.42, 0, 0.58, 1],
    },
  },
} as const;

export default function AnimatedChecklist({
  items,
  className = "",
  iconColor = "text-blue-600",
}: AnimatedChecklistProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className={`grid gap-5 ${className}`}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            x: 6,
          }}
          className="group flex items-start gap-4 rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/70 hover:shadow-lg"
        >
          {/* Icon */}
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${iconColor}`}
          >
            <CheckCircle2 size={22} />
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="leading-7 text-slate-700 transition-colors duration-300 group-hover:text-slate-900">
              {item}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}