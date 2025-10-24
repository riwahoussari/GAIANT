import CallToAction from "../../components/sections/CallToAction";
import ArcheSection from "./components/ArcheSection";
import IndustriesWeEmpower from "./components/IndustriesWeEmpower";
import Tools from "./components/Tools";
import WhatMakesUsDifferent from "./components/WhatMakesUsDifferent";
import Navbar from "../../components/sections/navbar/Navbar";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import LandingHero from "./components/LandingHero";
import WhatThisMeans from "./components/WhatThisMeans";
import OurLatestThinking from "./components/OurLatestThinking";

export default function LandingPage() {
  const [transparentNavbar, setTransparentNavbar] = useState(true);
  const navbarBgTrigger = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: navbarBgTrigger,
    offset: ["end end", "start start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (val) =>
    setTransparentNavbar(val >= 1 ? false : true)
  );

  return (
    <>
      <Navbar transparentBg={transparentNavbar} />
      <main>
        <LandingHero navbarTriggerRef={navbarBgTrigger} />
        <WhatMakesUsDifferent />
        <IndustriesWeEmpower />
        <Tools />
        <ArcheSection />
        <WhatThisMeans />
        <OurLatestThinking />
        <CallToAction />
      </main>
    </>
  );
}
