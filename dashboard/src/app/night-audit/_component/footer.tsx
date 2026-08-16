"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";

const FOOTER_LINKS = {
  navigation: [
    { id:1,href: "/", label: "Home" },
    { id:2,href: "/night-audit/about", label: "About Us" },
    { id:3,href: "/night-audit/contact", label: "Contact Us" },
    { id:4,href: "/night-audit/get-a-qoutes", label: "Get a Quote" },
  ],
  services: [
    { id:1,href: "/", label: "Commercial Security" },
    { id:2,href: "/night-audit", label: "Night Audit Services" },
    { id:3,href: "/security", label: "Mobile Patrols" },
    { id:4,href: "/security/cleaning", label: "Cleaning" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/night-audit" className="inline-block">
              <Image
                src="/C1_navbar_logo_white.png"
                alt="Control-1 Security Logo"
                width={140}
                height={45}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Providing top-tier security and specialized night audit solutions tailored to safeguard your business and assets 24/7.
            </p>
            <div className="flex items-center gap-2 text-xs text-blue-400 bg-blue-950/50 border border-blue-900/60 rounded-lg px-3 py-2 w-fit">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Fully Licensed & Insured Security Provider</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.navigation.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4 tracking-wide">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4 tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>10 Sanur street marsden 4132 Queensland, Australia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a
                  href="+61 487 190 645"
                  className="hover:text-white transition-colors"
                >
                  +61 487 190 645
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a
                  href="mailto:info@c1services.com.au"
                  className="hover:text-white transition-colors"
                >
                  info@c1services.com.au
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Control-1 Security. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contacts-of-service" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
