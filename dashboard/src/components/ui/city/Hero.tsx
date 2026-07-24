"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
 import TiltedCard from '@/components/TiltedCard';
export interface HomeHeroProps {
  title: string;
  description: string;
  city: string;
}

export default function HomeHero({ title, description, city }: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 via-sky-50/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Top Badge */}
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border-blue-200/80 bg-blue-100/60 text-blue-800 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span>Next-Gen Facility Management</span>
            </Badge>

            {/* Dynamic Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-blue-950 leading-[1.15]">
              {title}
            </h1>

            {/* Dynamic Description */}
            <p className="text-base sm:text-lg text-blue-900/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Link href="/get-a-quote" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/30 px-8 py-6 text-base font-semibold transition-all duration-200"
                >
                  <span>Request a Free Quote</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-full border-blue-200 bg-white/80 text-blue-900 hover:bg-blue-50 hover:text-blue-950 px-8 py-6 text-base font-semibold shadow-sm"
                >
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Trust Indicator */}
            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 border-t border-blue-100">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-2 text-sm font-bold text-blue-950">4.9/5</span>
              </div>
              <p className="text-xs sm:text-sm text-blue-800/70 font-medium">
                Trusted by 500+ commercial properties nationwide
              </p>
            </div>
          </motion.div>

          {/* Right Column: Card Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Blueish Radial Ambient Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500 opacity-25 blur-2xl" />
              {/*{`/images/about/${city}.jpg`} */}
              <div className="relative rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-2xl shadow-blue-950/10 backdrop-blur-xl">
               

                <TiltedCard
                  imageSrc={`/images/cities/${city?.toLowerCase()}.png`} 
                  altText="Australia"
                  captionText={`${city}--Australia`}
                  containerHeight="300px"
                  containerWidth="300px"
                  imageHeight="300px"
                  imageWidth="300px"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip
                  displayOverlayContent
                  overlayContent={
                    <p className="tilted-card-demo-text">
                     {`${city}--Australia`}
                    </p>
                  }
                />

              </div>
              </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}