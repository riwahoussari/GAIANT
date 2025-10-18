import CallToAction from "../components/sections/common/CallToAction";
import ArcheSection from "../components/sections/LandingPage/ArcheSection";
import Hero from "../components/sections/common/Hero";
import IndustriesWeEmpower from "../components/sections/LandingPage/IndustriesWeEmpower";
import Tools from "../components/sections/LandingPage/Tools";
import WhatMakesUsDifferent from "../components/sections/LandingPage/WhatMakesUsDifferent";
import Button from "../components/ui/Button";
import { BlurredTealGradientBg } from "../components/ui/Backgrounds";
import ImagesLayout from "../components/ui/ImagesLayout";
import AccordionSection from "../components/sections/common/AccordionSection";
import Navbar from "../components/sections/common/navbar/Navbar";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import NewsArticlesCarousel from "../components/sections/common/NewsArticlesCarousel";
import { TitleBlock } from "../components/ui/Titles";
import { Link } from "react-router-dom";

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
        <Hero
          title="One AI work platform for any kind of work"
          text="Gaiant is where powerful AI meets practical business solutions, so you can work smarter."
          button={<Button arrow={"spaced"}>REQUEST A DEMO</Button>}
          background={<BlurredTealGradientBg withBall />}
        >
          <div ref={navbarBgTrigger} className="side-padding my-container">
            <ImagesLayout
              img1={
                <div className="flex items-center justify-center p-2 py-4 xs:p-6 lg:px-0 lg:py-12">
                  <img
                    src="/patient-history-dashboard.svg"
                    alt=""
                    className="h-full object-contain"
                  />
                </div>
              }
              img2={
                <img
                  src="/hero-img-1.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              }
            />
          </div>
        </Hero>
        <WhatMakesUsDifferent />
        <IndustriesWeEmpower />
        <Tools />
        <ArcheSection />
        {/* What this Means Section */}
        <AccordionSection
          className="mt-[150px]!"
          title="What this means for you"
          subtitle="REDEFINING YOUR WORK DAY"
          img={<img src="/AiChatDemo2.svg" />}
          accordionContent={[
            {
              title: "For your work",
              subtitle: "WHERE WE MAKE A DIFFERENCE",
              list: [
                "Turns complex data into clear, actionable insights",
                "Adapts to the tools and systems you already use",
                "Supports collaboration across teams and departments",
                "Scales with your projects as they grow",
              ],
            },
            {
              title: "For your time",
              subtitle: "WHERE WE MAKE A DIFFERENCE",
              list: [
                "Turns complex data into clear, actionable insights",
                "Adapts to the tools and systems you already use",
              ],
            },
            {
              title: "For your results",
              subtitle: "WHERE WE MAKE A DIFFERENCE",
              list: [
                "Turns complex data into clear, actionable insights",
                "Adapts to the tools and systems you already use",
                "Scales with your projects as they grow",
              ],
            },
          ]}
        />
        <NewsArticlesCarousel
          titleBlock={
            <TitleBlock
              title="Our latest thinking"
              subtitle="INSIGHTS AND IDEAS"
              button={
                <Link to="/news">
                  <Button size={"sm"} arrow={"normal"} variant={"secondary"}>
                    SEE ALL
                  </Button>
                </Link>
              }
            />
          }
        />
        <CallToAction />
      </main>
    </>
  );
}
