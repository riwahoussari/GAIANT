import { Fragment, useRef, useState } from "react";
import { SlideUpAnim, SlideUpSelf } from "../../../components/ui/Anims";
import { useInView } from "motion/react";
import { HORION_PAGE_DATA } from "../../../lib/data";
import { TitleBlock } from "../../../components/ui/Titles";

export default function Stats() {
  const stats = HORION_PAGE_DATA.STATS.stats;
  const divRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(divRef, { once: true, margin: "-5%" });
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="my-container side-padding relative z-2 mt-[120px]">
      <div className="mb-2 justify-center max-lg:flex max-lg:text-center sm:mb-10 lg:mb-12">
        <TitleBlock {...HORION_PAGE_DATA.STATS} />
      </div>

      <div className="flex items-center gap-8 max-lg:flex-col lg:items-start lg:justify-between lg:gap-12">
        <SlideUpSelf
          initial={{ y: "50px" }}
          className="max-w-[563px] lg:min-w-[400px] lg:w-full"
        >
          <img
            aria-hidden
            src={HORION_PAGE_DATA.STATS.img}
            className={
              "lg-rounded aspect-563/528 w-full " +
              (imgLoaded ? "" : " shimmer")
            }
            onLoad={() => setImgLoaded(true)}
            alt="dashboard showcasing stats"
          />
        </SlideUpSelf>
        <div ref={divRef} className="max-w-[563px] w-full lg:max-w-[650px] lg:py-5 lg:w-6/10">
          {stats.map((s, i) => (
            <Fragment key={i}>
              <SlideUpAnim
                isInView={isInView}
                transition={{ delay: 0.1 * i }}
                key={i}
              >
                <Row {...s} key={i} />
              </SlideUpAnim>
              {i !== stats.length - 1 && (
                <div className="bg-blue-gradient my-8 h-0.5 w-full rounded-full min-[1070px]:my-10 min-[1126px]:my-12" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({
  stat,
  title,
  text,
}: {
  stat: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex w-full gap-2 max-xs:flex-col xs:items-end xs:justify-between xs:gap-8 max-w-[500px] lg:min-w-[420px]">
      <h3 className="text-[36px] leading-[1] sm:text-[40px] xl:text-[50px]">
        {stat} <span className="sr-only">{title}</span>
      </h3>

      <div className="">
        <p aria-hidden className="text-[25px] leading-[47px]">
          {title}
        </p>
        <p className="max-w-[298px] text-[17px] leading-[21px]">{text}</p>
      </div>
    </div>
  );
}
