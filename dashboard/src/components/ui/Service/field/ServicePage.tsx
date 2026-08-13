"use client";

import React, { useState, useRef, WheelEvent } from "react";
import TiltedCard from "@/components/TiltedCard";
import GlassSurface from "@/components/GlassSurface";

export interface BackgroundScrollItem {
  id: string | number;
  title: string;
  description?: string;
  gradient?: string;
}

interface ServicePageProps {
  title?: string;
  imageSrc?: string;
  bgItems?: BackgroundScrollItem[];
  glassContent?: React.ReactNode;
  className?: string;
}

const defaultBgItems: BackgroundScrollItem[] = [
  {
    id: 1,
    title: "Commercial & Office Cleaning",
    description:
      "Tailored daily, weekly, and deep cleaning solutions meticulously engineered to elevate your business environment. We specialize in total workspace hygiene, targeting high-touch surfaces, common breakrooms, restrooms, and executive suites. By blending advanced sanitisation standards with eco-conscious practices, we create a pristine, professional atmosphere that enhances employee wellness, reduces sick leave, and leaves a lasting positive impression on every client who walks through your doors.",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    id: 2,
    title: "Facility Protection & Maintenance",
    description:
      "High-grade industrial and commercial facility care designed to keep your operational infrastructure running at peak performance. Our proactive maintenance and protective surface treatments mitigate wear and tear, eliminate potential safety hazards, and prevent costly equipment or structural downtime. From expansive warehouse floors to modern high-rise office facilities, our qualified specialists ensure complete asset protection, regulatory compliance, and seamless operational continuity.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    title: "Disinfection & Sanitisation",
    description:
      "Certified, hospital-grade sanitisation processes leveraging non-toxic, eco-friendly disinfectant technologies. Our trained technicians deploy electrostatic spraying and deep surface decontamination to eliminate up to 99.9% of airborne and surface pathogens, bacteria, and viruses. Perfect for corporate offices, educational institutions, retail centers, and high-traffic public venues seeking rigorous health safety compliance and total peace of mind.",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    id: 4,
    title: "C1-Scurity Deep Operational Clean",
    description:
      "A specialized end-to-end operational hygiene service built exclusively for high-security, heavy-duty, and industrial facilities across Queensland. Designed to adhere strictly to stringent site-access protocols and industry regulations, this comprehensive deep-clean targets tough grease, industrial residues, complex machinery zones, and restricted environments with surgical precision and uncompromising security compliance.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 5,
    title: "24/7 Dedicated Support",
    description:
      "Uncompromised, round-the-clock facility support backed by flexible scheduling and rapid-response emergency response teams. Whether you require immediate post-incident remediation, specialized off-peak night cleaning to avoid daytime business disruption, or rapid scaling for upcoming events, our dedicated dispatch center ensures qualified personnel are on-site whenever and wherever you need them.",
    gradient: "from-amber-500 to-red-500",
  },
  {
    id: 6,
    title: "Carpet & Upholstery Steam Restoration",
    description:
      "Deep-fiber extraction and revitalization treatments for high-traffic corporate environments. Utilizing high-pressure hot water extraction and eco-friendly stain removers, we restore heavily soiled carpets, office seating, and acoustic paneling—extending fabric lifespan while eliminating embedded allergens and trapped odours.",
    gradient: "from-rose-500 to-red-600",
  },
  {
    id: 7,
    title: "High-Reach & Window Cleaning",
    description:
      "Specialized interior and exterior window maintenance engineered for commercial complexes and multi-story facilities. Our certified rope-access technicians and purified-water pole systems deliver crystal-clear, streak-free glass surfaces while strictly adhering to site-safety and working-at-height standards.",
    gradient: "from-sky-400 to-cyan-600",
  },
  {
    id: 8,
    title: "Post-Construction & Fit-Out Handover",
    description:
      "Rigorous multi-stage handover cleaning for newly renovated or constructed commercial spaces. We systematically remove heavy fine dust, paint overspray, silicone residue, and debris across all surfaces, ensuring your newly developed site is immaculate, compliant, and ready for immediate tenant occupancy.",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    id: 9,
    title: "Sustainable Waste & Recycling Management",
    description:
      "End-to-end commercial waste stream solutions designed to support your organization’s ESG goals. We implement customized waste separation workflows, confidential document destruction protocols, and scheduled bulk clearance services—reducing landfill reliance while maintaining clean, hazard-free loading docks.",
    gradient: "from-teal-500 to-emerald-700",
  },
  {
    id: 10,
    title: "Event & Venue Pre/Post Operations",
    description:
      "Comprehensive venue management tailored for large-scale corporate functions, trade shows, and entertainment facilities. Our dedicated teams manage real-time spill response, continuous restroom sanitation during the event, and rapid overnight post-event reset to return the venue to pristine condition.",
    gradient: "from-violet-600 to-purple-800",
  },
];

