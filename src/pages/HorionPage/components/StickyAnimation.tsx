import { useInView, useTransform, motion as m } from "motion/react";
import { SlideUpAnim, SlideUpSelf } from "../../../components/ui/Anims";
import { useRef } from "react";
import { useScroll } from "motion/react";
import { useIsMobile } from "../../../lib/useIsMobile";
import horionHeroAnimation from "../../../assets/animations/horion/hero.json";
import Lottie from "lottie-react";

export default function StickyAnimation() {
  const isMobile = useIsMobile(1024);

  return isMobile ? <VideoMobile /> : <VideoDesktop />;
}

function VideoDesktop() {
  const videoRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(videoRef, { once: true });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["-384px start", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div className="relative z-3">
      <div ref={containerRef} className="absolute w-full max-lg:hidden">
        <div ref={videoRef} className="top-80 -translate-y-56 lg:sticky">
          <SlideUpAnim
            transition={{ duration: 0.6 }}
            initial={{ y: "100px" }}
            isInView={isInView}
            className="side-padding my-container"
          >
            <m.div
              className="lg-rounded bg-white-blue-oblique mx-auto w-9/10 overflow-clip rounded-xl object-contain py-5 backdrop-blur-[200px]"
              style={{ position: "relative", scale }}
            >
              <Lottie
                className="scale-105"
                animationData={horionHeroAnimation}
                loop
                autoplay
              />
            </m.div>
          </SlideUpAnim>
        </div>

        <div className="h-[400px] max-lg:hidden" />
      </div>

      {/* placeholder to maintain section height */}
      <div className="side-padding my-container max-lg:-mb-10 max-lg:-translate-y-20 max-sm:-mb-32 lg:invisible lg:pb-56">
        <div className="mx-auto aspect-video w-full rounded-md md:rounded-xl lg:w-9/10"></div>
      </div>
    </div>
  );
}

function VideoMobile() {
  return (
    <div className="relative z-3">
      <div className="side-padding my-container -mb-10 -translate-y-20 max-sm:-mb-32">
        <SlideUpSelf>
          <div className="bg-white-blue-oblique lg-rounded mx-auto w-full overflow-clip py-2 backdrop-blur-[200px]">
            <Lottie
              className="scale-105"
              animationData={horionHeroAnimation}
              loop
              autoplay
            />
          </div>
        </SlideUpSelf>
      </div>
    </div>
  );
}
