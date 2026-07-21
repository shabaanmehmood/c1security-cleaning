// components/about/CompanyOverview.tsx

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Professional residential & commercial cleaning",
  "Fully trained and background-verified staff",
  "Eco-friendly cleaning products",
  "Flexible scheduling for every customer",
];

export default function CompanyOverview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Image Container with explicit dimensions */}
        <div className="relative flex justify-center">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/about/company-overview.jpg"
              alt="Professional cleaning team"
              width={600}
              height={450}
              className="h-[420px] w-[500px] object-cover rounded-2xl"
              priority
            />
          </div>

          {/* Experience Card Badge */}
          <div className="absolute -bottom-6 right-2 sm:right-6 rounded-2xl bg-blue-600 px-6 py-4 text-white shadow-lg text-center sm:text-left">
            <h3 className="text-3xl font-extrabold">10+</h3>
            <p className="text-xs font-medium opacity-90">
              Years of Cleaning Excellence
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div>
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Company Overview
          </span>

          <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Creating Cleaner Spaces,{" "}
            <span className="text-blue-600">Healthier Lives</span>
          </h2>

          <p className="mb-6 text-base leading-7 text-slate-600">
            We provide premium cleaning services designed for homes,
            offices, and commercial properties. Our experienced team uses
            modern equipment and environmentally friendly products to
            deliver spotless results every time.
          </p>

          <p className="mb-8 text-base leading-7 text-slate-600">
            Customer satisfaction is at the heart of everything we do.
            Whether it's routine maintenance or deep cleaning, we focus on
            quality, reliability, and professionalism so you can enjoy a
            cleaner, healthier environment.
          </p>

          {/* Features Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                <p className="text-sm font-medium text-slate-700">{feature}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-blue-700 transition-all text-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}