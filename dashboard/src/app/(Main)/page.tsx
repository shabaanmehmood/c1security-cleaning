"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HomeHero from "./_components/_homeHeroComponent/finalHomeHero";
import Features from "./_components/stackedFeature";

// Motion Variants for Stats
const statsContainerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const statItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const stats = [
  { value: "99.8%", label: "Client Satisfaction" },
  { value: "500+", label: "Properties Secured" },
  { value: "24/7", label: "Support & Response" },
  { value: "10+ Yrs", label: "Industry Experience" },
];

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <HomeHero />

      {/* 2. STATS BAR SECTION */}
      <section className="py-8 px-4 flex justify-center">
        <motion.div
          variants={statsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-5xl grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center justify-around gap-y-6 gap-x-4 sm:gap-8 bg-slate-900/90 backdrop-blur-md border border-slate-800/80 px-6 sm:px-8 py-6 rounded-3xl sm:rounded-full shadow-2xl shadow-blue-950/20 text-white"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={statItemVariants}
              className="flex items-center justify-center sm:justify-start gap-6"
            >
              <div className="text-center sm:text-left">
                <p className="text-xl sm:text-2xl font-black tracking-tight text-blue-400">
                  {stat.value}
                </p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>

              {/* Subtle Vertical Divider between items on desktop */}
              {idx < stats.length - 1 && (
                <div className="hidden md:block h-7 w-[1px] bg-slate-800" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. SERVICES FEATURE CARD */}
      <Features />

      {/* 4. CALL TO ACTION SECTION */}
      <section className="pt-30 sm:pt-28 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-blue-600 p-6 sm:p-12 md:p-16 text-white overflow-hidden shadow-2xl shadow-blue-600/20"
        >
          {/* Subtle grid accent */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

          {/* Glowing Ambient Light */}
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl text-center sm:text-left">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Ready to Upgrade Your Facility Protection?
            </h2>
            <p className="mt-4 text-blue-100 text-sm sm:text-base leading-relaxed">
              Contact our team today to get a customized quote for your office,
              commercial building, or industrial facility.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
              <Link href="/get-a-quote" className="w-full sm:w-auto">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-full bg-white text-blue-600 hover:bg-slate-100 px-8 shadow-md"
                  >
                    Request Quote
                  </Button>
                </motion.div>
              </Link>

              <Link href="/contact" className="w-full sm:w-auto">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto rounded-full border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}