import { useInView } from "motion/react";
import { useRef } from "react";
import { TitleBlock } from "../../../components/ui/Titles";
import { SlideUpAnim } from "../../../components/ui/Anims";

export default function OurApproach({
  content,
}: {
  content: {
    title: string;
    subtitle: string;
    text: string;
    video: string;
  };
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  return (
    <section
      ref={sectionRef}
      className="side-padding my-container relative z-2 mt-[120px]"
    >
      <div className="grid grid-cols-1 items-end gap-2 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-5 2xl:gap-8">
        <TitleBlock title={content.title} subtitle={content.subtitle} />
        <SlideUpAnim
          isInView={isInView}
          transition={{ delay: 0.2 }}
          className="max-sm:-mt-5 xl:col-span-2"
        >
          <p className="text-16 max-w-[432px] max-xs:max-w-[270px]">
            {content.text}
          </p>
        </SlideUpAnim>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 max-md:max-w-[520px] sm:mt-12 md:mt-16 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-5 2xl:gap-8">
        <SlideUpAnim
          initial={{ y: "50px" }}
          className="col-span-2 xl:col-start-2"
          isInView={isInView}
          transition={{ delay: 0.3 }}
        >
          <div className="relative aspect-video w-full">
            <iframe
              src="https://player.vimeo.com/video/1165284685?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="aspect-video h-full w-full object-contain"
              title="Gaiant Approach Video"
            ></iframe>
          </div>
        </SlideUpAnim>
      </div>
    </section>
  );
}
