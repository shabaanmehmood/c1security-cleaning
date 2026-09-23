
import Header from "../_components/Header";
import CoreValuesSection from "../_components/homePage/CoreValuesSection";
import { Skiper16 } from "../_components/homePage/FeaturesSection";
import HoverSection from "../_components/homePage/IndustryHoverSection";
import OurStory from "../_components/homePage/OurStory";
import ParallaxSection from "../_components/homePage/ParallaxSection";
import StatsSection from "../_components/homePage/StatsSection";
import WhoWeAre from "../_components/homePage/WhoWeAre";
import Navbar from "../_components/Navbar";
import { Component } from "../_components/parallax-scroll-feature-section";
function page() {
  return (
    <>
         <Navbar />
     <Header
        title="Secure & Reliable Workforce Hub"
        description="Control-1 Security connects guards and contractors on a single trusted platform for seamless job posting, hiring, and monitoring."
        imageSrc="/header.png"
      />

      <WhoWeAre />
      <OurStory />
      <CoreValuesSection />
      <Component />
      <HoverSection />
      <Skiper16 />
      <StatsSection />
      <ParallaxSection />
    </>
  )
}

export default page