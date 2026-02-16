import { useRef } from "react";
import { SlideUpAnim } from "../../../components/ui/Anims";
import GradientCircle from "../../../components/ui/GradientCircle";
import ImagesLayout from "../../../components/ui/ImagesLayout";
import { TitleBlock } from "../../../components/ui/Titles";
import { useInView } from "motion/react";
import { ARCHE_PAGE_DATA } from "../../../lib/data";

export default function TheArcheModel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  return (
    <section
      ref={sectionRef}
      className="relative z-2 mt-[120px] overflow-x-clip"
    >
      <div className="absolute top-0 right-0 z-0 translate-x-1/2 opacity-80">
        <GradientCircle colorr={"beige"} blur={"lg"} />
      </div>

      <div className="side-padding my-container">
        {/* text */}
        {/* <div className=" grid items-end sm:gap-y-5 lg:grid-cols-7">
          <div className="col-span-5 max-lg:max-w-[600px]">
            <TitleBlock
              title={ARCHE_PAGE_DATA.THE_ARCHE_MODEL.title}
              subtitle={ARCHE_PAGE_DATA.THE_ARCHE_MODEL.subtitle}
            />
          </div>
          <SlideUpAnim
            transition={{ delay: 0.3 }}
            initial={{ y: "50px" }}
            isInView={isInView}
            className="col-span-2 lg:ms-2"
          >
            <p className="text-16 max-w-[400px] max-sm:-mt-4">
              {ARCHE_PAGE_DATA.THE_ARCHE_MODEL.text}
            </p>
          </SlideUpAnim>
        </div>
         */}
        <div className="flex flex-col gap-x-14 gap-y-2 lg:flex-row lg:items-end xl:gap-16 2xl:gap-44 lg:[&>div]:w-1/2 mb-6 sm:mb-8 lg:mb-[40px] ">
          <div className="relative overflow-visible">
            <TitleBlock
              // titleClassName={titleClassName}
              title={ARCHE_PAGE_DATA.THE_ARCHE_MODEL.title}
              subtitle={ARCHE_PAGE_DATA.THE_ARCHE_MODEL.subtitle}
            />
          </div>
          <SlideUpAnim
            isInView={isInView}
            transition={{ delay: 0.1 }}
            className="max-w-[560px] max-sm:-mt-6"
          >
            <p className="text-16">{ARCHE_PAGE_DATA.THE_ARCHE_MODEL.text}</p>
          </SlideUpAnim>
        </div>

        {/* images */}
        <ImagesLayout
          img1={
            <img
              src={ARCHE_PAGE_DATA.THE_ARCHE_MODEL.img1.src}
              alt={ARCHE_PAGE_DATA.THE_ARCHE_MODEL.img1.alt}
              className="h-full w-full object-cover"
            />
          }
          img2={
            <img
              src={ARCHE_PAGE_DATA.THE_ARCHE_MODEL.img2.src}
              alt={ARCHE_PAGE_DATA.THE_ARCHE_MODEL.img2.alt}
              className="h-full w-full object-cover"
            />
          }
        />
      </div>
    </section>
  );
}
