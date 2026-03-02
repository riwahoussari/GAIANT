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
    <section
      ref={sectionRef}
      className="relative z-2 mt-[130px] overflow-x-clip"
    >
      {/* bg */}
      <BlurredLandscapeBg loading="lazy" />

      {/* content */}
      <div className="my-container side-padding relative items-stretch justify-between gap-5 pt-16 pb-10 text-white sm:pt-24 sm:pb-16 lg:flex lg:gap-10 lg:py-10 xl:gap-16">
        {/* text */}
        <div className="flex w-full flex-none flex-col items-start justify-between gap-10 max-lg:items-center max-lg:text-center xs:gap-14 lg:w-[440px] lg:gap-20 lg:py-[2.1vw] xl:w-[558px] 2xl:py-[min(300px,1.8vw)]">
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
            className="max-lg:max-w-[460px]"
          >
            <p className="text-[31px] leading-[34px] xs:text-[38px] xs:leading-[42px] lg:text-[36px] lg:leading-[38px] xl:text-[46px] xl:leading-[47px]">
              Your enterprise brain. <br className="sm:hidden" /> One place to
              ask, act,{" "}
              <span className="max-sm:whitespace-nowrap">and build.</span>
            </p>

            <p className="mt-4 text-[15px] leading-[20px] max-lg:mx-auto max-lg:w-9/10 xs:text-[17px] xs:leading-[24px] lg:mt-5 xl:text-[22px] xl:leading-[28px]">
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
                className="mt-[30px] hover:translate-x-1 lg:mt-[40px] xl:mt-[50px]"
                arrow={"spaced"}
              >
                Learn more<span className="hidden"> about Arche platform</span>
              </Button>
            </Link>
          </SlideUpAnim>
        </div>

        {/* dashboard */}
        <SlideUpAnim
          className="relative mt-10 w-full max-w-[884px] scale-113 xs:mt-14 lg:mt-0"
          isInView={isInView}
          transition={{ delay: 0.2 }}
        >
          <Lottie
            animationData={archeSectionLottie}
            loop
            autoplay
            className="h-full w-full"
          />
          <img
            loading="lazy"
            className="absolute inset-0 h-full w-full object-contain"
            src="/svgs/arche-circle.webp"
            aria-hidden
            alt="decorative gradient circle"
          />
        </SlideUpAnim>
      </div>
    </section>
  );
}
