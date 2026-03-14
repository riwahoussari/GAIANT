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

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
] as const;

export const COUNTRIES_OPTIONS: TOption[] = COUNTRIES.map((c) => ({
  value: c,
  text: c,
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
    .min(1, "Country/Region is required")
    .refine((val) => COUNTRIES.includes(val as any), {
      message: "Invalid country",
    }),
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
