import { useInView } from "motion/react";
import { SlideUpAnim } from "../ui/Anims";
import Button from "../ui/Button";
import { CenteredTitleBlock } from "../ui/Titles";
import { useRef, useState } from "react";
import gradientCircleAnimation from "../../assets/animations/gradient-circle-squared.mp4";
import GradientCircle from "../ui/GradientCircle";

export default function CallToAction() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const [loaded, setLoaded] = useState(false);

  return (
    <section ref={sectionRef} className="my-container side-padding mt-[120px]">
      {/* titles */}
      <CenteredTitleBlock
        className=""
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
      <div className="flex justify-center">
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
