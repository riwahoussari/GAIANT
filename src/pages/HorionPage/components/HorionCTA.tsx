import { useRef } from "react";
import { SlideUpAnim } from "../../../components/ui/Anims";
import Button from "../../../components/ui/Button";
import { CenteredTitleBlock } from "../../../components/ui/Titles";
import { useInView } from "motion/react";
import { Link } from "react-router-dom";

export default function HorionCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  return (
    <section ref={sectionRef} className="relative mt-[120px] overflow-x-clip">
      {/* titles */}
      <div className="my-container side-padding relative z-2 mx-auto text-center sm:top-5 xl:top-10">
        <CenteredTitleBlock
          big
          title="Ready to put AI to work?"
          subtitle="ACCELERATE YOUR SALES"
        />
      </div>

      {/* arche logo */}
      <div className="relative z-0 max-sm:mt-5">
        <SlideUpAnim
          isInView={isInView}
          transition={{ delay: 0.2 }}
          className=" z-1 w-[100%] max-w-[1870px] mx-auto "
        >
          <img
            src="/logos/horion-logo-colored.svg"
            alt="Arche Logo"
            className="w-full"
          />
        </SlideUpAnim>
      </div>

      {/* button */}
      <SlideUpAnim
        transition={{ delay: 0.3 }}
        isInView={isInView}
        className="relative z-2 mt-12 flex justify-center sm:mt-16 md:mt-20 xl:mt-24 2xl:mt-28"
      >
        <Link to="/contact">
          <Button variant={"black"}>Request a demo</Button>
        </Link>
      </SlideUpAnim>
    </section>
  );
}
