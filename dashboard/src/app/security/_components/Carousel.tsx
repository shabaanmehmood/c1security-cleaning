"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type Slide = {
  imageUrl: string;
  title: string;
  description: string;
};

export interface CarouselProps {
  slides: Slide[];
  heading?: string;
}

const Carousel: React.FC<CarouselProps> = ({ slides, heading }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden mt-30">
      {heading && (
        <h2 className="text-4xl md:text-5xl font-semibold o-outfit text-center text-blue-950 z-30 mb-20">
          {heading}
        </h2>
      )}

      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slides[current].imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <motion.h2
                key={`title-${current}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl o-outfit font-semibold mb-4 tracking-wide"
              >
                {slides[current].title}
              </motion.h2>
              <motion.p
                key={`desc-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg md:text-xl max-w-2xl text-gray-200"
              >
                {slides[current].description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ✅ Desktop Controls (centered vertically) */}
        <div className="hidden sm:block">
          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/40 px-3 py-1 hover:bg-black/60 z-30"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/40 px-3 py-1 hover:bg-black/60 z-30"
          >
            →
          </button>
        </div>

        {/* ✅ Mobile Controls (bottom-center) */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex sm:hidden gap-6 z-30">
          <button
            onClick={prevSlide}
            className="text-white text-3xl bg-black/40 px-3 py-1 hover:bg-black/60"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="text-white text-3xl bg-black/40 px-3 py-1 hover:bg-black/60"
          >
            →
          </button>
        </div>

        {/* ✅ Counter */}
        <div className="absolute bottom-5 right-6 text-white text-sm tracking-widest bg-black/40 px-4 py-2 rounded-full z-30">
          0{current + 1} / 0{slides.length}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
