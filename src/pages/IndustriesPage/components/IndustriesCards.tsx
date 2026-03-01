import type { RefObject } from "react";
import { SlideUpSelf } from "../../../components/ui/Anims";
import { INDUSTRIES } from "../../../lib/data";
import IndustryCard from "../../../components/ui/cards/IndustryCard";

export default function IndustriesCards({
  navbarTriggerRef,
}: {
  navbarTriggerRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <section
      ref={navbarTriggerRef}
      className="side-padding my-container relative z-2 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
    >
      <svg className="absolute" width="0" height="0">
        <defs>
          <clipPath id={"topRightClip"} clipPathUnits="objectBoundingBox">
            <path
              d={
                "M 0,0 L 0.82,0 A 0.06,0.05 0 0 1 0.86,0.02 L 0.98,0.18 A 0.05,0.08 0 0 1 1,0.24 L 1,1 L 0,1 Z"
              }
            />
          </clipPath>
        </defs>
      </svg>

      {INDUSTRIES.map((industry, i) => (
        <SlideUpSelf key={i}>
          <IndustryCard
            fetchPriority={i < 3 ? "high" : undefined}
            className="aspect-440/342! w-full"
            id={industry.id}
            title={industry.name}
            text={industry.description}
            textClassName={industry.textClassName}
            button={!!industry.description ? "button" : "none"}
            imgSrc={industry.img}
            imgSrcSet={industry.imgSrcSet}
            imgSizes={"(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"}
            imgClassName={industry.imgPosition}
          />
        </SlideUpSelf>
      ))}
    </section>
  );
}
