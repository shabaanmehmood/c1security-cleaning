import { z } from "zod";

export const services = [
  "Ongoing cleaning",
  "Emergency or relief cleaners",
  "Carpet or floor cleaning",
  "Pressure cleaning",
  "Window cleaning",
  "Warehouse cleaning",
  "Ongoing maintenance",
  "Other specialist cleaning service",
] as const;

export const cities = [
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
] as const;

export const QuoteSchema = z.object({
  service: z.string().min(1, "Please select a service"),

  firstName: z
    .string()
    .min(2, "First name is required")
    .max(50),

  lastName: z
    .string()
    .min(2, "Last name is required")
    .max(50),

  company: z
    .string()
    .max(100)
    .optional()
    .or(z.literal("")),

  address: z
    .string()
    .min(5, "Address is required"),

  city: z.string().min(1, "Please select a city"),

  region: z
    .string()
    .min(2, "Region is required"),

  contactNumber: z
    .string()
    .regex(
      /^[0-9+\-\s()]{8,20}$/,
      "Please enter a valid contact number"
    ),

  email: z.string().email("Invalid email"),

  description: z
    .string()
    .min(10, "Please provide some details")
    .max(1000),
});

export type QuoteFormData = z.infer<typeof QuoteSchema>;