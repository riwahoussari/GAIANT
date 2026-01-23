import type { ReactNode } from "react";
import { cn } from "../../../lib/utils";
import GradientCircle from "../GradientCircle";
import { cva, type VariantProps } from "class-variance-authority";

const gradientCircleVariants = cva("absolute z-0 w-75/100 ", {
  variants: {
    position: {
      tr: " top-0 -translate-y-1/3 right-0 translate-x-1/3",
      tl: " top-0 -translate-y-1/3 left-0 -translate-x-1/3",
      br: " bottom-0 translate-y-1/3 right-0 translate-x-1/3",
    },
  },
  defaultVariants: {
    position: "tr",
  },
});
interface GradientProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gradientCircleVariants> {}

export function TestimonialCard({
  logo,
  text,
  className,
  position = "tr",
}: {
  text: string;
  logo: ReactNode;
  className?: string;
} & GradientProps) {
  return (
    <div
      className={"group relative overflow-clip text-white " + (className || "")}
    >
      <div
        className="flex h-full flex-col justify-end gap-2 bg-black"
        style={{
          clipPath: "polygon(0 0, 82% 0, 100% 20%, 100% 100%, 0 100%)",
        }}
      >
        <div className={cn(gradientCircleVariants({ position }), className)}>
          <GradientCircle className="blur-[max(6vw,60px)" colorr={"teal"} />
        </div>
        <div className="relative p-5 xs:p-6">
          <p className="text-16">{text}</p>
        </div>
        <div className="relative left-0 flex h-[126px] items-center bg-white/25 p-5 xs:p-6">
          {logo}
        </div>
      </div>
    </div>
  );
}