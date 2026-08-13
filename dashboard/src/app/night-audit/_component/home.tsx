"use client";
import { motion } from "framer-motion";
import {
  Moon, ConciergeBell, Building2, CalendarClock, Award, ArrowRight,
  CheckCircle2, Sparkles, MessageCircle, Users, Eye, ShieldCheck, Phone,
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
  { icon: ShieldCheck, text: "Represent your hotel or accommodation business professionally" },
];

const WHO_WE_SUPPORT = [
  "Hotels", "Resorts", "Serviced Apartments", "Motels", "Boutique Hotels",
  "Luxury Accommodation", "Student Accommodation", "Corporate Accommodation",
  "Holiday Accommodation Providers",
];

export default function Home() {
  return (
    <div className="bg-[#0A0F1D] min-h-screen">
      {/* HERO */}
      <section className="relative pt-40 pb-28 px-6 overflow-hidden">
        <div
          className="pointer-events-none absolute -top-40 right-[-10%] w-[560px] h-[560px] rounded-full opacity-[0.16] blur-3xl"
          style={{ background: "radial-gradient(circle, #C9A24B 0%, transparent 70%)" }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-['JetBrains_Mono'] text-[11px] tracking-[0.22em] uppercase text-[#C9A24B] mb-6"
          >
            Hospitality Staffing · Australia-wide
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-['Fraunces'] text-[2.6rem] sm:text-6xl leading-[1.08] text-[#F3EEE3]"
          >
            Reliable Night Audit &amp; Concierge staff,
            <span className="italic text-[#C9A24B]"> for whatever hour</span> the guest needs you.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-['Inter'] text-base sm:text-lg text-[#A6AFC4] mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            We help hotels, resorts, serviced apartments and accommodation providers
            across Australia recruit dependable Night Auditors, Concierge Staff and
            Front Office Professionals — so guest service never clocks off.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="/night-audit/get-a-qoutes"
              className="group inline-flex items-center gap-2 font-['Inter'] text-sm font-medium px-6 py-3 rounded-full bg-[#C9A24B] text-[#0A0F1D] hover:bg-[#E4C878] transition-colors"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/night-audit/contacts"
              className="inline-flex items-center gap-2 font-['Inter'] text-sm font-medium px-6 py-3 rounded-full border border-[#33405F] text-[#F3EEE3] hover:border-[#C9A24B] transition-colors"
            >
              Talk to our team
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-16 max-w-lg mx-auto"
          >
            <ShiftTimeline />
          </motion.div>
        </div>

        <Skyline />
      </section>

      {/* SERVICES */}
      <section className="px-6 py-24 bg-[#0B1220]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="font-['JetBrains_Mono'] text-[11px] tracking-[0.18em] uppercase text-[#C9A24B] mb-3">
              Staffing solutions
            </p>
          </Reveal>
          <Reveal index={1}>
            <h2 className="font-['Fraunces'] text-3xl sm:text-4xl text-[#F3EEE3] max-w-xl mb-14">
              Every role your front desk needs, day or night.
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} index={i} from="up" className="h-full">
                <div className="h-full rounded-2xl border border-[#1C2740] bg-[#121A2E] p-7 hover:border-[#C9A24B]/50 transition-colors">
                  <s.icon className="w-6 h-6 text-[#C9A24B] mb-5" />
                  <h3 className="font-['Fraunces'] text-xl text-[#F3EEE3] mb-2">{s.title}</h3>
                  <p className="font-['Inter'] text-sm text-[#93A0B8] leading-relaxed">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          <Reveal from="left">
            <div className="h-full rounded-2xl bg-[#121A2E] border border-[#1C2740] p-8">
              <div className="flex items-center gap-3 mb-6">
                <Moon className="w-5 h-5 text-[#C9A24B]" />
                <h3 className="font-['Fraunces'] text-2xl text-[#F3EEE3]">Night Auditor</h3>
              </div>
              <p className="font-['Inter'] text-sm text-[#93A0B8] mb-6 leading-relaxed">
                A Night Auditor combines front office, guest service and financial
                administration responsibilities to keep the property running smoothly
                through the night.
              </p>
              <ul className="space-y-3">
                {NIGHT_AUDIT_DUTIES.map((d, i) => (
                  <Reveal key={d} index={i} distance={10} className="flex items-start gap-2.5">
                    <li className="flex items-start gap-2.5 font-['Inter'] text-sm text-[#C7CEDF]">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A24B] mt-0.5 shrink-0" />
                      {d}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal from="right">
            <div className="h-full rounded-2xl bg-[#121A2E] border border-[#1C2740] p-8">
              <div className="flex items-center gap-3 mb-6">
                <ConciergeBell className="w-5 h-5 text-[#C9A24B]" />
                <h3 className="font-['Fraunces'] text-2xl text-[#F3EEE3]">Concierge</h3>
              </div>
              <p className="font-['Inter'] text-sm text-[#93A0B8] mb-6 leading-relaxed">
                Often the first point of contact for guests, concierge staff provide
                personalised assistance and help guests make the most of their stay.
              </p>
              <ul className="space-y-3">
                {CONCIERGE_DUTIES.map((d, i) => (
                  <Reveal key={d} index={i} distance={10} className="flex items-start gap-2.5">
                    <li className="flex items-start gap-2.5 font-['Inter'] text-sm text-[#C7CEDF]">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A24B] mt-0.5 shrink-0" />
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
      <section className="px-6 py-24 bg-[#0B1220]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="font-['JetBrains_Mono'] text-[11px] tracking-[0.18em] uppercase text-[#C9A24B] mb-3">
              Why choose us
            </p>
          </Reveal>
          <Reveal index={1}>
            <h2 className="font-['Fraunces'] text-3xl sm:text-4xl text-[#F3EEE3] max-w-2xl mb-14">
              Staff who are more than qualified — they're reliable.
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {WHY_US.map((w, i) => (
              <Reveal key={w.text} index={i} from="up" distance={16} className="flex items-start gap-3">
                <div className="flex items-start gap-3">
                  <w.icon className="w-5 h-5 text-[#C9A24B] mt-0.5 shrink-0" />
                  <p className="font-['Inter'] text-sm text-[#C7CEDF] leading-relaxed">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SUPPORT — marquee */}
      <section className="py-20 overflow-hidden">
        <Reveal className="px-6">
          <p className="font-['JetBrains_Mono'] text-[11px] tracking-[0.18em] uppercase text-[#5C6883] text-center mb-8">
            Who we support
          </p>
        </Reveal>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A0F1D] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0F1D] to-transparent z-10" />
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {[...WHO_WE_SUPPORT, ...WHO_WE_SUPPORT].map((label, i) => (
              <span
                key={label + i}
                className="font-['Inter'] text-sm text-[#C7CEDF] whitespace-nowrap px-5 py-2.5 rounded-full border border-[#1C2740] bg-[#121A2E]"
              >
                {label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-6 pb-24">
        <Reveal className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#121A2E] to-[#0E1526] border border-[#1C2740] px-8 py-16 text-center">
            <div
              className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-[0.14] blur-3xl"
              style={{ background: "radial-gradient(circle, #C9A24B 0%, transparent 70%)" }}
            />
            <h2 className="relative font-['Fraunces'] text-3xl sm:text-4xl text-[#F3EEE3] mb-4">
              Need hospitality staff you can rely on?
            </h2>
            <p className="relative font-['Inter'] text-[#93A0B8] max-w-xl mx-auto mb-8">
              Whether you need a Night Auditor, Concierge, Front Office Receptionist or
              additional hospitality staff, our team can help you find suitable
              candidates for your business.
            </p>
            <div className="relative flex flex-wrap items-center justify-center gap-4">
              <a
                href="/night-audit/get-a-qoutes"
                className="inline-flex items-center gap-2 font-['Inter'] text-sm font-medium px-6 py-3 rounded-full bg-[#C9A24B] text-[#0A0F1D] hover:bg-[#E4C878] transition-colors"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/night-audit/contacts"
                className="inline-flex items-center gap-2 font-['Inter'] text-sm font-medium px-6 py-3 rounded-full border border-[#33405F] text-[#F3EEE3] hover:border-[#C9A24B] transition-colors"
              >
                <Phone className="w-4 h-4" /> Contact us
              </a>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
}