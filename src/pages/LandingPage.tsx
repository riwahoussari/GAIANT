import BlogPosts from "../components/sections/LandingPage/BlogPosts";
import CallToAction from "../components/sections/common/CallToAction";
import Feature from "../components/sections/LandingPage/Feature";
import Hero from "../components/sections/common/Hero";
import IndustriesWeEmpower from "../components/sections/LandingPage/IndustriesWeEmpower";
import Tools from "../components/sections/LandingPage/Tools";
import WhatMakesUsDifferent from "../components/sections/LandingPage/WhatMakesUsDifferent";
import Button from "../components/ui/Button";
import { BlurredTealGradientBg } from "../components/ui/Backgrounds";
import ImagesLayout from "../components/ui/ImagesLayout";
import AccordionSection from "../components/sections/common/AccordionSection";

export default function LandingPage() {
  return (
    <main>
      <Hero
        title="One AI work platform for any kind of work"
        text="Gaiant is where powerful AI meets practical business solutions, so
            you can work smarter."
        button={<Button arrow={"spaced"}>REQUEST A DEMO</Button>}
        background={<BlurredTealGradientBg withBall />}
      >
        <div className="side-padding my-container">
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
      <Feature />
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
            active: true,
          },
          {
            title: "For your time",
          },
          {
            title: "For your results",
          },
        ]}
      />
      <BlogPosts />
      <CallToAction />
    </main>
  );
}
