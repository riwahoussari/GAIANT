import { cva, type VariantProps } from "class-variance-authority";
import TealDiamondGradient from "../../assets/teal-diamond-gradient.svg";
import BeigeDiamondGradient from "../../assets/beige-diamond-gradient.svg";
import { cn } from "../../lib/utils";

const gradientCircleVariants = cva("aspect-square rounded-full overflow-clip", {
  variants: {
    blur: {
      md: " blur-[max(1vw,10px)]",
      lg: "blur-[max(12vw,120px)]",
    },
    colorr: {
      beige: "",
      teal: "",
    },
  },
  defaultVariants: {
    blur: "md",
    colorr: "teal",
  },
});

interface GradientProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gradientCircleVariants> {}

export default function GradientCircle({
  blur,
  colorr,
  className,
  ...props
}: GradientProps) {
  return (
    <div className={cn(gradientCircleVariants({ blur }), className)} {...props}>
      <img
        src={
          colorr == "beige" ? BeigeDiamondGradient : TealDiamondGradient
        }
        className="h-full w-full object-contain"
        alt=""
      />
    </div>
  );
}
