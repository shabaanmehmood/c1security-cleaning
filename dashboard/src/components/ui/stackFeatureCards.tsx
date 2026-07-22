// components/StackedFeatureCards.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

interface StackedFeatureCardsProps {
  features: Feature[];
}

function StackedCard({
  feature,
  index,
  total,
  progress,
}: {
  feature: Feature;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const Icon = feature.icon;

  // Each card's "active window" within the overall scroll progress
  const start = index / total;
  const end = (index + 1) / total;

  // As the NEXT card scrolls in, this card scales down + dims slightly
  const scale = useTransform(
    progress,
    [start, end],
    [1, index === total - 1 ? 1 : 0.92]
  );
  const opacity = useTransform(
    progress,
    [start, end],
    [1, index === total - 1 ? 1 : 0.6]
  );
  const brightness = useTransform(
    progress,
    [start, end],
    [1, index === total - 1 ? 1 : 0.85]
  );

  return (
    <div
    className="sticky top-24 flex justify-center"
    style={{ zIndex: index }}
    >
      {/*<div className="flex flex-col justify-center p-12 lg:p-16"> */}
      <motion.div
        style={{
          scale,
          opacity,
          filter: useTransform(brightness, (b) => `brightness(${b})`),
        }}
        className="w-full max-w-7xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image side */}
          <div className="relative h-80 md:h-[620px]">
            <Image
              src={feature.imageSrc}
              alt={feature.imageAlt || feature.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent md:bg-gradient-to-r" />
          </div>

          {/* Content side */}
          <div className="flex flex-col justify-center p-8 md:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-slate-900">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {feature.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function StackedFeatureCards({
  features,
}: StackedFeatureCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${features.length * 100}vh` }}
    >
      {features.map((feature, idx) => (
        <StackedCard
          key={feature.title}
          feature={feature}
          index={idx}
          total={features.length}
          progress={scrollYProgress}
        />
      ))}
    </section>
  );
}