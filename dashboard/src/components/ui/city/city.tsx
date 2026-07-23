import SplitScrollCard from "./ScrollArea";
import HeroBannerCard from "./2HomeHero";
import HomeHero from "./Hero";
import Featuress from "./feature";
import SwappingCards from "./3DivComp";
import InfiniteMarquee from "./SlideingDivs";
import Faq from "./Faq";

export interface PageDataProps {
  data: {
    hero: {
      title: string;
      description: string;
    };
    banner: {
      title: string;
      description: string;
    };
    splitScroll: {
      img: string;
      text: string;
      description: string;
    };
    swappingCards: {
      img: string;
      text: string;
      description: string;
    };
    marquee: {
      description1: string;
      description2: string;
      description3: string;
    };
    faq?: {
      title?: string;
      subtitle?: string;
    };
  };
}

export default function Page({ data }: PageDataProps) {
  return (
    <main className="min-h-screen space-y-12 pb-20 bg-slate-50/50 overflow-x-hidden">
      {/* 1. Main Home Hero Section */}
      <HomeHero
        title={data.hero.title}
        description={data.hero.description}
      />

      {/* 2. Hero Banner Card */}
      <HeroBannerCard
        title={data.banner.title}
        description={data.banner.description}
      />

      {/* 3. Features Component */}
      <Featuress />

      {/* 4. Split Image & Scroll Area Component */}
      <SplitScrollCard
        img={data.splitScroll.img}
        text={data.splitScroll.text}
        description={data.splitScroll.description}
      />

      {/* 5. 3-Div Position Swapping Component */}
      <SwappingCards
        img={data.swappingCards.img}
        text={data.swappingCards.text}
        description={data.swappingCards.description}
      />

      {/* 6. Infinite Horizontal Sliding Marquee */}
      <InfiniteMarquee
        description1={data.marquee.description1}
        description2={data.marquee.description2}
        description3={data.marquee.description3}
      />

      {/* 7. FAQ Section */}
      <Faq
        title={data.faq?.title}
        subtitle={data.faq?.subtitle}
      />
    </main>
  );
}