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
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-28 pt-36 sm:pt-40">
        {/* Background decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/70 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#C9A24B]/10 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700"
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
            Reliable Night Audit &amp; Concierge staff,
            <span className="text-blue-700">
              {" "}
              for whatever hour
            </span>{" "}
            the guest needs you.
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
              className="group inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition-colors hover:bg-blue-800"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/night-audit/contacts"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-blue-300 hover:text-blue-700"
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

      {/* SERVICES */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
              Staffing solutions
            </p>
          </Reveal>

          <Reveal index={1}>
            <h2 className="mb-14 max-w-xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Every role your front desk needs, day or night.
            </h2>
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
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="group h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-blue-700">
                    <s.icon className="h-5 w-5 text-blue-700 transition-colors group-hover:text-white" />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-slate-950">
                    {s.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {s.copy}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          {/* Night Auditor */}
          <Reveal from="left">
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-9">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <Moon className="h-5 w-5 text-blue-700" />
                </div>

                <h3 className="text-2xl font-bold text-slate-950">
                  Night Auditor
                </h3>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                A Night Auditor combines front office, guest service and
                financial administration responsibilities to keep the property
                running smoothly through the night.
              </p>

              <ul className="space-y-3">
                {NIGHT_AUDIT_DUTIES.map((d, i) => (
                  <Reveal
                    key={d}
                    index={i}
                    distance={10}
                    className="flex items-start gap-2.5"
                  >
                    <li className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {d}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Concierge */}
          <Reveal from="right">
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-9">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C9A24B]/10">
                  <ConciergeBell className="h-5 w-5 text-[#B18A35]" />
                </div>

                <h3 className="text-2xl font-bold text-slate-950">
                  Concierge
                </h3>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                Often the first point of contact for guests, concierge staff
                provide personalised assistance and help guests make the most
                of their stay.
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
          </Reveal>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
              Why choose us
            </p>
          </Reveal>

          <Reveal index={1}>
            <h2 className="mb-14 max-w-2xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Staff who are more than qualified — they're reliable.
            </h2>
          </Reveal>

          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((w, i) => (
              <Reveal
                key={w.text}
                index={i}
                from="up"
                distance={16}
                className="flex items-start gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm"
                >
                  <w.icon className="h-5 w-5 text-blue-700" />
                </motion.div>

                <p className="pt-2 text-sm leading-relaxed text-slate-600">
                  {w.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SUPPORT — marquee */}
      <section className="overflow-hidden bg-white py-20">
        <Reveal className="px-6">
          <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Who we support
          </p>
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
                className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm text-slate-600 transition-colors hover:border-blue-200 hover:text-blue-700"
              >
                {label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-6 pb-24">
        <Reveal className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 px-8 py-16 text-center shadow-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="pointer-events-none absolute -bottom-24 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl"
            />

            <h2 className="relative mb-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Need hospitality staff you can rely on?
            </h2>

            <p className="relative mx-auto mb-8 max-w-xl text-slate-600">
              Whether you need a Night Auditor, Concierge, Front Office
              Receptionist or additional hospitality staff, our team can help
              you find suitable candidates for your business.
            </p>

            <div className="relative flex flex-wrap items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/night-audit/get-a-qoutes"
                className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition-colors hover:bg-blue-800"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/night-audit/contacts"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-blue-300 hover:text-blue-700"
              >
                <Phone className="h-4 w-4" />
                Contact us
              </motion.a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
