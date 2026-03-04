import { ChevronDown } from "lucide-react";
import {
  useState,
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";

export type TOption = { value: string; text: string };

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative w-full">
      <input {...props} placeholder="" className={`peer ` + props.className} />

      <label
        htmlFor={props.id}
        className="text-16-5 pointer-events-none absolute top-1/2 left-[11px] origin-left -translate-y-1/2 cursor-text px-1 duration-200 ease-in-out peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:scale-80 peer-focus:top-0 peer-focus:scale-80 xs:left-[13px]"
      >
        <span className="relative z-1">{props.placeholder}</span>
        <div className="absolute top-1/2 left-0 z-0 h-[2px] w-full -translate-y-[0.5px] bg-white"></div>
      </label>
    </div>
  );
}

export function Select({
  label,
  options,
  ...props
}: {
  label: string;
  options: TOption[];
} & SelectHTMLAttributes<HTMLSelectElement>) {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  return (
    <div className="relative w-full">
      <select
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`peer relative appearance-none ${
          value === "" ? "text-light-black/50" : "text-black"
        }`}
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
        htmlFor={props.id}
        className={
          "text-16-5 pointer-events-none absolute left-[11px] origin-left -translate-y-1/2 cursor-text px-1 duration-200 ease-in-out peer-focus:top-0 peer-focus:scale-80 xs:left-[13px] " +
          (value !== "" ? " top-0 scale-80" : " top-1/2")
        }
      >
        <span className="relative z-1">{label}</span>
        <div className="absolute top-1/2 left-0 z-0 h-[2px] w-full -translate-y-[0.5px] bg-white"></div>
      </label>
    </div>
  );
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="relative w-full">
      <textarea
        {...props}
        placeholder=""
        className={"peer " + props.className}
      />

      <label
        htmlFor={props.id}
        className="text-16-5 pointer-events-none absolute top-0 left-[11px] origin-left translate-y-[13px] cursor-text px-1 duration-200 ease-in-out peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:scale-80 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-80 xs:left-[13px] xs:translate-y-[15px]"
      >
        <span className="relative z-1">{props.placeholder}</span>
        <div className="absolute top-1/2 left-0 z-0 h-[2px] w-full -translate-y-[0.5px] bg-white"></div>
      </label>
    </div>
  );
}
