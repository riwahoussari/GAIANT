import { Link } from "react-router-dom";
import { BlurredLandscapeBg } from "../../../components/ui/Backgrounds";
import Button from "../../../components/ui/Button";
import { useRef } from "react";
import { useInView } from "motion/react";
import { SlideUpAnim } from "../../../components/ui/Anims";
import { LANDING_PAGE_DATA } from "../../../lib/data";
import Lottie from "lottie-react";
import archeSectionLottie from "../../../assets/animations/landing-page/arche-section-lottie.json";

export default function ArcheSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });
  return (
    <section ref={sectionRef} className="relative mt-[200px] overflow-x-clip">
      {/* bg */}
      <BlurredLandscapeBg />

      {/* content */}
      <div className="my-container side-padding relative items-stretch justify-between gap-5 pt-16 pb-10 sm:pt-24 sm:pb-16 lg:py-10 text-white lg:flex lg:gap-10 xl:gap-16">
        {/* text */}
        <div className="flex flex-col md:flex-row lg:flex-col items-start justify-between lg:justify-around gap-10 xs:gap-20 2xl:justify-between 2xl:py-20 flex-none w-full lg:w-[440px] xl:w-[558px]">
          {/* arche */}
          <SlideUpAnim isInView={isInView}>
            <img
              src="/logos/arche-logo.svg"
              className="w-[120px] md:w-[154px]"
              alt="Arche Logo"
            />
          </SlideUpAnim>

          {/* text */}
          <SlideUpAnim
            isInView={isInView}
            transition={{ delay: 0.35 }}
            className=" max-lg:max-w-[460px] "
          >
            <p className="text-[31px] leading-[34px] xs:text-[38px] xs:leading-[42px] lg:text-[36px] lg:leading-[38px] xl:text-[46px] xl:leading-[47px]">
              {LANDING_PAGE_DATA.ARCHE_SECTION.title}
            </p>

            <p className="mt-4 text-[15px] leading-[20px] max-lg:w-9/10 xs:mt-5 xs:text-[17px] xs:leading-[24px] xl:text-[22px] xl:leading-[28px]">
              {LANDING_PAGE_DATA.ARCHE_SECTION.text
                .split("<br>")
                .map((line, i) => (
                  <span key={i}>
                    {line}
                    <br className="max-[385px]:hidden" />
                  </span>
                ))}
            </p>
            <Link to="/arche" aria-label="Lean more about Arche platform">
              <Button
                className="mt-[30px] hover:translate-x-1 xs:mt-[40px] xl:mt-[50px]"
                arrow={"spaced"}
                size={"md"}
              >
                Learn more<span className="hidden"> about Arche platform</span>
              </Button>
            </Link>
          </SlideUpAnim>
        </div>

        {/* dashboard */}
        <SlideUpAnim
          className="relative w-full max-w-[884px] mt-12 sm:mt-14 lg:mt-0 scale-113 "
          isInView={isInView}
          transition={{ delay: 0.2 }}
        >
          <Lottie
            animationData={archeSectionLottie}
            loop
            autoplay
            className="h-full w-full "
          />
          <img className="absolute inset-0 w-full h-full object-contain" src="/demos/arche-circle.png" aria-hidden alt="decorative gradient circle" />
        </SlideUpAnim>
      </div>
    </section>
  );
}
