"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AboutHero() {
  return (
    <>
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
    </div>

      <div className="container relative z-10 mx-auto px-6 py-28 lg:px-10">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-5 bg-blue-600 hover:bg-blue-700">
              About Our Company
            </Badge>

            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              Building Cleaner
              <span className="block text-blue-400">
                Workplaces Since 2002
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-800">
              We help businesses create healthier, cleaner, and more productive
              workplaces through reliable commercial cleaning solutions,
              experienced professionals, and industry-leading quality standards.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link href="/get-a-quote">
                <Button size="lg" className="gap-2">
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white hover:text-slate-900"
                >
                  Contact Us
                </Button>
              </Link>

            </div>

            {/* Highlights */}

            <div className="mt-14 grid grid-cols-3 gap-6">

              <div className="space-y-2">
                <ShieldCheck className="h-8 w-8 text-blue-400" />
                <h3 className="font-semibold">Certified</h3>
                <p className="text-sm text-slate-400">
                  Industry approved standards
                </p>
              </div>

              <div className="space-y-2">
                <Users className="h-8 w-8 text-blue-400" />
                <h3 className="font-semibold">500+ Clients</h3>
                <p className="text-sm text-slate-400">
                  Trusted nationwide
                </p>
              </div>

              <div className="space-y-2">
                <Sparkles className="h-8 w-8 text-blue-400" />
                <h3 className="font-semibold">20+ Years</h3>
                <p className="text-sm text-slate-400">
                  Commercial experience
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            {/* Main Image */}

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-md">

              <img
                src="/images/about/about-hero.jpg"
                alt="Commercial Cleaning Team"
                className="h-[550px] w-full object-cover"
              />

            </div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-10 left-6 rounded-2xl border border-white/10 bg-slate-900/90 p-6 shadow-xl backdrop-blur-lg"
            >
              <h3 className="text-4xl font-bold text-blue-400">
                20+
              </h3>

              <p className="mt-2 text-slate-300">
                Years of Commercial Cleaning Excellence
              </p>
            </motion.div>

          </motion.div>

        </div>

      </div>
      </>
  );
}