import { useState } from "react";

export function useFormSubmit() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formKey, setFormKey] = useState(0);

  async function submit() {
    setSuccess(false);

    // if (!captchaToken) {
    //   setError("Please verify you're not a robot.");
    //   setLoading(false);
    //   return;
    // }

    setLoading(true);

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
