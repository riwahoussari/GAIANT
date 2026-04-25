import { useCallback, useState } from "react";
import type { FormKeys, TFormData } from "./schema";

export function useForm() {
  const [formData, setFormData] = useState<TFormData>({
    first_name: "",
    last_name: "",
    business_email: "",
    job_title: "",
    country: "",
    phone_number: "",
    company_size: "",
    plan_of_use: "",
    consent_marketing: undefined,
  });
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const errorsCount = Object.values(errors).filter((e) => e != null).length;

  const setFieldValue = useCallback((id: FormKeys, value: unknown) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  }, []);

  const setFieldError = useCallback((id: FormKeys, error: string | null) => {
    setErrors((prev) => ({ ...prev, [id]: error }));
  }, []);

  return {
    formData,
    errors,
    errorsCount,
    setErrors,
    setFieldValue,
    setFieldError,
  };
}
