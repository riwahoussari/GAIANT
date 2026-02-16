import { type RefObject } from "react";
import Hero from "../../../components/sections/Hero";
import { BlurredTealGradientBg } from "../../../components/ui/Backgrounds";
import Button from "../../../components/ui/Button";
import { LANDING_PAGE_DATA } from "../../../lib/data";
import { useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { SlideUpAnim } from "../../../components/ui/Anims";

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
      background={<BlurredTealGradientBg fetchPriority="high" withBall />}
    >
      <div ref={navbarTriggerRef} className="side-padding my-container">
        <ImagesLayout
          animationDelay={0.5}
          img1={
            <img
              src="/demos/landing-hero.svg"
              className="flex h-full w-full items-center justify-center"
            />
          }
          img2={
            <img
              fetchPriority="high"
              {...LANDING_PAGE_DATA.HERO.img2}
              className="h-full w-full -translate-x-1/30 scale-112 object-cover object-center max-lg:aspect-97/67 lg:scale-117"
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
    <div ref={divRef} className="relative grid lg:grid-cols-7">
      {/* img 1 */}
      <SlideUpAnim
        className={"col-span-5 max-lg:hidden lg:me-5 lg:aspect-5/3!"}
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
        className={"col-span-5 lg:me-5 lg:hidden lg:aspect-5/3!"}
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

      {/* img 2 */}
      <SlideUpAnim
        initial={{ y: "100px" }}
        transition={{ delay: (animationDelay || 0) + 0.2, duration: 0.6 }}
        isInView={isInView}
        className={
          "absolute right-0 bottom-full col-span-2 max-lg:hidden max-lg:w-[min(25vw,160px)] max-lg:-translate-y-6 max-sm:hidden lg:static lg:ms-2 lg:aspect-2/3!"
        }
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
