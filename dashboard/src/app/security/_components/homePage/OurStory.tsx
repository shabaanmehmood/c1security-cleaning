"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-12 lg:px-20 py-20 bg-white overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-sky-100 to-indigo-200 opacity-40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-tr from-pink-100 to-purple-200 opacity-40 blur-3xl" />

      {/* Left Side: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="z-10 w-full lg:flex-1"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl bg-clip-text max-w-xl text-blue-950 mt-10 font-semibold mb-8 o-outfit text-center lg:text-left">
          Our Story
        </h2>

        <p className="text-slate-600 text-lg leading-relaxed mb-4">
          Our journey began with a vision to modernize the security industry by
          bridging the gap between contractors and professional guards through
          technology. We understood the challenges of managing security teams
          and created a seamless digital solution that simplifies the entire
          process.
        </p>

        <p className="text-slate-600 text-lg leading-relaxed mb-4">
          Our newly launched app empowers contractors to post verified jobs,
          hire trusted guards, and monitor their performance in real-time,
          ensuring reliability and transparency at every step.
        </p>

        <p className="text-slate-600 text-lg leading-relaxed">
          Guards can register, explore job opportunities, and work with verified
          contractors all through a secure and easy-to-use platform. Together,
          we are shaping a safer, smarter, and more connected security
          ecosystem.
        </p>
      </motion.div>

      {/* Right Side: Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full flex justify-center z-10 lg:flex-1"
      >
        <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-slate-50 to-slate-100">
          <Image
            src="/ourStory.png"
            alt="Our Story - Security Service App"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
