import { useRef, type ReactNode } from "react";
import { useInView } from "motion/react";
import { SlideUpAnim } from "../ui/Anims";
import ArticleCard from "../ui/cards/ArticleCard";
import { ARTICLES } from "../../lib/articles";

export default function NewsArticlesCarousel({
  titleBlock,
}: {
  titleBlock: ReactNode;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  return (
    <section
      ref={sectionRef}
      className="my-container side-padding relative z-2 mt-[120px] overflow-x-hidden"
    >
      <svg className="absolute" width="0" height="0">
        <defs>
          <clipPath id={"bottomRightClip"} clipPathUnits="objectBoundingBox">
            <path
              d={
                "M 0,0 L 1,0 L 1,0.76 A 0.05,0.08 0 0 1 0.98,0.82 L 0.86,0.98 A 0.06,0.05 0 0 1 0.82,1 L 0,1 Z"
              }
            />
          </clipPath>
        </defs>
      </svg>

      {/* title */}
      {titleBlock}

      {/* cards */}
      <div className="grid grid-cols-1 gap-5 gap-y-10! xs:gap-8 sm:gap-5 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        {ARTICLES.slice(1, 4).map((article, i) => (
          <SlideUpAnim
            key={i}
            isInView={isInView}
            transition={{ delay: 0.2 + 0.1 * i }}
            className="w-full max-w-[550px] lg:max-w-none"
          >
            <ArticleCard
              key={i}
              className="w-full"
              {...article}
            />
          </SlideUpAnim>
        ))}
      </div>
    </section>
  );
}
