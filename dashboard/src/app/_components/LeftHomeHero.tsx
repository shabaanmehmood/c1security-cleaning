"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import HeroAnimation from "../cleaning/(Main)/_components/_homeHeroComponent/homeHeroAnimation";

export default function Left() {
  return (
    <div className="flex h-full w-full items-center">
      <div className="w-full">

        {/* Badge */}
        <HeroAnimation delay={0}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100/80 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur sm:text-sm">
            <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Cleaning, Security & Night Audit Solutions</span>
          </div>
        </HeroAnimation>

        {/* Heading */}
        <HeroAnimation delay={0.1}>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-4xl xl:text-5xl">
            Clean, Secure &{" "}
            <span className="text-blue-600">
              Fully Audited
            </span>{" "}
            For Your Business
          </h1>
        </HeroAnimation>

        {/* Description */}
        <HeroAnimation delay={0.2}>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Delivering integrated commercial cleaning, professional security, and 
            thorough night audit services to keep your workplace spotless, 
            protected, and operating smoothly around the clock.
          </p>
        </HeroAnimation>

        {/* Buttons */}
       
        {/* Trust Stats */}
        <HeroAnimation delay={0.4}>
          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4 border-t border-slate-200/60 pt-6">
            <div>
              <h3 className="text-xl font-bold text-blue-600 sm:text-2xl">
                500+
              </h3>
              <p className="mt-0.5 text-xs text-slate-500">
                Commercial Clients
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-600 sm:text-2xl">
                99.8%
              </h3>
              <p className="mt-0.5 text-xs text-slate-500">
                Client Satisfaction
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-600 sm:text-2xl">
                24/7
              </h3>
              <p className="mt-0.5 text-xs text-slate-500">
                Support Available
              </p>
            </div>
          </div>
        </HeroAnimation>

      </div>
    </div>
  );
}