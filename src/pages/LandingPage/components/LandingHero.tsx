import type { RefObject } from "react";
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
    titleWidth="max-w-full flex-none"
      spacing="max"
      title={LANDING_PAGE_DATA.HERO.title}
      text={LANDING_PAGE_DATA.HERO.text}
      button={<Button arrow={"spaced"}>Request a demo</Button>}
      background={<BlurredTealGradientBg fetchPriority="high" withBall />}
    >
      <div ref={navbarTriggerRef} className="side-padding my-container">
        <ImagesLayout
          animationDelay={0.5}
          img1={
            <div className="flex items-center justify-center p-2 py-4 xs:p-6 lg:px-0 lg:py-12">
              <img
                fetchPriority="high"
                {...LANDING_PAGE_DATA.HERO.img1}
                className="h-full object-contain"
              />
            </div>
          }
          img2={
            <img
              fetchPriority="high"
              {...LANDING_PAGE_DATA.HERO.img2}
              className="h-full w-full object-cover"
            />
          }
        />
      </div>
    </Hero>
  );
}
