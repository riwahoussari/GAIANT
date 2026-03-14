import { Fragment, useRef, useState } from "react";
import { SlideUpAnim, SlideUpSelf } from "../../../components/ui/Anims";
import { useInView } from "motion/react";
import { HORION_PAGE_DATA } from "../../../lib/data";
import { TitleBlock } from "../../../components/ui/Titles";
import GradientCircle from "../../../components/ui/GradientCircle";

export default function Stats() {
  const stats = HORION_PAGE_DATA.STATS.stats;
  const divRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(divRef, { once: true, margin: "-5%" });
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="my-container side-padding relative z-2 mt-[120px]">
      <div className="absolute right-0 bottom-1/10 z-0 translate-x-1/3 translate-y-1/4 opacity-80 lg:bottom-1/2">
        <GradientCircle
          colorr={"blue"}
          blur={"lg"}
          className="rotate-135 blur-[max(10vw,100px)]! lg:scale-90 xl:scale-100"
        />
      </div>

      <div className="relative z-1 mb-2 justify-center max-lg:flex max-lg:text-center sm:mb-10 lg:mb-12">
        <TitleBlock {...HORION_PAGE_DATA.STATS} />
      </div>

      <div className="relative z-1 flex items-center gap-8 max-lg:flex-col lg:items-start lg:justify-between lg:gap-12">
        <SlideUpSelf
          initial={{ y: "50px" }}
          className="max-w-[563px] lg:w-full lg:min-w-[400px]"
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
        <div
          ref={divRef}
          className="w-full max-w-[563px] lg:w-6/10 lg:max-w-[650px] lg:py-5"
        >
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
    <div className="flex w-full max-w-[500px] gap-2 max-xs:flex-col xs:items-end xs:justify-between xs:gap-8 lg:min-w-[420px]">
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
