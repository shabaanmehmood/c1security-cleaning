"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
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

// Type definition for categories
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
    tags: ["Mobile Patrols", "Random Patrols", "Lock-Up & Unlock", "Alarm Response"],
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
    tags: ["Corporate Security", "Retail Security", "Concierge Security", "CCTV Monitoring"],
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  // Watch selected category to reactively populate tags/sub-services
  const selectedCategoryTitle = watch("serviceCategory");
  const selectedCategory = SERVICE_CATEGORIES.find(
    (cat) => cat.title === selectedCategoryTitle
  );

  async function onSubmit(data: ContactFormValues) {
    setIsLoading(true);
    try {
      const response = await fetch("/api/ScurityForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Sending failed");
      }

      alert("Sending succeeded!");
      reset();
    } catch (error) {
      alert("Sending failed");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="relative py-28 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <FaShieldAlt className="text-blue-700 text-5xl" />
          </div>
          <h2 className="text-4xl text-blue-950 sm:text-5xl o-outfit font-semibold">
            Contact <span className="text-blue-700">Control-1 Security</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Have questions about our new{" "}
            <span className="font-semibold text-blue-700">
              Security Services
            </span>
            ? Whether you need assistance or have any inquiries, we are here to
            help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* 🛡 Left Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-10 border border-blue-100"
          >
            <h3 className="text-2xl font-semibold o-outfit mb-6 text-blue-950">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Fill out the form or reach out through the details below. We will
              respond promptly to help you get started with our security
              management solutions.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-700 font-semibold o-outfit text-xl" />
                <span>
                  <strong>Phone:</strong> +61 487 190 645
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-700 text-xl font-semibold o-outfit" />
                <span>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:tac.solutions.inc@gmail.com"
                    className="underline text-blue-600"
                  >
                    tac.solutions.inc@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-700 text-xl font-semibold o-outfit" />
                <span>
                  <strong>Address:</strong> 10 Sanur street marsden 4132
                  Queensland, Australia
                </span>
              </li>
            </ul>
          </motion.div>

          {/* 📩 Right Form Section */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl shadow-lg p-10 border border-blue-100"
          >
            <div className="flex gap-4 mb-6">
              <div className="w-1/2">
                <Label className="mb-2 o-outfit">First Name</Label>
                <Input
                  placeholder="Enter Your First Name"
                  {...register("firstname")}
                />
                {errors.firstname && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstname.message}
                  </p>
                )}
              </div>
              <div className="w-1/2">
                <Label className="mb-2 o-outfit">Last Name</Label>
                <Input
                  placeholder="Enter Your Last Name"
                  {...register("lastname")}
                />
                {errors.lastname && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastname.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <Label className="mb-2 o-outfit">Email</Label>
              <Input
                type="email"
                placeholder="example@gmail.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <Label className="mb-2 o-outfit">Phone</Label>
              <Input
                type="tel"
                placeholder="+61 487 190 645"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* 🏷️ Service Category Selection */}
            <div className="mb-6">
              <Label className="mb-2 o-outfit">Service Category</Label>
              <select
                {...register("serviceCategory")}
                className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select a Category...</option>
                {SERVICE_CATEGORIES.map((cat) => (
                  <option key={cat.title} value={cat.title}>
                    {cat.title}
                  </option>
                ))}
              </select>
              {errors.serviceCategory && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.serviceCategory.message}
                </p>
              )}
            </div>

            {/* 🎯 Specific Service Selection (Populates depending on chosen Category) */}
            {selectedCategory && (
              <div className="mb-6">
                <Label className="mb-2 o-outfit">Specific Service (Optional)</Label>
                <select
                  {...register("specificService")}
                  className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
              <Label className="mb-2 o-outfit">Subject</Label>
              <Input placeholder="Need Support" {...register("subject")} />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <Label className="mb-2 o-outfit">Message</Label>
              <Textarea
                placeholder="Write your message here..."
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-700 hover:bg-blue-800 text-lg py-6 transition-transform o-outfit transform hover:scale-105"
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