import { useRef, useState } from "react";
import ArcheCallToAction from "../components/sections/ArchePage/ArcheCallToAction";
import ArcheFeatures from "../components/sections/ArchePage/ArcheFeatures";
import DiscoverArche from "../components/sections/ArchePage/DiscoverArche";
import TheArcheModel from "../components/sections/ArchePage/TheArcheModel";
import Hero from "../components/sections/common/Hero";
import Navbar from "../components/sections/common/navbar/Navbar";
import { LandscapeBg } from "../components/ui/Backgrounds";
import Button from "../components/ui/Button";
import { useInView, useMotionValueEvent, useScroll } from "motion/react";
import { SlideUpAnim } from "../components/ui/Anims";

export default function ArchePage() {
  const [transparentNavbar, setTransparentNavbar] = useState(true);
  const navbarBgTrigger = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: navbarBgTrigger,
    offset: ["end end", "end start"],
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true, margin: "-5%" });

  useMotionValueEvent(scrollYProgress, "change", (val) =>
    setTransparentNavbar(val >= 1 ? false : true)
  );
  return (
    <>
      <Navbar transparentBg={transparentNavbar} />
      <main>
        <Hero
          spacing="max"
          titleWidths={{ lg: "660px", xl: "800px" }}
          subtitle="ARCHĒ"
          title="AI for business that turns complexity into clarity"
          text="Archē sets the standard for business performance by helping teams automate work and accelerate decisions that drive results — all in one scalable, secure workspace."
          button={<Button arrow={"spaced"}>REQUEST A DEMO</Button>}
          background={<LandscapeBg ref={navbarBgTrigger} />}
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
                alt=""
                className="bg-linear-white-transparent-70 mx-auto w-full max-w-[920px] rounded-xl object-contain backdrop-blur-[1000px] sm:w-9/10 lg:w-8/10"
              />
            </SlideUpAnim>
          </div>
        </Hero>

        <TheArcheModel />
        <DiscoverArche />
        <ArcheFeatures />
        <ArcheCallToAction />
      </main>
    </>
  );
}
