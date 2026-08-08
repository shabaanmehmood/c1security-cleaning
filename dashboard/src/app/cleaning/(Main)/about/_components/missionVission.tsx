// components/about/MissionVision.tsx

import { Eye, Target } from "lucide-react";

const cards = [
  {
    title: "Our Mission",
    description:
      "Our mission is to provide exceptional residential and commercial cleaning services that create healthier, safer, and more comfortable environments. We strive to exceed customer expectations through professionalism, reliability, and attention to every detail.",
    icon: Target,
    bg: "bg-primary",
  },
  {
    title: "Our Vision",
    description:
      "Our vision is to become the most trusted cleaning company by delivering consistent quality, embracing innovation, and building long-term relationships with our clients while promoting sustainable and eco-friendly cleaning practices.",
    icon: Eye,
    bg: "bg-emerald-600",
  },
];

export default function MissionVision() {
  return (
    <section className=" py-20">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Mission & Vision
          </span>

          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Guided by Purpose,
            <span className="text-primary"> Driven by Excellence</span>
          </h2>

          <p className="text-lg text-gray-600">
            Everything we do is centered around delivering outstanding cleaning
            services while building trust, maintaining quality, and creating
            healthier spaces for our customers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${card.bg} text-white`}
                >
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {card.title}
                </h3>

                <p className="leading-8 text-gray-600">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}