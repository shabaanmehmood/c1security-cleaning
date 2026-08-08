// components/about/CompanyStory.tsx

import Image from "next/image";
import { Quote } from "lucide-react";

export default function CompanyStory() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Content */}
        <div>
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Our Story
          </span>

          <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            From a Small Local Team to a{" "}
            <span className="text-blue-600">Trusted Cleaning Partner</span>
          </h2>

          <p className="mb-6 text-base leading-7 text-slate-600">
            Our journey began with one simple goal — to provide reliable,
            high-quality cleaning services that customers could trust. What
            started as a small team serving local homes has grown into a
            professional cleaning company trusted by homeowners, businesses,
            and property managers.
          </p>

          <p className="mb-8 text-base leading-7 text-slate-600">
            Through dedication, consistency, and attention to detail, we've
            built lasting relationships with our clients. Every space we clean
            reflects our commitment to excellence, professionalism, and
            customer satisfaction.
          </p>

          {/* Quote Card */}
          <div className="rounded-2xl border-l-4 border-blue-600 bg-white/90 p-6 shadow-md backdrop-blur-sm">
            <Quote className="mb-3 h-7 w-7 text-blue-600" />

            <p className="italic leading-relaxed text-slate-700 text-sm sm:text-base">
              "We don't just clean buildings—we create healthier, happier
              environments where people can live and work comfortably."
            </p>

            <div className="mt-4">
              <h3 className="font-bold text-slate-900 text-sm">
                Muhammad Shabaan Mehmood
              </h3>
              <p className="text-xs text-slate-500">Founder & CEO</p>
            </div>
          </div>
        </div>

        {/* Images with explicit width/height instead of fill */}
        <div className="relative flex justify-center">
          {/* Main Image Box */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/about/company-story-main.jpg"
              alt="Cleaning professionals at work"
              width={600}
              height={450}
              className="h-[400px] w-[500px] object-cover rounded-2xl"
              priority
            />
          </div>

          {/* Floating Secondary Image */}
          <div className="absolute -bottom-6 -left-2 hidden overflow-hidden rounded-2xl border-4 border-white shadow-lg md:block">
            <Image
              src="/images/about/company-story-secondary.jpg"
              alt="Team cleaning office"
              width={200}
              height={200}
              className="h-44 w-44 object-cover"
            />
          </div>

          {/* Experience Badge */}
          <div className="absolute top-4 right-4 rounded-2xl bg-blue-600 px-5 py-4 text-center text-white shadow-md">
            <h4 className="text-2xl font-extrabold">500+</h4>
            <p className="text-xs font-medium opacity-90">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}