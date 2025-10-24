import CallToAction from "../../components/sections/CallToAction";
import { TrustedBy } from "../../components/sections/TrustedBy";
import Navbar from "../../components/sections/navbar/Navbar";
import IndustryHero from "./components/IndustryHero";
import FeaturesSection from "./components/FeaturesSection";
import UseCases from "./components/UseCases";
import OurApproach from "./components/OurApproach";

export default function () {
  return (
    <>
      <Navbar transparentBg={false} />
      <main>
        <IndustryHero />
        <FeaturesSection />
        <UseCases />
        <OurApproach />
        <TrustedBy />
        <CallToAction />
      </main>
    </>
  );
}
