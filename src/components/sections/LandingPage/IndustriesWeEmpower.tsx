import { INDUSTRIES } from "../../../lib/constants";
import { TitleBlock } from "../../ui/Titles";
import { CardsSlider, IndustryCard } from "../../ui/Cards";

export default function IndustriesWeEmpower() {
  return (
    <section className="side-padding my-container mt-[100px] max-xl:overflow-x-hidden">
      {/* title */}
      <TitleBlock
        subtitle="TAILORED TO EVERY SECTOR"
        title="Industries We Empower"
        button="SEE ALL"
      />

      <CardsSlider>
        {INDUSTRIES.map((industry, i) => (
          <IndustryCard
            key={i}
            className="aspect-41/39! w-[300px] xs:w-[360px] lg:w-[410px]"
            title={industry.name}
            text={industry.description}
            button={!!industry.description}
            imgSrc={industry.img}
          />
        ))}
      </CardsSlider>
    </section>
  );
}


