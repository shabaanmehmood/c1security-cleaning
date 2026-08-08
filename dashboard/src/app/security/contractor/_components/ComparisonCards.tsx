"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ComparisonCards: React.FC = () => {
  const features = [
    { label: "Guard Verification", manual: false, tac: true },
    { label: "Shift Scheduling", manual: false, tac: true },
    { label: "Real-time Alerts", manual: false, tac: true },
    { label: "Analytics & Reports", manual: false, tac: true },
    { label: "Payment Management", manual: false, tac: true },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          className="md:text-5xl text-4xl o-outfit text-blue-950 font-semibold mb-16"
        >
          Why Choose <span className="text-blue-600">Control-1 Security</span>{" "}
          Over Manual Management?
        </motion.h2>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white border border-gray-200 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold o-outfit text-gray-800 mb-4">
              Manual Hiring
            </h3>
            <p className="text-gray-500 mb-6">
              Time-consuming, unverified, and lacks automation.
            </p>

            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex items-center justify-between text-lg border-b pb-2 border-gray-100"
                >
                  <span className="text-gray-700">{feature.label}</span>
                  {feature.manual ? (
                    <FaCheckCircle className="text-green-500 text-2xl" />
                  ) : (
                    <FaTimesCircle className="text-red-500 text-2xl" />
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Control-1 Security Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-gradient-to-b from-blue-600 to-blue-800 text-white shadow-2xl rounded-2xl p-8 hover:scale-105 transition-transform duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 px-4 py-1 rounded-bl-xl font-bold text-sm">
              Recommended
            </div>

            <h3 className="text-2xl font-semibold o-outfit mb-4">
              Control-1 Security
            </h3>
            <p className="text-blue-100 mb-6">
              Smart, automated, and data-driven guard management system.
            </p>

            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 + 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex items-center justify-between text-lg border-b border-blue-500 pb-2"
                >
                  <span>{feature.label}</span>
                  {feature.tac ? (
                    <FaCheckCircle className="text-green-300 text-2xl" />
                  ) : (
                    <FaTimesCircle className="text-red-400 text-2xl" />
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonCards;
