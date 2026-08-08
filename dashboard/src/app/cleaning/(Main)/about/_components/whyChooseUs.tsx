// components/about/WhyChooseUs.tsx

import {
  BadgeCheck,
  ShieldCheck,
  Leaf,
  Clock3,
  Users,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    title: "Experienced Professionals",
    description:
      "Our highly trained cleaning specialists deliver exceptional results with attention to every detail.",
    icon: Users,
  },
  {
    title: "Guaranteed Quality",
    description:
      "We maintain the highest cleaning standards and ensure every job meets your expectations.",
    icon: BadgeCheck,
  },
  {
    title: "Trusted & Insured",
    description:
      "Your property is protected by a fully insured team committed to professionalism and reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Eco-Friendly Products",
    description:
      "We use environmentally responsible cleaning products that are safe for families, pets, and workplaces.",
    icon: Leaf,
  },
  {
    title: "Flexible Scheduling",
    description:
      "Choose cleaning times that work best for your schedule, including recurring and one-time services.",
    icon: Clock3,
  },
  {
    title: "Dedicated Support",
    description:
      "Our friendly support team is always available to answer questions and ensure a smooth experience.",
    icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section className=" py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Why Choose Us
          </span>

          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Why Customers
            <span className="text-primary"> Trust Our Cleaning Services</span>
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            We combine professional expertise, premium-quality service, and
            customer-focused solutions to deliver spotless spaces and complete
            peace of mind.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="leading-7 text-gray-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 rounded-3xl bg-primary px-8 py-10 text-center text-white">
          <h3 className="mb-3 text-3xl font-bold">
            Your Satisfaction Is Our Priority
          </h3>

          <p className="mx-auto max-w-3xl text-lg text-white/90">
            Whether it's a home, office, or commercial facility, we are
            committed to delivering reliable, high-quality cleaning services
            that exceed expectations every time.
          </p>
        </div>
      </div>
    </section>
  );
}