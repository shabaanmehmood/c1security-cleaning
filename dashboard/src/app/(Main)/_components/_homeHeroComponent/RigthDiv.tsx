"use client";

import { motion } from "framer-motion";

const items = [
  { label: "Cleaning", delay: 0 },
  { label: "24/7", delay: 0.4 },
  { label: "Reliabilty", delay: 0.8 },
  { label: "Guards", delay: 1.2 },
  { label: "Trusted", delay: 1.6 },
  { label: "Sustainabilty", delay: 2.0 },
];

export default function Rigth() {
  return (
    <section className="relative flex h-[650px] w-full items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

      {/* Orbit Rings */}
      {[180, 280, 380].map((size) => (
        <motion.div
          key={size}
          animate={{ rotate: 360 }}
          transition={{
            duration: size / 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full border border-slate-300/30"
          style={{
            width: size,
            height: size,
          }}
        />
      ))}

      {/* Floating Badges */}
      {items.map((item, index) => {
        const angle = (360 / items.length) * index;

        return (
          <motion.div
            key={item.label}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
              delay: item.delay,
            }}
            className="absolute"
          >
            <div
              style={{
                transform: `rotate(${angle}deg) translateY(-190px) rotate(-${angle}deg)`,
              }}
            >
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-full border border-white/40 bg-white/80 px-5 py-3 shadow-2xl backdrop-blur-xl"
              >
                <span className="font-semibold text-slate-700">
                  {item.label}
                </span>
              </motion.div>
            </div>
          </motion.div>
        );
      })}

      {/* Center Circle */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          boxShadow: [
            "0 0 0 rgba(37,99,235,0.3)",
            "0 0 50px rgba(37,99,235,0.5)",
            "0 0 0 rgba(37,99,235,0.3)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-2xl"
      >
        <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md" />
        <span className="relative text-center text-xl font-bold">
          C1
          <br />
          SCURITY
        </span>
      </motion.div>
    </section>
  );
}