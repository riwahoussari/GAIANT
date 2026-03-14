import AccordionSection from "../../../components/sections/AccordionSection";
import GradientCircle from "../../../components/ui/GradientCircle";
import { HORION_PAGE_DATA } from "../../../lib/data";

export default function WhyHorionWins() {
  return (
    <AccordionSection
      className="mt-[130px]!"
      title={HORION_PAGE_DATA.WHY_HORION_WINS.title}
      subtitle={HORION_PAGE_DATA.WHY_HORION_WINS.subtitle}
      img={
        <img
          loading="lazy"
          className="lg-rounded"
          aria-hidden
          sizes="(max-width: 1024px) 100vw, (max-width: 1965px) 50vw, 935px"
          {...HORION_PAGE_DATA.WHY_HORION_WINS.img}
        />
      }
      accordionContent={HORION_PAGE_DATA.WHY_HORION_WINS.accordionContent}
      customGradient={
        <div className="absolute right-0 bottom-6/10 lg:bottom-1/2 z-0 translate-x-1/3 translate-y-1/4 opacity-80 ">
          <GradientCircle colorr={"blue"} blur={"lg"} className=" rotate-135 blur-[max(10vw,100px)]! scale-120 lg:scale-150 xl:scale-125 2xl:scale-100 " />
        </div>
      }
    />
  );
}
