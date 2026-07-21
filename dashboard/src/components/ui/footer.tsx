import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
const footerNavigation = {
  services: [
    { name: "Commercial Cleaning", href: "/services" },
    { name: "Security Guarding", href: "/services" },
    { name: "Office Maintenance", href: "/services" },
    { name: "Industrial Sanitation", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
    { name: "Get a Quote", href: "/get-a-quote" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
 social: [
    { name: "Facebook", icon: FaFacebook, href: "#" },
    { name: "Twitter", icon: FaXTwitter, href: "#" },
    { name: "Instagram", icon: FaInstagram, href: "#" },
    { name: "LinkedIn", icon: FaLinkedin, href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white">
              C1SCURITY-<span className="text-blue-500">CLEANING</span>
            </Link>
            <p className="text-sm leading-6 text-slate-400 max-w-sm">
              Providing top-tier security and commercial cleaning solutions tailored to keep your business safe, clean, and professional.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-blue-500 shrink-0" />
                <span>123 Business Way, Suite 100, City, ST 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-500 shrink-0" />
                <span>+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-500 shrink-0" />
                <span>info@c1scuritycleaning.com</span>
              </div>
            </div>
          </div>

          {/* Nav Links Grid */}
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-white">Services</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold text-white">Legal</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider & Bottom Section */}
        <div className="mt-12 border-t border-slate-800 pt-8 sm:flex sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} C1SCURITY-CLEANING. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {footerNavigation.social.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.name} href={item.href} className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">{item.name}</span>
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}