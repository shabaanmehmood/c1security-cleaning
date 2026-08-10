"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import {
  Zap,
  PackageCheck,
  Radar,
  Warehouse,
  HardHat,
  Building2,
  ShoppingBag,
  PartyPopper,
  KeyRound,
  ConciergeBell,
  Camera,
  BellRing,
  Building,
  Factory,
  ParkingSquare,
  Siren,
  DoorClosed,
  Lock,
  ChevronDown,
  ShieldCheck,
  Check,
  type LucideIcon,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useMotionTemplate,
  useTransform,
  useSpring,
  useInView,
  animate,
  type Variants,
} from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// ------------------------------------------------------------------
// Data — every line from the source PDF lives here.
// ------------------------------------------------------------------

interface ServiceModule {
  code: string;
  title: string;
  icon: LucideIcon;
  description: string;
  items: string[];
}

interface ServiceCategory {
  title: string;
  icon: LucideIcon;
  tags: string[];
}

const SERVICE_MODULES: ServiceModule[] = [
  {
    code: "01",
    title: "Ad Hoc Security",
    icon: Zap,
    description:
      "Flexible security solutions for short-term, unexpected or one-off requirements. Our trained security personnel can be deployed for special events, emergencies, staff shortages, site incidents, or temporary security requirements.",
    items: [
      "Short-notice security coverage",
      "One-off events and functions",
      "Emergency security requirements",
      "Temporary site protection",
      "Staff replacement and additional coverage",
      "High-risk or unexpected situations",
    ],
  },
  {
    code: "02",
    title: "Asset Protection Security",
    icon: PackageCheck,
    description:
      "Protecting valuable assets, equipment, stock, materials and property from theft, damage, unauthorised access and other security risks.",
    items: [
      "Property and asset monitoring",
      "Theft prevention",
      "Stock and equipment protection",
      "Security inspections",
      "Incident reporting",
      "Access monitoring",
      "After-hours protection",
    ],
  },
  {
    code: "03",
    title: "Mobile Patrol Security",
    icon: Radar,
    description:
      "Regular or random mobile security patrols designed to deter criminal activity and identify security risks before they become incidents.",
    items: [
      "Scheduled patrols",
      "Random security checks",
      "Lock-up and unlock services",
      "Perimeter inspections",
      "Alarm response",
      "Incident identification and reporting",
      "After-hours property checks",
    ],
  },
  {
    code: "04",
    title: "Warehouse & Gatehouse Security",
    icon: Warehouse,
    description:
      "Professional security officers managing entry and exit points at warehouses, distribution centres, industrial facilities and logistics sites.",
    items: [
      "Vehicle entry and exit control",
      "Visitor management",
      "Contractor sign-in/sign-out",
      "Delivery verification",
      "Driver identification checks",
      "Gatehouse operations",
      "Access control",
      "Site patrols",
      "Incident reporting",
    ],
  },
  {
    code: "05",
    title: "Construction Site Security",
    icon: HardHat,
    description:
      "Security services designed to protect construction sites, machinery, tools, materials and temporary infrastructure from theft, vandalism and unauthorised access.",
    items: [
      "Site access control",
      "Perimeter monitoring",
      "After-hours security",
      "Equipment and material protection",
      "Vehicle and contractor checks",
      "Mobile patrols",
      "Lock-up services",
      "Incident reporting",
    ],
  },
  {
    code: "06",
    title: "Commercial & Corporate Security",
    icon: Building2,
    description:
      "Professional security personnel for offices, commercial buildings, business premises and corporate facilities.",
    items: [
      "Reception and security desk duties",
      "Visitor management",
      "Access control",
      "CCTV monitoring",
      "Building inspections",
      "Emergency response",
      "Incident management",
      "Lock-up and opening procedures",
    ],
  },
  {
    code: "07",
    title: "Retail Security & Loss Prevention",
    icon: ShoppingBag,
    description:
      "Security solutions designed to reduce theft, minimise loss and maintain a safe environment for customers and staff.",
    items: [
      "Retail security officers",
      "Loss prevention",
      "Store surveillance",
      "Theft deterrence",
      "Customer and staff safety",
      "Incident reporting",
      "Opening and closing security",
      "High-risk period coverage",
    ],
  },
  {
    code: "08",
    title: "Event Security",
    icon: PartyPopper,
    description:
      "Professional security personnel for private functions, corporate events, public events and other gatherings.",
    items: [
      "Entry and exit control",
      "Crowd monitoring",
      "Ticket and accreditation checks",
      "Bag and access checks where authorised",
      "VIP protection",
      "Perimeter security",
      "Incident response",
      "Emergency assistance",
      "Event closing procedures",
    ],
  },
  {
    code: "09",
    title: "Access Control Security",
    icon: KeyRound,
    description:
      "Controlling and monitoring access to restricted areas, buildings, warehouses, construction sites and commercial premises.",
    items: [
      "Staff access monitoring",
      "Visitor registration",
      "Contractor management",
      "ID verification",
      "Restricted-area monitoring",
      "Key management",
      "Access records",
      "Entry and exit monitoring",
    ],
  },
  {
    code: "10",
    title: "Concierge & Security Services",
    icon: ConciergeBell,
    description:
      "A combination of professional customer service and security responsibilities for commercial buildings, residential developments, hotels and corporate facilities.",
    items: [
      "Reception support",
      "Visitor assistance",
      "Access control",
      "Building monitoring",
      "CCTV observation",
      "Contractor coordination",
      "Incident reporting",
      "Security inspections",
    ],
  },
  {
    code: "11",
    title: "CCTV Monitoring & Security Surveillance",
    icon: Camera,
    description:
      "Security personnel monitoring CCTV systems and surveillance equipment to identify suspicious activity, security breaches and potential incidents.",
    items: [
      "CCTV monitoring",
      "Surveillance",
      "Suspicious activity detection",
      "Incident escalation",
      "Security observations",
      "Recording and reporting",
      "Coordination with mobile patrols and emergency services where appropriate",
    ],
  },
  {
    code: "12",
    title: "Alarm Response Security",
    icon: BellRing,
    description:
      "Rapid security response to alarm activations and reported security incidents, subject to the client's site procedures and applicable requirements.",
    items: [
      "Alarm response",
      "Site inspection",
      "Perimeter checks",
      "Lock and access-point checks",
      "Incident assessment",
      "Client notification",
      "Detailed incident reporting",
    ],
  },
  {
    code: "13",
    title: "Residential & Apartment Security",
    icon: Building,
    description:
      "Security services for apartment complexes, residential communities and private properties.",
    items: [
      "Building patrols",
      "Access control",
      "Visitor monitoring",
      "Common-area inspections",
      "Parking-area monitoring",
      "CCTV observation",
      "Incident reporting",
      "After-hours security",
    ],
  },
  {
    code: "14",
    title: "Industrial Security",
    icon: Factory,
    description:
      "Security solutions for factories, industrial facilities, manufacturing sites and large-scale operations.",
    items: [
      "Gatehouse operations",
      "Access control",
      "Vehicle inspections",
      "Perimeter patrols",
      "Contractor management",
      "CCTV monitoring",
      "Asset protection",
      "Incident reporting",
    ],
  },
  {
    code: "15",
    title: "Parking & Traffic Management Security",
    icon: ParkingSquare,
    description:
      "Security personnel assisting with vehicle movement, access control and parking-area security at commercial, industrial and event sites.",
    items: [
      "Parking-area monitoring",
      "Vehicle access control",
      "Traffic direction",
      "Restricted-area monitoring",
      "Incident reporting",
      "Event parking security",
    ],
  },
  {
    code: "16",
    title: "Emergency & Short-Notice Security",
    icon: Siren,
    description:
      "Security coverage for businesses that require immediate or additional personnel due to an unexpected incident, security concern or operational requirement.",
    items: [
      "Security incidents",
      "Unexpected staff shortages",
      "Property damage",
      "Temporary site closure",
      "Increased security threats",
      "Emergency site coverage",
    ],
  },
  {
    code: "17",
    title: "Vacant Property Security",
    icon: DoorClosed,
    description:
      "Protection for vacant commercial, residential and industrial properties that may be vulnerable to trespassing, vandalism, theft or unauthorised occupation.",
    items: [
      "Regular property inspections",
      "Mobile patrols",
      "Access-point checks",
      "Perimeter inspections",
      "Lock-up verification",
      "Incident reporting",
      "Alarm response",
    ],
  },
  {
    code: "18",
    title: "Key Holding & Lock-Up Services",
    icon: Lock,
    description:
      "Professional opening and closing services for businesses and commercial premises.",
    items: [
      "Opening services",
      "Lock-up services",
      "Door and gate checks",
      "Security inspections",
      "Alarm activation/deactivation where authorised",
      "Incident reporting",
    ],
  },
];

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "Site & Asset Security",
    icon: ShieldCheck,
    tags: [
      "Asset Protection",
      "Construction Site Security",
      "Industrial Security",
      "Warehouse Security",
      "Vacant Property Security",
    ],
  },
  {
    title: "Mobile Security",
    icon: Radar,
    tags: ["Mobile Patrols", "Random Patrols", "Lock-Up & Unlock", "Alarm Response"],
  },
  {
    title: "Access & Gatehouse",
    icon: KeyRound,
    tags: [
      "Gatehouse Security",
      "Access Control",
      "Visitor Management",
      "Vehicle & Contractor Management",
    ],
  },
  {
    title: "Commercial Security",
    icon: Building2,
    tags: ["Corporate Security", "Retail Security", "Concierge Security", "CCTV Monitoring"],
  },
  {
    title: "Event & Crowd Security",
    icon: PartyPopper,
    tags: [
      "Event Security",
      "Crowd Control",
      "Entry Management",
      "VIP & Back-of-House Security",
    ],
  },
  {
    title: "Flexible Security",
    icon: Zap,
    tags: [
      "Ad Hoc Security",
      "Emergency Security",
      "Short-Notice Security",
      "Temporary Security Coverage",
    ],
  },
];

