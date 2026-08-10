import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Applications } from "@/types/application";

interface ApplicationsPageProps {
  applications: Applications;
}

export default function ApplicationsPage({
  applications,
}: ApplicationsPageProps) {
  return (
    <main className="p-6">
      {/* Back Button */}
      <Link
        href="/admin"
        className="mb-6 inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Applications</h1>
        <p className="text-gray-500 mt-1">
          Total Applications: {applications.length}
        </p>
      </div>

      {applications.length === 0 ? (
        <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center text-gray-500 shadow-sm">
          No applications found.
        </div>
      ) : (
        <div className="space-y-4">
          {applications.map((application, idx) => (
            <div
              key={`${application.jobId}-${idx}`}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="grid gap-4 md:grid-cols-5 md:items-center">
                <div>
                  <p className="text-xs text-gray-500">Applicant</p>
                  <p className="font-semibold text-gray-900">
                    {application.firstName} {application.lastName}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Job</p>
                  <p className="text-gray-700">{application.jobSlug}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-gray-700 truncate">{application.email}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-gray-700">
                    {application.addressInformation.city},{" "}
                    {application.addressInformation.country}
                  </p>
                </div>

                <div className="flex items-center md:justify-end">
                  <Link
                    href={`/admin/applications/${application.userId}`}
                    className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
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