"use client";

import React, { useState } from "react";

import { ServicesSection } from "@/app/cleaning/(Main)/_components/ServiceSection";
import QuoteForm from "@/app/cleaning/(Main)/get-a-quote/_component/quoteForm";
import { Sparkles } from "lucide-react";
import ServicePage from "@/components/ui/Service/field/ServicePage";
import HomeHero, { HomeHeroProps } from "@/components/ui/city/Hero";
import Faq from "@/components/ui/city/Faq";
import { FaqItem } from "@/fillerData/allFaq";

export interface FaqAndHeroProps {
  faq: FaqItem[];
  HeroContent: HomeHeroProps;
}

export default function ServicesFieldPage({ faq, HeroContent }: FaqAndHeroProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <main className="min-h-screen relative overflow-x-hidden pt-28">
      <HomeHero title={HeroContent.title} description={HeroContent.description} city={HeroContent.city} />
      
      <ServicePage title={HeroContent.title} />

      
{/* 
      <ServicesSection onOpenQuoteModal={() => setQuoteModalOpen(true)} /> */}

      <Faq faqs={faq} />

      <QuoteForm />
    </main>
  );
}