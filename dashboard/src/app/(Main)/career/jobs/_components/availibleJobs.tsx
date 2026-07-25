"use client";

import { useEffect, useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { allJob } from "@/lib/allJob";
import { Job } from "@/types/JobDescription";

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await allJob();
        if (Array.isArray(response)) {
          setJobs(response);
        } else if (response && Array.isArray((response as { jobs?: Job[] }).jobs)) {
          setJobs((response as { jobs: Job[] }).jobs);
        } else if (response && Array.isArray((response as { data?: Job[] }).data)) {
          setJobs((response as { data: Job[] }).data);
        } else {
          setJobs([]);
        }
      } catch (error) {
        console.error("Error fetching jobs: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/60 via-white to-blue-50/30 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-blue-950 sm:text-5xl">
            Join Our Team
          </h1>
          <p className="text-blue-600/80 font-medium">
            Explore active roles and apply online today.
          </p>
        </div>

        <div className="space-y-4">
          {loading ? (
            <div className="p-8 text-center bg-white rounded-3xl border border-blue-100 text-blue-900 font-medium">
              Loading open positions...
            </div>
          ) : jobs.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-3xl border border-blue-100 text-blue-900 font-medium">
              No positions are currently open. Please check back later!
            </div>
          ) : (
            jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-blue-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-100">
                      {job.workplace}
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">
                      {job.employmentType}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-blue-950">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-1 text-xs text-blue-600/80 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-blue-500" />
                    {job.city}, {job.state}
                  </div>
                </div>

                <div className="shrink-0">
                  <Link
                    href={`/career/jobs/${job.slug}`}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-blue-600/20"
                  >
                    See Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}