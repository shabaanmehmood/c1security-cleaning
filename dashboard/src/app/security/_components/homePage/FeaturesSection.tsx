"use client";

import { features } from "@/constants/features";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { useRef } from "react";

interface StickyFeatureCardProps {
  i: number;
  title: string;
  description: string;
  Icon: React.ElementType;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const StickyFeatureCard: React.FC<StickyFeatureCardProps> = ({
  i,
  title,
  description,
  Icon,
  progress,
  range,
  targetScale,
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 flex items-center justify-center">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 100}px)`,
        }}
        className="relative flex h-[320px] w-[90%] sm:w-[400px] md:w-[520px] flex-col items-center justify-center rounded-3xl bg-white shadow-xl border border-gray-200 p-6 sm:p-8 origin-top text-center"
      >
        <div className="bg-blue-100 text-blue-600 rounded-full p-3 sm:p-4 mb-4">
          <Icon size={32} className="sm:size-[36px]" />
        </div>
        <h3 className="text-xl o-outfit sm:text-2xl font-semibold text-blue-950 mb-2 sm:mb-3">
          {title}
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

// 🌟 Main Scroll Section
const Skiper16: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main
      ref={containerRef}
      className="relative flex w-full flex-col items-center justify-center pb-[50vh] scroll-smooth"
    >
      {/* 🧭 Section Heading */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl text-blue-950 mt-10 font-semibold mb-4 o-outfit">
          Features for{" "}
          <span className="text-blue-600">Guards & Contractors</span>
        </h2>
        <p className="text-gray-600 max-w-2xl text-base sm:text-lg mx-auto px-2">
          Discover how our innovative app simplifies security workforce
          management from job posting and real-time tracking to payments and
          performance insights.
        </p>
      </div>

      {/* 🎴 Feature Cards */}
      {features.map((feature, i) => {
        const targetScale = Math.max(0.5, 1 - (features.length - i - 1) * 0.07);
        return (
          <StickyFeatureCard
            key={`feature_${i}`}
            i={i}
            title={feature.title}
            description={feature.description}
            Icon={feature.icon}
            progress={scrollYProgress}
            range={[i * 0.12, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

export { Skiper16, StickyFeatureCard };
