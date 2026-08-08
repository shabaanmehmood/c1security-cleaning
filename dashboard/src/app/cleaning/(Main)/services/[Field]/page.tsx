// app/(Main)/services/[Field]/page.tsx

import ServicesFieldPage from "@/components/ui/Service/field/ServiceForField";
import { servicesHomeHeroData } from "@/fillerData/EachServicePageFillerData";
import { notFound } from "next/navigation";
import { 
  school, 
  industrial, 
  commercial, 
  office, 
  medical, 
  warehouse, 
  food, 
  hospital, 
  FaqItem 
} from "@/fillerData/allFaq";

const faqMap: Record<string, FaqItem[]> = {
  school,
  industrial,
  commercial,
  office,
  medical,
  warehouse,
  food,
  hospital,
};

export async function generateStaticParams() {
  return servicesHomeHeroData.map((item) => ({
    Field: item.city,
  }));
}

interface Props {
  params: Promise<{
    Field: string;
  }>;
}

export default async function FieldPage({ params }: Props) {
  const { Field } = await params;

  const pageData = servicesHomeHeroData.find((item) => item.city === Field);

  if (!pageData) {
    notFound();
  }

  const currentFaq = faqMap[Field.toLowerCase()] || office;

  return <ServicesFieldPage faq={currentFaq} HeroContent={pageData} />;
}