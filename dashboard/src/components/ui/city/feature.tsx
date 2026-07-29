"use client"; // 1. Added to allow passing Icon components to Slides

import Slides, { SlideItem } from "@/components/ui/city/singleSlide";
import { 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Headset, 
  Leaf, 
  FileCheck 
} from "lucide-react";

const features: SlideItem[] = [
  {
    icon: ShieldCheck,
    title: "Vetted & Trained Crew",
    description:
      "Every cleaner is background-checked, security-briefed, and trained onsite to your facility's exact standards.",
    image: "/images/about/company-overview.jpg",
  }, // 2. Fixed double comma here
  {
    icon: Sparkles,
    title: "Audited Quality Standards",
    description:
      "Regular third-party audits ensure every clean meets our high-standard sanitation benchmarks, every time.",
    image: "/images/about/company-story-secondary.jpg",
  },
  {
    icon: Clock,
    title: "Rapid Response",
    description:
      "Need an urgent turnaround or after-hours clean? Our team mobilizes fast without compromising on standards.",
    image: "/images/about/company-story-main.jpg",
  },
  {
    icon: Headset,
    title: "24/7 Dedicated Support",
    description:
      "Our operations team is on call round-the-clock to handle emergency requests, schedule changes, and instant site updates.",
    image: "/images/about/company-story-main.jpg",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description:
      "We utilize non-toxic, biodegradable products and sustainable cleaning practices safe for both your staff and the planet.",
    image: "/images/about/about-hero.jpg",
  },
  {
    icon: FileCheck,
    title: "Transparent Compliance",
    description:
      "Access real-time digital inspection logs, safety checklists, and compliance reports tailored for modern facility management.",
    image: "/images/about/team-3.jpg",
  },
];

export default function Featuress() {
  return (
    <>
      {/* other sections */}
      <Slides features={features} />
      {/* other sections */}
    </>
  );
}