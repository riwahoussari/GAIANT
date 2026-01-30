import type { RefObject } from "react";
import Hero from "../../../components/sections/Hero";
import Button from "../../../components/ui/Button";
import GradientCircle from "../../../components/ui/GradientCircle";
import ImagesLayout from "../../../components/ui/ImagesLayout";
import { ABOUT_PAGE_DATA } from "../../../lib/data";
import { useHeroImageLoad } from "../../../lib/PreloaderContext";

export default function AboutHero({
  navbarTriggerRef,
}: {
  navbarTriggerRef?: RefObject<HTMLDivElement | null>;
}) {
  const { onImageLoad } = useHeroImageLoad();

  return (
    <Hero
      className="text-black!"
      spacing="max"
      titleWidth="lg:min-w-[560px] lg:max-w-[560px] xl:min-w-[660px] xl:max-w-[660px]"
      textWidth="max-w-[440px] xl:max-w-[550px]"
      {...ABOUT_PAGE_DATA.HERO}
      button={
        <Button variant={"black"} arrow={"spaced"}>
          Request a demo
        </Button>
      }
      background={
        <div className="absolute top-[240px] left-1/2 w-[500px] lg:w-[40vw] lg:min-w-[550px]">
          <GradientCircle blur={"lg"} />
        </div>
      }
    >
      <div ref={navbarTriggerRef} className="my-container side-padding">
        <ImagesLayout
          animationDelay={0.5}
          bg2={false}
          reverse
          img1={
            <img
              onLoad={onImageLoad}
              src="/images/about-1.webp"
              className="h-full w-full object-cover"
              alt="A team of developers working together on their laptops"
              fetchPriority="high"
            />
          }
          img2={
            <img
              src="/images/about-2.webp"
              alt="Strengthening Businesses. Revolutionizing Operations. Maximizing Potential."
              fetchPriority="high"
              className="h-full w-full object-cover object-[0%_40%] origin-left scale-125"
            />
          }
        />
      </div>
    </Hero>
  );
}
