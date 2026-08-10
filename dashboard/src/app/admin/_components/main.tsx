import Link from "next/link";
import {
  BriefcaseBusiness,
  FileText,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  CircleCheckBig,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        
        {/* Header */}
        <div className="mb-12">
          
          {/* Go Back Button & Admin Badge */}
          <div className="flex items-center gap-3 mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700 shadow-sm border border-slate-200 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Link>

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3.5 py-1.5 text-sm font-medium text-blue-700">
              <ShieldCheck className="h-4 w-4" />
              <span>Admin Dashboard</span>
            </div>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            Welcome Admin 👋
          </h1>

          <p className="mt-3 max-w-2xl text-lg text-slate-600">
            Manage job postings and review submitted applications from one
            central dashboard.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

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

          {/* Accepted Applications */}
          <Link
            href="/admin/accepted"
            className="group rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
              <CircleCheckBig className="h-8 w-8 text-green-600" />
            </div>

            <h2 className="text-2xl font-bold">
              Accepted Applications
            </h2>

            <p className="mt-3 text-slate-600">
              View candidates who have been accepted for positions. Review their details,
              contact information, and resumes at any time.
            </p>

            <div className="mt-8 flex items-center gap-2 font-semibold text-green-600">
              Open
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>

      </div>
    </main>
  );
}