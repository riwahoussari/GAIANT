import { useInView, useTransform, motion as m } from "motion/react";
import { SlideUpAnim, SlideUpSelf } from "../../../components/ui/Anims";
import { useRef } from "react";
import { useScroll } from "motion/react";

export default function StickeVideo() {
  const videoRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(videoRef, { once: true });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["-384px start", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div className="relative z-2">
      <div ref={containerRef} className="absolute w-full max-lg:hidden">
        <div ref={videoRef} className="top-80 -translate-y-56 lg:sticky">
          <SlideUpAnim
            transition={{ duration: 0.6 }}
            initial={{ y: "100px" }}
            isInView={isInView}
            className="side-padding my-container"
          >
            <m.div
              className="mx-auto aspect-video w-9/10 rounded-xl object-contain"
              style={{ position: "relative", scale }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/xu1BLHxuTlA?autoplay=1&mute=1&loop=1&playlist=xu1BLHxuTlA"
                title="Archē Demo Video"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="h-full w-full object-contain"
              />
            </m.div>
          </SlideUpAnim>
        </div>

        <div className="h-[400px] max-lg:hidden" />
      </div>

      {/* placeholder to maintain section height */}
      <div className="side-padding my-container max-lg:-mb-10 max-lg:-translate-y-20 max-sm:-mb-32 lg:invisible lg:pb-56">
        <SlideUpSelf>
          <div className="mx-auto aspect-video w-full rounded-md md:rounded-xl lg:w-9/10">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/xu1BLHxuTlA?autoplay=1&mute=1&loop=1&playlist=xu1BLHxuTlA"
              title="Archē Demo Video"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="h-full w-full object-contain"
            />
          </div>
        </SlideUpSelf>
      </div>
    </div>
  );
}
