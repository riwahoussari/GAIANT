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
          src="/images/careers-hero.webp"
          className="object-[50%_45%] -translate-x-4/100 scale-x-105 scale-y-120 origin-bottom"
          fetchPriority="high"
        />
      }
    />
  );
}
