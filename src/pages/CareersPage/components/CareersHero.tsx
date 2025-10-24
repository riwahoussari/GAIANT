import Hero from "../../../components/sections/Hero";
import { HeroImgBackground } from "../../../components/ui/Backgrounds";
import Button from "../../../components/ui/Button";
import { CAREERS_PAGE_DATA } from "../../../lib/data";

export default function CareersHero() {
  return (
    <Hero
      spacing="max"
      {...CAREERS_PAGE_DATA.HERO}
      button={
        <Button arrow={"spaced"} className="xl:mb-20">
          SEE OPEN ROLES
        </Button>
      }
      background={
        <HeroImgBackground
          blur=" blur-[max(0.5vw,5px)] "
          alt="A team working and talking together"
          src="/images/team-discussing.webp"
          className="object-bottom"
        />
      }
    />
  );
}
