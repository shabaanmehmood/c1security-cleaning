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
  metadataBase: new URL("https://www.c1services.com.au"),

  title: {
    default: "C1 Security & Cleaning | Professional Services",
    template: "%s | C1 Security & Cleaning",
  },

  description:
    "C1 Security & Cleaning provides professional commercial cleaning, security, and facility services across Australia.",

  keywords: [
    "commercial cleaning",
    "professional cleaning services",
    "security services",
    "commercial security",
    "facility services",
    "C1 Security & Cleaning",
  ],

  authors: [{ name: "C1 Security & Cleaning" }],
  creator: "C1 Security & Cleaning",
  publisher: "C1 Security & Cleaning",

  applicationName: "C1 Security & Cleaning",

  icons: {
    icon: [
      {
        url: "/favvvvvv.png",
        type: "image/png",
      },
    ],
    shortcut: "/favvvvvv.png",
    apple: "/favvvvvv.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.c1services.com.au",
    siteName: "C1 Security & Cleaning",
    title: "C1 Security & Cleaning | Professional Services",
    description:
      "Professional commercial cleaning, security, and facility services across Australia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "C1 Security & Cleaning",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "C1 Security & Cleaning | Professional Services",
    description:
      "Professional commercial cleaning, security, and facility services across Australia.",
    images: ["/og-image.png"],
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