const HEADLINE_WORDS = ["One", "Step", "Ahead"];

// ------------------------------------------------------------------
// Motion variants
// ------------------------------------------------------------------

const heroContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const wordContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

function getModuleSlideVariant(index: number, reduced: boolean): Variants {
  if (reduced) {
    return { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } };
  }
  const col = index % 3;
  const x = col === 0 ? -70 : col === 2 ? 70 : 0;
  const y = col === 1 ? 60 : 8;
  return {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.65, delay: (index % 6) * 0.07, ease: [0.16, 1, 0.3, 1] },
    },
  };
}

function getCategorySlideVariant(index: number, reduced: boolean): Variants {
  if (reduced) {
    return { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } };
  }
  const fromLeft = index % 2 === 0;
  return {
    hidden: { opacity: 0, x: fromLeft ? -60 : 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] },
    },
  };
}

// ------------------------------------------------------------------
// Main section
// ------------------------------------------------------------------

export default function SecurityServicesSection() {
  const prefersReducedMotion = useReducedMotion();
  const reduced = !!prefersReducedMotion;

  const heroItemVariants: Variants = {
    hidden: { opacity: 0, x: reduced ? 0 : -36 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : -18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // cursor-reactive spotlight glow in the hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mouseX}px ${mouseY}px, rgba(56,189,248,0.18), transparent 45%)`;

  function handleHeroMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <section className="relative w-full bg-white text-[#0B1E3D]">
      {/* ---------------------------------------------------------- */}
      {/* HERO                                                       */}
      {/* ---------------------------------------------------------- */}
      <div
        onMouseMove={!reduced ? handleHeroMouseMove : undefined}
        className="relative overflow-hidden bg-[#0A1B33] text-white"
      >
        {/* blueprint grid backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:42px_42px]"
        />

        {/* cursor-follow spotlight */}
        {!reduced && (
          <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />
        )}

        {/* radar sweep */}
        {!reduced && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-sky-400/15 to-transparent"
            animate={{ x: ["-100%", "220%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        )}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={heroContainerVariants}
          className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28"
        >
          <motion.div
            variants={badgeVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-sky-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
            </span>
            <ShieldCheck className="h-3.5 w-3.5" />
            C1 Services · Security Operations & Services
          </motion.div>

          <motion.h2
            variants={wordContainerVariants}
            className="max-w-3xl text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-6xl"
          >
            {HEADLINE_WORDS.map((word) => (
              <span key={word} className="mr-3 inline-block overflow-hidden align-bottom pb-1">
                <motion.span variants={wordVariants} className="inline-block">
                  {word}
                </motion.span>
              </span>
            ))}
            <ShimmerText reduced={reduced}>in Professional Services</ShimmerText>
          </motion.h2>

          <motion.p variants={heroItemVariants} className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
            Professional Security & Cleaning Solutions — Tailored to Your Business.
          </motion.p>

          <motion.div
            variants={heroItemVariants}
            className="mt-10 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-widest text-slate-300"
          >
            <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2">
              <span className="text-sky-400">
                <CountUp value={18} pad reduced={reduced} />
              </span>
              Service Modules
            </div>
            <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2">
              <span className="text-sky-400">
                <CountUp value={6} pad reduced={reduced} />
              </span>
              Deployment Categories
            </div>
            <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2">
              <span className="text-sky-400">24/7</span> Response Ready
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* SLIDING TICKER — every module title, scrolling                */}
      {/* ---------------------------------------------------------- */}
      <MarqueeStrip reduced={reduced} />

      {/* ---------------------------------------------------------- */}
      {/* SERVICE MODULES                                             */}
      {/* ---------------------------------------------------------- */}
      <div className="relative overflow-hidden">
        {!reduced && (
          <>
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"
              animate={{ y: [0, 26, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl"
              animate={{ y: [0, -22, 0] }}
              transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="mb-12 max-w-2xl">
            <div className="flex items-center gap-3">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
                className="h-px w-8 bg-blue-700"
              />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-700">
                Full Service Directory
              </p>
            </div>
            <h3 className="mt-3 text-2xl font-bold text-[#0B1E3D] sm:text-3xl">
              Eighteen deployable security modules
            </h3>
            <p className="mt-3 text-slate-600">
              Each module can be scoped individually or combined into a single site-wide
              deployment. Expand a module to see its full scope of service.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_MODULES.map((mod, index) => (
              <motion.div
                key={mod.code}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={getModuleSlideVariant(index, reduced)}
                className="h-full [perspective:1000px]"
              >
                <TiltCard reduced={reduced}>
                  <ServiceCard mod={mod} />
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* RECOMMENDED WEBSITE SERVICE CATEGORIES                      */}
      {/* ---------------------------------------------------------- */}
      <div className="relative overflow-hidden border-t border-blue-100 bg-blue-50/60">
        {!reduced && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="mb-12 max-w-2xl">
            <div className="flex items-center gap-3">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
                className="h-px w-8 bg-blue-700"
              />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-700">
                Site Map
              </p>
            </div>
            <h3 className="mt-3 text-2xl font-bold text-[#0B1E3D] sm:text-3xl">
              How the eighteen modules above group into six client-facing categories.
            </h3>
            
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CATEGORIES.map((cat, index) => (
              <motion.div
                key={cat.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={getCategorySlideVariant(index, reduced)}
                className="h-full"
              >
                <CategoryCard cat={cat} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
       <section className="pt-30 sm:pt-28 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl bg-blue-600 p-6 sm:p-12 md:p-16 text-white overflow-hidden shadow-2xl shadow-blue-600/20"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
      
                <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      
                <div className="relative z-10 max-w-2xl text-center sm:text-left">
                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                    Ready to Upgrade Your Facility Protection?
                  </h2>
                  <p className="mt-4 text-blue-100 text-sm sm:text-base leading-relaxed">
                    Contact our team today to get a customized quote for your office,
                    commercial building, or industrial facility.
                  </p>
      
                  <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                    <Link href="/security/contact" className="w-full sm:w-auto">
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          size="lg"
                          className="w-full sm:w-auto rounded-full bg-white text-blue-600 hover:bg-slate-100 px-8 shadow-md"
                        >
                          Request Quote
                        </Button>
                      </motion.div>
                    </Link>
      
                    <Link href="/security/contact" className="w-full sm:w-auto">
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full sm:w-auto rounded-full border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                        >
                          Contact Us
                        </Button>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </section>
    </section>
    
  );
}

// ------------------------------------------------------------------
// Sub-components
// ------------------------------------------------------------------

function MarqueeStrip({ reduced }: { reduced: boolean }) {
  const titles = SERVICE_MODULES.map((m) => m.title);
  const loop = [...titles, ...titles];

  return (
    <div className="relative overflow-hidden border-y border-blue-900/40 bg-[#0B1E3D] py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0B1E3D] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0B1E3D] to-transparent" />
      <motion.div
        className="flex w-max items-center gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-widest text-sky-300"
        animate={reduced ? undefined : { x: ["0%", "-50%"] }}
        transition={reduced ? undefined : { duration: 34, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((title, i) => (
          <span key={i} className="flex items-center gap-8">
            <span>{title}</span>
            <span className="text-sky-500">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function ShimmerText({ children, reduced }: { children: string; reduced: boolean }) {
  if (reduced) {
    return <span className="text-sky-400">{children}</span>;
  }
  return (
    <motion.span
      className="inline-block bg-clip-text text-transparent"
      style={{
        backgroundImage: "linear-gradient(90deg,#38bdf8,#bae6fd,#38bdf8)",
        backgroundSize: "200% auto",
      }}
      animate={{ backgroundPosition: ["0% center", "200% center"] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.span>
  );
}

function CountUp({ value, pad = false, reduced }: { value: number; pad?: boolean; reduced: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [display, setDisplay] = useState(reduced ? value : 0);

  useEffect(() => {
    if (reduced) {
      setDisplay(value);
      return;
    }
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.3,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value, reduced]);

  const text = pad ? String(display).padStart(2, "0") : String(display);

  return <span ref={ref}>{text}</span>;
}

function TiltCard({ children, reduced }: { children: ReactNode; reduced: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 300, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 300, damping: 22 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={reduced ? undefined : { scale: 1.02 }}
      style={reduced ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

function ServiceCard({ mod }: { mod: ServiceModule }) {
  const Icon = mod.icon;

  return (
    <Collapsible className="group relative flex h-full flex-col rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-100">
      {/* viewfinder corner brackets — reveal on hover */}
      <span className="pointer-events-none absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-sky-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="pointer-events-none absolute right-2 top-2 h-3 w-3 border-r-2 border-t-2 border-sky-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-sky-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-sky-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-start justify-between">
        <span className="font-mono text-xs tracking-widest text-blue-300">
          MOD-{mod.code}
        </span>
        <motion.div
          whileHover={{
            rotate: 6,
            scale: 1.1,
            boxShadow: "0 0 0 6px rgba(56,189,248,0.22)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-white"
        >
          <Icon className="h-5 w-5" />
        </motion.div>
      </div>

      <h4 className="mt-4 text-lg font-semibold text-[#0B1E3D] transition-colors duration-200 group-hover:text-blue-700">
        {mod.title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{mod.description}</p>

      <div className="mt-auto pt-4">
        <CollapsibleTrigger className="flex w-full items-center justify-between border-t border-blue-100 pt-4 font-mono text-xs uppercase tracking-widest text-blue-700 outline-none [&[data-state=open]>svg]:rotate-180">
          Scope of service
          <ChevronDown className="h-4 w-4 transition-transform duration-200" />
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1">
          <ul className="mt-3 space-y-2">
            {mod.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-sky-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

function CategoryCard({ cat }: { cat: ServiceCategory }) {
  const Icon = cat.icon;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full rounded-xl border border-blue-100 bg-white p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-100"
    >
      <motion.div
        whileHover={{ rotate: -6, scale: 1.08 }}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B1E3D] text-sky-400"
      >
        <Icon className="h-5 w-5" />
      </motion.div>
      <h4 className="mt-4 text-base font-semibold text-[#0B1E3D]">{cat.title}</h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {cat.tags.map((tag) => (
          <motion.span key={tag} whileHover={{ scale: 1.08, y: -2 }} className="inline-block">
            <Badge variant="secondary" className="bg-blue-50 font-normal text-blue-700 hover:bg-blue-100">
              {tag}
            </Badge>
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}