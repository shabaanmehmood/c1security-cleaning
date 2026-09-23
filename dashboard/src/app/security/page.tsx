
import Navbar from "./_components/Navbar";
import type { Metadata } from "next";
import SecurityServicesSection from "./_components/Service";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Security Services",
  description:
    "Professional security services for businesses, properties and facilities across Brisbane, Gold Coast and surrounding areas. Reliable security solutions from C1 Services.",
  alternates: {
    canonical: "https://c1services.com.au/security",
  },
};
export default function Home() {
  return (
    <>
      <Navbar />
          <SecurityServicesSection/>

      <Footer />
    </>
  );
}
