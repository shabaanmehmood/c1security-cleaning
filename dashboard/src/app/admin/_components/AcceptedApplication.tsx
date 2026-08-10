"use client";

import { ApplicationExtractedData } from "@/validators/ApplicationForm";
import { Mail, Phone, Briefcase, Calendar, CheckCircle, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface AcceptedApplicationProps {
    applications: ApplicationExtractedData[];
}

export default function AcceptedApplication({
    applications,
}: AcceptedApplicationProps) {
    const router = useRouter();

    function slugToText(slug: string) {
        return slug
            .replace(/[-_]+/g, ' ')
            .trim()
            .replace(/\b\w/g, char => char.toUpperCase());
    }

    if (applications.length === 0) {
        return (
            <div className="flex min-h-[450px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white shadow-sm p-6">
                <CheckCircle className="mb-5 h-16 w-16 text-slate-300" />

                <h2 className="text-2xl font-bold text-slate-800">
                    No Accepted Applications
                </h2>

                <p className="mt-2 max-w-md text-center text-slate-500">
                    There are currently no accepted job applications.
                    Once an application is accepted, it will appear here.
                </p>
            </div>
        );
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* Top Bar / Back Button Container */}
            <div className="col-span-full mb-2">
                <button
                    onClick={() => router.back()}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 hover:text-gray-900"
                >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back</span>
                </button>
            </div>

            {/* Application Cards */}
            {applications.map((application) => (
                <div
                    key={`${application.userId}-${application.jobSlug}`}
                    className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                    <div>
                        {/* Card Header */}
                        <div className="flex items-start justify-between gap-3 border-b border-gray-100 pb-4">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">
                                    {`${application.firstName} ${application.lastName}`}
                                </h2>
                                <p className="text-sm font-medium text-blue-600 mt-0.5">
                                    {slugToText(application.jobSlug)}
                                </p>
                            </div>

                            <span className="shrink-0 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                Accepted
                            </span>
                        </div>

                        {/* Card Information */}
                        <div className="mt-4 space-y-3">
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-blue-600 shrink-0" />
                                <span className="text-sm text-gray-700 truncate">
                                    {application.email}
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-blue-600 shrink-0" />
                                <span className="text-sm text-gray-700">
                                    {application.phoneNumber}
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Briefcase size={18} className="text-blue-600 shrink-0" />
                                <span className="text-sm text-gray-700">
                                    {slugToText(application.jobSlug)}
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Calendar size={18} className="text-blue-600 shrink-0" />
                                <span className="text-sm text-gray-700">
                                    {application.createdAt
                                        ? new Date(application.createdAt).toLocaleDateString("en-US", {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                        })
                                        : "N/A"}
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <CheckCircle size={18} className="text-green-600 shrink-0" />
                                <span className="text-sm font-medium text-green-700 capitalize">
                                    {application.status}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Resume Action Button */}
                    <a
                        href={application.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
                    >
                        View Resume
                    </a>
                </div>
            ))}
        </div>
    );
}