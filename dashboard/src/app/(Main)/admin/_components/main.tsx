import Link from "next/link";
import {
  BriefcaseBusiness,
  FileText,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 rounded-full bg-blue-100 px-4 py-2 text-blue-700">
            <ShieldCheck className="h-5 w-5" />
            <span className="font-medium">Admin Dashboard</span>
          </div>

          <h1 className="mt-5 text-5xl font-bold tracking-tight">
            Welcome Admin 👋
          </h1>

          <p className="mt-3 max-w-2xl text-lg text-slate-600">
            Manage job postings and review submitted applications from one
            central dashboard.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Add Job */}
          <Link
            href="/admin/createJob"
            className="group rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
              <BriefcaseBusiness className="h-8 w-8 text-blue-600" />
            </div>

            <h2 className="text-2xl font-bold">
              Add New Job
            </h2>

            <p className="mt-3 text-slate-600">
              Create a new job posting that will appear on the Careers page for
              candidates.
            </p>

            <div className="mt-8 flex items-center gap-2 font-semibold text-blue-600">
              Open
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Applications */}
          <Link
            href="/admin/applications"
            className="group rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl"
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
              <FileText className="h-8 w-8 text-emerald-600" />
            </div>

            <h2 className="text-2xl font-bold">
              View Applications
            </h2>

            <p className="mt-3 text-slate-600">
              Browse all submitted job applications, inspect candidate details,
              and download resumes.
            </p>

            <div className="mt-8 flex items-center gap-2 font-semibold text-emerald-600">
              Open
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

        </div>

      </div>
    </main>
  );
}