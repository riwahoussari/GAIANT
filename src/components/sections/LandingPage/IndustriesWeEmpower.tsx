import { INDUSTRIES } from "../../../lib/constants";
import ArrowSvg from "../../ui/ArrowSvg";
import { TitleBlock } from "../../ui/Titles";
import { IndustryCard } from "../common/Cards";

export default function IndustriesWeEmpower() {
  return (
    <section className="side-padding my-container mt-[100px] max-xl:overflow-x-hidden">
      {/* title */}
      <TitleBlock
        subtitle="TAILORED TO EVERY SECTOR"
        title="Industries We Empower"
        button="SEE ALL"
      />

      {/* cards */}
      <div className="mt-[40px] xl:overflow-x-hidden">
        <div className="flex w-max items-start gap-5">
          {INDUSTRIES.slice(0, 4).map((industry, i) => (
            <IndustryCard
              key={i}
              className="aspect-41/39! w-[300px] xs:w-[360px] lg:w-[410px]"
              title={industry.name}
              text={industry.description}
              button={!!industry.description}
              imgSrc={industry.img}
            />
          ))}
        </div>
      </div>

      {/* slider */}
      <div className="mx-auto mt-10 flex w-9/10 max-w-[580px] items-center justify-center gap-3 sm:gap-5 lg:w-1/2 lg:min-w-[580px]">
        <ArrowSvg
          color="var(--color-teal)"
          className="w-6 rotate-y-180 cursor-pointer 2xl:-translate-y-[1px]"
        />
        <div className="flex w-full items-center justify-center gap-1.5 sm:gap-3">
          <div className="bg-dark-green-blue-gradient h-1 w-[20%] rounded-full" />
          <div className="h-1 w-[80%] rounded-full bg-black/25" />
        </div>
        <ArrowSvg
          color="var(--color-teal)"
          className="w-6 cursor-pointer 2xl:-translate-y-[1px]"
        />
      </div>
    </section>
  );
}
