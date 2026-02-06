import { type RefObject } from "react";
import Hero from "../../../components/sections/Hero";
import { BlurredTealGradientBg } from "../../../components/ui/Backgrounds";
import Button from "../../../components/ui/Button";
import ImagesLayout from "../../../components/ui/ImagesLayout";
import { LANDING_PAGE_DATA } from "../../../lib/data";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LandingHero({
  navbarTriggerRef,
}: {
  navbarTriggerRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <Hero
      titleWidth="lg:min-w-[585px] lg:max-w-[585px] xl:min-w-[696px] xl:max-w-[696px] "
      spacing="max"
      padding="pt-[245px] xl:pt-[290px]!"
      title={LANDING_PAGE_DATA.HERO.title}
      text={LANDING_PAGE_DATA.HERO.text}
      button={<Button arrow={"spaced"}>Request a demo</Button>}
      background={<BlurredTealGradientBg fetchPriority="high" withBall />}
    >
      <div ref={navbarTriggerRef} className="side-padding my-container">
        <ImagesLayout
          animationDelay={0.5}
          img1={
            <div className="flex h-full w-full items-center justify-center p-2 py-4 pb-0! xs:p-6 lg:px-0 lg:py-12">
              <DotLottieReact
                renderConfig={{
                  autoResize: true,
                }}
                src="/videos/landing-hero.lottie"
                loop
                autoplay
                className="h-full w-full object-contain"
              />
            </div>
          }
          img2={
            <img
              fetchPriority="high"
              {...LANDING_PAGE_DATA.HERO.img2}
              className="h-full w-full object-cover object-[15%_0%]"
            />
          }
        />
      </div>
    </Hero>
  );
}
