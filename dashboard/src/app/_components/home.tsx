"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Sparkles, Moon, ArrowRight } from "lucide-react";

import HomeHero from "./final";
import QuoteCardsSection from "./quote";
import FeaturedServices from "./features";

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

const serviceCards = [
  {
    title: "Cleaning Services",
    description: "Spotless commercial and residential cleaning tailored to your standards.",
    icon: Sparkles,
    href: "/cleaning",
    color: "from-blue-500/10 to-cyan-500/10 border-blue-200 text-blue-600",
    badge: "Sanitized & Fresh",
  },
  {
    title: "Security Solutions",
    description: "24/7 physical and automated protection for complete peace of mind.",
    icon: Shield,
    href: "/security",
    color: "from-emerald-500/10 to-teal-500/10 border-emerald-200 text-emerald-600",
    badge: "24/7 Protection",
  },
  {
    title: "Night Audit",
    description: "Overnight financial verification, reporting, and operational oversight.",
    icon: Moon,
    href: "/night-audit",
    color: "from-indigo-500/10 to-purple-500/10 border-indigo-200 text-indigo-600",
    badge: "Overnight Precision",
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-12 sm:gap-y-16 p-4 sm:p-6 md:p-8 bg-slate-50 overflow-x-hidden">
      
      {/* Hero Section Wrapper */}
      <section className="w-full flex justify-center">
        <HomeHero />
      </section>

      {/* Stats Bar Section */}
      <section className="w-full py-4 px-2 sm:px-4 flex justify-center">
        <motion.div
          variants={statsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-5xl grid grid-cols-2 lg:flex lg:flex-wrap lg:items-center justify-around gap-6 bg-slate-900/90 backdrop-blur-md border border-slate-800/80 p-6 rounded-3xl sm:rounded-full shadow-2xl shadow-blue-950/20 text-white"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={statItemVariants}
              className="flex items-center justify-center lg:justify-start gap-4 lg:gap-6"
            >
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl font-black tracking-tight text-blue-400">
                  {stat.value}
                </p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>

              {idx < stats.length - 1 && (
                <div className="hidden lg:block h-7 w-[1px] bg-slate-800" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Interactive Service Selector Cards */}
      <section className="w-full max-w-6xl py-4 px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Our Core Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Select a service category below to explore custom solutions for your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCards.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={service.href}
                  className="group relative flex flex-col justify-between h-full p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <div
                        className={`p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br ${service.color} border shrink-0`}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full text-right truncate">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 sm:mt-8 flex items-center text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                    Explore Service
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Featured Services Wrapper */}
      <section className="w-full max-w-6xl relative z-10">
        <FeaturedServices />
      </section>

      {/* Quote Cards Section Wrapper */}
      <section className="w-full max-w-6xl relative z-10">
        <QuoteCardsSection />
      </section>
      
    </main>
  );
}