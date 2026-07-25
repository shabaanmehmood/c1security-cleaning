import { z } from "zod";

export const applicationSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(8, "Phone number is required"),

  resume: z
    .custom<File>((val) => val instanceof File, "Resume is required")
    .refine((file) => file?.type === "application/pdf", {
      message: "Only PDF files are allowed",
    })
    .refine((file) => file?.size <= 5 * 1024 * 1024, {
      message: "Maximum file size is 5MB",
    }),

  addressInformation: z.object({
    addressLine1: z.string().min(3, "Address is required"),
    addressLine2: z.string().optional(),
    city: z.string().min(2, "City is required"),
    state: z.string().min(2, "State is required"),
    postcode: z.string().min(3, "Postcode is required"),
    country: z.string().min(2, "Country is required"),
  }),

  compliance: z.object({
    compliance1: z.string().min(1, "This field is required"),
    compliance2: z.string().min(1, "This field is required"),
    compliance3: z.string().min(1, "This field is required"),
    compliance4: z.string().min(1, "This field is required"),
    compliance5: z.string().min(1, "This field is required"),
  }),

  otherInformation: z.object({
    coverLetter: z.string().optional(),
    experience: z.string().optional(),
    availability: z.string().optional(),
  }),
});

export const applicationPayloadSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name is required")
    .max(50),

  lastName: z
    .string()
    .min(2, "Last name is required")
    .max(50),

  email: z
    .email("Invalid email address"),

  phoneNumber: z
    .string()
    .min(8, "Phone number is required")
    .max(20),

  addressInformation: z.object({
    addressLine1: z
      .string()
      .min(3, "Address is required"),

    addressLine2: z
      .string()
      .optional(),

    city: z
      .string()
      .min(2, "City is required"),

    state: z
      .string()
      .min(2, "State is required"),

    postcode: z
      .string()
      .min(3, "Postcode is required"),

    country: z
      .string()
      .min(2, "Country is required"),
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

  resumeUrl: z
    .string()
    .url("Invalid resume URL"),

  resumePath: z
    .string()
    .min(1, "Resume path is required"),
});

export type ApplicationPayload = z.infer<
  typeof applicationPayloadSchema
>;
export type ApplicationFormValues = z.infer<typeof applicationSchema>;