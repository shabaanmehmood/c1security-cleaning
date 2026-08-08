"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/40 to-white">
      {/* Scroll-in animation container */}
      <motion.div
        className="container mx-auto px-6 max-w-3xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* 🌟 Heading */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-semibold o-outfit text-blue-950 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Find answers to the most common questions our users ask.
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="divide-y divide-gray-200">
          {items.map((faq, index) => (
            <motion.div
              key={index}
              className="py-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full flex justify-between items-center text-left text-lg md:text-xl font-medium text-gray-800 hover:text-blue-700 transition-colors duration-300 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl text-blue-700"
                >
                  {openIndex === index ? "−" : "+"}
                </motion.span>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="overflow-hidden"
              >
                <motion.p
                  className="text-gray-600 text-base leading-relaxed mt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: openIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {faq.answer}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