function ServicePage({
  title = "C1-Services",
  imageSrc = "/favvvvvv.png",
  bgItems = defaultBgItems,
  glassContent,
  className = "",
}: ServicePageProps) {
  const [activeItem, setActiveItem] = useState<BackgroundScrollItem>(bgItems[0]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<{ [key: string | number]: HTMLDivElement | null }>({});

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const isScrollingDown = e.deltaY > 0;
    const isScrollingUp = e.deltaY < 0;

    const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) <= 2;
    const isAtTop = scrollTop === 0;

    if ((isScrollingDown && !isAtBottom) || (isScrollingUp && !isAtTop)) {
      e.stopPropagation();
    }
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const containerTop = scrollContainerRef.current.getBoundingClientRect().top;
    const containerCenter = containerTop + scrollContainerRef.current.clientHeight / 2;

    let closestItem = bgItems[0];
    let minDistance = Infinity;

    bgItems.forEach((item) => {
      const el = itemRefs.current[item.id];
      if (el) {
        const rect = el.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(containerCenter - itemCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestItem = item;
        }
      }
    });

    if (closestItem && closestItem.id !== activeItem?.id) {
      setActiveItem(closestItem);
    }
  };

  return (
    <div className={` w-full flex flex-col items-center gap-10 p-6 ${className}`}>
      {/* 1st Element: Tilted Card Component */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl shadow-blue-950/40 backdrop-blur-md flex items-center justify-center">
        <TiltedCard
          imageSrc={imageSrc}
          altText={title}
          captionText={title}
          containerHeight="400px"
          containerWidth="400px"
          imageHeight="400px"
          imageWidth="400px"
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip
          displayOverlayContent
          overlayContent={
            <p className="tilted-card-demo-text font-bold text-white text-xl drop-shadow-md">
              {title}
            </p>
          }
        />
      </div>

      {/* 2nd Element: Sticky Wrapper Pinning Container Downward */}
      <div className="sticky w-full max-w-6xl min-h-[150vh]">
        <div className="relative top-20 w-full h-[600px] overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
          {/* BACK LAYER: Scrollable Content */}
          <div
            ref={scrollContainerRef}
            onWheel={handleWheel}
            onScroll={handleScroll}
            className="absolute inset-0 overflow-y-auto p-8 space-y-6 z-0 scrollbar-thin scrollbar-thumb-slate-700 scroll-smooth"
          >
            {bgItems.map((item) => (
              <div
                key={item.id}
                ref={(el) => {
                  itemRefs.current[item.id] = el;
                }}
                className={`p-8 rounded-2xl bg-gradient-to-r ${
                  item.gradient || "from-blue-600 to-indigo-600"
                } text-white shadow-lg transition-transform duration-300`}
              >
                <h3 className="font-bold text-2xl sm:text-3xl mb-2">{item.title}</h3>
                {item.description && (
                  <p className="text-slate-100 text-sm sm:text-base leading-relaxed opacity-90">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* FRONT LAYER: GlassSurface Overlay */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
            <GlassSurface
              width={420}
              height={180}
              borderRadius={24}
              className="shadow-2xl backdrop-blur-md pointer-events-auto transition-all duration-300"
            >
              {glassContent || (
                <div className="flex flex-col items-center justify-center h-full text-center p-4 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 mb-1">
                    Active Focus
                  </span>
                  <h4 className="text-base sm:text-lg font-bold mb-1 transition-all">
                    {activeItem?.title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-3 px-2">
                    {activeItem?.description}
                  </p>
                </div>
              )}
            </GlassSurface>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;