"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  { name: "Trusted Guards", img: "/features/image1.webp" },
  { name: "Equal Opportunities", img: "/features/image2.webp" },
  { name: "Real-Time Monitoring", img: "/features/image3.webp" },
  { name: "Scheduling", img: "/features/image4.webp" },
  { name: "Feedback", img: "/features/image5.jpg" },
  { name: "Communication Hub", img: "/features/image6.webp" },
];

const HoverSection = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white text-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* ✨ Heading */}
        <h3 className="text-center text-4xl sm:text-5xl md:text-6xl text-blue-950 mt-10 font-semibold o-outfit mb-20">
          Empowering Contractors and Security Guards
        </h3>

        {/* ✨ Hover List */}
        <div className="flex flex-wrap justify-center text-2xl md:text-3xl font-semibold text-gray-900 leading-snug relative">
          {features.map((feature, i) => (
            <div
              key={i}
              className="relative flex items-center mx-3 my-2"
              onMouseEnter={() => setHovered(feature.name)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Feature name */}
              <span className="cursor-pointer transition-colors duration-300 hover:text-blue-600">
                {feature.name}
              </span>

              {/* Smooth animated image preview */}
              <AnimatePresence mode="wait">
                {hovered === feature.name && (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, scale: 0.85, y: 5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 5 }}
                    transition={{
                      duration: 0.35,
                      ease: "easeInOut",
                    }}
                    className="ml-3 w-[90px] h-[25px] md:w-[120px] md:h-[30px] relative rounded-lg overflow-hidden shadow-md pointer-events-none"
                  >
                    <Image
                      src={feature.img}
                      alt={feature.name}
                      fill
                      className="object-cover select-none"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Divider */}
              {i !== features.length - 1 && (
                <span className="text-gray-400 mx-2">/</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoverSection;
