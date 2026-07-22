"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export default function ChromaCard() {
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const background = useMotionTemplate`
    radial-gradient(
      280px circle at ${mouseX}px ${mouseY}px,
      rgba(59,130,246,.18),
      rgba(99,102,241,.12) 35%,
      rgba(6,182,212,.08) 60%,
      transparent 80%
    )
  `;

  const border = useMotionTemplate`
    radial-gradient(
      220px circle at ${mouseX}px ${mouseY}px,
      rgba(59,130,246,.9),
      rgba(99,102,241,.35),
      transparent 75%
    )
  `;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={false}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
      }}
      className="group relative h-72 w-[420px] overflow-hidden rounded-3xl bg-white shadow-xl"
    >
      {/* Animated Border */}

      <motion.div
        style={{
          background: border,
        }}
        className="absolute inset-0 rounded-3xl p-[1px]"
      >
        <div className="h-full w-full rounded-3xl bg-white" />
      </motion.div>

      {/* Chroma */}

      <motion.div
        style={{
          background,
        }}
        className="absolute inset-0"
      />

      {/* Shine */}

      <motion.div
        initial={{
          x: "-150%",
        }}
        whileHover={{
          x: "180%",
        }}
        transition={{
          duration: 1.2,
        }}
        className="absolute inset-y-0 w-24 rotate-12 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-xl"
      />

      {/* Noise */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(#000 0.7px, transparent 0.7px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Content */}

      <div className="relative z-20 flex h-full flex-col justify-center p-10">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-600">
          AI PLATFORM
        </p>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          Chroma Card
        </h2>

        <p className="mt-4 max-w-sm leading-7 text-slate-600">
          A premium cursor-following chroma effect with animated borders,
          glass lighting, and smooth interactions.
        </p>
      </div>
    </motion.div>
  );
}