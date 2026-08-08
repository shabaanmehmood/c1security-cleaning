"use client";

import React from "react";
import { motion } from "framer-motion";

interface Step {
  step: string;
  desc: string;
  icon: React.ElementType;
}

interface StepsSectionProps {
  title: string;
  highlight: string;
  steps: Step[];
}

const StepsSection: React.FC<StepsSectionProps> = ({
  title,
  highlight,
  steps,
}) => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl md:text-5xl font-semibold o-outfit mb-16 leading-tight text-blue-950"
        >
          {title}{" "}
          <span className="text-blue-600 px-3 py-1 rounded-lg">
            {highlight}
          </span>
        </motion.h2>

        {/* ✨ Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* 🌀 Border Animation — appears only on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] border-2 border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
                <motion.div
                  className="absolute aspect-square bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    width: 100,
                    offsetPath: `rect(0 auto auto 0 round 80px)`,
                  }}
                  animate={{
                    offsetDistance: ["0%", "100%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Subtle background glow (appears on hover too) */}
              <motion.div className="absolute inset-0 bg-gradient-to-tr from-blue-100/40 via-transparent to-blue-50/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md mb-5"
              >
                <item.icon className="text-3xl" />
              </motion.div>

              {/* Step Title */}
              <h3 className="text-xl o-outfit font-semibold text-gray-900 mb-3">
                {item.step}
              </h3>

              {/* Step Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {item.desc}
              </p>

              {/* Floating Glow Animation */}
              <motion.div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-blue-100/30 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
