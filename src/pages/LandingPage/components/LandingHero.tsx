import { type RefObject } from "react";
import Hero from "../../../components/sections/Hero";
import { BlurredTealGradientBg } from "../../../components/ui/Backgrounds";
import Button from "../../../components/ui/Button";
import ImagesLayout from "../../../components/ui/ImagesLayout";
import { LANDING_PAGE_DATA } from "../../../lib/data";

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
          mobileImg={2}
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
              className="h-full w-full -translate-x-1/30 scale-112 lg:scale-117 object-cover object-center max-lg:aspect-97/67"
            />
          }
        />
      </div>
    </Hero>
  );
}
