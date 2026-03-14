import { useEffect, useRef, useState } from "react";
import { TitleBlock } from "../../../components/ui/Titles";
import { motion as m, useInView } from "motion/react";
import { SlideUpAnim } from "../../../components/ui/Anims";
import { HORION_PAGE_DATA } from "../../../lib/data";
const INTERVAL_TIME = 4000;

export default function OneDashboard() {
  const content = HORION_PAGE_DATA.ONE_DASHBOARD;
  const [showing, setShowing] = useState(1);
  const textRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [maxTextHeight, setMaxTextHeight] = useState(0);

  useEffect(() => {
    const measureHeights = () => {
      const max = textRefs.current.reduce(
        (acc, el) => Math.max(acc, el?.offsetHeight ?? 0),
        0
      );
      setMaxTextHeight(max);
    };

    measureHeights();
    window.addEventListener("resize", measureHeights);
    return () => window.removeEventListener("resize", measureHeights);
  }, []);

  useEffect(() => {
    const showNext = () => {
      setShowing((prev) =>
        prev === content.features.length - 1 ? 0 : prev + 1
      );
    };
    const interval = setInterval(showNext, INTERVAL_TIME);

    return () => clearInterval(interval);
  }, []);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  return (
    <section ref={sectionRef} className="my-container side-padding mt-[160px]">
      <div className="grid-cols-12 justify-between gap-[31px] lg:grid">
        <div className="col-span-4">
          <div className="mb-6 sm:mb-10 lg:mb-12">
            <TitleBlock {...content} />
          </div>

          {/* text */}
          <SlideUpAnim isInView={isInView}>
            <div
              style={{
                height: maxTextHeight ? `${maxTextHeight}px` : "auto",
                position: "relative",
              }}
              className="flex items-center"
            >
              {content.features.map((f, i) => (
                <m.div
                  key={i}
                  ref={(el) => {
                    textRefs.current[i] = el;
                  }}
                  initial={false}
                  animate={{ opacity: i === showing ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={
                    "absolute " +
                    (showing === 1 ? "max-w-[278px]" : "max-w-[283px]")
                  }
                >
                  <p className="mb-3 text-[25px] leading-[25px]">{f.title}</p>
                  <p className="text-base leading-[21px]">{f.text}</p>
                </m.div>
              ))}
            </div>
          </SlideUpAnim>
        </div>
        <div className="relative col-span-8 max-lg:mt-6">
          <div className="space-y-6 xs:space-y-8 lg:ms-auto lg:max-w-[900px] xl:space-y-12">
            {/* background gradient */}
            <div className="absolute top-1/2 left-1/2 z-0 -translate-1/2 scale-150">
              <div className="scale-x-350 scale-y-450 -rotate-90 sm:scale-x-200 sm:scale-y-400 lg:scale-x-180 lg:scale-y-400">
                <img
                  src="/gradients/circle-blue/1328.avif"
                  srcSet="/gradients/circle-blue/1328.avif 1328w, /gradients/circle-blue/1024.avif 1024w, /gradients/circle-blue/810.avif 810w, /gradients/circle-blue/640.avif 640w"
                  sizes="(max-width: 640px) 450vw, (max-width: 1280px) 400vw, 300vw"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* images */}
            <SlideUpAnim isInView={isInView} initial={{ y: "60px" }}>
              <div className="lg-rounded relative w-full overflow-hidden">
                {content.features.map((f, i) => (
                  <m.div
                    key={i}
                    initial={false}
                    animate={{
                      opacity: showing === i ? 1 : 0,
                      y:
                        showing === i
                          ? 0
                          : (i === 0 && showing === 3) || showing == i - 1
                            ? 20
                            : -20,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full"
                  >
                    <img
                      className="relative z-1 h-full w-full object-contain"
                      src={f.img}
                      alt={`dashboard demo of ${f.title}`}
                      aria-hidden
                    />
                    {f.imgBack && (
                      <img
                        className="absolute inset-0 z-0 h-full w-full object-contain"
                        src={f.imgBack}
                        alt={`dashboard demo of ${f.title}`}
                        aria-hidden
                      />
                    )}
                  </m.div>
                ))}
                {/* placeholder */}
                <img
                  src={content.features[0].img}
                  alt={`dashboard demo of ${content.features[0].title}`}
                  aria-hidden
                  className="h-full w-full object-contain opacity-0"
                />
              </div>
            </SlideUpAnim>

            {/* Dashes */}
            <SlideUpAnim isInView={isInView} className="flex w-full gap-2.5">
              {content.features.map((f, i) => (
                <Dash key={i} showing={showing === i} {...f} />
              ))}
            </SlideUpAnim>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dash({
  showing,
  className,
}: {
  title: string;
  text: string;
  showing: boolean;
  className?: string;
}) {
  return (
    <div className={"relative w-full " + className}>
      <m.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: showing ? 1 : 0 }}
        transition={{
          ease: "linear",
          duration: showing ? INTERVAL_TIME / 1000 : 0.5,
        }}
        style={{ transformOrigin: showing ? "left" : "right" }}
        className={"bg-blue-gradient relative z-1 h-[3px] w-full rounded-full"}
      ></m.div>

      <div
        className={
          "absolute top-0 right-0 left-0 z-0 h-[3px] w-full rounded-full bg-black/25"
        }
      />
    </div>
  );
}
