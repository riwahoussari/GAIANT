import type { RefObject } from "react";
import Hero from "../../../components/sections/Hero";
import Button from "../../../components/ui/Button";
import GradientCircle from "../../../components/ui/GradientCircle";
import ImagesLayout from "../../../components/ui/ImagesLayout";
import { ABOUT_PAGE_DATA } from "../../../lib/data";

export default function AboutHero({
  navbarTriggerRef,
}: {
  navbarTriggerRef?: RefObject<HTMLDivElement | null>;
}) {
  return (
    <Hero
      centered
      className="text-black!"
      spacing="max"
      padding="pt-[200px] xl:pt-[240px]! lg:pb-[140px]! xs:pb-[100px]! pb-[80px]! "
      titleWidth="lg:min-w-[498px] lg:max-w-[498px] xl:min-w-[590px] xl:max-w-[590px]"
      textWidth="max-w-[410px] xl:max-w-[480px]"
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
              className="h-full w-full origin-left object-cover object-[0%_50%]"
            />
          }
        />
      </div>
    </Hero>
  );
}
