import { useState, type RefObject } from "react";
import type { TFormData } from "./schema";

type UseFormSubmitProps = {
  headlineInputRef: RefObject<HTMLInputElement | null>;
};

export function useFormSubmit({ headlineInputRef }: UseFormSubmitProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const getFieldValue = (value: unknown): string => {
    if (typeof value !== "string") return "";
    return value.trim();
  };

  const buildHeadline = (formData: TFormData): string => {
    const country = getFieldValue(formData.country);
    const planOfUse = getFieldValue(formData.plan_of_use);
    const marketingConsent =
      getFieldValue(formData.consent_marketing) === "on" ? "yes" : "no";

    return [
      `Country: ${country || "-"}`,
      `Plan of use: ${planOfUse || "-"}`,
      `Marketing consent: ${marketingConsent}`,
    ].join(" | ");
  };

  const syncHeadlineInput = (headline: string) => {
    if (!headlineInputRef.current) return;
    headlineInputRef.current.value = headline;
  };

  async function submit(formData: TFormData) {
    setSuccess(false);

    // if (!captchaToken) {
    //   setError("Please verify you're not a robot.");
    //   setLoading(false);
    //   return;
    // }

    setLoading(true);
    const headline = buildHeadline(formData);
    syncHeadlineInput(headline);

    // Apollo listens for the form submit event itself. We only mark
    // success/reset state in the UI and do not send data to a backend.
    console.log("headline", headline);
    console.log("headlineInputRef.current", headlineInputRef.current);
    setSuccess(true);
    setFormKey((prev) => prev + 1);
    setLoading(false);
  }

  return {
    submitting: loading,
    success,
    formKey,
    submit,
  };
}
