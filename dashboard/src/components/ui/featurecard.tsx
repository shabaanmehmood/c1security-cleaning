"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  index?: number;
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  imageSrc,
  imageAlt = "",
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex h-[600px] flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-md backdrop-blur-sm"
    >
      {/* Image */}
      <div className="relative h-80 w-full overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-700"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

        {/* Icon */}
        <motion.div
          whileHover={{
            scale: 1.12,
            rotate: -6,
          }}
          transition={{
            type: "spring",
            stiffness: 450,
            damping: 18,
          }}
          className="absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-2xl shadow-blue-600/40"
        >
          <Icon className="h-8 w-8" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-10">
        <div>
          <h3 className="mb-4 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
            {title}
          </h3>

          <p className="text-base leading-8 text-slate-600">
            {description}
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-10">
          <motion.div
            className="h-[3px] rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600"
            initial={{ width: "18%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.45 }}
          />
        </div>
      </div>

      {/* Border Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-blue-500/0 transition-all duration-300 group-hover:ring-blue-500/30" />

      {/* Shadow Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
      </div>
    </motion.div>
  );
}