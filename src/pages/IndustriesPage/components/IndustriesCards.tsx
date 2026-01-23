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
      className="side-padding my-container grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
    >
      {INDUSTRIES.map((industry, i) => (
        <SlideUpSelf key={i}>
          <IndustryCard
            fetchPriority={i < 3 ? "high" : undefined}
            className="aspect-11/9! w-full"
            id={industry.id}
            title={industry.name}
            text={industry.description}
            button={!!industry.description}
            imgSrc={industry.img}
          />
        </SlideUpSelf>
      ))}
    </section>
  );
}
