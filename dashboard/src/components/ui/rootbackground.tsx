"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Background() {
  // Mouse tracking for fast-responsive cursor spotlight
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Snappy spring config for quick cursor feedback
  const springConfig = { damping: 18, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-slate-50 pointer-events-none select-none">
      {/* 1. Fast-Responsive Cursor Spotlight */}
      <motion.div
        className="absolute h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-slate-900/15 via-blue-900/10 to-transparent blur-2xl opacity-90"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 2. Fast-Moving & Pulsing Symmetric Dot Grid */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "64px 64px"],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          backgroundPosition: {
            duration: 2.5, // Fast endless drift
            repeat: Infinity,
            ease: "linear",
          },
          opacity: {
            duration: 1.8, // Catchy pulse rhythm
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute inset-0 bg-[radial-gradient(#0f172a_1.8px,transparent_1.8px)] [background-size:2rem_2rem]"
      />

      {/* 3. Dynamic Center Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#f8fafc_90%)]" />
    </div>
  );
}