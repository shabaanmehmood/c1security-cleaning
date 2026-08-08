"use client";

import StackedFeatureCards from "@/components/ui/stackFeatureCards";
import {
  Building2,
  Briefcase,
  Stethoscope,
  Factory,
  Warehouse,
  GraduationCap,
  Utensils,
  Hospital,
  Landmark,
} from "lucide-react";


export const industrialFeatures = [
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Cleaning",
    description:
      "Comprehensive enterprise-grade hygiene and facility maintenance for corporate headquarters, commercial buildings, and multi-tenant facilities.",
    imageSrc: "/images/industrial/feature-commercial.jpg",
    imageAlt: "Commercial office cleaning",
  },
  {
    id: "office",
    icon: Briefcase,
    title: "Office Cleaning",
    description:
      "Professional office sanitisation including workstations, meeting rooms, reception areas, kitchens, and executive offices.",
    imageSrc: "/images/industrial/feature-compliance.jpg",
    imageAlt: "Office cleaning services",
  },
  {
    id: "medical",
    icon: Stethoscope,
    title: "Medical Cleaning",
    description:
      "Hospital-grade infection control for hospitals, clinics, dental practices, surgical centres, and pathology laboratories.",
    imageSrc: "/images/industrial/feature-support.jpg",
    imageAlt: "Medical facility cleaning",
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Industrial Cleaning",
    description:
      "Heavy-duty machinery degreasing, factory sanitation, hydro-jetting, confined space cleaning, and emergency spill response.",
    imageSrc: "/images/industrial/feature-machinery.jpg",
    imageAlt: "Industrial cleaning crew",
  },
  {
    id: "warehouse",
    icon: Warehouse,
    title: "Warehouse Cleaning",
    description:
      "Ride-on floor scrubbing, high-bay dust removal, loading dock maintenance, and warehouse sanitation for logistics facilities.",
    imageSrc: "/images/industrial/feature-warehouse.jpg",
    imageAlt: "Warehouse cleaning",
  },
  {
    id: "school",
    icon: GraduationCap,
    title: "School Cleaning",
    description:
      "Safe, non-toxic classroom, laboratory, gymnasium, cafeteria, and campus cleaning for educational institutions.",
    imageSrc: "/images/industrial/feature-downtime.jpg",
    imageAlt: "School cleaning services",
  },
  {
    id: "food",
    icon: Utensils,
    title: "Food Processing Cleaning",
    description:
      "HACCP-compliant cleaning for food manufacturing plants, commercial kitchens, production areas, and processing equipment.",
    imageSrc: "/images/industrial/feature-food.jpg",
    imageAlt: "Food processing facility cleaning",
  },
  {
    id: "hospital",
    icon: Hospital,
    title: "Hospitality Cleaning",
    description:
      "Deep cleaning for hotels, restaurants, clubs, bars, kitchens, dining areas, and event venues.",
    imageSrc: "/images/industrial/hospital.jpg",
    imageAlt: "Hotel and restaurant cleaning",
  },
  {
    id: "government",
    icon: Landmark,
    title: "Government Cleaning",
    description:
      "Security-cleared cleaning services for government buildings, civic centres, courthouses, and public sector facilities.",
    imageSrc: "/images/industrial/govt.jpg",
    imageAlt: "Government building cleaning",
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