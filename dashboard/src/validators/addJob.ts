import { z } from "zod";

export const salarySchema = z.object({
  min: z.number().min(0, "Minimum salary is required"),
  max: z.number().min(0, "Maximum salary is required"),
  currency: z.string().min(1, "Currency is required"),
  period: z.string().min(1, "Salary period is required"),
});

export const companySchema = z.object({
  name: z.string().min(2, "Company name is required"),
  logo: z.string().optional(),
});

export const jobSchema = z.object({
  id: z.string(),

  slug: z
    .string()
    .min(3, "Slug is required")
    .regex(/^[a-z0-9-]+$/, "Only lowercase letters, numbers and hyphens"),

  title: z.string().min(3, "Job title is required"),

  city: z.string().min(2, "City is required"),

  state: z.string().min(2, "State is required"),

  country: z.string().min(2, "Country is required"),

  employmentType: z.string().min(1, "Employment type is required"),

  workplace: z.string().min(1, "Workplace is required"),

  salary: salarySchema,

  company: companySchema,

  postedDate: z.string().optional(),
  expiresAt: z.string().min(1, "Expiration date is required"),

  vacancies: z.number().positive().optional(),

  overview: z.string().min(20, "Overview is too short"),

  responsibilities: z
    .array(z.string().min(1))
    .min(1, "At least one responsibility is required"),

  requirements: z
    .array(z.string().min(1))
    .min(1, "At least one requirement is required"),

  benefits: z
    .array(z.string().min(1))
    .min(1, "At least one benefit is required"),
});

export type JobFormValues = z.infer<typeof jobSchema>;
