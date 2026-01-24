import { useRef, useState } from "react";
import ArcheCallToAction from "./components/ArcheCallToAction";
import ArcheIndustries from "./components/ArcheIndustries";
import AccelerateImpact from "./components/AccelerateImpact";
import TheArcheModel from "./components/TheArcheModel";
import Navbar from "../../components/sections/navbar/Navbar";
import { useMotionValueEvent, useScroll } from "motion/react";
import ArcheHero from "./components/ArcheHero";
import { PageMeta } from "../../components/ui/PageMeta";
import StickeVideo from "./components/StickyVideo";

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
      <PageMeta
        title="Archē by Gaiant | AI Intelligent Operating System for EnterpriseS"
        description="Archē unifies every tool, workflow, and data source into one conversational interface, turning fragmented operations into seamless action."
      />
      <Navbar transparentBg={transparentNavbar} />
      <main>
        <ArcheHero navbarTriggerRef={navbarBgTrigger} />
        <StickeVideo />
        <TheArcheModel />
        <AccelerateImpact />
        <ArcheIndustries />
        <ArcheCallToAction />
      </main>
    </>
  );
}
