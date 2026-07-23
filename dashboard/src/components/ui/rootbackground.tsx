"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Background() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.75 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#f8fbff] pointer-events-none select-none">
      {/* Base Soft Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-[#f0f7ff] to-[#e6f0ff]" />

      {/* Large Soft Blue Orbs (Depth + Elegance) */}
      <motion.div
        animate={{
          x: ["-20%", "25%"],
          y: ["-15%", "20%"],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-20 w-[720px] h-[720px] rounded-full bg-gradient-to-br from-blue-400/10 to-sky-300/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: ["15%", "-25%"],
          y: ["20%", "-18%"],
          scale: [1.05, 0.95, 1.05],
        }}
        transition={{ duration: 52, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-52 bottom-32 w-[680px] h-[680px] rounded-full bg-gradient-to-br from-sky-400/10 to-blue-500/10 blur-3xl"
      />

      {/* Subtle Animated Grid */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "55px 55px"],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          backgroundPosition: { duration: 25, repeat: Infinity, ease: "linear" },
          opacity: { duration: 12, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:48px_48px]"
      />

      {/* Very Light Blueprint Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_0.5px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_0.5px,transparent_1px)] [background-size:85px_85px] opacity-20" />

      {/* Mouse Spotlight - Clean & Elegant */}
      <motion.div
        className="absolute w-[520px] h-[520px] rounded-full bg-gradient-to-br from-white via-sky-200/50 to-blue-300/30 blur-3xl opacity-80"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Elegant Floating Particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[3px] h-[3px] bg-sky-500/50 rounded-full"
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 18 + i * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * -3,
          }}
          style={{
            left: `${18 + i * 12}%`,
            top: `${25 + (i % 3) * 18}%`,
          }}
        />
      ))}

      {/* Soft Center Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,#f1f5f9_90%)]" />
    </div>
  );
}