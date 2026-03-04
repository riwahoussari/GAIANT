import { useState } from "react";
import type { TFormData } from "./schema";

export function useFormSubmit() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [formKey, setFormKey] = useState(0);

  async function submit(formData: TFormData) {
    setError(null);
    setSuccess(false);

    // if (!captchaToken) {
    //   setError("Please verify you're not a robot.");
    //   setLoading(false);
    //   return;
    // }

    setLoading(true);
 
    try {
      const res = await fetch(
        `${import.meta.env.VITE_CONTACT_FORM_ENDPOINT}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error();

      setSuccess(true);
      setFormKey((prev) => prev + 1);
      //   captchaRef.current?.reset();
      //   setCaptchaToken(null);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return {
    submitting: loading,
    error,
    success,
    formKey,
    submit,
  };
}
