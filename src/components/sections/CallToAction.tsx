import { useInView } from "motion/react";
import { SlideUpAnim } from "../ui/Anims";
import Button from "../ui/Button";
import { CenteredTitleBlock } from "../ui/Titles";
import { useRef } from "react";
import gradientCircleAnimation from "../../assets/animations/gradient-circle-squared.mp4";

export default function CallToAction({
  withGradientCircle = false,
}: {
  withGradientCircle?: boolean;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="my-container side-padding mt-[120px]">
      {/* gradient circles - Careers page */}
      {withGradientCircle && (
        <div className="relative w-full">
          <div
            className={
              "absolute top-0 left-0 z-1 -translate-x-1/2 -translate-y-[2200px] xs:-translate-y-[2950px] md:-translate-y-1/2 opacity-50 lg:-translate-y-2/3"
            }
          >
            <div className="aspect-square origin-top translate-z-0 scale-185 md:scale-165 lg:scale-170 xl:scale-150">
              <img
                src="/gradients/circle-6.webp"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div className={"absolute top-0 right-0 z-1 opacity-50"}>
            <div className="aspect-square origin-bottom translate-x-2/3 -translate-y-[150px] xs:-translate-y-[300px] translate-z-0 scale-200 md:translate-y-1/3 md:scale-150 lg:translate-y-[min(16%,_100px)]">
              <img
                src="/gradients/circle-6.webp"
                className="h-full w-full object-contain"
              />
            </div>
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
        <div className="relative mx-auto my-12 aspect-square w-[90%] max-w-[310px]">
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
