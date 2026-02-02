import { useRef, type RefObject } from "react";
import Hero from "../../../components/sections/Hero";
import Button from "../../../components/ui/Button";
import { LandscapeBg } from "../../../components/ui/Backgrounds";
import { ARCHE_PAGE_DATA } from "../../../lib/data";

export default function ArcheHero({
  navbarTriggerRef,
}: {
  navbarTriggerRef: RefObject<HTMLDivElement | null>;
}) {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <Hero
      spacing="max"
      padding="pt-[200px] xl:pt-[240px]! pb-[100px]! "
      {...ARCHE_PAGE_DATA.HERO}
      titleWidth="lg:min-w-[480px] lg:max-w-[480px] xl:min-w-[780px] xl:max-w-[780px]"
      button={<Button arrow={"spaced"}>Request a demo</Button>}
      background={
        <LandscapeBg
          fetchPriority="high"
          ref={navbarTriggerRef}
        />
      }
    >
      <div ref={heroRef} className="mt-10 h-1 opacity-0 lg:mt-48"></div>
    </Hero>
  );
}
