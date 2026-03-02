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
              src="/images/about/sm/640.webp"
              srcSet="/images/about/sm/640.webp 640w, /images/about/sm/480.webp 480w, /images/about/sm/320.webp 320w"
              sizes="(max-width: 1024px) 35vw, (max-width: 1965px) 29vw, 527px"
              className="h-full w-full object-cover"
              alt="A team of developers working together on their laptops"
              fetchPriority="high"
            />
          }
          img2={
            <img
              src="/images/about/lg/1440.webp"
              srcSet="/images/about/lg/1440.webp 1440w, /images/about/lg/1280.webp 1280w, /images/about/lg/1024.webp 1024w, /images/about/lg/810.webp 810w, /images/about/lg/640.webp 640w, /images/about/lg/480.webp 480w, /images/about/lg/320.webp 320w"
              alt="Strengthening Businesses. Revolutionizing Operations. Maximizing Potential."
              fetchPriority="high"
              className="h-full w-full origin-left object-cover object-[0%_50%]"
              sizes="(max-width: 1024px) 65vw, (max-width: 1965px) 71vw, 1316px"
            />
          }
        />
      </div>
    </Hero>
  );
}
