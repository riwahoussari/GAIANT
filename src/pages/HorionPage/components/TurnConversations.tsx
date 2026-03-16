import StackingCardsSection from "../../../components/sections/StackingCardsSection";
import { HORION_PAGE_DATA } from "../../../lib/data";

export default function TurnConversations() {
  return (
    <StackingCardsSection
      background={
        <div className="absolute top-0 right-0 bottom-0 left-0 z-0 overflow-x-clip">
          <div
            className={
              "sticky top-[-60px] sm:top-[-80px] lg:top-[-100px] h-[100dvh] w-[100vw]! translate-y-[60px] sm:translate-y-[80px] lg:translate-y-[100px] bg-[linear-gradient(to_bottom_right,#A6C6DD_0%,#175679_100%)] opacity-75 blur-[30px] sm:blur-[50px] lg:blur-[100px]"
            }
          ></div>
        </div>
      }
      {...HORION_PAGE_DATA.TURN_CONVERSATIONS_TO_WINS}
      cards={HORION_PAGE_DATA.TURN_CONVERSATIONS_TO_WINS.cards.map((c) => ({
        ...c,
        titleSize: c.titleSize + " text-[32px]! leading-[32px]! xs:text-[40px]! xs:leading-[40px]! mb-5 ",
        contentWidth: " max-w-[390px]  ",
      }))}
      cardStyle="lg:py-0!"
    />
  );
}
