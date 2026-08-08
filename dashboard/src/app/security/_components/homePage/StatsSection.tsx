"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { number: 500, label: "Active Companies", suffix: "+" },
    { number: 10000, label: "Verified Guards", suffix: "+" },
    { number: 50000, label: "Jobs Completed", suffix: "+" },
    { number: 98, label: "Satisfaction Rate", suffix: "%" },
  ];

  const AnimatedNumber = ({
    target,
    suffix,
  }: {
    target: number;
    suffix: string;
  }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.3, once: false });
    const [value, setValue] = useState(0);

    useEffect(() => {
      if (inView) {
        let start = 0;
        const duration = 2000;
        const stepTime = 20;
        const increment = target / (duration / stepTime);

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            start = target;
            clearInterval(timer);
          }
          setValue(Math.floor(start));
        }, stepTime);

        return () => clearInterval(timer);
      } else {
        setValue(0);
      }
    }, [inView, target]);

    return (
      <span ref={ref}>
        {value.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section className="py-10 mb-20 overflow-hidden">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center text-4xl sm:text-5xl md:text-6xl text-blue-950 mt-10 font-semibold o-outfit mb-20"
      >
        Our Stats
      </motion.h1>

      {/* Animated Stats */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center relative">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: false, amount: 0.3 }}
                className="space-y-6 py-6 px-4"
              >
                <h2 className="text-4xl lg:text-6xl font-bold o-outfit text-blue-800">
                  <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                </h2>
                <p className="text-lg lg:text-xl text-gray-600">{stat.label}</p>
              </motion.div>

              {/* Vertical Divider (hidden on small screens) */}
              {index < stats.length - 1 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: "60%", opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="hidden md:block absolute top-1/2 transform -translate-y-1/2 right-0 h-[60%] w-px bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"
                  style={{
                    gridColumnStart: index + 1,
                    gridColumnEnd: index + 2,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
