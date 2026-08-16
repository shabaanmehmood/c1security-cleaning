import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AuthListener } from "@/components/auth/authListner";
import LayoutContent from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://c1services.com.au"),

  title: {
    default: "C1 Services | Commercial Cleaning & Security Services",
    template: "%s | C1 Services",
  },

  description:
    "C1 Services provides professional commercial cleaning, security and facility maintenance services across Brisbane, Gold Coast and surrounding areas.",
  
  
   icons: {
    icon: [
      { url: "/c1-services-icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/c1-services-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/c1-services-icon-192x192.png",
    apple: "/c1-services-icon-180x180.png",
  },
  keywords: [
    "commercial cleaning",
    "commercial cleaners",
    "security services",
    "facility maintenance",
    "cleaning services Brisbane",
    "cleaning services Gold Coast",
    "C1 Services",
  ],

  alternates: {
    canonical: "https://c1services.com.au",
  },

  openGraph: {
    title: "C1 Services | Commercial Cleaning & Security Services",
    description:
      "Professional commercial cleaning, security and facility maintenance services across Brisbane, Gold Coast and surrounding areas.",
    url: "https://c1services.com.au",
    siteName: "C1 Services",
    type: "website",
    locale: "en_AU",
  },

  twitter: {
    card: "summary_large_image",
    title: "C1 Services | Commercial Cleaning & Security Services",
    description:
      "Professional commercial cleaning, security and facility maintenance services across Brisbane, Gold Coast and surrounding areas.",
  },

  robots: {
    index: true,
    follow: true,
  },
 
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthListener />
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}