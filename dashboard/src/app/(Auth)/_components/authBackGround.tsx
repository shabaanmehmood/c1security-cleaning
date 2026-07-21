"use client";

import { motion } from "framer-motion";

export default function AuthBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50 pointer-events-none">
      {/* Moving Line Grid Container */}
      <motion.div
        animate={{
          x: [0, -48],
          y: [0, -48],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -inset-[100px] bg-[linear-gradient(to_right,#e2e8f0_1.5px,transparent_1.5px),linear-gradient(to_bottom,#e2e8f0_1.5px,transparent_1.5px)] bg-[size:3rem_3rem]"
      />

      {/* Radial Gradient Mask (Fades the grid lines at the edges for a clean look) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#f8fafc_80%)]" />

      {/* Subtle Glowing Background Accents behind grid */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/3 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-200/50 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/3 translate-x-1/2 w-96 h-96 rounded-full bg-indigo-200/50 blur-3xl"
      />
    </div>
  );
}