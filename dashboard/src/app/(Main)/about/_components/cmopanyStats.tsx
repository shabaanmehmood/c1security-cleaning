
import {
  Building2,
  Users,
  Sparkles,
  Award,
} from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Building2,
    value: "1,500+",
    label: "Projects Completed",
    description: "Successfully delivered residential and commercial cleaning projects.",
  },
  {
    id: 2,
    icon: Users,
    value: "800+",
    label: "Happy Clients",
    description: "Trusted by homeowners, offices, and businesses across the region.",
  },
  {
    id: 3,
    icon: Sparkles,
    value: "10+",
    label: "Years Experience",
    description: "Providing reliable, professional, and high-quality cleaning services.",
  },
  {
    id: 4,
    icon: Award,
    value: "99%",
    label: "Customer Satisfaction",
    description: "Maintaining exceptional service standards with every visit.",
  },
];

export default function CompanyStats() {
  return (
    <section className="bg-primary/80 py-20 text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-semibold">
            Company Statistics
          </span>

          <h2 className="mb-4 text-4xl font-bold">
            Numbers That Reflect Our Success
          </h2>

          <p className="text-lg text-white/80">
            Every project we complete strengthens our commitment to delivering
            exceptional cleaning services with professionalism and reliability.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/15"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mb-2 text-4xl font-extrabold">
                  {stat.value}
                </h3>

                <h4 className="mb-3 text-xl font-semibold">
                  {stat.label}
                </h4>

                <p className="text-sm leading-7 text-white/80">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}