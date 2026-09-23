"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Button } from "@/app/security/_components/ui/button";
import { Input } from "@/app/security/_components/ui/input";
import { Label } from "@/app/security/_components/ui/label";
import { Textarea } from "@/app/security/_components/ui/textarea";
import api from "@/utils/axois";
import axios from "axios";

const contactSchema = z.object({
  firstname: z.string().min(2, "First name is required"),
  lastname: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number is too short")
    .max(15, "Phone number is too long"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(5, "Message is too short"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsLoading(true);

    try {
      const response = await api.post("/api/Email/nightaudit", data);

      alert(
        response.data?.message ||
          "Quote request sent successfully. We'll get back to you shortly."
      );

      reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(
          error.response?.data?.message ||
            "Something went wrong. Please try again."
        );
      } else {
        alert("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-28">
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#C9A24B]/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50"
          >
            <FaShieldAlt className="text-2xl text-blue-700" />
          </motion.div>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            Get in touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Contact{" "}
            <span className="text-blue-700">Control-1 Services</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Have questions about our new{" "}
            <span className="font-semibold text-blue-700">
              Night Audit Services
            </span>
            ? Whether you need assistance or have any inquiries, we are here
            to help.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 70 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mt-8 h-1 rounded-full bg-blue-700"
          />
        </motion.div>

        {/* CONTENT */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10"
          >
            {/* Card decoration */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100/70 blur-2xl" />

            <div className="relative">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white">
                <FaShieldAlt className="text-xl" />
              </div>

              <h3 className="text-2xl font-bold text-slate-950">
                Get in Touch
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Fill out the form or reach out through the details below. We
                will respond promptly to help you get started with our
                services.
              </p>

              <div className="my-8 h-px bg-slate-200" />

              <div className="space-y-5">
                {/* Phone */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <FaPhoneAlt className="text-blue-700" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Phone
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      +61 487 190 645
                    </p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <FaEnvelope className="text-blue-700" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Email
                    </p>

                    <a
                      href="mailto:info@c1services.com.au"
                      className="mt-1 block text-sm text-blue-700 transition-colors hover:text-blue-900"
                    >
                      info@c1services.com.au
                    </a>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <FaMapMarkerAlt className="text-blue-700" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Address
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      10 Sanur Street, Marsden 4132
                      <br />
                      Queensland, Australia
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50 sm:p-10"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-950">
                Send us a message
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Complete the form below and our team will get back to you.
              </p>
            </div>

            {/* First + Last Name */}
            <div className="mb-6 grid gap-5 sm:grid-cols-2">
              <div>
                <Label className="mb-2 block text-sm font-medium text-slate-700">
                  First Name
                </Label>

                <Input
                  placeholder="Enter your first name"
                  {...register("firstname")}
                  className="h-12 rounded-xl border-slate-200 bg-slate-50 transition-all focus:border-blue-600 focus:bg-white focus:ring-blue-600"
                />

                {errors.firstname && (
                  <p className="mt-1.5 text-sm text-red-500">
                    {errors.firstname.message}
                  </p>
                )}
              </div>

              <div>
                <Label className="mb-2 block text-sm font-medium text-slate-700">
                  Last Name
                </Label>

                <Input
                  placeholder="Enter your last name"
                  {...register("lastname")}
                  className="h-12 rounded-xl border-slate-200 bg-slate-50 transition-all focus:border-blue-600 focus:bg-white focus:ring-blue-600"
                />

                {errors.lastname && (
                  <p className="mt-1.5 text-sm text-red-500">
                    {errors.lastname.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <Label className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </Label>

              <Input
                type="email"
                placeholder="example@gmail.com"
                {...register("email")}
                className="h-12 rounded-xl border-slate-200 bg-slate-50 transition-all focus:border-blue-600 focus:bg-white focus:ring-blue-600"
              />

              {errors.email && (
                <p className="mt-1.5 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="mb-6">
              <Label className="mb-2 block text-sm font-medium text-slate-700">
                Phone
              </Label>

              <Input
                type="tel"
                placeholder="+61 487 190 645"
                {...register("phone")}
                className="h-12 rounded-xl border-slate-200 bg-slate-50 transition-all focus:border-blue-600 focus:bg-white focus:ring-blue-600"
              />

              {errors.phone && (
                <p className="mt-1.5 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Subject */}
            <div className="mb-6">
              <Label className="mb-2 block text-sm font-medium text-slate-700">
                Subject
              </Label>

              <Input
                placeholder="How can we help?"
                {...register("subject")}
                className="h-12 rounded-xl border-slate-200 bg-slate-50 transition-all focus:border-blue-600 focus:bg-white focus:ring-blue-600"
              />

              {errors.subject && (
                <p className="mt-1.5 text-sm text-red-500">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="mb-7">
              <Label className="mb-2 block text-sm font-medium text-slate-700">
                Message
              </Label>

              <Textarea
                placeholder="Write your message here..."
                {...register("message")}
                className="min-h-[140px] resize-none rounded-xl border-slate-200 bg-slate-50 transition-all focus:border-blue-600 focus:bg-white focus:ring-blue-600"
              />

              {errors.message && (
                <p className="mt-1.5 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                disabled={isLoading}
                className="h-13 w-full rounded-xl bg-blue-700 text-base font-semibold text-white shadow-lg shadow-blue-700/20 transition-all hover:bg-blue-800 hover:shadow-blue-700/30 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
