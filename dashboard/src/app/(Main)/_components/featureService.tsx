// Wherever your page/section lives
"use client";

import { motion } from "framer-motion";
import FeatureCard from "../../../components/ui/featurecard";
import { ShieldCheck, Sparkles, Clock } from "lucide-react"; // swap for your actual icons

const features = [
  {
    icon: ShieldCheck,
    title: "Vetted & Trained Crew",
    description:
      "Every cleaner is background-checked, security-briefed, and trained onsite to your facility's exact standards.",
    imageSrc: "/images/about/feature-security.jpg",
  },
  {
    icon: Sparkles,
    title: "Audited Quality Standards",
    description:
      "Regular third-party audits ensure every clean meets our high-standard sanitation benchmarks, every time.",
    imageSrc: "/images/about/feature-quality.jpg",
  },
  {
    icon: Clock,
    title: "Rapid Response",
    description:
      "Need an urgent turnaround or after-hours clean? Our team mobilizes fast without compromising on standards.",
    imageSrc: "/images/about/feature-response.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function FeaturedServices() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Why Choose C1SCURITY-CLEANING?
        </h2>
        <p className="mt-4 text-slate-600">
          We integrate facility security and high-standard sanitation into a seamless service package.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 lg:grid-cols-2"
      >
        {features.map((feature, idx) => (
          <FeatureCard
            key={feature.title}
            index={idx}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            imageSrc={feature.imageSrc}
          />
        ))}
      </motion.div>
    </section>
  );
}