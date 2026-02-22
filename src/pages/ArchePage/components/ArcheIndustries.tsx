import { useRef, useState, type ReactNode } from "react";
import { CenteredTitleBlock } from "../../../components/ui/Titles";
import { SlideUpAnim } from "../../../components/ui/Anims";
import { useInView } from "motion/react";
import { ARCHE_PAGE_DATA } from "../../../lib/data";
import { useIsMobile } from "../../../lib/useIsMobile";

export default function ArcheIndustries() {
  const [selectedTab, setSelectedTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  const isSm = useIsMobile(640);
  const isMobile = useIsMobile(768);

  return (
    <section
      ref={sectionRef}
      className="side-padding my-container relative z-2 mt-5 flex flex-col items-center gap-y-6 overflow-x-clip md:gap-y-14"
    >
      {/* title */}
      <CenteredTitleBlock
        key={`${isSm}`}
        title={ARCHE_PAGE_DATA.ARCHE_INDUSTRIES.title}
        text={
          isSm
            ? ARCHE_PAGE_DATA.ARCHE_INDUSTRIES.text.replace(
                "your people",
                "you"
              )
            : ARCHE_PAGE_DATA.ARCHE_INDUSTRIES.text
        }
      />

      {/* tabs */}
      <SlideUpAnim
        isInView={isInView}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-3 items-center justify-items-stretch gap-2 rounded-full text-center max-xs:my-3! max-md:my-4 max-sm:flex-wrap sm:flex sm:justify-between sm:border-1 sm:px-3 sm:py-2.5 lg:gap-8"
      >
        {ARCHE_PAGE_DATA.ARCHE_INDUSTRIES.tabs.map((tab, i) => (
          <Tab
            key={i}
            active={selectedTab === i}
            onClick={() => setSelectedTab(i)}
          >
            {tab.title}
          </Tab>
        ))}
      </SlideUpAnim>

      <p className="text-16 max-w-[375px] text-center md:mb-4 md:hidden">
        {ARCHE_PAGE_DATA.ARCHE_INDUSTRIES.tabs[selectedTab].text}
      </p>

      {/* image */}
      <div className="relative">
        <SlideUpAnim
          isInView={isInView}
          className="absolute top-0 right-0 w-full md:w-[52%]"
          initial={{ y: "60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <img
            src="/images/mountains-landscape-2.webp"
            className="h-full w-full object-contain md:translate-y-[30px] lg:translate-y-0"
            alt="A doctor working on his ipad"
          />
        </SlideUpAnim>
        <SlideUpAnim
          isInView={isInView}
          className="relative w-full"
          initial={{ y: "60px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-16 absolute mb-6 w-45/100 max-w-[375px] max-md:hidden lg:mb-10">
            {ARCHE_PAGE_DATA.ARCHE_INDUSTRIES.tabs[selectedTab].text}
          </p>
          {isMobile ? (
            <MobileImg selectedTab={selectedTab} />
          ) : (
            <DesktopImg selectedTab={selectedTab} />
          )}
        </SlideUpAnim>
      </div>
    </section>
  );
}

function Tab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <p
      onClick={onClick}
      className={
        "cursor-pointer rounded-full px-3 py-2 text-[16px] duration-200 ease-in-out hover:bg-black hover:text-white max-sm:border-1 xs:px-5 xs:text-[17px] " +
        (active ? " bg-black text-white" : " bg-transparent text-black")
      }
    >
      {children}
    </p>
  );
}

function MobileImg({ selectedTab }: { selectedTab: number }) {
  return (
    <div className="relative">
      <img
        src={ARCHE_PAGE_DATA.ARCHE_INDUSTRIES.tabs[0].svg.mobile}
        className="invisible h-full w-full object-contain opacity-0"
        alt="Demo of the ai workflow"
        aria-hidden
      />
      {ARCHE_PAGE_DATA.ARCHE_INDUSTRIES.tabs.map((ind, i) => (
        <img
          src={ind.svg.mobile}
          className="absolute inset-0 h-full w-full object-contain"
          style={selectedTab === i ? {} : { display: "none" }}
          alt="Demo of the ai workflow"
        />
      ))}
    </div>
  );
}
function DesktopImg({ selectedTab }: { selectedTab: number }) {
  return (
    <div className="relative">
      <img
        src={ARCHE_PAGE_DATA.ARCHE_INDUSTRIES.tabs[0].svg.desktop}
        className="invisible h-full w-full object-contain opacity-0 max-lg:translate-y-[30px]"
        alt="Demo of the ai workflow"
        aria-hidden
      />
      {ARCHE_PAGE_DATA.ARCHE_INDUSTRIES.tabs.map((ind, i) => (
        <img
          src={ind.svg.desktop}
          className="absolute inset-0 h-full w-full object-contain max-lg:translate-y-[30px]"
          alt="Demo of the ai workflow"
          style={selectedTab === i ? {} : { display: "none" }}
        />
      ))}
    </div>
  );
}
