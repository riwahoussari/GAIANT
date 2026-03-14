import { useRef, type RefObject } from "react";
import { Link } from "react-router-dom";
import Hero from "../../../components/sections/Hero";
import Button from "../../../components/ui/Button";
import { HorionBg } from "../../../components/ui/Backgrounds";
import { HORION_PAGE_DATA } from "../../../lib/data";

export default function HorionHero({
  navbarTriggerRef,
}: {
  navbarTriggerRef: RefObject<HTMLDivElement | null>;
}) {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <Hero
      centered
      spacing="max"
      padding="pt-[200px] xl:pt-[240px]! pb-[100px]! "
      {...HORION_PAGE_DATA.HERO}
      titleWidth="max-lg:max-w-[410px] lg:min-w-[410px] lg:max-w-[410px] xl:min-w-[487px] xl:max-w-[487px]"
      textWidth="max-lg:max-w-[480px] lg:min-w-[480px] lg:max-w-[480px] xl:min-w-[550px] xl:max-w-[550px]"
      button={
        <Link to="/contact">
          <Button arrow={"spaced"}>Request a demo</Button>
        </Link>
      }
      background={<HorionBg fetchPriority="high" ref={navbarTriggerRef} />}
    >
      <div ref={heroRef} className="mt-10 h-1 opacity-0 lg:mt-48"></div>
    </Hero>
  );
}
