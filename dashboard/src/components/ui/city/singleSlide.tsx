"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, LucideIcon } from "lucide-react";

export interface SlideItem {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
}

interface SlidesProps {
  features: SlideItem[];
}

interface SlideProps {
  feature: SlideItem;
  index: number;
  total: number;
}

function Slide({ feature, index, total }: SlideProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Tracks scroll relative to this specific card's position
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  // Scale down and fade card slightly as next card stacks on top
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, index === total - 1 ? 1 : 0.94]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [1, index === total - 1 ? 1 : 0.6]
  );

  // Parallax animation for internal slide image
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 flex items-center justify-center px-4"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="group relative w-full max-w-7xl overflow-hidden rounded-[34px] border border-white/60 bg-white/90 shadow-[0_30px_120px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-300"
      >
        {/* Hover Border Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-[34px] bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-indigo-500/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          {/* Left Visual Banner */}
          <div className="relative h-[320px] overflow-hidden lg:h-[640px]">
            <motion.div
              style={{ scale: imageScale, y: imageY }}
              className="absolute inset-0"
            >
              <Image
                src={feature.image}
                alt={feature.imageAlt || feature.title}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-900/20 to-transparent" />

            {/* Slide Index Display */}
            <div className="absolute left-8 top-8">
              <p className="text-5xl font-black tracking-tight text-white/90">
                {(index + 1).toString().padStart(2, "0")}
              </p>
              <span className="mt-1 block text-xs uppercase tracking-[0.35em] text-white/70 font-semibold">
                Slide
              </span>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="relative flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30"
            >
              
              {(() => {
                const Icon = feature.icon;
                return <Icon className="h-8 w-8 text-white" />;
              })()}
            </motion.div>

            <span className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
              Premium Feature
            </span>

            <h2 className="max-w-xl text-3xl font-extrabold leading-tight text-slate-900 lg:text-4xl">
              {feature.title}
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              {feature.description}
            </p>

            <motion.button
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 flex w-fit items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Learn More
              <ArrowUpRight className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Slides({ features }: SlidesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const progressOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden">
      {/* Background Decorative Mesh & Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[140px]" />
      </div>

      {/* Floating Progress Bar */}
      <motion.div
        style={{ opacity: progressOpacity }}
        className="fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 lg:flex"
      >
        <div className="relative h-64 w-1 rounded-full bg-slate-200">
          <motion.div
            style={{ height: progressHeight }}
            className="absolute bottom-0 left-0 w-full rounded-full bg-gradient-to-t from-blue-600 to-cyan-400"
          />
        </div>
      </motion.div>

      {/* Stacked Cards */}
      <div className="relative space-y-24">
        {features.map((feature, index) => (
          <Slide
            key={feature.title}
            feature={feature}
            index={index}
            total={features.length}
          />
        ))}
      </div>
    </section>
  );
}