import { useState } from "react";
import type { TFormData } from "./schema";

export function useFormSubmit() {
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
    const form = document.getElementById("contact-form");
    if (!(form instanceof HTMLFormElement)) return;

    let headlineInput = form.querySelector(
      'input[name="headline"]'
    ) as HTMLInputElement | null;

    if (!headlineInput) {
      headlineInput = document.createElement("input");
      headlineInput.type = "hidden";
      headlineInput.name = "headline";
      form.appendChild(headlineInput);
    }

    headlineInput.value = headline;
  };

  async function submit(formData: TFormData) {
    setSuccess(false);

    // if (!captchaToken) {
    //   setError("Please verify you're not a robot.");
    //   setLoading(false);
    //   return;
    // }

    setLoading(true);
    syncHeadlineInput(buildHeadline(formData));

    // Apollo listens for the form submit event itself. We only mark
    // success/reset state in the UI and do not send data to a backend.
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
