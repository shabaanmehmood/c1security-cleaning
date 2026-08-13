"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import HeroAnimation from "./homeHeroAnimation";

export default function Left() {
  return (
    <div className="flex h-full items-center">
      <div className="max-w-2xl">

        {/* Badge */}
        <HeroAnimation delay={0}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
            <ShieldCheck className="h-4 w-4" />
            <span>Trusted Security & Commercial Cleaning</span>
          </div>
        </HeroAnimation>

        {/* Heading */}
        <HeroAnimation delay={0.1}>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-6xl xl:text-7xl">
            A Cleaner,
            <br />

            <span className="text-blue-600">
              Safer Space
            </span>

            <br />

            For Your Business
          </h1>
        </HeroAnimation>

        {/* Description */}
        <HeroAnimation delay={0.2}>
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Delivering premium commercial cleaning and integrated security
            services that keep your workplace spotless, protected, and
            operating at its best every single day.
          </p>
        </HeroAnimation>

        {/* Buttons */}
        <HeroAnimation delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4">

            <Link href="/cleaning/get-a-quote">
              <Button
                size="lg"
                className="rounded-full bg-blue-600 px-8 py-6 text-base shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-1 hover:bg-blue-700"
              >
                Get a Free Quote

                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/cleaning/services">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-slate-300 px-8 py-6 text-base transition-all hover:-translate-y-1 hover:bg-slate-100"
              >
                Explore Services
              </Button>
            </Link>

          </div>
        </HeroAnimation>

        {/* Trust Stats */}
        <HeroAnimation delay={0.4}>
          <div className="mt-12 flex flex-wrap gap-10">

            <div>
              <h3 className="text-3xl font-bold text-blue-600">
                500+
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Commercial Clients
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">
                99.8%
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Client Satisfaction
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">
                24/7
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Support Available
              </p>
            </div>

          </div>
        </HeroAnimation>

      </div>
    </div>
  );
}