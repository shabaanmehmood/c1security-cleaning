"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SERVICES_DATA, ServiceDetail } from "@/lib/service-data";
import { 
  Building2, 
  Briefcase, 
  Stethoscope, 
  Factory, 
  Warehouse, 
  GraduationCap, 
  ShoppingBag, 
  Utensils, 
  Baby, 
  Check, 
  ArrowRight, 
  Sparkles, 
  X,
  ShieldCheck
} from "lucide-react";

interface ServicesSectionProps {
  onOpenQuoteModal?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [filterCategory, setFilterCategory] = useState<"all" | "corporate" | "specialised">("all");

  const getIcon = (name: string) => {
    switch (name) {
      case "Building2": return <Building2 className="w-6 h-6" />;
      case "Briefcase": return <Briefcase className="w-6 h-6" />;
      case "Stethoscope": return <Stethoscope className="w-6 h-6" />;
      case "Factory": return <Factory className="w-6 h-6" />;
      case "Warehouse": return <Warehouse className="w-6 h-6" />;
      case "GraduationCap": return <GraduationCap className="w-6 h-6" />;
      case "ShoppingBag": return <ShoppingBag className="w-6 h-6" />;
      case "Utensils": return <Utensils className="w-6 h-6" />;
      case "Baby": return <Baby className="w-6 h-6" />;
      default: return <Building2 className="w-6 h-6" />;
    }
  };

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (filterCategory === "corporate") {
      return ["commercial", "office", "retail"].includes(service.id);
    }
    if (filterCategory === "specialised") {
      return ["medical", "industrial", "warehouse", "school", "hospitality", "childcare"].includes(service.id);
    }
    return true;
  });

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const isSpecialised = ["medical", "industrial", "warehouse", "school", "hospitality", "childcare"].includes(hash);
    const isCorporate = ["commercial", "office", "retail"].includes(hash);

    if (isSpecialised) setFilterCategory("specialised");
    else if (isCorporate) setFilterCategory("corporate");

    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, []);

  return (
    <section id="services" className="py-24 relative text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Certified Specialised Cleaners
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Our Commercial <span className="text-blue-600">Cleaning Services</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            9 specialized cleaning protocols tailored for multi-tenant towers, medical centers, distribution facilities, and corporate headquarters.
          </p>

          {/* Category Filter Tabs */}
          <div className="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200 mt-8 gap-1">
            <button
              type="button"
              onClick={() => setFilterCategory("all")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                filterCategory === "all" ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All 9 Services
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory("corporate")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                filterCategory === "corporate" ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Corporate & Offices
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory("specialised")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                filterCategory === "specialised" ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Medical, Industrial & Education
            </button>
          </div>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-28 p-8 rounded-3xl relative flex flex-col justify-between group bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              {/* Card body wrapped inside dynamic route link */}
              <Link href={`/${service.id}`} className="block h-full">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Blue Logo/Icon Container */}
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-blue-600">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 mb-8">
                    {service.standards.map((standard, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{standard}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>

              {/* Action Buttons Container */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between z-10 relative">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group/btn"
                >
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="px-3.5 py-1.5 rounded-full text-[11px] font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Specification Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto text-slate-900">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs text-blue-600 font-extrabold uppercase">{selectedService.badge}</span>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">{selectedService.title} Specification</h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Scope Deliverables</h4>
              <div className="space-y-2">
                {selectedService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Ideal Facility Types</h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.idealFor.map((item, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-600">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedService(null);
                  if (onOpenQuoteModal) onOpenQuoteModal();
                }}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 transition-all"
              >
                Request Quote For {selectedService.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};