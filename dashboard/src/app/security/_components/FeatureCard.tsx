"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: React.ReactNode | IconType;
  title: string;
  description: string;
  index?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      viewport={{ once: false, amount: 0.3 }}
      className="group bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>

      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="flex justify-center mb-5 z-10 relative"
      >
        {typeof icon === "string" ? (
          <Image
            src={icon}
            alt={title}
            width={60}
            height={60}
            className="mx-auto drop-shadow-md"
          />
        ) : (
          <div className="text-blue-600 text-5xl drop-shadow-sm">
            {typeof icon === "function" ? React.createElement(icon) : icon}
          </div>
        )}
      </motion.div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 z-10 relative group-hover:text-blue-900 transition-colors duration-300 o-outfit">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm md:text-base leading-relaxed z-10 relative">
        {description}
      </p>

      {/* Bottom Accent Bar */}
      <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-blue-600 group-hover:w-full transition-all duration-500 rounded-tr-3xl"></div>
    </motion.div>
  );
};

export default FeatureCard;
