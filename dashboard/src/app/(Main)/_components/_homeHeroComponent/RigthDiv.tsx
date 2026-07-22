"use client";

import { motion } from "framer-motion";
import HeroAnimation from "./homeHeroAnimation";

const stars = Array.from({ length: 32 }, (_, i) => ({
  id: i,
  left: (i * 17) % 100,
  top: (i * 29) % 100,
  size: 2 + (i % 4),
  duration: 2 + (i % 5),
  delay: i * 0.15,
}));

export default function Right() {
  return (
    <HeroAnimation delay={0.2}>
      <div className="relative flex h-[350px] sm:h-[450px] lg:h-[650px] w-full items-center justify-center overflow-hidden">
        {/* Soft Background Glow */}
        <div className="absolute h-80 w-80 rounded-full bg-blue-400/20 blur-[100px]" />

        {/* Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: star.size,
              height: star.size,
              boxShadow: "0 0 12px rgba(255,255,255,0.9)",
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Orbit Ring */}
        <motion.div
          className="absolute h-56 w-56 rounded-full border border-blue-300/30 sm:h-72 sm:w-72 lg:h-[420px] lg:w-[420px]"
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Second Orbit */}
        <motion.div
          className="absolute h-72 w-72 rounded-full border border-dashed border-cyan-300/20 sm:h-96 sm:w-96 lg:h-[520px] lg:w-[520px]"
          animate={{ rotate: -360 }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Center Glow */}
        <motion.div
          className="absolute h-10 w-10 rounded-full bg-white shadow-[0_0_80px_20px_rgba(59,130,246,0.7)]"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orbiting Dot */}
        <motion.div
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-[420px] lg:w-[420px]">
            <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/60" />
          </div>
        </motion.div>
      </div>
    </HeroAnimation>
  );
}