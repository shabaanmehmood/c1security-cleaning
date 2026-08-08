"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Feature {
  id: string;
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
  const router = useRouter();
  const Icon = feature.icon;

  // Each card's active scroll window
  const start = index / total;
  const end = (index + 1) / total;

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
      className="sticky top-24 flex justify-center px-4"
      style={{ zIndex: index }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          filter: useTransform(brightness, (b) => `brightness(${b})`),
        }}
        className="relative w-full max-w-7xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl"
      >
        {/* Top Left Button */}
        <button
          onClick={() => router.push(`/cleaning/services/${feature.id}`)}
          className="
  absolute
  right-5
  top-5
  z-20
  rounded-full
  border
  border-white/30
  bg-white/90
  px-4
  py-2
  text-[11px]
  font-bold
  uppercase
  tracking-[0.2em]
  text-slate-900
  shadow-xl
  backdrop-blur-md
  transition-all
  duration-300
  hover:-translate-y-0.5
  hover:scale-105
  hover:border-blue-500
  hover:bg-blue-600
  hover:text-white
  hover:shadow-blue-500/40
  active:scale-95
"
        >
          Read More About {feature.id} Cleaning
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
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

          {/* Content */}
          <div className="flex flex-col justify-center p-8 md:p-10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
              <Icon className="h-7 w-7" />
            </div>

            <h3 className="mb-4 text-3xl font-bold text-slate-900">
              {feature.title}
            </h3>

            <p className="text-base leading-8 text-slate-600">
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
          key={feature.id}
          feature={feature}
          index={idx}
          total={features.length}
          progress={scrollYProgress}
        />
      ))}
    </section>
  );
}