import { type RefObject } from "react";
import Hero from "../../../components/sections/Hero";
import { BlurredBlueTealGradientBg } from "../../../components/ui/Backgrounds";
import Button from "../../../components/ui/Button";
import { LANDING_PAGE_DATA } from "../../../lib/data";
import { useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { SlideUpAnim } from "../../../components/ui/Anims";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LandingHero({
  navbarTriggerRef,
}: {
  navbarTriggerRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <Hero
      centered
      titleWidth="max-md:ps-4 max-md:max-w-[350px] lg:min-w-[585px] lg:max-w-[585px] xl:min-w-[696px] xl:max-w-[696px] "
      spacing="max"
      padding="max-sm:pt-[167px]! max-sm:pb-[44px]! sm:pb-[100px]  lg:pt-[245px] xl:pt-[290px]! "
      title={LANDING_PAGE_DATA.HERO.title}
      text={LANDING_PAGE_DATA.HERO.text}
      textWidth="max-xs:max-w-[300px]! max-md:max-w-[350px]"
      button={<Button arrow={"spaced"}>Request a demo</Button>}
      background={<BlurredBlueTealGradientBg fetchPriority="high" withBall />}
    >
      <div ref={navbarTriggerRef} className="side-padding my-container">
        <ImagesLayout
          animationDelay={0.5}
          img1={
            <div className="flex h-full w-full items-center justify-center p-2 py-4  xs:p-6 lg:px-0 lg:py-12 xl:py-16">
              <DotLottieReact
                renderConfig={{
                  autoResize: true,
                }}
                src="/videos/landing-hero.json"
                loop
                autoplay
                className="h-full w-full object-contain scale-130 2xl:scale-120"
              />
            </div>
          }
          img2={
            <img
              fetchPriority="high"
              {...LANDING_PAGE_DATA.HERO.img2}
              className="h-full w-full object-cover object-center"
            />
          }
        />
      </div>
    </Hero>
  );
}

function ImagesLayout({
  img1,
  img2,
  animationDelay,
}: {
  img1: ReactNode;
  img2: ReactNode;
  animationDelay?: number;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(divRef, { once: true });
  return (
    <div
      ref={divRef}
      className="relative grid grid-cols-5 md:grid-cols-2 gap-3 md:gap-5 lg:gap-8"
    >
      {/* img 1 */}
      <SlideUpAnim
        className={"w-full h-full min-h-[250px] aspect-662/540! max-md:col-span-3"}
        initial={{ y: "100px" }}
        transition={{ delay: animationDelay || 0, duration: 0.6 }}
        isInView={isInView}
      >
        <div
          className={
            "flex h-full w-full items-center justify-center overflow-clip rounded-md bg-white/50 lg:rounded-xl"
          }
        >
          {img1}
        </div>
      </SlideUpAnim>

      <SlideUpAnim
        className={"w-full h-full min-h-[250px] aspect-662/540! max-md:col-span-2"}
        initial={{ y: "100px" }}
        transition={{ delay: animationDelay || 0, duration: 0.6 }}
        isInView={isInView}
      >
        <div
          className={
            "flex h-full w-full items-center justify-center overflow-clip rounded-md bg-white/50 lg:rounded-xl"
          }
        >
          {img2}
        </div>
      </SlideUpAnim>
    </div>
  );
}
