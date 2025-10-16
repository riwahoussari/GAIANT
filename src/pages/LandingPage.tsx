import BlogPosts from "../components/sections/LandingPage/BlogPosts";
import CallToAction from "../components/sections/common/CallToAction";
import Feature from "../components/sections/LandingPage/Feature";
import Hero from "../components/sections/common/Hero";
import IndustriesWeEmpower from "../components/sections/LandingPage/IndustriesWeEmpower";
import Tools from "../components/sections/LandingPage/Tools";
import WhatMakesUsDifferent from "../components/sections/LandingPage/WhatMakesUsDifferent";
import WhatThisMeans from "../components/sections/LandingPage/WhatThisMeans";
import Button from "../components/ui/Button";
import { BlurredTealGradientBg } from "../components/ui/Backgrounds";
import ImagesLayout from "../components/ui/ImagesLayout";

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
      <WhatThisMeans />
      <BlogPosts />
      <CallToAction />
    </main>
  );
}
