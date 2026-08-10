"use client";

import Link from "next/link";
import { ApplicationExtractedData } from "@/validators/ApplicationForm";
import { updateApplicationStatus } from "@/lib/updateApplicatinStatus";
import { deleteApplication } from "@/lib/rejectApplications";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface ApplicationProps {
  application: ApplicationExtractedData;
}

export default function Application({ application }: ApplicationProps) {
  const router = useRouter();

  const handleAccept = async () => {
    if (!application.userId) return;

    await updateApplicationStatus(application.userId, "accepted");
    router.refresh(); // refresh server data
  };

  const handleReject = async () => {
    if (!application.userId) return;

    await deleteApplication(application.userId);
    router.push("/admin/applications"); // or wherever your list page is
  };

  const statusColor =
    application.status === "accepted"
      ? "bg-green-100 text-green-700"
      : application.status === "rejected"
      ? "bg-red-100 text-red-700"
      : "bg-yellow-100 text-yellow-700";

  return (
    <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </button>
      </div>

      {/* Header */}
      <div className="mb-8 flex flex-col gap-6 border-b pb-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {application.firstName} {application.lastName}
          </h1>

          <p className="mt-2 text-gray-600">
            <span className="font-semibold">Job:</span> {application.jobSlug}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold">Job ID:</span> {application.jobId}
          </p>

          {application.createdAt && (
            <p className="mt-2 text-sm text-gray-500">
              Applied on {new Date(application.createdAt).toLocaleString()}
            </p>
          )}

          <span
            className={`mt-4 inline-flex rounded-full px-4 py-1 text-sm font-semibold capitalize ${statusColor}`}
          >
            {application.status ?? "pending"}
          </span>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={`https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(
              application.resumeUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            View Resume
          </a>

          <a
            href={application.resumeUrl}
            download
            className="rounded-lg bg-slate-700 px-5 py-3 font-medium text-white transition hover:bg-slate-800"
          >
            Download Resume
          </a>

          <button
            onClick={handleAccept}
            disabled={application.status === "accepted"}
            className="rounded-lg bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Accept
          </button>

          <button
            onClick={handleReject}
            disabled={application.status === "rejected"}
            className="rounded-lg bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Reject
          </button>
        </div>
      </div>

      {/* Personal Information */}
      <Section title="Personal Information">
        <Info label="First Name" value={application.firstName} />
        <Info label="Last Name" value={application.lastName} />
        <Info label="Email" value={application.email} />
        <Info label="Phone Number" value={application.phoneNumber} />
      </Section>

      {/* Address */}
      <Section title="Address Information">
        <Info
          label="Address Line 1"
          value={application.addressInformation.addressLine1}
        />

        <Info
          label="Address Line 2"
          value={application.addressInformation.addressLine2 || "-"}
        />

        <Info label="City" value={application.addressInformation.city} />

        <Info label="State" value={application.addressInformation.state} />

        <Info
          label="Postcode"
          value={application.addressInformation.postcode}
        />

        <Info
          label="Country"
          value={application.addressInformation.country}
        />
      </Section>

      {/* Compliance */}
      <Section title="Compliance Questions">
        <Info
          label="Compliance 1"
          value={application.compliance.compliance1}
        />

        <Info
          label="Compliance 2"
          value={application.compliance.compliance2}
        />

        <Info
          label="Compliance 3"
          value={application.compliance.compliance3}
        />

        <Info
          label="Compliance 4"
          value={application.compliance.compliance4}
        />

        <Info
          label="Compliance 5"
          value={application.compliance.compliance5}
        />
      </Section>

      {/* Other Information */}
      <div className="space-y-8">
        <TextBlock
          title="Experience"
          text={application.otherInformation.experience}
        />

        <TextBlock
          title="Availability"
          text={application.otherInformation.availability}
        />

        <TextBlock
          title="Cover Letter"
          text={application.otherInformation.coverLetter}
        />
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-10">
      <h2 className="mb-5 text-2xl font-semibold text-gray-900">{title}</h2>

      <div className="grid gap-5 md:grid-cols-2">{children}</div>
    </section>
  );
}

interface InfoProps {
  label: string;
  value?: string;
}

function Info({ label, value }: InfoProps) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium text-gray-500">{label}</p>

      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
        {value || "-"}
      </div>
    </div>
  );
}

interface TextBlockProps {
  title: string;
  text?: string;
}

function TextBlock({ title, text }: TextBlockProps) {
  return (
    <div>
      <h2 className="mb-3 text-2xl font-semibold text-gray-900">{title}</h2>

      <div className="min-h-[120px] whitespace-pre-wrap rounded-lg border border-gray-200 bg-gray-50 p-5">
        {text || "No information provided."}
      </div>
    </div>
  );
}