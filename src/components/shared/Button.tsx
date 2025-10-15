import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import ArrowSvg from "./ArrowSvg";

const buttonVariants = cva(
  "inline-flex items-center justify-between rounded-full font-bold  hover:opacity-70 duration-200 cursor-pointer ease-in-out overflow-clip",
  {
    variants: {
      variant: {
        primary: " text-white bg-button backdrop-blur-3xl",
        secondary: "bg-white/50 text-teal backdrop-blur-3xl",
        black: "bg-black text-white",
        ghost: "bg-transparent "
      },
      size: {
        md: "px-5 py-3 text-sm",
        lg: "px-7 py-4 text-[19px]",
      },
      arrow: {
        none: "",
        normal: "gap-[8px]",
        spaced: "gap-[40px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      arrow: "none",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  variant,
  size,
  arrow,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, arrow }), className)}
      {...props}
    >
      <span>{props.children}</span>
      {arrow && arrow !== "none" && (
        <ArrowSvg
          color={variant == "secondary" ? "var(--color-teal)" : "white"}
          className={
            size == "lg" ? "stroke-[1.5px] w-[20px] " : "stroke-[2px] w-[14px]"
          }
        />
      )}
    </button>
  );
}
