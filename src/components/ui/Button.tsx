import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import ArrowSvg from "./ArrowSvg";

const buttonVariants = cva(
  "group inline-flex relative items-center justify-between rounded-full font-bold  hover:opacity-70 duration-200 cursor-pointer ease-in-out overflow-clip",
  {
    variants: {
      variant: {
        primary: " text-white bg-button backdrop-blur-3xl",
        secondary: "bg-white/50 text-dark-green-700 backdrop-blur-3xl",
        black: "bg-black text-white",
        ghost: "bg-transparent ",
      },
      size: {
        sm: "px-5 py-2.5 text-sm ",
        md: "px-5 py-2.5 text-sm",
      },
      arrow: {
        none: "",
        normal: "gap-[8px]",
        back: "gap-4",
        spaced: "gap-[25px] xs:gap-[40px]",
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
  const adjustCentering =
    typeof props.children === "string" && /[qygjp]/.test(props.children);

  return (
    <button
      className={cn(buttonVariants({ variant, size, arrow }), className)}
      {...props}
    >
      <div className="absolute top-1/2 right-0 left-0 z-0 h-0.5 -translate-y-1/2 bg-purple-500/0" />
      {arrow && arrow == "back" && (
        <ArrowSvg
          color={
            variant == "secondary" ? "var(--color-dark-green-700)" : "white"
          }
          className={"w-[14px] rotate-180 stroke-[2px]"}
        />
      )}
      <span className={adjustCentering ? "-translate-y-[0.5px]" : ""}>
        {props.children}
      </span>
      {arrow && arrow !== "none" && arrow !== "back" && (
        <ArrowSvg
          color={
            variant == "secondary" ? "var(--color-dark-green-700)" : "white"
          }
          className={
            "relative w-[14px] bg-red/0 stroke-[2px] duration-200 ease-in-out group-hover:translate-x-1 " +
            (adjustCentering && " translate-y-[0.5px]")
          }
        />
      )}
    </button>
  );
}
