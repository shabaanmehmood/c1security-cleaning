"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useSwipeable } from "react-swipeable";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The staff experience and rostering works much better than other security rostering software we've used. The app is usable and reliable, and the payroll and invoicing is streamlined with no manual or double data entry.",
    name: "Ben Dewson",
    role: "Managing Director, Holistic Industries",
  },
  {
    quote:
      "Control-1 Security’s scheduling and reporting tools have made managing shifts incredibly easy. Our guards love the intuitive interface and we love the transparency.",
    name: "Sarah Collins",
    role: "Operations Manager, SafeGuard Solutions",
  },
  {
    quote:
      "This platform has transformed how we manage our security staff — real-time updates, simple payroll management, and reliable client reporting.",
    name: "Michael Lee",
    role: "Director, Urban Security Group",
  },
];

const TestimonialsCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  });

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-white text-center mb-20" {...handlers}>
      <h2 className="max-w-4xl mx-auto text-center text-4xl o-outfit md:text-5xl font-semibold mb-30 text-gray-900">
        Trusted by Germany&apos;s leading security and labour hire companies
      </h2>

      <div className="relative max-w-3xl mx-auto">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="px-6"
          >
            <div className="flex justify-center mb-4 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400" />
              ))}
            </div>

            <p className="text-lg md:text-xl text-gray-700 italic mb-8 leading-relaxed">
              “{testimonials[index].quote}”
            </p>

            <div>
              <p className="font-semibold text-gray-900">
                {testimonials[index].name}
              </p>
              <p className="text-gray-500 text-sm">
                {testimonials[index].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="hidden md:block absolute top-1/2 -left-12 transform -translate-y-1/2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-10 h-10 border-blue-500 text-blue-500 hover:bg-blue-50 shadow-md"
            onClick={prev}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </div>

        <div className="hidden md:block absolute top-1/2 -right-12 transform -translate-y-1/2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-10 h-10 border-blue-500 text-blue-500 hover:bg-blue-50 shadow-md"
            onClick={next}
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
