"use client";
import React from "react";
import { motion } from "framer-motion";

function WhoWeAre() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden px-6">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} // 👈 replays on every scroll
          className="text-center text-4xl sm:text-5xl md:text-6xl tracking-tight max-w-xl text-blue-950 mt-10 font-semibold o-outfit lg:text-left"
        >
          Who We Are
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} // 👈 replays on every scroll
          className="mt-6 max-w-3xl text-center text-lg md:text-xl text-slate-600 leading-relaxed"
        >
          We are a trusted security solutions company dedicated to connecting
          professional guards with reliable contractors through our innovative
          digital platform. Our newly launched app simplifies hiring and job
          management — allowing contractors to post jobs, hire guards, and
          monitor their performance in real time. Guards can easily register,
          explore verified opportunities, and apply for jobs that match their
          skills. At our core, we aim to build a safer and smarter workforce by
          combining technology with trust and reliability.
        </motion.p>
      </section>
    </>
  );
}

export default WhoWeAre;
