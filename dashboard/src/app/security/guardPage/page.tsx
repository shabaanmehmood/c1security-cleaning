import React from "react";
import Navbar from "../_components/Navbar";
import Header from "../_components/Header";
import Hero from "../_components/Hero";
import Carousel from "../_components/Carousel";
import Testimonial from "../_components/Testimonial";
import FAQ from "../_components/FAQ";
import Footer from "../_components/Footer";
import SecurityTrustSection from "../_components/SecurityTrustSection";
import { guardSlides } from "./constants/guardSlides";
import { guardSteps } from "./constants/guardSteps";
import { guardFeatures } from "./constants/guardFeatures";
import { guardTestimonials } from "./constants/guardTestimonials";
import { guardTrustItems } from "./constants/guardTrustItems";
import { guardFAQs } from "./constants/guardFAQs";
import StepsSection from "../_components/Stepper";
import ThreeDPhotoCarousel from "./_components/ThreeDPhotoCarousel";
import FeatureShowcase from "../_components/FeatureShowcase";

const GuardPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header
        title="Empower Guards with Smart Tools"
        description="Guards can easily check-in, report incidents, and communicate with supervisors — all in one place."
        imageSrc="/header.png"
        reverse
      />

      <main>
        {/* Hero Section */}
        <Hero
          title="Become a Control-1 Security Guard"
          subtitle="Work flexibly, track your time, and get paid reliably."
          ctaText="Join as Guard"
          ctaLink="/contact"
        />

        {/* Stepper Section */}
        <section className="py-20 bg-gray-50">
          <StepsSection
            title="For Guards"
            highlight="How It Works"
            steps={guardSteps}
          />
        </section>

        <FeatureShowcase
          heading="Smart Features Designed for Guards"
          features={guardFeatures}
        />
        <h3 className="text-4xl md:text-5xl o-outfit text-center font-semibold text-blue-950 mt-20">
          Control-1 Security App{" "}
          <span className="text-blue-800">Guard-Preview</span>
        </h3>
        <div className="w-full max-w-full">
          <div className="min-h-[300px]  flex flex-col justify-center rounded-lg space-y-4">
            <div className="p-2">
              <ThreeDPhotoCarousel />
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <h2 className="text-center text-blue-950 md:text-5xl text-4xl o-outfit font-semibold mb-10">
            What Guards Say
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {guardTestimonials.map((testimonial) => (
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

        {/* Trust Section */}
        <SecurityTrustSection
          heading="Built for Guard Security & Trust"
          subheading="Control-1 Security ensures guards work with reliable contractors, timely payments, and fair opportunities."
          items={guardTrustItems}
        />

        {/* Carousel Section */}
        <div className="mx-auto">
          <Carousel heading="Why Join as a Guard?" slides={guardSlides} />
        </div>

        {/* FAQ Section */}
        <FAQ items={guardFAQs} />
      </main>

      <Footer />
    </>
  );
};

export default GuardPage;
