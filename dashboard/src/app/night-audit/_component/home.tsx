"use client";

import { motion } from "framer-motion";
import {
  Moon,
  ConciergeBell,
  Building2,
  CalendarClock,
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Users,
  Eye,
  ShieldCheck,
  Phone,
} from "lucide-react";

import Reveal from "./reveal";
import ShiftTimeline from "./shift";
import Skyline from "./skylane";

const SERVICES = [
  {
    icon: Moon,
    title: "Night Audit",
    copy: "Experienced overnight staff for hotel reception, guest services and daily financial reconciliation.",
  },
  {
    icon: ConciergeBell,
    title: "Concierge",
    copy: "Professional guest-service staff focused on creating a positive and personalised guest experience.",
  },
  {
    icon: Building2,
    title: "Front Office",
    copy: "Reception and guest-service professionals for check-in, check-out, reservations and general front desk operations.",
  },
  {
    icon: CalendarClock,
    title: "Casual & Temporary Staffing",
    copy: "Flexible staffing solutions to cover leave, peak periods, staff shortages and unexpected vacancies.",
  },
  {
    icon: Award,
    title: "Permanent Recruitment",
    copy: "Find suitable hospitality professionals for long-term positions within your organisation.",
  },
];

const NIGHT_AUDIT_DUTIES = [
  "Completing the daily night audit and financial reconciliation",
  "Processing late-night check-ins and early check-outs",
  "Handling guest enquiries and requests",
  "Managing reservations and room allocations",
  "Reconciling cash, card and other payments",
  "Preparing daily financial and operational reports",
  "Monitoring hotel systems and overnight activity",
  "Responding to guest issues and emergencies",
  "Maintaining accurate records and documentation",
  "Completing professional handovers for the morning team",
];

const CONCIERGE_DUTIES = [
  "Welcoming and assisting hotel guests",
  "Providing information about local attractions, restaurants and services",
  "Arranging transportation, taxis and transfers",
  "Assisting with restaurant and event bookings",
  "Organising tours, activities and entertainment",
  "Handling guest requests and special arrangements",
  "Providing directions and local recommendations",
  "Assisting with luggage and guest services where required",
  "Communicating with hotel departments and external service providers",
  "Maintaining a professional and welcoming guest experience",
];

const WHY_US = [
  { icon: Sparkles, text: "Deliver high-quality guest service" },
  { icon: MessageCircle, text: "Communicate professionally" },
  { icon: Users, text: "Work independently and as part of a team" },
  { icon: Building2, text: "Handle busy hospitality environments" },
  { icon: Eye, text: "Maintain attention to detail" },
  { icon: Moon, text: "Work flexible and overnight shifts" },
  {
    icon: ShieldCheck,
    text: "Represent your hotel or accommodation business professionally",
  },
];

