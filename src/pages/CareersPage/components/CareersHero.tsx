import type { SyntheticEvent } from "react";
import Hero from "../../../components/sections/Hero";
import { HeroImgBackground } from "../../../components/ui/Backgrounds";
import Button from "../../../components/ui/Button";
import { CAREERS_PAGE_DATA } from "../../../lib/data";

export default function CareersHero() {
  return (
    <Hero
      centered
      spacing="max"
      titleWidth="lg:min-w-[580px] lg:max-w-[580px] xl:min-w-[700px] xl:max-w-[700px] max-xs:text-[min(11.6vw,50px)]! max-xs:leading-[calc(min(11.6vw,50px)+7px)]! xs:text-[56px]!"
      padding="pt-[200px] xl:pt-[240px]! pb-[80px]! lg:pb-[64px]! xl:pb-[0px]! "
      textWidth=" max-w-[400px] xl:max-w-[450px]"
      {...CAREERS_PAGE_DATA.HERO}
      button={
        <a
          href="#open_roles"
          onClick={(e: SyntheticEvent) => {
            e.preventDefault();
            const openRolesSection = document.getElementById("open_roles");
            openRolesSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <Button className="xl:mb-20" arrow={"spaced"}>
            See open roles
          </Button>
        </a>
      }
      background={
        <HeroImgBackground
          blur=" blur-[max(0.5vw,5px)] "
          alt="A team working and talking together"
          src="/images/careers-hero/1280.webp"
          srcSet="/images/careers-hero/1280.webp 1280w, /images/careers-hero/1024.webp 1024w, /images/careers-hero/810.webp 810w, /images/careers-hero/640.webp 640w, /images/careers-hero/480.webp 480w, /images/careers-hero/320.webp 320w"
          sizes="100vw"
          className="origin-bottom -translate-x-4/100 scale-x-105 scale-y-120 object-[50%_45%]"
          fetchPriority="high"
        />
      }
    />
  );
}
