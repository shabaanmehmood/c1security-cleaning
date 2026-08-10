"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Shield, Moon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const quoteCards = [
  {
    title: "Get a Quote for Cleaning",
    description:
      "Keep your workplace spotless, hygienic, and welcoming with tailored commercial cleaning solutions.",
    icon: Sparkles,
    href: "/cleaning/get-a-quote",
    contactHref: "/cleaning/contacts",
    bgGradient: "bg-emerald-600",
    shadowColor: "shadow-emerald-600/20",
    textColor: "text-emerald-100",
    buttonText: "text-emerald-700",
  },
  {
    title: "Get a Quote for Security",
    description:
      "Protect your assets, staff, and premises around the clock with our expert security guard services.",
    icon: Shield,
    href: "/security/contact",
    contactHref: "/security/contact",
    bgGradient: "bg-blue-600",
    shadowColor: "shadow-blue-600/20",
    textColor: "text-blue-100",
    buttonText: "text-blue-700",
  },
  {
    title: "Get a Quote for Night Audit",
    description:
      "Ensure overnight financial integrity, smooth hospitality operations, and comprehensive night reporting.",
    icon: Moon,
    href: "/night-audit/get-a-qoutes",
    contactHref: "/night-audit/contacts",
    bgGradient: "bg-purple-600",
    shadowColor: "shadow-purple-600/20",
    textColor: "text-purple-100",
    buttonText: "text-purple-700",
  },
];

export default function QuoteCardsSection() {
  return (
    <section className="pt-20 sm:pt-28 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {quoteCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex flex-col justify-between rounded-3xl ${card.bgGradient} p-6 sm:p-8 text-white overflow-hidden shadow-2xl ${card.shadowColor}`}
            >
              {/* Grid pattern background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

              {/* Light glow blur */}
              <div className="absolute -top-24 -right-24 h-60 w-60 rounded-full bg-white/10 blur-3xl pointer-events-none" />

              <div className="relative z-10 flex-1">
                {/* Icon Header */}
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-md">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h2 className="text-2xl font-extrabold tracking-tight leading-tight">
                  {card.title}
                </h2>

                <p className={`mt-3 ${card.textColor} text-sm leading-relaxed`}>
                  {card.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 mt-8 flex flex-col sm:flex-row gap-3">
                <Link href={card.href} className="w-full">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      className={`w-full rounded-full bg-white ${card.buttonText} hover:bg-slate-100 px-6 font-semibold shadow-md`}
                    >
                      Request Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </Link>

                <Link href={card.contactHref} className="w-full">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full rounded-full border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                    >
                      Contact
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}