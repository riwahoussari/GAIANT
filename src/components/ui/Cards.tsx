import type { ReactNode } from "react";
import ArrowSvg from "./ArrowSvg";
import Button from "./Button";
import GradientCircle from "./GradientCircle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

export function IndustryCard({
  imgSrc,
  title,
  text,
  button = false,
  className,
}: {
  imgSrc: string;
  title: string;
  text?: string;
  button?: boolean;
  className?: string;
}) {
  return (
    <div
      className={"group relative overflow-clip text-white " + (className || "")}
    >
      <div
        className="h-full bg-black/25"
        style={{
          clipPath: "polygon(0 0, 82% 0, 100% 20%, 100% 100%, 0 100%)",
        }}
      >
        <img className="w-full object-cover" src={imgSrc} />
      </div>

      {/* content */}
      <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-tr from-black/0 to-black/15 p-3 py-4 backdrop-blur-md xs:p-6">
        <p className="text-25">{title}</p>

        {text && <p className="text-16 my-2 max-w-[180px] xs:mt-4">{text}</p>}
        {button && (
          <div className="flex justify-end">
            <Button>READ MORE</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export function GlassCard({
  title,
  subtitle,
  text,
  className,
}: {
  title: string;
  subtitle: string;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={"max-w-[466px] bg-white/50 p-3 xs:p-6 " + (className || "")}
    >
      {/* title & circle */}
      <div className="relative flex items-end justify-end gap-2">
        <p className="text-25 absolute bottom-0 left-0 z-1">{title}</p>
        <div className="aspect-square w-[33%] min-w-[80px] rounded-full border-2 border-red" />
      </div>
      {/* text */}
      <div className="mt-8 space-y-2 xs:mt-10 xs:space-y-3 2xl:mt-16 2xl:space-y-4">
        <p className="font-ibm! text-[11px] leading-[15px] font-semibold text-teal xs:text-[12px]">
          {subtitle}
        </p>
        <p className="text-[15px] leading-[21px] xs:text-[16px]">{text}</p>
      </div>
    </div>
  );
}

export function SimpleCard({
  title,
  text,
  className,
}: {
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={
        "flex flex-col justify-between gap-8 bg-white/50 px-3 py-5 text-black xs:px-5 xs:py-8 " +
        (className || "")
      }
    >
      <p className="text-25">{title}</p>
      <p className="text-[16px] leading-[21px] xs:text-[17px]">{text}</p>
    </div>
  );
}

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

export function ArticleCard({
  imgSrc,
  title,
  subtitle,
  className,
}: {
  imgSrc: string;
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div
      className={"group relative overflow-clip text-white " + (className || "")}
    >
      <div
        className="h-full bg-black/25"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 82%, 82% 100%, 0 100%)",
        }}
      >
        <img className="w-full object-cover" src={imgSrc} />
      </div>

      {/* content */}
      <div className="bg-linear-white-transparent-70 absolute top-0 right-0 left-0 p-6 py-4 backdrop-blur-[1000px]">
        <p className="font-ibm! text-[12px] leading-[31px]">{subtitle}</p>
        <p className="text-25">{title}</p>
      </div>

      {/* button */}
      <Button className="absolute bottom-1 left-2" variant={"ghost"}>
        READ MORE
      </Button>
      {/* arrow */}
      <ArrowSvg
        className="absolute right-0 bottom-1 z-1 w-6 stroke-[1px] xs:w-8"
        color="black"
      />
    </div>
  );
}

export function CardsSlider({
  displaySlider = true,
  children,
}: {
  displaySlider?: boolean;
  children: ReactNode;
}) {
  return (
    <>
      {" "}
      {/* cards */}
      <div className="mt-[40px] xl:overflow-x-hidden">
        <div className="flex w-max items-start gap-5">{children}</div>
      </div>
      {/* slider */}
      {displaySlider && (
        <div className="mx-auto mt-10 flex w-9/10 max-w-[580px] items-center justify-center gap-3 sm:gap-5 lg:w-1/2 lg:min-w-[580px]">
          <ArrowSvg
            color="var(--color-teal)"
            className="w-6 rotate-y-180 cursor-pointer 2xl:-translate-y-[1px]"
          />
          <div className="flex w-full items-center justify-center gap-1.5 sm:gap-3">
            <div className="bg-dark-green-blue-gradient h-1 w-[20%] rounded-full" />
            <div className="h-1 w-[80%] rounded-full bg-black/25" />
          </div>
          <ArrowSvg
            color="var(--color-teal)"
            className="w-6 cursor-pointer 2xl:-translate-y-[1px]"
          />
        </div>
      )}
    </>
  );
}
