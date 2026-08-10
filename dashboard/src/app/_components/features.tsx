"use client";

import StackedFeatureCards from "./st";
import { Sparkles, ShieldCheck, Moon } from "lucide-react";

export const coreServicesFeatures = [
  {
    id: "cleaning",
    icon: Sparkles,
    title: "Commercial Cleaning",
    description:
      "Comprehensive, eco-friendly hygiene solutions tailored for offices, industrial sites, healthcare facilities, and commercial properties.",
    imageSrc: "/images/industrial/feature-commercial.jpg",
    imageAlt: "Commercial cleaning services",
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Security Solutions",
    description:
      "Professional site guarding, mobile patrols, and integrated asset protection to ensure complete safety for your business 24/7.",
    imageSrc: "/s.jpg",
    imageAlt: "Security and facility protection",
  },
  {
    id: "night-audit",
    icon: Moon,
    title: "Night Audit Services",
    description:
      "Overnight operational support, end-of-day financial auditing, and hospitality management services to keep operations running smoothly.",
    imageSrc: "/na.jpg",
    imageAlt: "Night audit and overnight operations",
  },
];

export default function FeaturedServices() {
  return (
    <div className=" py-12 sm:py-20 my-12 sm:my-20">
      {/* Section Header */}
      <div className="mx-auto mb-16 max-w-2xl text-center px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Our Core Facility Services
        </h2>
        <p className="mt-4 text-slate-600">
        Integrated cleaning, security, and night auditing solutions tailored to keep your enterprise clean, secure, and operating seamlessly.
        </p>
      </div>
      {/* Stacked Cards Component */}
      <div className="px-6 lg:px-8">
        <StackedFeatureCards features={coreServicesFeatures} />
      </div>
    </div>
  );
}