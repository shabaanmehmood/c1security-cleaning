"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaUserCheck,
  FaMoneyBillWave,
  FaClock,
  FaShieldAlt,
  FaLock,
  FaHeadset,
  FaVideo,
} from "react-icons/fa";

const iconsMap = {
  FaUserCheck,
  FaMoneyBillWave,
  FaClock,
  FaShieldAlt,
  FaLock,
  FaHeadset,
  FaVideo,
} as const;

export interface TrustItem {
  title: string;
  description: string;
  icon: keyof typeof iconsMap;
}

interface SecurityTrustSectionProps {
  heading: string;
  subheading: string;
  items: TrustItem[];
}

const SecurityTrustSection: React.FC<SecurityTrustSectionProps> = ({
  heading,
  subheading,
  items,
}) => {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-100">
      {/* ✨ Soft Ambient Glow */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[600px] h-[600px] bg-blue-300/20 blur-[180px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* 🧭 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-blue-950 mb-4 o-outfit"
        >
          {heading}
        </motion.h2>

        {/* 📝 Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          {subheading}
        </motion.p>

        {/* 💠 Elegant Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {items.map((item, index) => {
            const Icon = iconsMap[item.icon];
            return (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.04,
                  boxShadow:
                    "0 25px 40px rgba(59,130,246,0.18), 0 0 25px rgba(59,130,246,0.1)",
                }}
                className="relative overflow-hidden backdrop-blur-xl bg-white/70 border border-blue-100 rounded-3xl p-10 flex flex-col items-center text-center transition-all duration-500 hover:border-blue-400 hover:bg-white/90 group"
              >
                {/* 🌈 Subtle Gradient Glow Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-100 via-cyan-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[2px]"></div>

                <div className="relative z-10 flex flex-col items-center">
                  {/* 🌀 Floating Icon */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-6xl mb-6 text-blue-600 drop-shadow-lg"
                  >
                    <Icon />
                  </motion.div>

                  {/* 📍 Title */}
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3 o-outfit group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* 📄 Description */}
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* 🌊 Elegant Divider Animation */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{ width: "75%", opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="h-[3px] bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-400 rounded-full mx-auto"
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityTrustSection;
