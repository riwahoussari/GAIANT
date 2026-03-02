import { TitleBlock } from "../../../components/ui/Titles";
import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";
import { SlideUpAnim } from "../../../components/ui/Anims";
import { useRef } from "react";
import { useInView } from "motion/react";
import { INDUSTRIES, LANDING_PAGE_DATA } from "../../../lib/data";
import { CardsSlider } from "../../../components/ui/cards/CardsSlider";
import IndustryCard from "../../../components/ui/cards/IndustryCard";

export default function IndustriesWeEmpower() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  return (
    <section
      ref={sectionRef}
      className="side-padding my-container relative z-2 mt-[120px] overflow-x-hidden"
    >
      <svg className="absolute" width="0" height="0">
        <defs>
          <clipPath id={"topRightClip"} clipPathUnits="objectBoundingBox">
            <path
              d={
                "M 0,0 L 0.80,0 A 0.06,0.05 0 0 1 0.84,0.02 L 0.98,0.18 A 0.05,0.06 0 0 1 1,0.22 L 1,1 L 0,1 Z"
              }
            />
          </clipPath>
        </defs>
      </svg>

      {/* title */}
      <TitleBlock
        {...LANDING_PAGE_DATA.INDUSTRIES_WE_EMPOWER}
        button={
          <Link aria-label="See all industries" to="/industries">
            <Button arrow={"normal"} variant={"secondary"}>
              See all
            </Button>
          </Link>
        }
      />

      <CardsSlider>
        {INDUSTRIES.map((industry, i) => (
          <SlideUpAnim
            isInView={isInView}
            transition={{ delay: 0.2 + 0.1 * i }}
            key={i}
          >
            <IndustryCard
              className="aspect-41/39! w-[300px] xs:w-[360px] lg:w-[410px]"
              id={industry.id}
              title={industry.name}
              text={industry.description}
              textClassName={industry.textClassName}
              button={"arrow"}
              imgSrc={industry.img}
              imgSrcSet={industry.imgSrcSet}
              imgSizes={
                "(max-width: 480px) 300px, (max-width: 1024px) 360px, 410px"
              }
              imgClassName={industry.imgSquarePosition}
              loading="lazy"
            />
          </SlideUpAnim>
        ))}
      </CardsSlider>
    </section>
  );
}
