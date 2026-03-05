import { Input, Select, Textarea } from "./Input";
import Button from "../../../components/ui/Button";
import { useFormSubmit } from "../useFormSubmit";
import {
  COMPANY_SIZE_OPTIONS,
  COUNTRIES_OPTIONS,
  FormSchema,
  PRODUCTS_OPTIONS,
  type FormKeys,
  type TFormData,
} from "../schema";
import { useForm } from "../useForm";
import { useState } from "react";

export default function ContactForm() {
  const {
    formData,
    errors,
    errorsCount,
    setErrors,
    setFieldValue,
    setFieldError,
  } = useForm();
  const { submitting, error, success, formKey, submit } = useFormSubmit();
  const [triedSubmitting, setTriedSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTriedSubmitting(true);

    const validationResult = FormSchema.safeParse(formData);
    if (validationResult.success) {
      submit(validationResult.data as TFormData);
    } else {
      const errs = validationResult.error.flatten().fieldErrors;

      Object.keys(errs).forEach((key) => {
        const messages = errs[key as FormKeys];

        if (messages?.length) {
          setErrors((prev) => ({ ...prev, [key]: messages[0] }));
        }
      });
    }
  };

  return (
    <div className="w-full">
      <div className="relative">
        <div
          className={
            "absolute top-0 left-1/2 z-0 -translate-x-1/2 translate-y-full scale-x-400 scale-y-600 opacity-70 max-sm:min-w-[250px] sm:translate-y-8/10 sm:scale-y-500 sm:-rotate-45"
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
      </div>

      <form
        key={formKey}
        onSubmit={handleSubmit}
        id="contact"
        className="lg-rounded relative z-2 ms-auto flex w-full max-w-[674px] flex-col items-center justify-center gap-14 bg-white md:bg-white/50 p-6 backdrop-blur-md sm:px-12 sm:py-10"
      >
        <div className="text-18 flex w-full max-w-[600px] flex-col gap-5 sm:gap-6">
          {success && (
            <p className="self-start rounded-sm bg-green-300 px-3 py-1 text-base text-black">
              Sent successfully!
            </p>
          )}
          {error && <p className="text-sm bg-red-300 px-3 py-1 rounded-sm self-start">{error}</p>}

          {/* full name */}
          <div className="row">
            <Input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First name"
              required
              maxLength={FormSchema.shape.first_name.maxLength || undefined}
              minLength={FormSchema.shape.first_name.minLength || undefined}
              value={formData["first_name"]}
              setValue={setFieldValue}
              error={triedSubmitting ? errors["first_name"] : undefined}
              setError={triedSubmitting ? setFieldError : undefined}
              disabled={success}
            />

            <Input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Last name"
              required
              maxLength={FormSchema.shape.last_name.maxLength || undefined}
              minLength={FormSchema.shape.last_name.minLength || undefined}
              value={formData["last_name"]}
              setValue={setFieldValue}
              error={triedSubmitting ? errors["last_name"] : undefined}
              setError={triedSubmitting ? setFieldError : undefined}
              disabled={success}
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
              minLength={FormSchema.shape.business_email.minLength || undefined}
              value={formData["business_email"]}
              setValue={setFieldValue}
              error={triedSubmitting ? errors["business_email"] : undefined}
              setError={triedSubmitting ? setFieldError : undefined}
              disabled={success}
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
              maxLength={FormSchema.shape.job_title.maxLength || undefined}
              minLength={FormSchema.shape.job_title.minLength || undefined}
              value={formData["job_title"]}
              setValue={setFieldValue}
              error={triedSubmitting ? errors["job_title"] : undefined}
              setError={triedSubmitting ? setFieldError : undefined}
              disabled={success}
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
              value={formData["country"]}
              setValue={setFieldValue}
              error={triedSubmitting ? errors["country"] : undefined}
              setError={triedSubmitting ? setFieldError : undefined}
              disabled={success}
            />
            <Input
              type="tel"
              name="phone_number"
              id="phone_number"
              placeholder="Phone number (optional)"
              value={formData["phone_number"]}
              setValue={setFieldValue}
              error={triedSubmitting ? errors["phone_number"] : undefined}
              setError={triedSubmitting ? setFieldError : undefined}
              disabled={success}
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
              value={formData["company_size"]}
              setValue={setFieldValue}
              error={triedSubmitting ? errors["company_size"] : undefined}
              setError={triedSubmitting ? setFieldError : undefined}
              disabled={success}
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
              value={formData["product"]}
              setValue={setFieldValue}
              error={triedSubmitting ? errors["product"] : undefined}
              setError={triedSubmitting ? setFieldError : undefined}
              disabled={success}
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
              minLength={FormSchema.shape.plan_of_use.minLength || undefined}
              maxLength={FormSchema.shape.plan_of_use.maxLength || undefined}
              value={formData["plan_of_use"]}
              setValue={setFieldValue}
              error={triedSubmitting ? errors["plan_of_use"] : undefined}
              setError={triedSubmitting ? setFieldError : undefined}
              disabled={success}
            />
          </div>

          <div className="row">
            <label className="flex items-start gap-3">
              <input
                id="consent_marketing"
                name="consent_marketing"
                onChange={(e) =>
                  setFieldValue(
                    "consent_marketing",
                    e.target.checked ? "on" : undefined
                  )
                }
                type="checkbox"
                className="peer sr-only"
                disabled={success}
              />
              <span className="h-4 w-4 flex-none translate-y-1 rounded-[1px] border border-[#001959] stroke-transparent peer-checked:bg-[#001959] peer-checked:stroke-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.08521 8.57872L6.88156 10.8936L11.915 5.10638"
                    strokeWidth="1.3"
                    className="origin-center scale-120"
                  />
                </svg>
              </span>
              <span className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Receive product updates, news, and event invitations from
                Gaiant®.{" "}
                <span className="whitespace-nowrap">Unsubscribe anytime.</span>
              </span>
            </label>
          </div>

          <div className="flexx hidden justify-start">
            {/* <ReCAPTCHA
            ref={captchaRef}
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY!}
            onChange={(token: string) => setCaptchaToken(token)}
            onExpired={() => setCaptchaToken(null)}
            /> */}
          </div>

          {/* submit */}
          <div className="flex flex-col items-start gap-4">
            {!success && (
              <Button
                disabled={submitting || errorsCount > 0}
                variant={"black"}
                className="flex-none"
                type="submit"
                size="md"
              >
                {submitting ? "Sending..." : "Submit"}
              </Button>
            )}

            
          </div>
        </div>
      </form>
    </div>
  );
}
