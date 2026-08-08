"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import QuoteForm from "../../get-a-quote/_component/quoteForm";

export interface ContactProps {
  title?: string;
  description?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
}

export const detailedContactData: ContactProps = {
  title: "Enterprise Solutions & Global Corporate Operations Headquarters",
  description:
    "Our central operations hub connects business leaders, strategic partners, and enterprise clients worldwide. Whether you are exploring custom platform deployments, enterprise-grade security integrations, or seeking dedicated support from our senior engineering leads, our cross-functional team is available round-the-clock to assist you with tailored solutions.",
  phoneNumber: "+1 (800) 555-0199 / Ext. 402",
  email: "enterprise.global-support@company.example.com",
  address: "100 Innovation Boulevard, Suite 500, Technology District, San Francisco, CA 94105, USA",
};

export default function Contact({
  title = detailedContactData.title,
  description = detailedContactData.description,
  phoneNumber = detailedContactData.phoneNumber,
  email = detailedContactData.email,
  address = detailedContactData.address,
}: ContactProps) {
  return (
    <section className="w-full min-h-screen flex items-center justify-center p-4 sm:p-8">
      {/* Main Outer Container */}
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 shadow-2xl backdrop-blur-lg grid grid-cols-1 lg:grid-cols-12">
        
        {/* LEFT SIDE: Form Container */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center w-full min-w-0">
          <QuoteForm />
        </div>

        {/* RIGHT SIDE: Blue Details Panel */}
        <div className="lg:col-span-5 relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 sm:p-12 text-white">
          
          {/* Decorative Background Accents */}
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-cyan-400/20 blur-2xl pointer-events-none" />

          {/* Title & Description */}
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-blue-100 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Contact Details List */}
          <div className="relative z-10 mt-10 space-y-6">
            {phoneNumber && (
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                  <Phone className="h-5 w-5 text-blue-200" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Phone</p>
                  <p className="text-sm font-medium text-white">{phoneNumber}</p>
                </div>
              </div>
            )}

            {email && (
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                  <Mail className="h-5 w-5 text-blue-200" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Email</p>
                  <p className="text-sm font-medium text-white">{email}</p>
                </div>
              </div>
            )}

            {address && (
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                  <MapPin className="h-5 w-5 text-blue-200" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Location</p>
                  <p className="text-sm font-medium text-white">{address}</p>
                </div>
              </div>
            )}
          </div>

          {/* Footer Badge */}
          <div className="relative z-10 mt-12 pt-6 border-t border-white/10 text-xs text-blue-200">
            Available Mon - Fri, 9am - 6pm CEST
          </div>
        </div>

      </div>
    </section>
  );
}