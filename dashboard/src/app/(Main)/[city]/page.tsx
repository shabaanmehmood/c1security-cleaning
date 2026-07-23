import Page from "@/components/ui/city/city";
import { cityPages } from "@/app/(Main)/_components/FillerData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const cities = Object.keys(cityPages);

  console.log("Cities:", cities);

  return cities.map((city) => ({
    city,
  }));
}

// 1. Update Props interface to mark params as a Promise
interface Props {
  params: Promise<{
    city: string;
  }>;
}

export default async function CityPage({ params }: Props) {
  // 2. Add 'await' here to unwrap the params Promise
  const { city } = await params;

  const pageData = cityPages[city as keyof typeof cityPages];

  if (!pageData) {
    notFound();
  }

  return <Page data={pageData.data} />;
}