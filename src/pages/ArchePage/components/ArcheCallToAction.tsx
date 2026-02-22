import { useRef } from "react";
import { SlideUpAnim } from "../../../components/ui/Anims";
import Button from "../../../components/ui/Button";
import { CenteredTitleBlock } from "../../../components/ui/Titles";
import { useInView } from "motion/react";

export default function ArcheCallToAction() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  return (
    <section
      ref={sectionRef}
      className="relative mt-[120px] overflow-x-clip"
    >
      {/* titles */}
      <div className="my-container side-padding relative z-2 mx-auto space-y-5 text-center sm:top-5 xl:top-10">
        <CenteredTitleBlock
          big
          title="Ready to put AI to work?"
          subtitle="LET’S ARCHĒ"
        />
      </div>

      {/* arche logo */}
      <div className="relative z-0 max-sm:mt-5">
        {/* gradient circle */}
        <div className="absolute top-1/2 left-1/2 z-0 w-full max-w-[1328px] -translate-1/2 opacity-50 max-xs:scale-130 xs:opacity-60 sm:opacity-70 md:opacity-80 2xl:scale-110">
          <img
            src="/gradients/circle-beige.png"
            className="h-full w-full object-contain"
          />
        </div>

        <SlideUpAnim
          isInView={isInView}
          transition={{ delay: 0.2 }}
          className="absolute top-1/2 left-1/2 z-1 w-[103vw] max-w-[1950px] min-w-[350px] -translate-1/2"
        >
          <img
            src="/logos/arche-logo-teal.svg"
            alt="Arche Logo"
            className="w-full opacity-30"
          />
          <img
            alt="Arche Logo"
            src="/logos/arche-logo-beige.svg"
            className="absolute top-0 w-full opacity-30"
          />
        </SlideUpAnim>
        {/* placeholder to maintain height */}
        <div className="w-[100vw] min-w-[350px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
          <img
            alt="Arche Logo"
            src="/logos/arche-logo-teal.svg"
            className="w-full opacity-0"
          />
        </div>
      </div>

      {/* button */}
      <SlideUpAnim
        transition={{ delay: 0.3 }}
        isInView={isInView}
        className="relative z-2 mt-12 flex justify-center sm:mt-16 md:mt-20 xl:mt-24 2xl:mt-28"
      >
        <Button variant={"black"}>Request a demo</Button>
      </SlideUpAnim>
    </section>
  );
}
