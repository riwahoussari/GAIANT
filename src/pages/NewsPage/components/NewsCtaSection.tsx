import Hero from "../../../components/sections/Hero";
import { BlurredTealGradientBg2 } from "../../../components/ui/Backgrounds";
import Button from "../../../components/ui/Button";

export default function NewsCtaSection() {
  return (
    <Hero
      className="mt-[140px] xl:py-10"
      title="Ready to redefine <sm:br> the way you work?"
      text="Request a demo and see how Gaiant's secure and private AI platform can unlock productivity for your business."
      button={<Button arrow={"spaced"}>REQUEST A DEMO</Button>}
      background={<BlurredTealGradientBg2 withBall />}
    />
  );
}
