// app/(Main)/[city]/page.tsx

// 1. Define or import your list of city slugs
const CITIES = [
  "brisbane",
  "gold-coast",
  "sunshine-coast",
  "townsville",
  "cairns",
  "toowoomba",
  "rockhampton",
  "mackay",
  "gladstone",
  "bundaberg",
  "hervey-bay",
  "maryborough",
  "mount-isa",
  "emerald",
  "gympie",
  "warwick",
  "charters-towers",
  "kingaroy",
  "roma",
  "moranbah",
];

// 2. Export generateStaticParams
export async function generateStaticParams() {
  return CITIES.map((city) => ({
    city: city,
  }));
}

// 3. Your Page Component
export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;

  return (
    <div>
      <h1>Services in {city}</h1>
    </div>
  );
}