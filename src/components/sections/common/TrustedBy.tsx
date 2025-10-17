import { TRUSTED_BY } from "../../../lib/constants";
import { CardsSlider, TestimonialCard } from "../../ui/Cards";
import { TitleBlock } from "../../ui/Titles";

export function TrustedBy({ className }: { className?: string }) {
  return (
    <section
      className={
        "side-padding my-container mt-[100px] max-xl:overflow-x-hidden " +
        (className || "")
      }
    >
      {/* title */}
      <TitleBlock title="Trusted by" subtitle="WHAT YOU HAD TO SAY" />

      <CardsSlider>
        {TRUSTED_BY.slice(0, 4).map((trustee, i) => (
          <TestimonialCard
            key={i}
            className="aspect-41/39! w-[300px] xs:w-[360px] lg:w-[410px]"
            logo={<img src={trustee.logoSrc} />}
            text={trustee.text}
            position={["tr", "br", "tl"][i % 2] as "tr" | "tl" | "br"}
          />
        ))}
      </CardsSlider>
    </section>
  );
}
