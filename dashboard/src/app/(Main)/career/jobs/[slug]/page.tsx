import JobPage from "@/components/JobDescription/FinalPage";
import { adminDb } from "@/lib/fireBase-Admin";

export async function generateStaticParams() {
  try {
    const snapshot = await adminDb.collection("jobs").get();

    return snapshot.docs
      .map((doc) => {
        const data = doc.data();
        return data?.slug && typeof data.slug === "string"
          ? { slug: data.slug }
          : null;
      })
      .filter((param): param is { slug: string } => param !== null);
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function JobDescriptionPage({ params }: Props) {
  const { slug } = await params;

  return <JobPage titleSlug={slug} />;
}