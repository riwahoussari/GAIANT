import { ChevronDown } from "lucide-react";
import {
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { FormSchema, type FormKeys, type TOption } from "../schema";

type FieldProps = {
  id: FormKeys;
  value: any;
  setValue: (id: FormKeys, value: any) => void;
  error?: string | null;
  setError?: (id: FormKeys, error: string | null) => void;
};
type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value">;

export function Input({
  id,
  value,
  setValue,
  error,
  setError,
  ...props
}: FieldProps & InputProps) {
  const schema = FormSchema.pick({ [id]: true } as Record<typeof id, true>);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(id, e.target.value);

    // check error
    const result = schema.safeParse({ [id]: e.target.value });
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors[id];
      const err = errors ? errors[0] : undefined;
      setError && setError(id, err || null);
    } else {
      setError && setError(id, null);
    }
  };

  return (
    <div className="relative w-full">
      <input
        {...props}
        id={id}
        value={value}
        onChange={handleChange}
        placeholder=""
        className={`peer ` + props.className + (error && " border-red-800!")}
      />

      <label
        htmlFor={id}
        className="text-16-5 pointer-events-none absolute top-1/2 left-[11px] origin-left -translate-y-1/2 cursor-text px-1 duration-200 ease-in-out peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:scale-80 peer-focus:top-0 peer-focus:scale-80 xs:left-[13px]"
      >
        <span className="relative z-1">{props.placeholder}</span>
        <div className="absolute top-1/2 left-0 z-0 h-[2px] w-full -translate-y-[0.5px] bg-white"></div>
      </label>
      {error && (
        <span className="absolute -bottom-0 left-[11px] z-3 hidden translate-y-1/2 rounded-sm bg-red-200 px-2 py-1 text-xs text-black peer-focus:block xs:left-[13px]">
          {error}
        </span>
      )}
    </div>
  );
}

type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "value">;
export function Select({
  label,
  options,
  id,
  value,
  setValue,
  error,
  setError,
  ...props
}: {
  label: string;
  options: TOption[];
} & FieldProps &
  SelectProps) {
  const [focus, setFocus] = useState(false);

  const schema = FormSchema.pick({ [id]: true } as Record<typeof id, true>);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(id, e.target.value);

    // check error
    const result = schema.safeParse({ [id]: e.target.value });
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors[id];
      const err = errors ? errors[0] : undefined;
      setError && setError(id, err || null);
    } else {
      setError && setError(id, null);
    }
  };

  return (
    <div className="relative w-full">
      <select
        {...props}
        value={value}
        onChange={handleChange}
        className={
          `peer relative appearance-none ${
            value === "" ? "text-light-black/50" : "text-black"
          }` + (error && " border-red-800!")
        }
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      >
        <option value="">{focus || value !== "" ? "Select..." : ""}</option>
        {options.map((option, i) => (
          <option value={option.value} key={i} disabled={option.value === ""}>
            {option.text}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute top-1/2 right-[15px] z-1 aspect-square w-5.5 origin-center -translate-y-1/2 text-black duration-200 ease-in-out peer-focus:rotate-180 xs:right-[17px]">
        <ChevronDown className="h-full w-full" />
      </div>

      <label
        htmlFor={id}
        className={
          "text-16-5 pointer-events-none absolute left-[11px] origin-left -translate-y-1/2 cursor-text px-1 duration-200 ease-in-out peer-focus:top-0 peer-focus:scale-80 xs:left-[13px] " +
          (value !== "" ? " top-0 scale-80" : " top-1/2")
        }
      >
        <span className="relative z-1">{label}</span>
        <div className="absolute top-1/2 left-0 z-0 h-[2px] w-full -translate-y-[0.5px] bg-white"></div>
      </label>

      {error && (
        <span className="absolute -bottom-0 left-[11px] z-3 hidden translate-y-1/2 rounded-sm bg-red-200 px-2 py-1 text-xs text-black peer-focus:block xs:left-[13px]">
          {error}
        </span>
      )}
    </div>
  );
}

type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "value">;
export function Textarea({
  id,
  value,
  setValue,
  error,
  setError,
  ...props
}: FieldProps & TextareaProps) {
  const schema = FormSchema.pick({ [id]: true } as Record<typeof id, true>);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(id, e.target.value);

    // check error
    const result = schema.safeParse({ [id]: e.target.value });
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors[id];
      const err = errors ? errors[0] : undefined;
      setError && setError(id, err || null);
    } else {
      setError && setError(id, null);
    }
  };

  return (
    <div className="relative w-full">
      <textarea
        {...props}
        id={id}
        value={value}
        onChange={handleChange}
        placeholder=""
        className={`peer ` + props.className + (error && " border-red-800!")}
      />

      <label
        htmlFor={id}
        className="text-16-5 pointer-events-none absolute top-0 left-[11px] origin-left translate-y-[13px] cursor-text px-1 duration-200 ease-in-out peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:scale-80 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-80 xs:left-[13px] xs:translate-y-[15px]"
      >
        <span className="relative z-1">{props.placeholder}</span>
        <div className="absolute top-1/2 left-0 z-0 h-[2px] w-full -translate-y-[0.5px] bg-white"></div>
      </label>

      {error && (
        <span className="absolute -bottom-0 left-[11px] z-3 hidden translate-y-1/2 rounded-sm bg-red-200 px-2 py-1 text-xs text-black peer-focus:block xs:left-[13px]">
          {error}
        </span>
      )}
    </div>
  );
}
