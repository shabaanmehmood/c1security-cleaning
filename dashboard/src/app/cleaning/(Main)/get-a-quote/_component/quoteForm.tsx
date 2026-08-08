"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitQuote } from "@/utils/axois";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";

import {
  QuoteSchema,
  QuoteFormData,
  services,
  cities,
} from "@/validators/quoteFormValidator";

export default function QuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(QuoteSchema),
  });

  async function onSubmit(data: QuoteFormData) {
    try {
      const ress = await submitQuote(data);
      console.log(ress);
      alert("Quote request submitted successfully!");
      reset();
    } catch (error) {
      console.error(error);
      alert("Failed to submit the quote.");
    }
  }

  return (
    <section className="py-20 ">
      <div className="mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white p-10 shadow-2xl">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold">Request a Free Quote</h2>

          <p className="mt-3 text-gray-500">
            Tell us about your cleaning requirements and we'll get back to you
            shortly.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-6 md:grid-cols-2"
        >
          {/* Service */}
          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">Service Required</label>

            <select
              {...register("service")}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            >
              <option value="">Select Service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>

            <p className="mt-1 text-sm text-red-500">
              {errors.service?.message}
            </p>
          </div>

          {/* First Name */}
          <div>
            <label className="mb-2 block font-medium">First Name</label>

            <input
              {...register("firstName")}
              placeholder="John"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            />

            <p className="mt-1 text-sm text-red-500">
              {errors.firstName?.message}
            </p>
          </div>

          {/* Last Name */}
          <div>
            <label className="mb-2 block font-medium">Last Name</label>

            <input
              {...register("lastName")}
              placeholder="Doe"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            />

            <p className="mt-1 text-sm text-red-500">
              {errors.lastName?.message}
            </p>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">
              Company / Institute Name
            </label>

            <input
              {...register("company")}
              placeholder="ABC Cleaning Pty Ltd"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            />

            <p className="mt-1 text-sm text-red-500">
              {errors.company?.message}
            </p>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">Street Address</label>

            <input
              {...register("address")}
              placeholder="Street Address"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            />

            <p className="mt-1 text-sm text-red-500">
              {errors.address?.message}
            </p>
          </div>

          {/* City */}
          <div>
            <label className="mb-2 block font-medium">City</label>

            <select
              {...register("city")}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <p className="mt-1 text-sm text-red-500">{errors.city?.message}</p>
          </div>

          {/* Region */}
          <div>
            <label className="mb-2 block font-medium">Region</label>

            <input
              {...register("region")}
              placeholder="Queensland"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            />

            <p className="mt-1 text-sm text-red-500">
              {errors.region?.message}
            </p>
          </div>

          {/* Contact */}
          <div>
            <label className="mb-2 block font-medium">Contact Number</label>

            <input
              {...register("contactNumber")}
              placeholder="+61 412 345 678"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            />

            <p className="mt-1 text-sm text-red-500">
              {errors.contactNumber?.message}
            </p>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block font-medium">Email</label>

            <input
              type="email"
              {...register("email")}
              placeholder="john@email.com"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            />

            <p className="mt-1 text-sm text-red-500">{errors.email?.message}</p>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">Description</label>

            <textarea
              rows={6}
              {...register("description")}
              placeholder="Tell us about your cleaning requirements..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            />

            <p className="mt-1 text-sm text-red-500">
              {errors.description?.message}
            </p>
          </div>

          {/* Animated Submit Button */}
          <div className="md:col-span-2">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/35 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Request Quote</span>
                  <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}