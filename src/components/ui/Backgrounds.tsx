import { useState } from "react";
import GreenBlueGradient from "../../assets/green-blue-gradient.webp";
import GradientCircle from "./GradientCircle";

export function LandscapeBg({
  ref,
}: {
  ref?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={ref}
      className="bg-dark-green-blue-gradient-oblique h-9/10 w-[100vw]! xs:h-85/100 md:h-8/10"
    >
      <img
        src="/images/mountains-landscape.webp"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function BlurredLandscapeBg({ blur = "md" }: { blur?: "lg" | "md" }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={
        "absolute top-0 right-0 bottom-0 left-0 z-0 overflow-x-clip " +
        (isLoaded && !hasError ? "" : " bg-dark-green-blue-gradient-oblique")
      }
    >
      <div
        className={
          "relative h-full w-[120vw]! -translate-x-[10vw] " +
          (blur == "md" ? "blur-[max(2vw,25px)]" : "blur-[max(4vw,50px)]")
        }
      >
        <img
          src="/images/mountains-landscape.webp"
          className="h-full w-full object-cover"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      </div>
    </div>
  );
}

export function BlurredTealGradientBg({
  withBall = true,
}: {
  withBall?: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative h-full">
      <div
        className={
          "h-full w-[120vw]! -translate-x-[10vw] -translate-y-[10%] blur-[6vw] lg:h-[950px] xl:h-[1000px] 2xl:h-[1100px] " +
          (isLoaded && !hasError ? "" : " bg-dark-green-blue-gradient-oblique")
        }
      >
        <img
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          src={GreenBlueGradient}
          className="h-full w-full object-cover"
        />
      </div>
      {withBall && (
        <div className="absolute top-[140px] left-1/2 w-[500px] -translate-x-1/2 lg:w-[40vw] lg:min-w-[550px]">
          <GradientCircle />
        </div>
      )}
    </div>
  );
}

export function BlurredTealGradientBg2({
  withBall = true,
}: {
  withBall?: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  return (
    <div className="relative h-full">
      <div
        className={
          "h-full w-[120vw]! -translate-x-[10vw] blur-[6vw]" +
          (isLoaded && !hasError ? "" : " bg-dark-green-blue-gradient-oblique")
        }
      >
        <img
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          src={GreenBlueGradient}
          className="h-full w-full object-cover"
        />
      </div>
      {withBall && (
        <div className="absolute top-1/2 left-1/2 w-[450px] -translate-1/2 lg:w-[35vw] lg:min-w-[500px]">
          <GradientCircle />
        </div>
      )}
    </div>
  );
}

export function HeroImgBackground({
  blur,
  src,
  className,
}: {
  className?: string;
  blur?: string;
  src: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative h-full">
      <div
        className={
          "h-full w-[120vw]! -translate-x-[10vw] -translate-y-[10%] " +
          (blur || " blur-[max(1vw,10px)] ") +
          (isLoaded && !hasError ? "" : " bg-dark-green-blue-gradient-oblique")
        }
      >
        <img
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          src={src}
          className={"h-full w-full object-cover " + (className || "")}
        />
      </div>
    </div>
  );
}
