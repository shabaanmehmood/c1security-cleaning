"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Building2,
  Clock,
  CheckCircle2,
  ArrowRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Motion container variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const features = [
  {
    icon: ShieldCheck,
    title: "Vetted & Trained Security",
    description:
      "Licensed professionals providing 24/7 surveillance, access control, and asset protection.",
  },
  {
    icon: Sparkles,
    title: "Commercial Sanitation",
    description:
      "Deep cleaning and eco-friendly medical/office sanitation tailored to your facility's needs.",
  },
  {
    icon: Building2,
    title: "Facility Maintenance",
    description:
      "Comprehensive janitorial solutions that keep your commercial spaces pristine and welcoming.",
  },
];

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
      <section className="relative px-6 pt-32 pb-20 md:pt-40 md:pb-32 lg:px-8">
        {/* Subtle background glow accents */}
        <div className="absolute top-1/4 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-blue-200/50 blur-3xl" />

        <div className="mx-auto max-w-5xl text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-700 border border-blue-200 mb-6"
          >
            <ShieldCheck className="h-4 w-4" />
            <span>Trusted Security & Commercial Cleaning</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl"
          >
            A Cleaner, Safer Space for Your <span className="text-blue-600">Business</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            All-in-one commercial cleaning and facility security services. We protect your assets while keeping your environment pristine and professional.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link href="/get-a-quote" className="w-full sm:w-auto">
              <Button size="lg" className="w-full rounded-full bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-base shadow-lg shadow-blue-500/25">
                Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full rounded-full border-slate-300 px-8 py-6 text-base hover:bg-slate-100">
                Explore Services
              </Button>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="py-6 px-4 flex justify-center">
        <div className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-6 sm:gap-10 bg-slate-900/90 backdrop-blur-md border border-slate-800/80 px-8 py-4 rounded-full shadow-2xl shadow-blue-900/10 text-white">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <div className="text-center sm:text-left">
                <p className="text-xl sm:text-2xl font-black tracking-tight text-blue-400">
                  {stat.value}
                </p>
                <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>

              {/* Subtle Vertical Divider between items (hidden on last item) */}
              {idx < stats.length - 1 && (
                <div className="hidden sm:block h-7 w-[1px] bg-slate-800" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED SERVICES */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Why Choose C1SCURITY-CLEANING?
          </h2>
          <p className="mt-4 text-slate-600">
            We integrate facility security and high-standard sanitation into a seamless service package.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* 4. CALL TO ACTION SECTION */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-blue-600 p-8 sm:p-12 md:p-16 text-white overflow-hidden shadow-xl">
          {/* Subtle grid accent */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Upgrade Your Facility Protection?
            </h2>
            <p className="mt-4 text-blue-100 text-sm sm:text-base">
              Contact our team today to get a customized quote for your office, commercial building, or industrial facility.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/get-a-quote">
                <Button size="lg" className="rounded-full bg-white text-blue-600 hover:bg-slate-100 px-8">
                  Request Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full border-white/40 text-white hover:bg-blue-700">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}