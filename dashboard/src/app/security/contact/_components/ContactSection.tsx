
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
import {
  ShieldCheck,
  Radar,
  KeyRound,
  Building2,
  PartyPopper,
  Zap,
  LucideIcon,
} from "lucide-react";

import { Button } from "../../_components/ui/button";
import { Input } from "../../_components/ui/input";
import { Label } from "../../_components/ui/label";
import { Textarea } from "../../_components/ui/textarea";
import TurnstileCaptcha from "@/app/_components/captcha";
import api from "@/utils/axois";
import axios from "axios";
import api2 from "@/utils/formapi";

interface ServiceCategory {
  title: string;
  icon: LucideIcon;
  tags: string[];
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "Site & Asset Security",
    icon: ShieldCheck,
    tags: [
      "Asset Protection",
      "Construction Site Security",
      "Industrial Security",
      "Warehouse Security",
      "Vacant Property Security",
    ],
  },
  {
    title: "Mobile Security",
    icon: Radar,
    tags: [
      "Mobile Patrols",
      "Random Patrols",
      "Lock-Up & Unlock",
      "Alarm Response",
    ],
  },
  {
    title: "Access & Gatehouse",
    icon: KeyRound,
    tags: [
      "Gatehouse Security",
      "Access Control",
      "Visitor Management",
      "Vehicle & Contractor Management",
    ],
  },
  {
    title: "Commercial Security",
    icon: Building2,
    tags: [
      "Corporate Security",
      "Retail Security",
      "Concierge Security",
      "CCTV Monitoring",
    ],
  },
  {
    title: "Event & Crowd Security",
    icon: PartyPopper,
    tags: [
      "Event Security",
      "Crowd Control",
      "Entry Management",
      "VIP & Back-of-House Security",
    ],
  },
  {
    title: "Flexible Security",
    icon: Zap,
    tags: [
      "Ad Hoc Security",
      "Emergency Security",
      "Short-Notice Security",
      "Temporary Security Coverage",
    ],
  },
];

const contactSchema = z.object({
  firstname: z.string().min(2, "First name is required"),
  lastname: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number is too short")
    .max(15, "Phone number is too long"),
  serviceCategory: z.string().min(1, "Please select a service category"),
  specificService: z.string().optional(),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(5, "Message is too short"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaWidgetKey, setCaptchaWidgetKey] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      serviceCategory: "",
      specificService: "",
      subject: "",
      message: "",
    },
  });

  // Watch the selected category to display its specific services.
  const selectedCategoryTitle = watch("serviceCategory");

  const selectedCategory = SERVICE_CATEGORIES.find(
    (category) => category.title === selectedCategoryTitle
  );

  const onSubmit = async (data: ContactFormValues) => {
    if (!captchaToken) {
      alert("Please complete CAPTCHA verification.");
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
         service: data.serviceCategory ?? "",
        subServices: data.specificService??"",
        firstName: data.firstname ?? "",
        lastName: data.lastname ?? "",
        companyInstituteName: "",
        streetAddress: "",
        city: "",
        contactNumber: data.phone ?? "",
        email: data.email ?? "",
        description: `${data.subject} - ${data.message}`,
        captchaToken,
      };

      const response = await api2.post("/api/v1/web", payload);

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

      // Require a new CAPTCHA token for the next submission.
      setCaptchaToken("");
      setCaptchaWidgetKey((previous) => previous + 1);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-28">
      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex justify-center">
            <FaShieldAlt className="text-5xl text-blue-700" />
          </div>

          <h2 className="o-outfit text-4xl font-semibold text-blue-950 sm:text-5xl">
            Contact <span className="text-blue-700">Control-1 Security</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Have questions about our new{" "}
            <span className="font-semibold text-blue-700">
              Security Services
            </span>
            ? Whether you need assistance or have any inquiries, we are here to
            help.
          </p>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-2">
          {/* Left information section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-100 bg-white p-10 shadow-lg"
          >
            <h3 className="o-outfit mb-6 text-2xl font-semibold text-blue-950">
              Get in Touch
            </h3>

            <p className="mb-8 leading-relaxed text-gray-600">
              Fill out the form or reach out through the details below. We will
              respond promptly to help you get started with our security
              management solutions.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="o-outfit text-xl font-semibold text-blue-700" />
                <span>
                  <strong>Phone:</strong> +61 487 190 645
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="o-outfit text-xl font-semibold text-blue-700" />
                <span>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@c1services.com.au"
                    className="text-blue-600 underline"
                  >
                    info@c1services.com.au
                  </a>
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="o-outfit text-xl font-semibold text-blue-700" />
                <span>
                  <strong>Address:</strong> 10 Sanur street, Marsden 4132,
                  Queensland, Australia
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Right contact form */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-blue-100 bg-white p-10 shadow-lg"
          >
            <div className="mb-6 flex gap-4">
              <div className="w-1/2">
                <Label className="o-outfit mb-2">First Name</Label>
                <Input
                  placeholder="Enter Your First Name"
                  {...register("firstname")}
                />
                {errors.firstname && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.firstname.message}
                  </p>
                )}
              </div>

              <div className="w-1/2">
                <Label className="o-outfit mb-2">Last Name</Label>
                <Input
                  placeholder="Enter Your Last Name"
                  {...register("lastname")}
                />
                {errors.lastname && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.lastname.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <Label className="o-outfit mb-2">Email</Label>
              <Input
                type="email"
                placeholder="example@gmail.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <Label className="o-outfit mb-2">Phone</Label>
              <Input
                type="tel"
                placeholder="+61 487 190 645"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Service category */}
            <div className="mb-6">
              <Label className="o-outfit mb-2">Service Category</Label>

              <select
                {...register("serviceCategory", {
                  onChange: () => {
                    // Clear the old sub-service when category changes.
                    // react-hook-form still receives the change event.
                  },
                })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Select a Category...</option>

                {SERVICE_CATEGORIES.map((category) => (
                  <option key={category.title} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>

              {errors.serviceCategory && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.serviceCategory.message}
                </p>
              )}
            </div>

            {/* Specific service */}
            {selectedCategory && (
              <div className="mb-6">
                <Label className="o-outfit mb-2">
                  Specific Service (Optional)
                </Label>

                <select
                  {...register("specificService")}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select a specific service...</option>

                  {selectedCategory.tags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="mb-6">
              <Label className="o-outfit mb-2">Subject</Label>
              <Input placeholder="Need Support" {...register("subject")} />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <Label className="o-outfit mb-2">Message</Label>
              <Textarea
                placeholder="Write your message here..."
                {...register("message")}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Required Cloudflare Turnstile CAPTCHA */}
            <div className="mb-6">
              <Label className="o-outfit mb-2">
                Security Verification{" "}
                <span className="text-red-500">*</span>
              </Label>

              <TurnstileCaptcha
                key={captchaWidgetKey}
                onVerify={setCaptchaToken}
              />

              {!captchaToken && (
                <p className="mt-2 text-sm text-gray-500">
                  Please complete CAPTCHA before submitting.
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading || !captchaToken}
              className="o-outfit w-full transform py-6 text-lg transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
