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
        <div className="mb-6 flex flex-col gap-x-14 gap-y-2 sm:mb-8 lg:mb-[40px] lg:flex-row lg:items-end xl:gap-16 2xl:gap-44 lg:[&>div]:w-1/2">
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
              loading="lazy"
              src={ARCHE_PAGE_DATA.THE_ARCHE_MODEL.img1.src}
              srcSet={ARCHE_PAGE_DATA.THE_ARCHE_MODEL.img1.srcSet}
              alt={ARCHE_PAGE_DATA.THE_ARCHE_MODEL.img1.alt}
              sizes="(max-width: 768px) 120vw, (max-width: 1024px) 65vw, (max-width: 1965px) 71vw, 1316px"
              className="h-full w-full object-cover max-md:-translate-y-1/10 max-md:scale-150"
            />
          }
          img2={
            <img
              loading="lazy"
              src={ARCHE_PAGE_DATA.THE_ARCHE_MODEL.img2.src}
              srcSet={ARCHE_PAGE_DATA.THE_ARCHE_MODEL.img2.srcSet}
              alt={ARCHE_PAGE_DATA.THE_ARCHE_MODEL.img2.alt}
              sizes="(max-width: 1024px) 35vw, (max-width: 1965px) 29vw, 527px"
              className="h-full w-full object-cover"
            />
          }
        />
      </div>
    </section>
  );
}
