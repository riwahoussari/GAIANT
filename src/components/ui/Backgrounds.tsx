import GreenBlueGradient from "../../assets/green-blue-gradient.jpg";
import GradientCircle from "./GradientCircle";

export function LandscapeBg() {
  return (
    <div className="h-9/10 w-[100vw]! xs:h-85/100 md:h-8/10">
      <img
        src="/landing-page-banner.jpg"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function BlurredLandscapeBg({ blur = "md" }: { blur?: "lg" | "md" }) {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-0 overflow-x-clip">
      <div
        className={
          "relative h-full w-[120vw]! -translate-x-[10vw] " +
          (blur == "md" ? "blur-[max(2vw,25px)]" : "blur-[max(4vw,50px)]")
        }
      >
        <img
          src="/landing-page-banner.jpg"
          className="h-full w-full object-cover"
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
  return (
    <div className="relative h-full">
      <div className="h-full w-[120vw]! -translate-x-[10vw] -translate-y-[10%] blur-[6vw] lg:h-[950px] xl:h-[1000px] 2xl:h-[1100px]">
        <img src={GreenBlueGradient} className="h-full w-full object-cover" />
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
  return (
    <div className="relative h-full">
      <div className="h-full w-[120vw]! -translate-x-[10vw] blur-[6vw]">
        <img src={GreenBlueGradient} className="h-full w-full object-cover" />
      </div>
      {withBall && (
        <div className="absolute top-1/2 left-1/2 w-[450px] -translate-1/2 lg:w-[35vw] lg:min-w-[500px]">
          <GradientCircle />
        </div>
      )}
    </div>
  );
}
