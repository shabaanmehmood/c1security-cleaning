"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  MessageCircle,
  Users,
  Building2,
  Eye,
  Moon,
  ShieldCheck,
  Hotel,
  Landmark,
  Home as HomeIcon,
  GraduationCap,
  Briefcase,
  Palmtree,
  CalendarClock,
  Award,
  ArrowRight,
} from "lucide-react";
import Reveal from "../_component/reveal";
import Skyline from "../_component/skylane";

const STANDARDS = [
  { icon: Sparkles, text: "High-quality guest service" },
  { icon: MessageCircle, text: "Professional communication" },
  { icon: Users, text: "Independent & team-ready" },
  { icon: Building2, text: "Comfortable in busy environments" },
  { icon: Eye, text: "Genuine attention to detail" },
  { icon: Moon, text: "Flexible with overnight shifts" },
  { icon: ShieldCheck, text: "Represents your property well" },
];

const WHO_WE_SUPPORT = [
  { icon: Hotel, label: "Hotels" },
  { icon: Palmtree, label: "Resorts" },
  { icon: Building2, label: "Serviced Apartments" },
  { icon: HomeIcon, label: "Motels" },
  { icon: Sparkles, label: "Boutique Hotels" },
  { icon: Landmark, label: "Luxury Accommodation" },
  { icon: GraduationCap, label: "Student Accommodation" },
  { icon: Briefcase, label: "Corporate Accommodation" },
  { icon: Palmtree, label: "Holiday Accommodation" },
];

export default function About() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans overflow-hidden">

      {/* HERO */}
      <section className="relative px-6 pt-32 pb-24 sm:pt-40 sm:pb-32">
        {/* Soft background decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C9A24B]/10 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A24B]/30 bg-[#C9A24B]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7625]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            About us
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Staff you can rely on,
            <span className="block text-[#B58B32]">
              around the clock.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            From welcoming guests at the front desk to managing overnight
            operations, the right hospitality staff can make a significant
            difference to your guest experience. We help Australian
            accommodation businesses find reliable Night Auditors, Concierge
            Staff and Front Office Professionals to support their operations
            and maintain high service standards.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mx-auto mt-10 h-1 rounded-full bg-[#C9A24B]"
          />
        </motion.div>
      </section>

      {/* STANDARDS */}
      <section className="relative bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#A27C2C]">
              What we look for
            </div>
          </Reveal>

          <Reveal index={1}>
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              More than qualified — reliable, professional, presentable.
            </h2>
          </Reveal>

          <Reveal index={2}>
            <p className="mx-auto mb-14 mt-5 max-w-xl text-center text-sm leading-7 text-slate-600 sm:text-base">
              Hospitality businesses need people who are customer-focused
              first. Every candidate we put forward is measured against the
              same standard.
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-3">
            {STANDARDS.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  className="group flex cursor-default items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm transition-shadow duration-300 hover:border-[#C9A24B]/50 hover:shadow-md"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C9A24B]/10">
                    <Icon className="h-4 w-4 text-[#B58B32]" />
                  </div>

                  <span className="text-sm font-medium text-slate-700">
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TWO WAYS WE HELP */}
      <section className="px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#A27C2C]">
              How we help
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Flexible staffing for your business
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Casual */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#C9A24B]/40 hover:shadow-xl sm:p-10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9A24B]/10 transition-transform duration-300 group-hover:scale-110">
                <CalendarClock className="h-7 w-7 text-[#B58B32]" />
              </div>

              <h3 className="mb-3 text-2xl font-bold text-slate-950">
                Casual & Temporary
              </h3>

              <p className="text-sm leading-7 text-slate-600">
                Flexible staffing solutions to cover leave, peak periods,
                staff shortages and unexpected vacancies — so a gap in the
                roster never becomes a gap in service.
              </p>

              <div className="mt-7 h-1 w-10 rounded-full bg-[#C9A24B] transition-all duration-300 group-hover:w-20" />
            </motion.div>

            {/* Permanent */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#C9A24B]/40 hover:shadow-xl sm:p-10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9A24B]/10 transition-transform duration-300 group-hover:scale-110">
                <Award className="h-7 w-7 text-[#B58B32]" />
              </div>

              <h3 className="mb-3 text-2xl font-bold text-slate-950">
                Permanent Recruitment
              </h3>

              <p className="text-sm leading-7 text-slate-600">
                Find suitable hospitality professionals for long-term
                positions within your organisation, matched for skill and fit
                from day one.
              </p>

              <div className="mt-7 h-1 w-10 rounded-full bg-[#C9A24B] transition-all duration-300 group-hover:w-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO WE SUPPORT */}
      <section className="bg-slate-50 px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#A27C2C]">
              Who we support
            </p>
          </Reveal>

          <Reveal index={1}>
            <h2 className="mx-auto mb-14 max-w-xl text-center text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Accommodation businesses across Australia.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {WHO_WE_SUPPORT.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group flex min-h-[140px] cursor-default flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:border-[#C9A24B]/50 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A24B]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#C9A24B]/15">
                    <Icon className="h-6 w-6 text-[#B58B32]" />
                  </div>

                  <span className="text-sm font-semibold text-slate-700">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A24B]/10 blur-3xl" />

        <Reveal className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9A24B]/10">
            <Briefcase className="h-7 w-7 text-[#B58B32]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Ready to strengthen your front desk?
          </h2>

          <p className="mx-auto mb-8 mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Tell us what your roster needs and we'll help you find the right
            people for it.
          </p>

          <motion.a
            href="/night-audit/get-a-qoutes"
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="inline-flex items-center gap-2 rounded-full bg-[#C9A24B] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#C9A24B]/20 transition-colors hover:bg-[#A9822F]"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </Reveal>
      </section>

      <Skyline />
    </main>
  );
}
