// components/about/CleaningProcess.tsx

import {
  CalendarDays,
  ClipboardCheck,
  Sparkles,
  Smile,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Book Your Service",
    description:
      "Choose the cleaning service that fits your needs and schedule your appointment online or by phone.",
    icon: CalendarDays,
  },
  {
    id: "02",
    title: "Free Assessment",
    description:
      "We understand your cleaning requirements and prepare a customized plan for your home or business.",
    icon: ClipboardCheck,
  },
  {
    id: "03",
    title: "Professional Cleaning",
    description:
      "Our experienced team arrives on time with professional equipment and eco-friendly cleaning products.",
    icon: Sparkles,
  },
  {
    id: "04",
    title: "Final Inspection",
    description:
      "We carefully review every detail to ensure the highest quality standards and complete customer satisfaction.",
    icon: Smile,
  },
];

export default function CleaningProcess() {
  return (
    <section className=" py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Our Process
          </span>

          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Our Simple
            <span className="text-primary"> Cleaning Process</span>
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            We follow a proven step-by-step process to deliver consistent,
            reliable, and high-quality cleaning services every time.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-8 hidden h-1 w-[80%] -translate-x-1/2 bg-gray-200 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="group relative text-center"
                >
                  {/* Step Number */}
                  <div className="absolute right-4 top-0 text-6xl font-extrabold text-black-100">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-10 w-10" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-gray-50 p-8 text-center">
          <h3 className="mb-3 text-2xl font-bold text-gray-900">
            Fast, Reliable & Hassle-Free
          </h3>

          <p className="mx-auto max-w-2xl text-gray-600">
            From booking to the final inspection, we make every step simple,
            transparent, and focused on delivering a spotless cleaning
            experience.
          </p>
        </div>
      </div>
    </section>
  );
}