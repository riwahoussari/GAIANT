import { ArticleCard, CardsSlider } from "../../ui/Cards";
import { ARTICLES } from "../../../lib/constants";
import type { ReactNode } from "react";

export default function NewsArticlesCarousel({
  titleBlock,
}: {
  titleBlock: ReactNode;
}) {
  return (
    <section className="my-container side-padding mt-[140px] max-xl:overflow-x-hidden">
      {/* title */}
      {titleBlock}

      {/* cards */}
      <CardsSlider displaySlider={false}>
        {ARTICLES.map((article, i) => (
          <ArticleCard
            key={i}
            className="aspcet-415/390! w-[300px] xs:w-[360px] lg:w-[410px]"
            {...article}
          />
        ))}
      </CardsSlider>
    </section>
  );
}
