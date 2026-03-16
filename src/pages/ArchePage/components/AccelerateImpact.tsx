import { BlurredLandscapeBg } from "../../../components/ui/Backgrounds";
import { ARCHE_PAGE_DATA } from "../../../lib/data";
import StackingCardsSection from "../../../components/sections/StackingCardsSection";

export default function AccelerateImpact() {
  return (
    <StackingCardsSection
      background={<BlurredLandscapeBg loading="lazy" />}
      {...ARCHE_PAGE_DATA.ACCELERATE_IMPACT}
      cards={ARCHE_PAGE_DATA.ACCELERATE_IMPACT.cards.map((c) => ({
        ...c,
        contentWidth: " max-w-[310px] xs:max-w-[380px]  ",
      }))}
    />
  );
}
