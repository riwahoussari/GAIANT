import { useEffect, useRef } from "react";
import GradientCircle from "../../../components/ui/GradientCircle";
import { SectionSubTitle, SectionTitle } from "../../../components/ui/Titles";
import { useInView } from "motion/react";
import { AnimatedText, SlideUpAnim } from "../../../components/ui/Anims";
import { LANDING_PAGE_DATA } from "../../../lib/data";
import GlassCard from "../../../components/ui/cards/GlassCard";

export default function WhatMakesUsDifferent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Reset + play all videos at the same time
    videoRefs.current.forEach((video) => {
      if (!video) return;
      video.currentTime = 0;
    });

    videoRefs.current.forEach((video) => {
      video?.play().catch(() => {});
    });
  }, []);

  return (
    <section ref={sectionRef} className="mt-[110px] overflow-x-clip">
      {/* Titles */}
      <div className="my-container side-padding flex grid-cols-3 flex-col gap-5 lg:mb-[110px] lg:grid lg:items-end lg:gap-8">
        <SectionSubTitle className="pt-3">
          <AnimatedText isInView={isInView}>
            {LANDING_PAGE_DATA.WHAT_MAKES_US_DIFFERENT.subtitle}
          </AnimatedText>
        </SectionSubTitle>
        <SectionTitle className="col-span-2 mb-6 max-w-[480px] sm:mb-9 lg:mb-0">
          <AnimatedText isInView={isInView}>
            {LANDING_PAGE_DATA.WHAT_MAKES_US_DIFFERENT.title}
          </AnimatedText>
        </SectionTitle>
      </div>

      {/* description and cards */}
      <div className="my-container side-padding grid-cols-3 gap-8 lg:grid">
        {/* section description */}
        <SlideUpAnim
          isInView={isInView}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="grid-cols-2 gap-x-8 text-[15px] xs:text-[17px] sm:grid lg:block lg:max-w-[336px]">
            <span>
              {LANDING_PAGE_DATA.WHAT_MAKES_US_DIFFERENT.text
                .slice(
                  0,
                  Math.ceil(
                    LANDING_PAGE_DATA.WHAT_MAKES_US_DIFFERENT.text.length / 2
                  )
                )
                .map((line, i) => (
                  <span className="max-w-[336px]" key={i}>
                    {line}
                    <br />
                    <br />
                  </span>
                ))}
            </span>
            <span>
              {LANDING_PAGE_DATA.WHAT_MAKES_US_DIFFERENT.text
                .slice(
                  Math.ceil(
                    LANDING_PAGE_DATA.WHAT_MAKES_US_DIFFERENT.text.length / 2
                  )
                )
                .map((line, i) => (
                  <span className="max-w-[336px]" key={i}>
                    {line}
                    <br />
                    <br />
                  </span>
                ))}
            </span>
          </p>
        </SlideUpAnim>

        {/* cards */}
        <div className="relative col-span-2 grid gap-5 max-lg:mt-[30px] max-sm:mt-[0] sm:grid-cols-2">
          <div className="-translate-x- absolute bottom-1/2 -z-1 w-[500px] translate-y-1/2 opacity-70 max-sm:left-0 max-sm:scale-y-200 sm:right-0 sm:translate-x-1/2 lg:w-[40vw] lg:min-w-[550px]">
            <GradientCircle blur={"lg"} />
          </div>

          {LANDING_PAGE_DATA.WHAT_MAKES_US_DIFFERENT.cards.map((card, i) => (
            <SlideUpAnim
              key={i}
              isInView={isInView}
              transition={{ delay: 0.3 + 0.1 * i }}
            >
              <GlassCard
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                textClassName={card.textMaxWidth}
                {...card}
              />
            </SlideUpAnim>
          ))}
        </div>
      </div>
    </section>
  );
}
