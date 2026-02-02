import { useEffect, useRef } from "react";
import { SlideUpSelf } from "../../../components/ui/Anims";
import GlassCard from "../../../components/ui/cards/GlassCard";
import { BigEllipseGradient } from "../../../components/ui/GradientCircle";
import { TitleBlock } from "../../../components/ui/Titles";
import { CAREERS_PAGE_DATA } from "../../../lib/data";

export default function LifeAtGaiant() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const videos = videoRefs.current.filter(
      (v): v is HTMLVideoElement => v !== null
    );

    if (!videos.length) return;

    let cancelled = false;

    const waitUntilReady = (video: HTMLVideoElement) =>
      video.readyState >= 2
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            const onReady = () => {
              video.removeEventListener("loadeddata", onReady);
              resolve();
            };
            video.addEventListener("loadeddata", onReady);
          });

    // 1️⃣ Let them autoplay immediately (best effort)
    videos.forEach((video) => {
      video.play().catch(() => {});
    });

    // 2️⃣ Once ALL are ready, restart together
    Promise.all(videos.map(waitUntilReady)).then(() => {
      if (cancelled) return;

      videos.forEach((video) => {
        video.currentTime = 0;
      });

      videos.forEach((video) => {
        video.play().catch(() => {});
      });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="side-padding my-container relative z-2 mt-[40px]">
      <BigEllipseGradient />

      <TitleBlock
        title={CAREERS_PAGE_DATA.LIFE_AT_GAIANT.title}
        subtitle={CAREERS_PAGE_DATA.LIFE_AT_GAIANT.subtitle}
      />

      <div className="relative mt-16 grid grid-cols-1 gap-5 max-md:max-w-[520px] md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        {CAREERS_PAGE_DATA.LIFE_AT_GAIANT.cards.map((card, i) => (
          <SlideUpSelf key={i}>
            <GlassCard
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              titleClassName="max-w-[300px]!"
              className="w-full max-w-none!"
              {...card}
            />
          </SlideUpSelf>
        ))}
      </div>
    </section>
  );
}
