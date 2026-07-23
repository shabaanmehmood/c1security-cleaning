"use client";

import StackedFeatureCards from "@/components/ui/stackFeatureCards";
import {
  HardHat,
  Factory,
  ShieldAlert,
  Building2,
  Warehouse,
  Truck,
  Wrench,
  ClipboardCheck,
} from "lucide-react";

const industrialFeatures = [
  {
    icon: HardHat,
    title: "PPE & Site Safety Compliance",
    description:
      "All crew members operate under strict WHS and OSHA safety protocols, wearing site-specific PPE with White Card certification for active industrial environments.",
    imageSrc: "/images/industrial/feature-safety.jpg",
    imageAlt: "Industrial cleaners wearing PPE on a worksite",
  },
  {
    icon: Factory,
    title: "Heavy Machinery & Floor Scrubbing",
    description:
      "Advanced industrial cleaning equipment removes grease, dust, and contaminants from factory floors, production lines, and high-bay facilities.",
    imageSrc: "/images/industrial/feature-machinery.jpg",
    imageAlt: "Industrial ride-on floor scrubber cleaning factory floors",
  },
  {
    icon: ShieldAlert,
    title: "Zero-Downtime Operations",
    description:
      "Cleaning schedules are coordinated around production shifts and logistics operations to eliminate workflow disruptions and maintain operational continuity.",
    imageSrc: "/images/industrial/feature-downtime.jpg",
    imageAlt: "Industrial warehouse operating safely during cleaning shifts",
  },
  {
    icon: Warehouse,
    title: "Warehouses & Distribution Centres",
    description:
      "Comprehensive cleaning for warehouses, fulfilment centres, logistics hubs, loading docks, storage facilities, and inventory management areas.",
    imageSrc: "/images/industrial/feature-warehouse.jpg",
    imageAlt: "Large warehouse being professionally cleaned",
  },
  {
    icon: Building2,
    title: "Commercial & Corporate Facilities",
    description:
      "Professional cleaning solutions for corporate campuses, office buildings, government facilities, and administrative industrial headquarters.",
    imageSrc: "/images/industrial/feature-commercial.jpg",
    imageAlt: "Commercial industrial office building cleaning",
  },
  {
    icon: ClipboardCheck,
    title: "Healthcare & Government Compliance",
    description:
      "Cleaning programs aligned with healthcare-grade hygiene standards, government procurement requirements, quality assurance, and documented inspection processes.",
    imageSrc: "/images/industrial/feature-compliance.jpg",
    imageAlt: "Industrial cleaner performing compliance inspection",
  },
  {
    icon: Wrench,
    title: "Food Production & Manufacturing",
    description:
      "Specialized cleaning for food manufacturing plants, production facilities, processing equipment areas, and hygiene-sensitive environments with strict sanitation requirements.",
    imageSrc: "/images/industrial/feature-food.jpg",
    imageAlt: "Food manufacturing facility undergoing professional cleaning",
  },
  {
    icon: Truck,
    title: "24/7 Industrial Support Services",
    description:
      "Rapid-response cleaning teams available around the clock for emergency spill response, scheduled maintenance, shutdown cleaning, and high-demand industrial operations.",
    imageSrc: "/images/industrial/feature-support.jpg",
    imageAlt: "Industrial cleaning crew servicing logistics and transport facility",
  },
];

export default function IndustrialFeaturedServices() {
  return (
    <div className=" py-12 sm:py-20 my-12 sm:my-20">
      {/* Section Header */}
      <div className="mx-auto mb-16 max-w-2xl text-center px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Industrial Grade Safety & Decontamination
        </h2>
        <p className="mt-4 text-slate-600">
          Built for heavy industrial plants, distribution hubs, and manufacturing warehouses requiring strict compliance and heavy-duty sanitation.
        </p>
      </div>
      {/* Stacked Cards Component */}
      <div className="px-6 lg:px-8">
        <StackedFeatureCards features={industrialFeatures} />
      </div>
    </div>
  );
}