const WHO_WE_SUPPORT = [
  "Hotels",
  "Resorts",
  "Serviced Apartments",
  "Motels",
  "Boutique Hotels",
  "Luxury Accommodation",
  "Student Accommodation",
  "Corporate Accommodation",
  "Holiday Accommodation Providers",
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-white font-sans text-slate-900">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden px-6 pb-28 pt-36 sm:pt-40">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/70 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#C9A24B]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700"
          >
            Hospitality Staffing · Australia-wide
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[2.6rem] font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl"
          >
            Reliable Night Audit & Concierge staff,
            <span className="text-blue-700"> for whatever hour</span> the
            guest needs you.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            We help hotels, resorts, serviced apartments and accommodation
            providers across Australia recruit dependable Night Auditors,
            Concierge Staff and Front Office Professionals — so guest service
            never clocks off.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="/night-audit/get-a-qoutes"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-700 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-700/20 transition-all hover:-translate-y-0.5 hover:bg-blue-800"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/night-audit/contacts"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-300 hover:text-blue-700"
            >
              Talk to our team
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mx-auto mt-16 max-w-lg"
          >
            <ShiftTimeline />
          </motion.div>
        </div>

        <Skyline />
      </section>

      {/* =========================================================
          SERVICES — BLUE COMPONENT
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#071B3A] px-6 py-24 text-white">
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#C9A24B]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-300">
              Staffing solutions
            </p>
          </Reveal>

          <Reveal index={1}>
            <div className="mb-14 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                Every role your front desk needs,
                <span className="text-blue-300"> day or night.</span>
              </h2>

              <p className="max-w-md text-sm leading-relaxed text-blue-100/70">
                Flexible hospitality staffing designed around your property,
                your guests and your operational requirements.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.title}
                index={i}
                from="up"
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -7 }}
                  transition={{ duration: 0.25 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] p-7 backdrop-blur-sm transition-all hover:border-blue-300/40 hover:bg-white/[0.11]"
                >
                  {/* Accent */}
                  <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-blue-500/10 transition-all group-hover:bg-blue-400/20" />

                  <div className="relative">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 ring-1 ring-blue-300/10">
                      <s.icon className="h-5 w-5 text-blue-300" />
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-white">
                      {s.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-blue-100/70">
                      {s.copy}
                    </p>

                    <div className="mt-6 h-px w-10 bg-blue-400/50 transition-all group-hover:w-16" />
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESPONSIBILITIES
      ========================================================= */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700">
                Professional support
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                The right people for every guest interaction.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Night Auditor */}
            <Reveal from="left">
              <div className="relative h-full overflow-hidden rounded-3xl bg-[#071B3A] p-8 text-white shadow-xl shadow-blue-950/10 sm:p-9">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-7 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400/10 ring-1 ring-blue-300/20">
                      <Moon className="h-5 w-5 text-blue-300" />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-300">
                        Overnight operations
                      </p>

                      <h3 className="text-2xl font-bold">
                        Night Auditor
                      </h3>
                    </div>
                  </div>

                  <p className="mb-7 text-sm leading-relaxed text-blue-100/70">
                    A Night Auditor combines front office, guest service and
                    financial administration responsibilities to keep the
                    property running smoothly through the night.
                  </p>

                  <ul className="space-y-3">
                    {NIGHT_AUDIT_DUTIES.map((d, i) => (
                      <Reveal
                        key={d}
                        index={i}
                        distance={10}
                        className="flex items-start gap-2.5"
                      >
                        <li className="flex items-start gap-2.5 text-sm leading-relaxed text-blue-50/80">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
                          {d}
                        </li>
                      </Reveal>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Concierge */}
            <Reveal from="right">
              <div className="relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/40 sm:p-9">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#C9A24B]/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-7 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A24B]/10">
                      <ConciergeBell className="h-5 w-5 text-[#B18A35]" />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#B18A35]">
                        Guest experience
                      </p>

                      <h3 className="text-2xl font-bold text-slate-950">
                        Concierge
                      </h3>
                    </div>
                  </div>

                  <p className="mb-7 text-sm leading-relaxed text-slate-600">
                    Often the first point of contact for guests, concierge
                    staff provide personalised assistance and help guests
                    make the most of their stay.
                  </p>

                  <ul className="space-y-3">
                    {CONCIERGE_DUTIES.map((d, i) => (
                      <Reveal
                        key={d}
                        index={i}
                        distance={10}
                        className="flex items-start gap-2.5"
                      >
                        <li className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B18A35]" />
                          {d}
                        </li>
                      </Reveal>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY US — SOFT BLUE COMPONENT
      ========================================================= */}
      <section className="relative overflow-hidden bg-blue-50/60 px-6 py-24">
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700">
              Why choose us
            </p>
          </Reveal>

          <Reveal index={1}>
            <div className="mb-14 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Staff who are more than qualified —
                <span className="text-blue-700"> they're reliable.</span>
              </h2>

              <p className="max-w-md text-sm leading-relaxed text-slate-600">
                Professional people who understand that hospitality is about
                consistency, communication and trust.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((w, i) => (
              <Reveal
                key={w.text}
                index={i}
                from="up"
                distance={16}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex h-full items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg hover:shadow-blue-100/50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <w.icon className="h-5 w-5 text-blue-700" />
                  </div>

                  <p className="pt-2 text-sm font-medium leading-relaxed text-slate-700">
                    {w.text}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE SUPPORT
      ========================================================= */}
      <section className="overflow-hidden bg-white py-24">
        <Reveal className="px-6">
          <div className="mx-auto mb-10 max-w-6xl text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700">
              Who we support
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Built for hospitality businesses.
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />

          <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            className="flex w-max gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...WHO_WE_SUPPORT, ...WHO_WE_SUPPORT].map((label, i) => (
              <span
                key={label + i}
                className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-medium text-slate-600 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                {label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CTA — PREMIUM BLUE COMPONENT
      ========================================================= */}
      <section className="px-6 pb-24">
        <Reveal className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#071B3A] px-8 py-16 text-center shadow-2xl shadow-blue-950/15 sm:px-12">
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-[#C9A24B]/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-400/10 ring-1 ring-blue-300/20">
                <Sparkles className="h-6 w-6 text-blue-300" />
              </div>

              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Need hospitality staff you can rely on?
              </h2>

              <p className="relative mx-auto mb-9 max-w-xl text-sm leading-relaxed text-blue-100/70 sm:text-base">
                Whether you need a Night Auditor, Concierge, Front Office
                Receptionist or additional hospitality staff, our team can
                help you find suitable candidates for your business.
              </p>

              <div className="relative flex flex-wrap items-center justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="/night-audit/get-a-qoutes"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-blue-900 shadow-xl transition-all hover:bg-blue-50"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="/night-audit/contacts"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  Contact us
                </motion.a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
