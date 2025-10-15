import { cva, type VariantProps } from "class-variance-authority";
import GreenBlueDiamondGradient from "../../assets/blue-green-diamond-gradient.png";
import { cn } from "../../lib/utils";

const gradientCircleVariants = cva("aspect-square rounded-full overflow-clip", {
  variants: {
    blur: {
      md: " blur-[max(1vw,10px)]",
      lg: "blur-[max(12vw,120px)]",
    },
  },
  defaultVariants: {
    blur: "md",
  },
});

interface GradientProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gradientCircleVariants> {}

export default function GradientCircle({
  blur,
  className,
  ...props
}: GradientProps) {
  return (
    <div className={cn(gradientCircleVariants({ blur }), className)} {...props}>
      <img
        src={GreenBlueDiamondGradient}
        className="w-full h-full object-contain"
        alt=""
      />
    </div>
  );
}
