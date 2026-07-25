"use client";

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobSchema, JobFormValues } from "@/validators/addJob"; 
import { createJob } from "@/lib/postfromAdmin";

const QLD_LOCATIONS = [
  "Brisbane",
  "Gold Coast",
  "Sunshine Coast",
  "Townsville",
  "Cairns",
  "Toowoomba",
  "Rockhampton",
  "Mackay",
  "Gladstone",
  "Bundaberg",
  "Hervey Bay",
  "Maryborough",
  "Mount Isa",
  "Emerald",
  "Gympie",
  "Warwick",
  "Charters Towers",
  "Kingaroy",
  "Roma",
  "Moranbah",
];

export default function AddJobForm() {
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JobFormValues>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      id: crypto.randomUUID(),
      slug: "",
      title: "",
      city: "Brisbane",
      state: "QLD",
      country: "Australia",
      employmentType: "Full-time",
      workplace: "Brisbane",
      salary: {
        min: 25,
        max: 35,
        currency: "AUD",
        period: "Hourly",
      },
      company: {
        name: "",
        logo: "",
      },
      postedDate: new Date().toISOString().split("T")[0],
      expiresAt: "",
      vacancies: 1,
      overview: "",
      responsibilities: ["Perform routine residential or commercial cleaning tasks"],
      requirements: ["Valid Driver's License and reliable transport"],
      benefits: ["Flexible shifts and uniform provided"],
    },
  });

  const responsibilities = useFieldArray({ control, name: "responsibilities" as never });
  const requirements = useFieldArray({ control, name: "requirements" as never });
  const benefits = useFieldArray({ control, name: "benefits" as never });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const generatedSlug = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9 -]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    setValue("slug", generatedSlug, { shouldValidate: true });
  };

  const onSubmit = async (data: JobFormValues) => {
    setStatus(null);

    try {
      const result = await createJob(data);

      setStatus({
        type: "success",
        message: result.message || "Cleaning job created successfully!",
      });

      reset({
        id: crypto.randomUUID(),
        slug: "",
        title: "",
        city: "Brisbane",
        state: "QLD",
        country: "Australia",
        employmentType: "Full-time",
        workplace: "Brisbane",
        salary: { min: 25, max: 35, currency: "AUD", period: "Hourly" },
        company: { name: "", logo: "" },
        postedDate: new Date().toISOString().split("T")[0],
        expiresAt: "",
        vacancies: 1,
        overview: "",
        responsibilities: [""],
        requirements: [""],
        benefits: [""],
      });
    } catch (error: any) {
      console.error("Submission Error:", error.message);
      setStatus({
        type: "error",
        message: error.message || "Something went wrong.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-8">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">Create New Cleaning Job Posting</h2>

      {status && (
        <div
          className={`p-4 rounded-md text-sm font-medium ${
            status.type === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {status.message}
        </div>
      )}

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">General Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Title</label>
            <input
              {...register("title", { onChange: handleTitleChange })}
              placeholder="e.g. Commercial Office Cleaner / Bond Cleaning Specialist"
              className="mt-1 block w-full border rounded-md p-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Slug</label>
            <input
              {...register("slug")}
              placeholder="commercial-office-cleaner"
              className="mt-1 block w-full border rounded-md p-2 bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.slug && <p className="text-red-500 text-xs mt-1">{errors.slug.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Workplace Location</label>
            <select
              {...register("workplace")}
              className="mt-1 block w-full border rounded-md p-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            >
              {QLD_LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            {errors.workplace && <p className="text-red-500 text-xs mt-1">{errors.workplace.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Employment Type</label>
            <select
              {...register("employmentType")}
              className="mt-1 block w-full border rounded-md p-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Casual">Casual</option>
              <option value="Contract">Contract</option>
            </select>
            {errors.employmentType && <p className="text-red-500 text-xs mt-1">{errors.employmentType.message}</p>}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Location Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Suburb / City</label>
            <input
              {...register("city")}
              placeholder="e.g. South Brisbane / Surfers Paradise"
              className="mt-1 block w-full border rounded-md p-2 border-gray-300"
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">State</label>
            <input
              {...register("state")}
              placeholder="QLD"
              className="mt-1 block w-full border rounded-md p-2 border-gray-300"
            />
            {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Country</label>
            <input
              {...register("country")}
              placeholder="Australia"
              className="mt-1 block w-full border rounded-md p-2 border-gray-300"
            />
            {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Company Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Company / Business Name</label>
            <input
              {...register("company.name")}
              placeholder="e.g. Sparkling Clean Co."
              className="mt-1 block w-full border rounded-md p-2 border-gray-300"
            />
            {errors.company?.name && <p className="text-red-500 text-xs mt-1">{errors.company.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Logo URL (Optional)</label>
            <input
              {...register("company.logo")}
              placeholder="https://example.com/logo.png"
              className="mt-1 block w-full border rounded-md p-2 border-gray-300"
            />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Pay & Vacancies</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Min Pay Rate</label>
            <input
              type="number"
              {...register("salary.min", { valueAsNumber: true })}
              placeholder="28"
              className="mt-1 block w-full border rounded-md p-2 border-gray-300"
            />
            {errors.salary?.min && <p className="text-red-500 text-xs mt-1">{errors.salary.min.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Max Pay Rate</label>
            <input
              type="number"
              {...register("salary.max", { valueAsNumber: true })}
              placeholder="35"
              className="mt-1 block w-full border rounded-md p-2 border-gray-300"
            />
            {errors.salary?.max && <p className="text-red-500 text-xs mt-1">{errors.salary.max.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Currency</label>
            <input
              {...register("salary.currency")}
              placeholder="AUD"
              className="mt-1 block w-full border rounded-md p-2 border-gray-300"
            />
            {errors.salary?.currency && <p className="text-red-500 text-xs mt-1">{errors.salary.currency.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Period</label>
            <select
              {...register("salary.period")}
              className="mt-1 block w-full border rounded-md p-2 border-gray-300"
            >
              <option value="Hourly">Hourly</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Expiration Date (Optional)</label>
            <input
              type="date"
              {...register("expiresAt")}
              className="mt-1 block w-full border rounded-md p-2 border-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Vacancies Open</label>
            <input
              type="number"
              {...register("vacancies", { valueAsNumber: true })}
              placeholder="2"
              className="mt-1 block w-full border rounded-md p-2 border-gray-300"
            />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Job Overview</h3>
        <div>
          <textarea
            {...register("overview")}
            rows={4}
            placeholder="We are looking for a reliable, hardworking commercial cleaner to join our growing team. Duties include vacuuming, mopping, dusting, sanitising kitchen/bathroom areas..."
            className="w-full border rounded-md p-2 border-gray-300"
          />
          {errors.overview && <p className="text-red-500 text-xs mt-1">{errors.overview.message}</p>}
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-700">Responsibilities</h3>
        {responsibilities.fields.map((field, index) => (
          <div key={field.id} className="flex gap-2">
            <input
              {...register(`responsibilities.${index}`)}
              placeholder="e.g. Deep clean residential floors and carpeted areas"
              className="flex-1 border rounded-md p-2 border-gray-300"
            />
            <button
              type="button"
              onClick={() => responsibilities.remove(index)}
              className="px-3 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => responsibilities.append("")}
          className="text-sm text-blue-600 hover:underline font-medium"
        >
          + Add Responsibility
        </button>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-700">Requirements</h3>
        {requirements.fields.map((field, index) => (
          <div key={field.id} className="flex gap-2">
            <input
              {...register(`requirements.${index}`)}
              placeholder="e.g. Current Police Check or Blue Card"
              className="flex-1 border rounded-md p-2 border-gray-300"
            />
            <button
              type="button"
              onClick={() => requirements.remove(index)}
              className="px-3 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => requirements.append("")}
          className="text-sm text-blue-600 hover:underline font-medium"
        >
          + Add Requirement
        </button>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-700">Benefits</h3>
        {benefits.fields.map((field, index) => (
          <div key={field.id} className="flex gap-2">
            <input
              {...register(`benefits.${index}`)}
              placeholder="e.g. Cleaning equipment and chemical supplies provided"
              className="flex-1 border rounded-md p-2 border-gray-300"
            />
            <button
              type="button"
              onClick={() => benefits.remove(index)}
              className="px-3 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => benefits.append("")}
          className="text-sm text-blue-600 hover:underline font-medium"
        >
          + Add Benefit
        </button>
      </section>

      <div className="pt-4 border-t">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          {isSubmitting ? "Creating Job..." : "Publish Job Posting"}
        </button>
      </div>
    </form>
  );
}