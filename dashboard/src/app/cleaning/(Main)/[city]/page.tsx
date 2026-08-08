import Page from "@/components/ui/city/city";
import { cityPages } from "@/fillerData/FillerData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const cities = Object.keys(cityPages);

  console.log("Cities:", cities);

  return cities.map((city) => ({
    city,
  }));
}
interface Props {
  params: Promise<{
    city: string;
  }>;
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;

  const pageData = cityPages[city as keyof typeof cityPages];

  if (!pageData) {
    notFound();
  }

  return <Page data={pageData.data} />;
}