// app/career/jobs/[slug]/apply/page.tsx

import { notFound } from "next/navigation";
import ApplicationForm from "../_components/ApplicationForm";
import { getJobBySlug } from "@/lib/JobDetailBySlug";

interface ApplyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ApplyPage({ params }: ApplyPageProps) {
  const { slug } = await params;

  // Fetch job details by slug
  const job = await getJobBySlug(slug);

  // Trigger Next.js 404 page if job doesn't exist
  if (!job) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Apply for {job.title ?? "Position"}
        </h1>

        {job.company?.name && (
          <p className="mt-3 text-gray-600">
            {job.company.name}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {job.city && (
            <span className="rounded bg-blue-100 px-3 py-1">
              {job.city}
            </span>
          )}

          {job.state && (
            <span className="rounded bg-blue-100 px-3 py-1">
              {job.state}
            </span>
          )}

          {job.country && (
            <span className="rounded bg-blue-100 px-3 py-1">
              {job.country}
            </span>
          )}

          {job.employmentType && (
            <span className="rounded bg-blue-100 px-3 py-1">
              {job.employmentType}
            </span>
          )}

          {job.workplace && (
            <span className="rounded bg-blue-100 px-3 py-1">
              {job.workplace}
            </span>
          )}
        </div>
      </div>

      <ApplicationForm jobId={job.id} />
    </main>
  );
}