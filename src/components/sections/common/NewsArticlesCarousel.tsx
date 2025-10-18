import { ArticleCard, CardsSlider } from "../../ui/Cards";
import { ARTICLES } from "../../../lib/constants";
import { useRef, type ReactNode } from "react";
import { useInView } from "motion/react";
import { SlideUpAnim } from "../../ui/Anims";

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
      className="my-container side-padding mt-[140px] max-xl:overflow-x-hidden"
    >
      {/* title */}
      {titleBlock}

      {/* cards */}
      <CardsSlider displaySlider={false}>
        {ARTICLES.map((article, i) => (
          <SlideUpAnim
            isInView={isInView}
            transition={{ delay: 0.2 + 0.1 * i }}
          >
            <ArticleCard
              key={i}
              className="aspcet-415/390! w-[300px] xs:w-[360px] lg:w-[410px]"
              {...article}
            />
          </SlideUpAnim>
        ))}
      </CardsSlider>
    </section>
  );
}
