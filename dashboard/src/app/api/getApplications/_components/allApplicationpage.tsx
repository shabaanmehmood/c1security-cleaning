'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import {
  Search,
  Eye,
  X,
  Briefcase,
  Mail,
  Phone,
  Calendar,
  FileText,
  MapPin,
  CheckSquare,
  Clock,
  CheckCircle,
  XCircle,
  ExternalLink
} from 'lucide-react';

// 1. Define Zod Schema (Matches your API)
export const applicationPayloadSchema = z.object({
  jobId: z.string(),
  jobSlug: z.string(),
  firstName: z.string().min(2, "First name is required").max(50),
  lastName: z.string().min(2, "Last name is required").max(50),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(8, "Phone number is required").max(20),
  addressInformation: z.object({
    addressLine1: z.string().min(3, "Address is required"),
    addressLine2: z.string().optional(),
    city: z.string().min(2, "City is required"),
    state: z.string().min(2, "State is required"),
    postcode: z.string().min(3, "Postcode is required"),
    country: z.string().min(2, "Country is required"),
  }),
  compliance: z.object({
    compliance1: z.string().min(1, "Required"),
    compliance2: z.string().min(1, "Required"),
    compliance3: z.string().min(1, "Required"),
    compliance4: z.string().min(1, "Required"),
    compliance5: z.string().min(1, "Required"),
  }),
  otherInformation: z.object({
    coverLetter: z.string().optional(),
    experience: z.string().optional(),
    availability: z.string().optional(),
  }),
  resumeUrl: z.string().url("Invalid resume URL"),
});

// Infer TypeScript type and add administrative metadata (id, status, date)
export type ApplicationPayload = z.infer<typeof applicationPayloadSchema>;
export type ApplicationRecord = ApplicationPayload & {
  id: string;
  appliedDate: string;
  status: 'Pending' | 'Reviewed' | 'Accepted' | 'Rejected';
};

// Mock Data structure based on your schema

export default function ApplicationPage() {
  const [applications] = useState<ApplicationRecord[]>([]);
  const [selectedApp, setSelectedApp] = useState<ApplicationRecord | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Filter Logic
  const filteredApplications = applications.filter((app) => {
    const fullName = `${app.firstName} ${app.lastName}`.toLowerCase();
    const matchesSearch =
      fullName.includes(searchTerm.toLowerCase()) ||
      app.jobSlug.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'All' || app.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Helper for Status Badge
  const getStatusBadge = (status: ApplicationRecord['status']) => {
    switch (status) {
      case 'Accepted':
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200"><CheckCircle className="w-3.5 h-3.5" /> Accepted</span>;
      case 'Rejected':
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200"><XCircle className="w-3.5 h-3.5" /> Rejected</span>;
      case 'Reviewed':
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200"><Clock className="w-3.5 h-3.5" /> Reviewed</span>;
      default:
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200"><Clock className="w-3.5 h-3.5" /> Pending</span>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Job Applications</h1>
            <p className="text-sm text-slate-500 mt-1">Review candidate submissions and payload details.</p>
          </div>
          <div className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-sm w-fit">
            <Briefcase className="w-5 h-5" />
            <span className="font-semibold">{filteredApplications.length} Total Applications</span>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by candidate name, job slug, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-slate-500">Status:</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Reviewed">Reviewed</option>
              <option value="Accepted">Accepted</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs text-slate-500 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-semibold">Candidate</th>
                  <th className="px-6 py-4 font-semibold">Target Job Slug</th>
                  <th className="px-6 py-4 font-semibold">Location</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredApplications.length > 0 ? (
                  filteredApplications.map((app) => (
                    <tr key={app.id} className="hover:bg-slate-50/80 transition">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-900">{app.firstName} {app.lastName}</div>
                        <div className="text-xs text-slate-400">{app.email}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-mono text-xs bg-slate-100 px-2.5 py-1 rounded text-slate-700 font-medium">
                          {app.jobSlug}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        {app.addressInformation.city}, {app.addressInformation.country}
                      </td>
                      <td className="px-6 py-4">{getStatusBadge(app.status)}</td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => setSelectedApp(app)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-600 hover:text-white transition active:scale-95"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          See Details
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                      No applications match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Details Modal */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 max-w-2xl w-full max-h-[90vh] overflow-y-auto">

            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Application Details</span>
                <h2 className="text-xl font-bold text-slate-900">{selectedApp.firstName} {selectedApp.lastName}</h2>
              </div>
              <button
                onClick={() => setSelectedApp(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">

              {/* Status & Job Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                <div>
                  <p className="text-xs text-slate-400 font-medium">Job Slug / ID</p>
                  <p className="text-sm font-semibold text-slate-800">{selectedApp.jobSlug} <span className="text-xs text-slate-400">({selectedApp.jobId})</span></p>
                </div>
                <div>{getStatusBadge(selectedApp.status)}</div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Contact Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <div>
                      <p className="text-xs text-slate-400">Email</p>
                      <p className="font-medium text-slate-800">{selectedApp.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-blue-500" />
                    <div>
                      <p className="text-xs text-slate-400">Phone Number</p>
                      <p className="font-medium text-slate-800">{selectedApp.phoneNumber}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> Address Details
                </h3>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm text-slate-700 space-y-1">
                  <p className="font-medium text-slate-900">{selectedApp.addressInformation.addressLine1}</p>
                  {selectedApp.addressInformation.addressLine2 && <p>{selectedApp.addressInformation.addressLine2}</p>}
                  <p>{selectedApp.addressInformation.city}, {selectedApp.addressInformation.state} {selectedApp.addressInformation.postcode}</p>
                  <p className="font-semibold text-slate-800">{selectedApp.addressInformation.country}</p>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" /> Other Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm mb-3">
                  <div>
                    <p className="text-xs text-slate-400">Experience</p>
                    <p className="font-medium text-slate-800">{selectedApp.otherInformation.experience || 'Not provided'}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Availability</p>
                    <p className="font-medium text-slate-800">{selectedApp.otherInformation.availability || 'Not provided'}</p>
                  </div>
                </div>
                {selectedApp.otherInformation.coverLetter && (
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Cover Letter</p>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm leading-relaxed text-slate-700">
                      {selectedApp.otherInformation.coverLetter}
                    </div>
                  </div>
                )}
              </div>

              {/* Compliance Responses */}
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5 text-slate-400" /> Compliance Checks
                </h3>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs space-y-2">
                  {Object.entries(selectedApp.compliance).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center border-b border-slate-200/60 last:border-0 pb-1.5 last:pb-0">
                      <span className="capitalize font-medium text-slate-500">{key}:</span>
                      <span className="font-semibold text-slate-800">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Resume / Attachment</h3>
                <a
                  href={selectedApp.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2.5 rounded-lg border border-blue-100 hover:bg-blue-600 hover:text-white transition"
                >
                  <FileText className="w-4 h-4" />
                  View Resume Document
                  <ExternalLink className="w-3.5 h-3.5 ml-auto" />
                </a>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="flex justify-end p-6 border-t border-slate-100 bg-slate-50 rounded-b-2xl">
              <button
                onClick={() => setSelectedApp(null)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 rounded-lg transition"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}