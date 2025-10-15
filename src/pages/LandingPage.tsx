import BlogPosts from "../components/LandingPage/BlogPosts";
import CallToAction from "../components/LandingPage/CallToAction";
import Feature from "../components/LandingPage/Feature";
import Hero from "../components/LandingPage/Hero";
import IndustriesWeEmpower from "../components/LandingPage/IndustriesWeEmpower";
import Tools from "../components/LandingPage/Tools";
import WhatMakesUsDifferent from "../components/LandingPage/WhatMakesUsDifferent";
import WhatThisMeans from "../components/LandingPage/WhatThisMeans";

export default function LandingPage() {
  return (
    <main>
      <Hero />
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
