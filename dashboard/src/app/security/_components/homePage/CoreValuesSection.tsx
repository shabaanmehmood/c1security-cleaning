"use client";

import {
  ShieldCheck,
  ClipboardCheck,
  Lightbulb,
  Heart,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const coreValues = [
  {
    title: "Trust",
    desc: "Verified professionals and transparent transactions.",
    icon: ShieldCheck,
  },
  {
    title: "Accountability",
    desc: "Every shift, payment, and report is tracked and auditable.",
    icon: ClipboardCheck,
  },
  {
    title: "Innovation",
    desc: "Automation that reduces human error and delays.",
    icon: Lightbulb,
  },
  {
    title: "Reliability",
    desc: "Guards and companies can depend on C1 — anytime, anywhere.",
    icon: Heart,
  },
  {
    title: "Safety",
    desc: "Built with compliance, reporting, and on-site security at its core.",
    icon: AlertCircle,
  },
];

export default function CoreValuesSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="absolute top-0 left-0 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        viewport={{ once: false }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400/30 rounded-full blur-3xl"
      />

      {/* Animated Heading */}
      <div className="text-center mb-20 relative">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {["Our", "Core", "Values"].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              viewport={{ once: false, amount: 0.7 }}
              className={`text-4xl sm:text-5xl md:text-6xl o-outfit font-semibold ${
                word === "Core" || word === "Values"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"
                  : "text-blue-950"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Glowing underline animation */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 160, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0.8 }}
          className="h-1 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.7 }}
          className="text-gray-700 text-center max-w-2xl mx-auto mt-6 text-lg"
        >
          The principles that guide every connection, service, and innovation we
          deliver.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-5 px-6 max-w-7xl mx-auto">
        {coreValues.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                type: "spring",
                stiffness: 120,
                damping: 15,
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0px 15px 30px rgba(59,130,246,0.25)",
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-8 flex flex-col items-center text-center shadow-md transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-6 relative"
              >
                <div className="absolute inset-0 rounded-full bg-blue-400/30 blur-md group-hover:bg-blue-500/40 transition-all" />
                <div className="relative z-10 bg-white p-4 rounded-full shadow-lg">
                  <Icon className="h-10 w-10 text-blue-500 group-hover:text-blue-600 transition-colors" />
                </div>
              </motion.div>

              <h3 className="text-xl o-outfit font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {value.desc}
              </p>

              {/* Subtle gradient underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                className="origin-left mt-3 w-10 h-[3px] bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
