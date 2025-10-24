import { useRef } from "react";
import { SlideUpAnim } from "../../../components/ui/Anims";
import { BlurredLandscapeBg } from "../../../components/ui/Backgrounds";
import { TitleBlock } from "../../../components/ui/Titles";
import { useInView } from "motion/react";
import { ARCHE_PAGE_DATA } from "../../../lib/data";

export default function AccelerateImpact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  return (
    <section
      ref={sectionRef}
      className="relative mt-[200px] overflow-x-clip pb-24"
    >
      {/* bg */}
      <BlurredLandscapeBg blur={"lg"} />

      <div className="side-padding my-container py-[10px]">
        {/* title */}
        <div className="relative max-w-[520px] space-y-3 sm:space-y-5">
          <TitleBlock title={ARCHE_PAGE_DATA.ACCELERATE_IMPACT.title} />
          <SlideUpAnim isInView={isInView} transition={{ delay: 0.2 }}>
            <p className="text-16">{ARCHE_PAGE_DATA.ACCELERATE_IMPACT.text}</p>
          </SlideUpAnim>
        </div>

        {/* card */}
        <div className="bg-linear-white-transparent-70 mt-12 flex items-center justify-between gap-x-5 gap-y-10 rounded-xl px-4 py-10 backdrop-blur-[100px] max-lg:flex-col sm:mt-16 sm:gap-y-14 sm:px-10 sm:py-16 xl:p-20">
          {/* text */}
          <div className="max-w-[380px] text-white max-lg:text-center">
            <SlideUpAnim isInView={isInView} transition={{ delay: 0.3 }}>
              <p className="font-ibm! text-[11px] xs:text-[12px]">
                {ARCHE_PAGE_DATA.ACCELERATE_IMPACT.cards[0].subtitle}
              </p>
            </SlideUpAnim>
            <SlideUpAnim isInView={isInView} transition={{ delay: 0.4 }}>
              <p className="text-[50px] xs:text-[60px]">
                {" "}
                {ARCHE_PAGE_DATA.ACCELERATE_IMPACT.cards[0].title}
              </p>
            </SlideUpAnim>
            <SlideUpAnim isInView={isInView} transition={{ delay: 0.5 }}>
              <p className="text-16">
                {ARCHE_PAGE_DATA.ACCELERATE_IMPACT.cards[0].text}
              </p>
            </SlideUpAnim>
          </div>
          {/* image */}
          <SlideUpAnim
            className="w-full max-w-[700px] min-w-[320px] lg:w-6/10"
            isInView={isInView}
            transition={{ delay: 0.4 }}
          >
            <img
              src={ARCHE_PAGE_DATA.ACCELERATE_IMPACT.cards[0].img.src}
              alt={ARCHE_PAGE_DATA.ACCELERATE_IMPACT.cards[0].img.alt}
              className="h-full w-full object-contain"
            />
          </SlideUpAnim>
        </div>
      </div>
    </section>
  );
}
