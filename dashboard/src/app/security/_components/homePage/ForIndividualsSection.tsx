"use client";

import {
  FaUserShield,
  FaCreditCard,
  FaHandshake,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    icon: FaUserShield,
    title: "Create Account & Post Job",
    description:
      "Select hours, address, and service type — whether it's event security or home protection.",
  },
  {
    id: 2,
    icon: FaCreditCard,
    title: "Prepay Securely",
    description:
      "Funds are securely held until the guard completes the assigned job.",
  },
  {
    id: 3,
    icon: FaHandshake,
    title: "Get Matched",
    description:
      "View verified guard profiles and select the perfect match for your requirements.",
  },
  {
    id: 4,
    icon: FaMapMarkedAlt,
    title: "Track & Approve",
    description:
      "Monitor guard check-ins and progress in real time, and release payment once done.",
  },
];

export default function ForIndividualsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* ✨ Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-12 text-4xl sm:text-5xl md:text-6xl font-semibold text-blue-950 o-outfit"
        >
          For Individuals{" "}
          <span className="text-blue-600">(Private Security)</span>
        </motion.h2>

        {/* ✅ Simple card animation without variants */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold mb-4">
                {step.id}
              </div>
              <step.icon className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg o-outfit font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
