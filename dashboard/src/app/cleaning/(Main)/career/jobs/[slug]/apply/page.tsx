// app/career/jobs/[slug]/apply/page.tsx
export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import ApplicationForm from "../_components/ApplicationForm";
import { getJobBySlug } from "@/lib/JobDetailBySlug";
import { allJob } from "@/lib/allJob";

export async function generateStaticParams() {
    const jobs = await allJob();

    return jobs.map(job => ({
        slug: job.slug,
    }));
}
interface ApplyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ApplyPage({ params }: ApplyPageProps) {
  const { slug } = await params;

  const job = await getJobBySlug(slug);
  console.log(job)

  if (!job) {
    notFound();
  }

  return (
    <main className="bg-slate-50">
  {/* Hero */}
  <section className="border-b border-slate-200 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white">
    <div className="mx-auto max-w-6xl px-6 py-16">
      <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur">
        Career Opportunity
      </span>

      <h1 className="mt-5 text-5xl font-bold leading-tight">
        Apply for <span className="text-blue-300">{job.title}</span>
      </h1>

      {job.company?.name && (
        <p className="mt-4 text-lg text-blue-100">
          {job.company.name}
        </p>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        {[
          job.city,
          job.state,
          job.country,
          job.employmentType,
          job.workplace,
        ]
          .filter(Boolean)
          .map((item,index) => (
            <span
              key={`${item}-${index}`}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur"
            >
              {item}
            </span>
          ))}
      </div>
    </div>
  </section>

  {/* Form */}
  <section className="mx-auto max-w-6xl px-6 py-16">
    <ApplicationForm jobId={job.id} jobSlug={job.slug} />
  </section>
</main>
  );
}