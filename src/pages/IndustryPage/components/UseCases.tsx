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
    <section
      ref={sectionRef}
      className="side-padding my-container relative z-2 mt-[120px]"
    >
      <div className="absolute top-[calc(50%+100px)] left-1/2 z-0 -translate-1/2 opacity-70">
        <GradientCircle
          className="blur-[max(6vw,60px)]! max-md:scale-200 max-sm:scale-y-400"
          colorr={"teal"}
        />
      </div>

      {/* title */}
      <div className="relative grid grid-cols-1 items-end sm:gap-5 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-5 2xl:gap-8">
        <TitleBlock title={content.title} subtitle={content.subtitle} />
        <SlideUpAnim isInView={isInView} transition={{ delay: 0.2 }} >
          <p className={"text-16 xl:w-max  " + content.textClassName}>{content.text}</p>
        </SlideUpAnim>
        <SlideUpAnim
          className="flex md:col-start-2 xl:col-start-3 xl:justify-end"
          isInView={isInView}
          transition={{ delay: 0.3 }}
        >
          <Button className="max-sm:mt-3" variant={"black"}>
            Request a demo
          </Button>
        </SlideUpAnim>
      </div>

      {/* cards */}
      <div className="relative mt-16 grid grid-cols-1 gap-5 max-md:max-w-[520px] md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-5 2xl:gap-8 ">
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
