"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Briefcase,
  Building2,
  DollarSign,
  Clock3,
  CalendarDays,
  BadgeCheck,
} from "lucide-react";
import { JobSidebarProps } from "@/types/JobDescription";

export default function JobSidebar({
  slug,
  title,
  company,
  city,
  state,
  country,
  employmentType,
  workplace,
  salary,
  postedDate,
  expiresAt,
  vacancies = 1,
}: JobSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-28 space-y-6">
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-3xl border border-white/30 bg-white/80 shadow-2xl backdrop-blur-xl"
      >
        {/* Top */}
        <div className="bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">
                {company.name}
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {title}
              </h2>
            </div>

            <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-lg">
              <BadgeCheck size={28} />
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-5 p-7">
          <SidebarItem
            icon={<MapPin size={20} />}
            label="Location"
            value={`${city}, ${state}, ${country}`}
          />

          <SidebarItem
            icon={<Briefcase size={20} />}
            label="Employment"
            value={employmentType}
          />

          <SidebarItem
            icon={<Building2 size={20} />}
            label="Workplace"
            value={workplace}
          />

          <SidebarItem
            icon={<DollarSign size={20} />}
            label="Salary"
            value={`${salary.currency} $${salary.min} - $${salary.max}/${salary.period}`}
          />

          {postedDate && (
            <SidebarItem
              icon={<CalendarDays size={20} />}
              label="Posted"
              value={postedDate}
            />
          )}

          {expiresAt && (
            <SidebarItem
              icon={<Clock3 size={20} />}
              label="Closing Date"
              value={expiresAt}
            />
          )}

          <SidebarItem
            icon={<BadgeCheck size={20} />}
            label="Vacancies"
            value={`${vacancies}`}
          />

          <div className="pt-5">
            <Link
              href={`/career/jobs/${slug}/apply`}
              className="group flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30"
            >
              Apply Now

              <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <button className="mt-4 w-full rounded-2xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-blue-400 hover:bg-blue-50">
              Save Job
            </button>
          </div>
        </div>
      </motion.div>

      {/* Company Card */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="rounded-3xl border border-slate-200 bg-white/80 p-7 shadow-xl backdrop-blur-xl"
      >
        <h3 className="text-xl font-bold text-slate-900">
          Why Join Us?
        </h3>

        <div className="mt-6 space-y-4">
          <Benefit text="Competitive hourly pay" />

          <Benefit text="Weekly payments" />

          <Benefit text="Flexible working hours" />

          <Benefit text="Paid training provided" />

          <Benefit text="Supportive work environment" />

          <Benefit text="Career growth opportunities" />
        </div>
      </motion.div>

      {/* Need Help */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white"
      >
        <h3 className="text-xl font-bold">
          Questions?
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-300">
          Our recruitment team is here to help you throughout the
          application process.
        </p>

        <Link
          href="/contacts"
          className="mt-6 inline-flex items-center font-semibold text-cyan-300 hover:text-cyan-200"
        >
          Contact Recruitment

          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </motion.div>
    </aside>
  );
}

function SidebarItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4 transition hover:bg-blue-50">
      <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">
          {label}
        </p>

        <p className="mt-1 font-semibold text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}

function Benefit({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-full bg-blue-100 p-1.5">
        <BadgeCheck
          size={16}
          className="text-blue-600"
        />
      </div>

      <span className="text-slate-700">
        {text}
      </span>
    </div>
  );
}