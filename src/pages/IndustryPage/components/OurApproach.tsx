import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { TitleBlock } from "../../../components/ui/Titles";
import { SlideUpAnim } from "../../../components/ui/Anims";
import Player from "@vimeo/player";

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

  // autoplay video
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  useEffect(() => {
    if (!iframeRef.current) return;

    playerRef.current = new Player(iframeRef.current);
  }, []);
  useEffect(() => {
    if (isInView) {
      playerRef.current?.play();
    }
  }, [isInView]);

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
          <div className="relative aspect-video w-full lg-rounded overflow-clip">
            <iframe
              ref={iframeRef}
              src="https://player.vimeo.com/video/1166656815?controls=1&title=0&byline=0&portrait=0&loop=0&autoplay=0&muted=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="aspect-video h-full w-full object-contain"
              title="Our Approach"
            ></iframe>
          </div>
        </SlideUpAnim>
      </div>
    </section>
  );
}
