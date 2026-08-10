"use client";
import { motion } from "framer-motion";
import {
  Sparkles, MessageCircle, Users, Building2, Eye, Moon, ShieldCheck,
  Hotel, Landmark, Home as HomeIcon, GraduationCap, Briefcase, Palmtree,
  CalendarClock, Award, ArrowRight,
} from "lucide-react";
import Reveal from "../_component/reveal";
import ShiftTimeline from "../_component/shift";
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
    <div className="bg-[#0A0F1D] min-h-screen">

      {/* HEADER */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div
          className="pointer-events-none absolute -top-32 left-[-8%] w-[480px] h-[480px] rounded-full opacity-[0.14] blur-3xl"
          style={{ background: "radial-gradient(circle, #C9A24B 0%, transparent 70%)" }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-['JetBrains_Mono'] text-[11px] tracking-[0.22em] uppercase text-[#C9A24B] mb-6"
          >
            About us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-['Fraunces'] text-4xl sm:text-5xl leading-[1.1] text-[#F3EEE3]"
          >
            Staff you can rely on, <span className="italic text-[#C9A24B]">around the clock.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-['Inter'] text-base sm:text-lg text-[#A6AFC4] mt-6 leading-relaxed"
          >
            From welcoming guests at the front desk to managing overnight operations,
            the right hospitality staff can make a significant difference to your
            guest experience. We help Australian accommodation businesses find
            reliable Night Auditors, Concierge Staff and Front Office Professionals
            to support their operations and maintain high service standards.
          </motion.p>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="px-6 py-20 bg-[#0B1220]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-['JetBrains_Mono'] text-[11px] tracking-[0.18em] uppercase text-[#C9A24B] mb-3 text-center">
              What we look for
            </p>
          </Reveal>
          <Reveal index={1}>
            <h2 className="font-['Fraunces'] text-3xl sm:text-4xl text-[#F3EEE3] text-center max-w-2xl mx-auto mb-4">
              More than qualified — reliable, professional, presentable.
            </h2>
          </Reveal>
          <Reveal index={2}>
            <p className="font-['Inter'] text-sm sm:text-base text-[#93A0B8] text-center max-w-xl mx-auto mb-14 leading-relaxed">
              Hospitality businesses need people who are customer-focused first.
              Every candidate we put forward is measured against the same standard.
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-3">
            {STANDARDS.map((s, i) => (
              <Reveal key={s.text} index={i} from="up" distance={14}>
                <div className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-[#1C2740] bg-[#121A2E]">
                  <s.icon className="w-4 h-4 text-[#C9A24B] shrink-0" />
                  <span className="font-['Inter'] text-sm text-[#C7CEDF] whitespace-nowrap">{s.text}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TWO WAYS WE HELP */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
          <Reveal from="left">
            <div className="h-full rounded-2xl bg-[#121A2E] border border-[#1C2740] p-8">
              <CalendarClock className="w-6 h-6 text-[#C9A24B] mb-5" />
              <h3 className="font-['Fraunces'] text-2xl text-[#F3EEE3] mb-3">Casual &amp; Temporary</h3>
              <p className="font-['Inter'] text-sm text-[#93A0B8] leading-relaxed">
                Flexible staffing solutions to cover leave, peak periods, staff
                shortages and unexpected vacancies — so a gap in the roster never
                becomes a gap in service.
              </p>
            </div>
          </Reveal>
          <Reveal from="right">
            <div className="h-full rounded-2xl bg-[#121A2E] border border-[#1C2740] p-8">
              <Award className="w-6 h-6 text-[#C9A24B] mb-5" />
              <h3 className="font-['Fraunces'] text-2xl text-[#F3EEE3] mb-3">Permanent Recruitment</h3>
              <p className="font-['Inter'] text-sm text-[#93A0B8] leading-relaxed">
                Find suitable hospitality professionals for long-term positions
                within your organisation, matched for skill and fit from day one.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHO WE SUPPORT — grid */}
      <section className="px-6 py-24 bg-[#0B1220]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-['JetBrains_Mono'] text-[11px] tracking-[0.18em] uppercase text-[#C9A24B] mb-3 text-center">
              Who we support
            </p>
          </Reveal>
          <Reveal index={1}>
            <h2 className="font-['Fraunces'] text-3xl sm:text-4xl text-[#F3EEE3] text-center max-w-xl mx-auto mb-14">
              Accommodation businesses across Australia.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {WHO_WE_SUPPORT.map((w, i) => (
              <Reveal key={w.label} index={i} from="up" distance={16}>
                <div className="flex flex-col items-center text-center gap-3 rounded-2xl border border-[#1C2740] bg-[#121A2E] p-6 h-full hover:border-[#C9A24B]/50 transition-colors">
                  <w.icon className="w-6 h-6 text-[#C9A24B]" />
                  <span className="font-['Inter'] text-sm text-[#C7CEDF]">{w.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <Reveal className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Fraunces'] text-3xl sm:text-4xl text-[#F3EEE3] mb-5">
            Ready to strengthen your front desk?
          </h2>
          <p className="font-['Inter'] text-[#93A0B8] max-w-xl mx-auto mb-8">
            Tell us what your roster needs and we'll help you find the right people
            for it.
          </p>
          <a
            href="/night-audit/get-a-qoutes"
            className="inline-flex items-center gap-2 font-['Inter'] text-sm font-medium px-6 py-3 rounded-full bg-[#C9A24B] text-[#0A0F1D] hover:bg-[#E4C878] transition-colors"
          >
            Get a Quote <ArrowRight className="w-4 h-4" />
          </a>
        </Reveal>
      </section>

      <Skyline  />
    </div>
  );
}