import { useState } from "react";
import { Input, Select, Textarea, type TOption } from "./Input";
import Button from "../../../components/ui/Button";
import { COUNTRIES } from "../../../lib/data";

const COMPANY_SIZE_OPTIONS: TOption[] = [
  {
    value: "1-5",
    text: "1-5",
  },
  {
    value: "25-50",
    text: "25-50",
  },
  {
    value: "50-100",
    text: "50-100",
  },
  {
    value: "100-250",
    text: "100-250",
  },
  {
    value: "250-500",
    text: "250-500",
  },
  {
    value: "500-1,000",
    text: "500-1,000",
  },
  {
    value: "1,000-5,000",
    text: "1,000-5,000",
  },
  {
    value: "5,000-10,000",
    text: "5,000-10,000",
  },
  {
    value: "10,000+",
    text: "10,000+",
  },
];
const PRODUCTS_OPTIONS: TOption[] = [
  {
    text: "archē",
    value: "arche",
  },
  {
    text: "horion (coming soon)",
    value: "",
  },
];
const COUNTRIES_OPTIONS: TOption[] = COUNTRIES.map((c) => ({
  value: c,
  text: c,
}));

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [key, setKey] = useState(0);

  // captcha
  //   const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  //   const captchaRef = useRef<ReCAPTCHA>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // if (!captchaToken) {
    //   setError("Please verify you're not a robot.");
    //   setLoading(false);
    //   return;
    // }

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      ...Object.fromEntries(formData.entries()),
      // captchaToken
    };

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_API!}/api/request-demo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error();

      setSuccess(true);
      setKey(key + 1);
      //   captchaRef.current?.reset();
      //   setCaptchaToken(null);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative w-full">
      <div
        className={
          "absolute top-1/2 left-1/2 z-0 -translate-1/2 scale-x-400 scale-y-600 opacity-70 max-sm:min-w-[250px] sm:scale-y-500 sm:-rotate-45"
        }
      >
        <div className="aspect-square origin-top">
          <img
            src="/gradients/circle-news/1328.avif"
            srcSet="/gradients/circle-news/1328.avif 1328w, /gradients/circle-news/1024.avif 1024w, /gradients/circle-news/810.avif 810w, /gradients/circle-news/640.avif 640w"
            className="h-full w-full object-contain"
            sizes="(max-width: 768px) 185vw, (max-width: 1024px) 165vw, (max-width: 1280px) 170vw, 150vw"
          />
        </div>
      </div>

      <form
        key={key}
        onSubmit={handleSubmit}
        id="contact"
        className="lg-rounded relative z-1 ms-auto flex w-full max-w-[674px] flex-col items-center justify-center gap-14 bg-white/50 p-6 backdrop-blur-md sm:px-12 sm:py-10"
      >
        <div className="text-18 flex w-full max-w-[600px] flex-col gap-5 sm:gap-6">
          {/* full name */}
          <div className="row">
            <Input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First name"
              required
            />

            <Input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Last name"
              required
            />
          </div>

          {/* email */}
          <div className="row">
            <Input
              type="email"
              name="business_email"
              id="business_email"
              placeholder="Business email"
              required
            />
          </div>

          {/* job title */}
          <div className="row">
            <Input
              type="text"
              name="job_title"
              id="job_title"
              placeholder="Job title"
              required
            />
          </div>

          {/* country - phone */}
          <div className="row">
            <Select
              id="country"
              name="country"
              label="Country/Region"
              options={COUNTRIES_OPTIONS}
              required
            />
            <Input
              type="tel"
              name="phone_number"
              id="phone_number"
              placeholder="Phone number (optional)"
            />
          </div>

          {/* company_size */}
          <div className="row">
            <Select
              id="company_size"
              name="company_size"
              required
              options={COMPANY_SIZE_OPTIONS}
              label="Company size (no. of employees)"
            />
          </div>

          {/* product of interest  */}
          <div className="row">
            <Select
              id="product"
              name="product"
              required
              options={PRODUCTS_OPTIONS}
              label="Product of interest"
            />
          </div>

          {/* message */}
          <div className="row">
            <Textarea
              name="plan_of_use"
              id="plan_of_use"
              required
              rows={3}
              placeholder="How do you plan to use AI?"
            />
          </div>

          <div className="row">
            <label className="flex items-start gap-3">
              <input type="checkbox" className="peer sr-only" />
              <span className="h-4 w-4 flex-none translate-y-1 rounded-[1px] border border-[#001959] stroke-transparent peer-checked:bg-[#001959] peer-checked:stroke-white">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.08521 8.57872L6.88156 10.8936L11.915 5.10638"
                    stroke-width="1.3"
                    className="origin-center scale-120"
                  />
                </svg>
              </span>
              <span>
                Receive product updates, news, and event invitations from
                Gaiant®.{" "}
                <span className="whitespace-nowrap">Unsubscribe anytime.</span>
              </span>
            </label>
          </div>

          <div className="flex hidden justify-start">
            {/* <ReCAPTCHA
            ref={captchaRef}
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY!}
            onChange={(token: string) => setCaptchaToken(token)}
            onExpired={() => setCaptchaToken(null)}
            /> */}
          </div>

          {/* submit */}
          <div className="flex flex-col items-start gap-4">
            <Button
              variant={"black"}
              className="flex-none"
              type="submit"
              size="md"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </Button>

            {error && <p className="w-full text-sm text-red-600">{error}</p>}
            {success && (
              <p className="w-full text-sm text-green-600">
                Sent successfully!
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}