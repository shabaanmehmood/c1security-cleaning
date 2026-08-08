"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HelpCircle, Sparkles, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {FaqItem } from "@/fillerData/allFaq";

export interface FaqProps {
  title?: string;
  subtitle?: string;
  faqs?: FaqItem[];
}
export default function Faq({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our facility security and sanitation services.",
  faqs = [{
    question: "WHO IS C1-Scurity AND WHAT SERVICES DO YOU PROVIDE?",
    answer:
      "C1-Scurity is an award-winning, ISO-accredited commercial cleaning company with over 23 years of experience delivering premium facility maintenance across Australia. We specialize in tailored cleaning programs for corporate offices, medical and healthcare facilities, educational institutions, industrial complexes, food processing plants, and large-scale warehouses."
  }],
}: FaqProps) {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12 sm:py-16">
      {/* Outer Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white/90 p-6 sm:p-10 shadow-2xl shadow-blue-950/5 backdrop-blur-xl"
      >
        {/* Subtle Background Radial Glow */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 pb-6 border-b border-blue-50">
          <div className="space-y-3 max-w-xl">
            <Badge
              variant="outline"
              className="border-blue-200 bg-blue-50 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1.5"
            >
              <HelpCircle className="h-3.5 w-3.5 text-blue-600" />
              <span>Help Center</span>
            </Badge>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-blue-950">
              {title}
            </h2>

            <p className="text-sm sm:text-base text-blue-900/70 font-normal leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Top-Right Action Button */}
          <Link href="/cleaning/get-a-quote" className="shrink-0">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button
                size="sm"
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-600/20 px-5 py-2.5 text-xs sm:text-sm flex items-center gap-1.5"
              >
                <span>Get a Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </Link>
        </div>

        {/* Shadcn Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-blue-100/80 bg-gradient-to-r from-blue-50/40 via-white to-sky-50/20 px-5 transition-colors data-[state=open]:border-blue-300 data-[state=open]:bg-blue-50/60 shadow-sm"
            >
              <AccordionTrigger className="py-4 text-left font-bold text-blue-950 hover:text-blue-600 text-sm sm:text-base leading-snug hover:no-underline">
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-blue-500 shrink-0" />
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed pb-4 pt-1 pl-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Footer Prompt */}
        <div className="mt-8 pt-6 border-t border-blue-50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-blue-900/70">
            Still have questions? Our team is available 24/7 to assist you.
          </p>
          <Link href="/cleaning/contacts">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-blue-200 bg-white text-blue-800 hover:bg-blue-50 text-xs font-semibold px-4"
            >
              Contact Support
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}