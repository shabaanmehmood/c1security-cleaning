"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface FeatureShowcaseProps {
  heading: string;
  features: Feature[];
  bgGradient?: string;
}

export default function FeatureShowcase({
  heading,
  features,
  bgGradient = "bg-gradient-to-b from-blue-50 via-white to-blue-50",
}: FeatureShowcaseProps) {
  const [current, setCurrent] = useState(0);

  const nextFeature = () => setCurrent((prev) => (prev + 1) % features.length);
  const prevFeature = () =>
    setCurrent((prev) => (prev === 0 ? features.length - 1 : prev - 1));

  const feature = features[current];

  return (
    <div className={`bg-gradient-to-b ${bgGradient}`}>
      {/* Section Heading */}
      <h1 className="pt-20 px-10 mx-auto mb-10 text-4xl md:text-5xl text-center font-semibold text-blue-950 o-outfit">
        {heading}
      </h1>

      <section
        className={`relative w-full min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between px-3 sm:px-20 md:px-16 lg:px-26 xl:px-32 py-16 text-gray-800`}
      >
        {/* Left Side - Content */}
        <div className="w-full md:w-4xl text-center md:text-left space-y-6 mt-10 md:mt-0 md:pr-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* ✅ Center on small, left on md+ */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight text-blue-950 o-outfit text-center md:text-left">
                {feature.title}
              </h2>

              <p className="text-gray-600 text-lg md:max-w-md mx-auto md:mx-0 text-center md:text-left">
                {feature.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center md:justify-start gap-6 mt-10">
            <button
              onClick={prevFeature}
              className="p-3 rounded-full border border-blue-950 hover:bg-blue-200 transition"
            >
              <ChevronLeft className="w-6 h-6 text-blue-950" />
            </button>
            <button
              onClick={nextFeature}
              className="p-3 rounded-full border border-blue-950 hover:bg-blue-200 transition"
            >
              <ChevronRight className="w-6 h-6 text-blue-950" />
            </button>
          </div>
        </div>

        {/* Right Side - 3D Stack */}
        <div className="w-full lg:w-1/3 md:w-[200px] flex justify-center relative mb-10 md:mb-0">
          <div className="relative w-[200px] h-[350px] md:w-[350px] md:h-[450px]">
            {features.map((item, index) => {
              const isActive = index === current;
              const position =
                (index - current + features.length) % features.length;
              const xoffset = position * 20;
              const yoffset = position * 15;

              return (
                <motion.div
                  key={item.id}
                  className="absolute top-0 left-0 w-[250px] h-full rounded-2xl overflow-hidden shadow-lg"
                  style={{
                    zIndex: features.length - position,
                  }}
                  animate={{
                    scale: isActive ? 1 : 0.92,
                    opacity: isActive ? 1 : 0.6,
                    x: -xoffset,
                    y: -yoffset,
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-fill rounded-2xl border border-blue-200"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
