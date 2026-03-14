import { useRef, useState } from "react";
import Navbar from "../../components/sections/navbar/Navbar";
import { PageMeta } from "../../components/ui/PageMeta";
import { useMotionValueEvent, useScroll } from "motion/react";
import HorionHero from "./components/HorionHero";
import StickyAnimation from "./components/StickyAnimation";
import WhyHorionWins from "./components/WhyHorionWins";

export default function HorionPage() {
  // change navbar transparency on scroll
  const [transparentNavbar, setTransparentNavbar] = useState(true);
  const navbarBgTrigger = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: navbarBgTrigger,
    offset: ["end end", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (val) =>
    setTransparentNavbar(val >= 1 ? false : true)
  );

  return (
    <>
      <PageMeta
        title="Horion by Gaiant | AI Meeting Co-Pilot for Modern Sales Teams"
        description="Horion helps enterprise sales teams increase close rates, reduce prep time, and improve team performance with AI-driven guidance."
      />
      <Navbar transparentBanner transparentBg={transparentNavbar} />
      <main>
        <HorionHero navbarTriggerRef={navbarBgTrigger} />
        <StickyAnimation />
        <WhyHorionWins />
        {/* <TheArcheModel />
        <AccelerateImpact />
        <ArcheIndustries />
        <ArcheCallToAction /> */}
      </main>
    </>
  );
}
