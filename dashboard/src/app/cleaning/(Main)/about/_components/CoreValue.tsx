// components/about/CoreValues.tsx

import {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Users,
  Leaf,
  Clock3,
} from "lucide-react";

const values = [
  {
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and accountability in every service we provide.",
    icon: ShieldCheck,
  },
  {
    title: "Customer First",
    description:
      "Our customers are at the center of every decision. Their satisfaction is our highest priority.",
    icon: HeartHandshake,
  },
  {
    title: "Quality",
    description:
      "We pay attention to every detail to ensure consistently outstanding cleaning results.",
    icon: Sparkles,
  },
  {
    title: "Teamwork",
    description:
      "We believe collaboration, respect, and continuous learning create exceptional service.",
    icon: Users,
  },
  {
    title: "Sustainability",
    description:
      "We promote eco-friendly cleaning practices that protect both people and the environment.",
    icon: Leaf,
  },
  {
    title: "Reliability",
    description:
      "Clients can count on us to be punctual, dependable, and committed to excellence every time.",
    icon: Clock3,
  },
];

export default function CoreValues() {
  return (
    <section className=" py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Our Core Values
          </span>

          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            The Values That
            <span className="text-primary"> Define Our Company</span>
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            Our values shape every interaction, every service, and every
            relationship we build. They guide our team in delivering exceptional
            cleaning experiences every day.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="leading-7 text-gray-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}