
import StackedFeatureCards from "@/components/ui/stackFeatureCards";
import { ShieldCheck, Sparkles, Clock, Headset, Leaf, FileCheck } from "lucide-react";

const features = [
  {
    id:"Trained-Crew",
    icon: ShieldCheck,
    title: "Vetted & Trained Crew",
    description:
      "Every cleaner is background-checked, security-briefed, and trained onsite to your facility's exact standards.",
    imageSrc: "/images/about/company-overview.jpg",
  },
  {
    id:"Quality",
    icon: Sparkles,
    title: "Audited Quality Standards",
    description:
      "Regular third-party audits ensure every clean meets our high-standard sanitation benchmarks, every time.",
    imageSrc: "/images/about/company-story-secondary.jpg",
  },
  {
    id:"Response",
    icon: Clock,
    title: "Rapid Response",
    description:
      "Need an urgent turnaround or after-hours clean? Our team mobilizes fast without compromising on standards.",
    imageSrc: "/images/about/company-story-main.jpg",
  },
  {
    id:"Support",
    icon: Headset,
    title: "24/7 Dedicated Support",
    description:
      "Our operations team is on call round-the-clock to handle emergency requests, schedule changes, and instant site updates.",
    imageSrc:"/images/about/company-story-main.jpg",
  },
  {
    id:"Eco-Friendly",
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description:
      "We utilize non-toxic, biodegradable products and sustainable cleaning practices safe for both your staff and the planet.",
    imageSrc: "/images/about/about-hero.jpg",
  },
  {
    id:"Transparent ",
    icon: FileCheck,
    title: "Transparent Compliance",
    description:
      "Access real-time digital inspection logs, safety checklists, and compliance reports tailored for modern facility management.",
    imageSrc: "/images/about/team-3.jpg",
  },
];

export default function Features() {
  return (
    <>
      {/* other sections */}
      <StackedFeatureCards features={features} />
      {/* other sections */}
    </>
  );
}