import { useInView } from "motion/react";
import { SlideUpAnim } from "../ui/Anims";
import Button from "../ui/Button";
import { CenteredTitleBlock } from "../ui/Titles";
import { useRef, useState } from "react";
import gradientCircleAnimation from "../../assets/animations/gradient-circle-squared.mp4";
import GradientCircle from "../ui/GradientCircle";

export default function CallToAction({
  withGradientCircle = false,
}: {
  withGradientCircle?: boolean;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const [loaded, setLoaded] = useState(false);

  return (
    <section
      ref={sectionRef}
      className="my-container side-padding relative z-1 mt-[120px] overflow-x-clip"
    >
      {/* gradient circles */}
      {withGradientCircle && (
        <>
          <div className="absolute bottom-full translate-y-1/2 -rotate-30 left-0 z-2 -translate-x-1/3 opacity-50">
            <GradientCircle
              className="origin-top blur-[max(6vw,60px)]! lg:scale-120 "
              colorr={"teal"}
            />
          </div>

          <div className="absolute bottom-1/4 translate-y-1/2 right-0 z-2 translate-x-8/10 opacity-50">
            <GradientCircle
              className="origin-bottom blur-[max(6vw,60px)]! "
              colorr={"teal"}
            />
          </div>
        </>
      )}

      {/* titles */}
      <CenteredTitleBlock
        className="relative z-4"
        big={true}
        title="Let’s make Ai work for you"
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
            onCanPlay={() => setLoaded(true)}
            className="absolute inset-0 z-1 h-full w-full scale-110 object-contain"
          />
          {!loaded && (
            <GradientCircle className="absolute inset-0 z-0 h-full w-full scale-80" />
          )}
        </div>
      </SlideUpAnim>

      {/* button */}
      <div className="flex justify-center relative z-4">
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
