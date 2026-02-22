import { useInView, useTransform, motion as m, useMotionValueEvent } from "motion/react";
import { SlideUpAnim, SlideUpSelf } from "../../../components/ui/Anims";
import { useEffect, useRef } from "react";
import { useScroll } from "motion/react";
import { useIsMobile } from "../../../lib/useIsMobile";
import Player from "@vimeo/player";

export default function StickeVideo() {
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

  // autoplay
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  let started = false
  useEffect(() => {
    if (!iframeRef.current) return;

    playerRef.current = new Player(iframeRef.current);
  }, []);

  useMotionValueEvent(scrollYProgress, 'change', (val) => {
    if (val > 0 && !started) {
      started = true;
      playerRef.current?.play();
    }
  })

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
              className="bg-dark-green-700-blue-gradient-oblique mx-auto aspect-video w-9/10 rounded-xl object-contain"
              style={{ position: "relative", scale }}
            >
              <iframe
                ref={iframeRef}
                src="https://player.vimeo.com/video/1166656426?controls=1&title=0&byline=0&portrait=0&loop=0&autoplay=0?muted=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-full w-full object-contain"
                title="Archē"
              ></iframe>
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
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, {
    once: true,
  });

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
    <div className="relative z-2">
      <div className="side-padding my-container -mb-10 -translate-y-20 max-sm:-mb-32">
        <SlideUpSelf>
          <div
            ref={containerRef}
            className="bg-dark-green-700-blue-gradient-oblique mx-auto aspect-video w-full rounded-md md:rounded-xl"
          >
            <iframe
              ref={iframeRef}
              src="https://player.vimeo.com/video/1166656426?controls=1&title=0&byline=0&portrait=0&loop=0&autoplay=0&muted=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-full w-full object-contain"
              title="Archē"
            ></iframe>
          </div>
        </SlideUpSelf>
      </div>
    </div>
  );
}
