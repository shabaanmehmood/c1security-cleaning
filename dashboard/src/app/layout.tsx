import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import RootBackground from "@/components/ui/rootbackground";
import { AuthListener } from "@/components/auth/authListner";
import LayoutContent from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "C1SCURITY-CLEANING",
  description: "Professional Commercial Cleaning Services",
  icons: {
    icon: "/MainLogo.svg",
    shortcut: "/Logo.svg",
    apple: "/main.svg",
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
        <RootBackground />
        <AuthListener />
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}