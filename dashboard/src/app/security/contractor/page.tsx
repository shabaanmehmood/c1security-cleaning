import React from "react";
import Navbar from "../_components/Navbar";
import Header from "../_components/Header";
import Hero from "../_components/Hero";
import Carousel from "../_components/Carousel";
import Testimonial from "../_components/Testimonial";
import FAQ from "../_components/FAQ";
import Footer from "../_components/Footer";
import SecurityTrustSection from "../_components/SecurityTrustSection";
import { contractorTestimonials } from "./constants/contractorTestimonials";
import { contractorSlides } from "./constants/contractorSlides";
import { contractorFAQs } from "./constants/contractorFAQs";
import { contractorTrustItems } from "./constants/contractorTrustItems";
import StepsSection from "../_components/Stepper";
import { contractorSteps } from "./constants/contractorSteps";
import ComparisonCards from "./_components/ComparisonCards";
import ThreeDPhotoCarousel from "./_components/ThreeDPhotoCarousel";
import FeatureShowcase from "../_components/FeatureShowcase";
import { contractorFeatures } from "./constants/contractorFeatures";

const ContractorPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header
        title="Empowering Contractors with Workforce Tools"
        description="Simplify guard management, automate scheduling, and ensure site safety all through Control-1 Security."
        imageSrc="/header.png"
        reverse
      />

      <main>
        <Hero
          title="Manage Your Workforce Seamlessly"
          subtitle="Hire, assign, and monitor guards — all from one place."
          ctaText="Join as Contractor"
          ctaLink="/security/contact"
        />

        {/* Stepper Section */}
        <section className="py-20 bg-gray-50">
          <StepsSection
            title="For Contractors"
            highlight="How It Works"
            steps={contractorSteps}
          />
        </section>

        <ComparisonCards />

        <FeatureShowcase
          heading="Smart Features Designed for Contractors"
          features={contractorFeatures}
          bgGradient="from-purple-50 via-white to-purple-50"
        />
        <h3 className="text-4xl md:text-5xl o-outfit text-center font-semibold text-blue-950 mt-20 ">
          Control-1 Security App{" "}
          <span className="text-blue-800">Contractor-Preview</span>
        </h3>
        <div className="w-full max-w-full">
          <div className="min-h-[300px]  flex flex-col justify-center rounded-lg space-y-4">
            <div className="p-2">
              <ThreeDPhotoCarousel />
            </div>
          </div>
        </div>

        <section className="py-20 bg-gray-50">
          <h2 className="text-center md:text-5xl text-4xl o-outfit font-semibold mb-10 text-blue-950">
            What Contractors Say
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {contractorTestimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.name}
                name={testimonial.name}
                role={testimonial.role}
                text={testimonial.text}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </section>

        {/* Security Section */}
        <SecurityTrustSection
          heading="Security & Trust You Can Rely On"
          subheading="Control-1 Security is built to give contractors peace of mind with reliable guards, safe payments, and continuous support."
          items={contractorTrustItems}
        />

        {/* Carousel Section */}
        <div className="mx-auto">
          <Carousel
            slides={contractorSlides}
            heading="Control-1 Security for Contractors"
          />
        </div>

        {/* FAQ Section */}
        <section className="py-10">
          <FAQ items={contractorFAQs} />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContractorPage;
