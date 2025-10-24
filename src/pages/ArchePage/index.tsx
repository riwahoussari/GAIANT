import { useRef, useState } from "react";
import ArcheCallToAction from "./components/ArcheCallToAction";
import ArcheIndustries from "./components/ArcheIndustries";
import AccelerateImpact from "./components/AccelerateImpact";
import TheArcheModel from "./components/TheArcheModel";
import Navbar from "../../components/sections/navbar/Navbar";
import { useMotionValueEvent, useScroll } from "motion/react";
import ArcheHero from "./components/ArcheHero";

export default function ArchePage() {
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
      <Navbar transparentBg={transparentNavbar} />
      <main>
        <ArcheHero navbarTriggerRef={navbarBgTrigger} />
        <TheArcheModel />
        <AccelerateImpact />
        <ArcheIndustries />
        <ArcheCallToAction />
      </main>
    </>
  );
}
