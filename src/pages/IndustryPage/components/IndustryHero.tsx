import Hero from "../../../components/sections/Hero";
import { HeroImgBackground } from "../../../components/ui/Backgrounds";
import Button from "../../../components/ui/Button";
import { INDUSTRY_PAGE_DATA } from "../../../lib/data";

export default function IndustryHero() {
  return (
    <Hero
      spacing="max"
      {...INDUSTRY_PAGE_DATA.HERO}
      button={
        <Button
          className="hover:translate-x-1 xl:mb-20"
          arrow={"spaced"}
        >
          REQUEST A DEMO
        </Button>
      }
      background={
        <HeroImgBackground
          alt="A man putting his wallet in his pocket"
          src="/industries/Industries-banking.webp"
          fetchPriority="high"
        />
      }
    />
  );
}
