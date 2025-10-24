import { useInView } from "motion/react";
import { useRef, type RefObject } from "react";
import Hero from "../../../components/sections/Hero";
import Button from "../../../components/ui/Button";
import { LandscapeBg } from "../../../components/ui/Backgrounds";
import { SlideUpAnim } from "../../../components/ui/Anims";
import { ARCHE_PAGE_DATA } from "../../../lib/data";

export default function ArcheHero({
  navbarTriggerRef,
}: {
  navbarTriggerRef: RefObject<HTMLDivElement | null>;
}) {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true, margin: "-5%" });

  return (
    <Hero
      spacing="max"
      titleWidths={{ lg: "660px", xl: "800px" }}
      {...ARCHE_PAGE_DATA.HERO}
      button={<Button arrow={"spaced"}>REQUEST A DEMO</Button>}
      background={<LandscapeBg ref={navbarTriggerRef} />}
    >
      <div ref={heroRef}>
        <SlideUpAnim
          transition={{ duration: 0.6 }}
          initial={{ y: "100px" }}
          isInView={isInView}
          className="side-padding my-container relative"
        >
          <img
            src="/demos/ai-chat-demo-3.svg"
            alt="AI chatbot dashboard"
            className="bg-linear-white-transparent-70 mx-auto w-full max-w-[920px] rounded-xl object-contain backdrop-blur-[1000px] sm:w-9/10 lg:w-8/10"
          />
        </SlideUpAnim>
      </div>
    </Hero>
  );
}
