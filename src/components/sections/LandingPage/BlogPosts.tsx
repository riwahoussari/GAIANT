import { TitleBlock } from "../../ui/Titles";
import { ArticleCard, CardsSlider } from "../../ui/Cards";
import { ARTICLES } from "../../../lib/constants";

export default function BlogPosts() {
  return (
    <section className="my-container side-padding mt-[140px] max-xl:overflow-x-hidden">
      {/* title */}

      <TitleBlock
        title="Our latest thinking"
        subtitle="INSIGHTS AND IDEAS"
        button="SEE ALL"
      />

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
