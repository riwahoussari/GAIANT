import { z } from "zod";

export type TOption = { value: string; text: string };

const COMPANY_SIZES: string[] = [
  "1-5",
  "25-50",
  "50-100",
  "100-250",
  "250-500",
  "500-1,000",
  "1,000-5,000",
  "5,000-10,000",
  "10,000+",
] as const;

export const COMPANY_SIZE_OPTIONS: TOption[] = COMPANY_SIZES.map((size) => ({
  text: size,
  value: size,
}));

export const PRODUCTS_OPTIONS: TOption[] = [
  {
    text: "archē",
    value: "arche",
  },
  {
    text: "horion",
    value: "horion",
  },
] as const;

export const FormSchema = z.object({
  first_name: z
    .string({ error: "First name is required" })
    .trim()
    .min(1, "First name is required")
    .max(70, "First name cannot be longer than 70 characters"),
  last_name: z
    .string({ error: "Last name is required" })
    .trim()
    .min(1, "Last name is required")
    .max(70, "Last name cannot be longer than 70 characters"),
  business_email: z
    .string("Business email is required")
    .trim()
    .min(1, "Business email is required")
    .email("Invalid email"),
  job_title: z
    .string({ error: "Job title is required" })
    .trim()
    .min(1, "Job title is required")
    .max(140, "Job title cannot be longer than 140 characters"),
  country: z
    .string("Country/Region is required")
    .trim()
    .min(2, "Minimum length is 2 characters"),
  phone_number: z
    .string()
    .trim()
    .refine(
      (val) => val === "" || /^\+?[0-9\s\-()]{7,20}$/.test(val),
      "Invalid phone number"
    )
    .optional(),
  company_size: z
    .string("Company size is required")
    .trim()
    .min(1, "Company size is required")
    .refine((val) => COMPANY_SIZES.includes(val as any), {
      message: "Invalid company size",
    }),
  product: z
    .string()
    .trim()
    .refine(
      (val) => PRODUCTS_OPTIONS.map((prod) => prod.value).includes(val as any),
      {
        message: "Invalid product",
      }
    )
    .optional(),
  plan_of_use: z
    .string("Message is required")
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message cannot be longer than 2000 characters"),
  consent_marketing: z
    .string()
    .trim()
    .refine((val) => ["on"].includes(val as any), {
      message: "Invalid consent value",
    })
    .nullish()
    .optional(),
});

export type FormKeys = keyof typeof FormSchema.shape;
export type TFormData = Record<FormKeys, unknown>;
