import { useEffect, useRef } from "react";
import { SlideUpSelf } from "../../../components/ui/Anims";
import GlassCard from "../../../components/ui/cards/GlassCard";
import { BigEllipseGradient } from "../../../components/ui/GradientCircle";
import { TitleBlock } from "../../../components/ui/Titles";
import { ABOUT_PAGE_DATA } from "../../../lib/data";

export default function OurMission() {
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
    <section className="side-padding my-container relative z-2 mt-[120px]">
      <BigEllipseGradient />

      <TitleBlock
        title={ABOUT_PAGE_DATA.OUR_MISSION.title}
        subtitle={ABOUT_PAGE_DATA.OUR_MISSION.subtitle}
      />

      <div className="relative mt-16 grid grid-cols-1 gap-5 max-md:max-w-[520px] md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        {ABOUT_PAGE_DATA.OUR_MISSION.cards.map((card, i) => (
          <SlideUpSelf key={i}>
            <GlassCard
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              className="w-full max-w-none!"
              {...card}
            />
          </SlideUpSelf>
        ))}
      </div>
    </section>
  );
}
