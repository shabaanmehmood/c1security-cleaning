"use client";

import { motion } from "framer-motion";

export default function RootBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-slate-50 pointer-events-none">
      {/* Moving Dark Grid Pattern */}
      <motion.div
        animate={{
          x: [0, -48],
          y: [0, -48],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -inset-[100px] bg-[linear-gradient(to_right,#334155_1.5px,transparent_1.5px),linear-gradient(to_bottom,#334155_1.5px,transparent_1.5px)] bg-[size:3rem_3rem] opacity-[0.08]"
      />

      {/* Floating Accent Blob 1 (Top Left) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-20 w-[30rem] h-[30rem] rounded-full bg-blue-300/30 blur-3xl"
      />

      {/* Floating Accent Blob 2 (Bottom Right) */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-32 -right-20 w-[30rem] h-[30rem] rounded-full bg-indigo-300/30 blur-3xl"
      />
    </div>
  );
}