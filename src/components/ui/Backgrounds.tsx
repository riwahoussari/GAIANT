import { useState } from "react";
import GreenBlueGradient from "../../assets/green-blue-gradient.webp";

export function LandscapeBg({
  ref,
  fetchPriority,
}: {
  fetchPriority?: "high" | "low" | "auto" | undefined;
  ref?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={ref}
      className="bg-dark-green-700-blue-gradient-oblique h-full w-[100vw]!"
    >
      <img
        fetchPriority={fetchPriority}
        alt="Landscape filled with mountains and a girl standing on a rock"
        src="/images/mountains-landscape.webp"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function BlurredLandscapeBg({
  blur = "md",
  loading,
}: {
  blur?: "lg" | "md";
  loading?: "eager" | "lazy" | undefined;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={
        "absolute top-0 right-0 bottom-0 left-0 z-0 overflow-x-clip " +
        (isLoaded && !hasError
          ? ""
          : " bg-dark-green-700-blue-gradient-oblique")
      }
    >
      <div
        className={
          "relative h-full w-[120vw]! -translate-x-[10vw] " +
          (blur == "md" ? "blur-[max(2vw,25px)]" : "blur-[max(4vw,50px)]")
        }
      >
        <img
          loading={loading}
          alt="Landscape filled with mountains and a girl standing on a rock"
          src="/images/mountains-landscape.webp"
          className="h-full w-full object-cover"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      </div>
    </div>
  );
}

export function BlurredBlueTealGradientBg({
  withBall = true,
}: {
  withBall?: boolean;
  fetchPriority?: "high" | "low" | "auto" | undefined;
}) {
  return (
    <div className="relative h-full">
      <div
        className={
          "bg-dark-green-700-blue-gradient-oblique h-full w-[108vw]! -translate-x-[4vw] -translate-y-[5%] blur-[min(3vw,60px)] lg:h-[950px] xl:h-[1000px] 2xl:h-[1100px]"
        }
      ></div>
      {withBall && (
        <>
          <div className="absolute top-[175px] left-1/2 w-[min(500px,110vw)] max-w-[670px] -translate-x-1/2 sm:top-[200px] lg:top-[140px] lg:w-[40vw] lg:min-w-[550px]">
            <div className="aspect-square">
              <img
                className="h-full w-full scale-145 object-contain lg:scale-135"
                sizes="(max-width: 455px) 160vw, (max-width: 1024px) 725px, (max-width: 1375px) 743px, (max-width: 1676px) 54vw, 905px"
                src="/gradients/landing-hero-circle/905.avif"
                srcSet="/gradients/landing-hero-circle/905.avif 905w,
                 /gradients/landing-hero-circle/640.avif 640w,
                  /gradients/landing-hero-circle/480.avif 480w,
                   /gradients/landing-hero-circle/320.avif 320w"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export function BlurredTealGradientOverlay() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative h-[120%]">
      <div
        className={
          "absolute h-full w-[120vw]! -translate-x-[10vw] -translate-y-[10%] blur-[min(6vw,120px)] " +
          (isLoaded && !hasError
            ? ""
            : " bg-dark-green-700-blue-gradient-oblique")
        }
      >
        <img
          onLoad={() => {
            setIsLoaded(true);
          }}
          onError={() => {
            setHasError(true);
          }}
          src={GreenBlueGradient}
          className="h-full w-full object-cover max-md:rotate-x-180 max-md:rotate-z-180"
          alt="Gradient background"
        />
      </div>
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
          "h-full w-[120vw]! -translate-x-[10vw] blur-[min(6vw,100px)]" +
          (isLoaded && !hasError
            ? ""
            : " bg-dark-green-700-blue-gradient-oblique")
        }
      >
        <img
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          src={GreenBlueGradient}
          className="h-full w-full object-cover"
          alt="Gradient Background"
        />
      </div>
      {withBall && (
        <div className="absolute top-1/2 left-1/2 w-[450px] max-w-[600px] -translate-1/2 lg:w-[30vw] lg:min-w-[500px]">
          <div className="aspect-square">
            <img
              className="h-full w-full scale-145 object-contain lg:scale-135"
              src="/gradients/circle-hero.webp"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export function HeroImgBackground({
  blur,
  src,
  srcSet,
  alt,
  className,
  fetchPriority,
}: {
  className?: string;
  blur?: string;
  src: string;
  srcSet?: string;
  alt: string;
  fetchPriority?: "high" | "low" | "auto" | undefined;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative h-full">
      <div
        className={
          "h-full w-full origin-bottom scale-110" +
          (blur || " blur-[max(0.3vw,6px)] ") +
          (isLoaded && !hasError
            ? ""
            : " bg-dark-green-700-blue-gradient-oblique")
        }
      >
        <img
          fetchPriority={fetchPriority}
          onLoad={() => {
            setIsLoaded(true);
          }}
          onError={() => {
            setHasError(true);
          }}
          src={src}
          srcSet={srcSet}
          sizes="100vw"
          className={"h-full w-full object-cover " + (className || "")}
          alt={alt}
        />
      </div>
    </div>
  );
}
