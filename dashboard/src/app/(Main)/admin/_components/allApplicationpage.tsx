import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { allApplications } from "@/lib/getApplications";

export default async function ApplicationsPage() {
  const applications = await allApplications();

  return (
    <main className="p-6">
      {/* Back Button */}
      <Link
        href="/admin"
        className="mb-6 inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold">Applications</h1>
        <p className="text-muted-foreground">
          Total Applications: {applications.length}
        </p>
      </div>

      {applications.length === 0 ? (
        <div className="rounded-lg border p-8 text-center">
          No applications found.
        </div>
      ) : (
        <div className="space-y-4">
          {applications.map((application) => (
            <div
              key={application.jobId}
              className="rounded-xl border p-5 shadow-sm"
            >
              <div className="grid gap-4 md:grid-cols-5">
                <div>
                  <p className="text-xs text-gray-500">Applicant</p>
                  <p className="font-semibold">
                    {application.firstName} {application.lastName}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Job</p>
                  <p>{application.jobSlug}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p>{application.email}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p>
                    {application.addressInformation.city},{" "}
                    {application.addressInformation.country}
                  </p>
                </div>

                <div className="flex items-center justify-end">
                  <Link
                    href={`/admin/applications/${application.jobId}`}
                    className="rounded-md bg-black px-4 py-2 text-white transition hover:bg-gray-800"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}