import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import { TitleBlock } from "../../../components/ui/Titles";
import { SlideUpAnim, SlideUpSelf } from "../../../components/ui/Anims";
import Button from "../../../components/ui/Button";
import GlassCard from "../../../components/ui/cards/GlassCard";
import GradientCircle from "../../../components/ui/GradientCircle";

export default function UseCases({
  content,
}: {
  content: {
    title: "Use Cases";
    subtitle: string;
    text: string;
    textClassName?: string;
    useCaseCards: {
      title: string;
      subtitle: string;
      text: string;
      animation: string;
    }[];
  };
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

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
    <section
      ref={sectionRef}
      className="side-padding my-container relative z-2 md:mt-[120px] mt-[80px]"
    >
      <div className="absolute top-[calc(50%+100px)] left-1/2 z-0 -translate-1/2 opacity-70">
        <GradientCircle
          className="blur-[max(6vw,60px)]! max-md:scale-200 max-sm:scale-y-400"
          colorr={"teal"}
        />
      </div>

      {/* title */}
      <div className="relative grid grid-cols-1 gap-2 items-end sm:gap-5 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-5 2xl:gap-8">
        <TitleBlock title={content.title} subtitle={content.subtitle} />
        <SlideUpAnim className="max-sm:-mt-6" isInView={isInView} transition={{ delay: 0.2 }}>
          <p className={"text-16 xl:w-max " + content.textClassName}>
            {content.text}
          </p>
        </SlideUpAnim>
        <SlideUpAnim
          className="flex md:col-start-2 xl:col-start-3 xl:justify-end"
          isInView={isInView}
          transition={{ delay: 0.3 }}
        >
          <Button className="max-sm:mt-4" variant={"black"}>
            Request a demo
          </Button>
        </SlideUpAnim>
      </div>

      {/* cards */}
      <div className="relative mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 gap-5 max-md:max-w-[520px] md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-5 2xl:gap-8">
        {content.useCaseCards.map((useCase, i) => (
          <SlideUpSelf key={i}>
            <GlassCard
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              key={i}
              className="w-full"
              {...useCase}
            />
          </SlideUpSelf>
        ))}
      </div>
    </section>
  );
}
