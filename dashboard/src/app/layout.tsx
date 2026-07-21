import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RootBackground from "../components/ui/rootbackground";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CleanWorks",
  description: "Professional Commercial Cleaning Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootBackground/>
        {children}
      </body>
    </html>
  );
}