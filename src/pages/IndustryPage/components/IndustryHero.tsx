import Hero from "../../../components/sections/Hero";
import { HeroImgBackground } from "../../../components/ui/Backgrounds";
import Button from "../../../components/ui/Button";
import { type TIndustry } from "../../../lib/data";

export default function IndustryHero({ industry }: { industry: TIndustry }) {
  return (
    <Hero
      centered
      spacing="max"
      titleWidth="lg:min-w-[580px] lg:max-w-[580px] xl:min-w-[700px] xl:max-w-[780px]"
      {...industry.hero}
      button={
        <Button className="xl:mb-20" arrow={"spaced"}>
          Request a demo
        </Button>
      }
      background={
        <HeroImgBackground
          alt={`${industry.name} industry illustration`}
          src={industry.hero.img.src}
          srcSet={industry.hero.img.srcSet}
          fetchPriority="high"
          className={" " + industry.hero.img.position + " "}
        />
      }
      padding="pt-[200px] xl:pt-[240px]! pb-[80px]! lg:pb-[64px]! xl:pb-[0px]! "
    />
  );
}
