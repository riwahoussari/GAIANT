import { useInView } from "motion/react";
import { SlideUpAnim } from "../ui/Anims";
import Button from "../ui/Button";
import { CenteredTitleBlock } from "../ui/Titles";
import { useRef } from "react";
import gradientCircleAnimation from "../../assets/animations/gradient-circle-squared.mp4";
import GradientCircle from "../ui/GradientCircle";

export default function CallToAction({
  withGradientCircle = false,
}: {
  withGradientCircle?: boolean;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      className="my-container side-padding mt-[120px] overflow-x-clip "
    >
      {/* gradient circles */}
      {withGradientCircle && (
        <div className="w-full relative">
          <div className="absolute top-0 -translate-y-1/4 lg:-translate-y-1/2 left-0 z-1 -translate-x-1/3 -rotate-30 opacity-50">
            <GradientCircle
              className="origin-top blur-[max(6vw,60px)]! lg:scale-120 will-change-[filter] translate-z-0"
              colorr={"teal"}
            />
          </div>

          <div className="absolute right-0 top-0 z-1 translate-x-8/10 translate-y-full xs:translate-y-3/4 sm:translate-y-1/2 md:translate-y-1/4 opacity-50 ">
            <GradientCircle
              className="origin-bottom blur-[max(6vw,60px)]! will-change-[filter] translate-z-0"
              colorr={"teal"}
            />
          </div>
        </div>
      )}

      {/* titles */}
      <CenteredTitleBlock
        className="relative z-4"
        big={true}
        title="Let’s make Ai work for you"
        titleWidth="cta-title-width max-xs:max-w-[300px]!"
        subtitle="ARE YOU READY?"
      />

      {/* circle */}
      <SlideUpAnim
        isInView={isInView}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="relative mx-auto my-12 aspect-square w-[90%] max-w-[310px] ">
          <video
            src={gradientCircleAnimation}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 z-0 h-full w-full scale-110 object-contain"
          />
        </div>
      </SlideUpAnim>

      {/* button */}
      <div className="relative z-4 flex justify-center">
        <SlideUpAnim
          isInView={isInView}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button variant={"black"}>Request a demo</Button>
        </SlideUpAnim>
      </div>
    </section>
  );
}
