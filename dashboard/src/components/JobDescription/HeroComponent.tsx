"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  DollarSign,
  MapPin,
  Clock3,
} from "lucide-react";
import { JobHeroProps } from "@/types/JobDescription"; 

export default function JobHero({
  title,
  city,
  state,
  country,
  employmentType,
  workplace,
  salary,
  company,
  slug,
}: JobHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-100" />

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/15 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-[140px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#2563eb 1px,transparent 1px),
            linear-gradient(to bottom,#2563eb 1px,transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_380px]">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-5 py-2 backdrop-blur-xl"
            >
              <Building2 className="mr-2 h-4 w-4 text-blue-600" />

              <span className="font-medium text-slate-700">
                {company.name}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-slate-900 md:text-7xl"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-6 max-w-3xl text-lg leading-8 text-slate-600"
            >
              Join our professional cleaning team and help maintain
              exceptional environments across commercial facilities. We
              are looking for motivated individuals who take pride in
              delivering quality work.
            </motion.p>

            {/* Info Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <InfoPill
                icon={<MapPin size={18} />}
                text={`${city}, ${state}`}
              />

              <InfoPill
                icon={<Briefcase size={18} />}
                text={employmentType}
              />

              <InfoPill
                icon={<Building2 size={18} />}
                text={workplace}
              />

              <InfoPill
                icon={<DollarSign size={18} />}
                text={`${salary.currency} $${salary.min} - $${salary.max}/${salary.period}`}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-12 flex flex-wrap gap-5"
            >
              <Link
                href={`/cleaning/career/jobs/${slug}/apply`}
                className="group inline-flex items-center rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/25"
              >
                Apply Now

                <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50">
                Save Job
              </button>
            </motion.div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-[32px] border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-3xl">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Job Overview
                  </h3>

                  <p className="mt-1 text-slate-500">
                    Quick information
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-100 p-3">
                  <Briefcase className="text-blue-600" />
                </div>
              </div>

              <OverviewItem
                icon={<MapPin />}
                title="Location"
                value={`${city}, ${country}`}
              />

              <OverviewItem
                icon={<Briefcase />}
                title="Employment"
                value={employmentType}
              />

              <OverviewItem
                icon={<Building2 />}
                title="Workplace"
                value={workplace}
              />

              <OverviewItem
                icon={<DollarSign />}
                title="Salary"
                value={`${salary.currency} $${salary.min} - $${salary.max}/${salary.period}`}
              />

              <OverviewItem
                icon={<Clock3 />}
                title="Status"
                value="Hiring Now"
              />

              <Link
                href={`/cleaning/career/jobs/${slug}/apply`}
                className="mt-10 flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white transition hover:scale-[1.02]"
              >
                Apply for this Position
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoPill({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-5 py-3 backdrop-blur-xl">
      <div className="text-blue-600">{icon}</div>

      <span className="font-medium text-slate-700">{text}</span>
    </div>
  );
}

function OverviewItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="mb-5 flex items-center justify-between rounded-2xl bg-slate-50 p-4">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-2 text-blue-600">
          {icon}
        </div>

        <span className="text-slate-500">{title}</span>
      </div>

      <span className="font-semibold text-slate-900">{value}</span>
    </div>
  );
}