import { useRef, useState } from "react";
import { motion as m, useInView } from "motion/react";
import GradientCircle from "../../../components/ui/GradientCircle";
import { CenteredTitleBlock } from "../../../components/ui/Titles";
import { SlideUpAnim } from "../../../components/ui/Anims";
import { LANDING_PAGE_DATA } from "../../../lib/data";

const ICONS = [
  "/tools/Rectangle%20100.webp",
  "/tools/Rectangle%20101.webp",
  "/tools/Rectangle%2099.webp",
  "/tools/Rectangle%2098.webp",
  "/tools/Rectangle%20104.webp",
  "/tools/Rectangle%20108.webp",
  "/tools/Rectangle%20106.webp",
  "/tools/Rectangle%20103.webp",
  "/tools/Rectangle%20107.webp",
  "/tools/Rectangle%20102.webp",
  "/tools/Rectangle%20105.webp",
  "/tools/Rectangle%20109.webp",
];

const OPACITIES = [
  " max-lg:opacity-50 lg:opacity-25",
  " max-lg:opacity-75 lg:opacity-50",
  " lg:opacity-75",
  " ",
  " max-lg:opacity-75",
  " max-lg:opacity-50",
  " max-lg:opacity-50",
  " max-lg:opacity-75",
  " ",
  " lg:opacity-75",
  " max-lg:opacity-75 lg:opacity-50",
  " max-lg:opacity-50 lg:opacity-25",
];

export default function Tools() {
  const [translateYs, setTranslateYs] = useState<number[]>(Array(12).fill(0));

  const updateTranslateYValues = (i: number) => {
    setTranslateYs(() => {
      const next = Array(12).fill(0);
      next[i] = 30;
      if (i - 1 >= 0) next[i - 1] = 15;
      if (i - 2 >= 0) next[i - 2] = 3;
      if (i + 1 < next.length) next[i + 1] = 15;
      if (i + 2 < next.length) next[i + 2] = 3;
      return next;
    });
  };

  const vanishTranslateYValues = () => setTranslateYs(Array(12).fill(0));

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  return (
    <section
      ref={sectionRef}
      className="side-padding relative mt-[120px] flex flex-col items-center overflow-x-clip"
    >
      {/* background blur */}
      <div className="absolute top-1/2 left-0 -z-1 w-[40vw] -translate-1/2 opacity-70">
        <GradientCircle blur="lg" />
      </div>

      {/* titles */}
      <CenteredTitleBlock
        className="max-w-[766px]"
        big={true}
        title={LANDING_PAGE_DATA.TOOLS.title}
        subtitle={LANDING_PAGE_DATA.TOOLS.subtitle}
      />

      {/* ICONS */}
      <div className="relative mt-16 w-full">
        <div
          onMouseLeave={vanishTranslateYValues}
          className="absolute right-1/2 flex w-max translate-x-1/2 flex-col items-center justify-between gap-[min(18px,2.5vw)] lg:flex-row"
        >
          {/* Split into two rows */}
          {[0, 1].map((row) => (
            <div
              key={row}
              className={
                "flex items-center justify-between gap-[min(18px,2.5vw)] " +
                (row === 1 ? " max-lg:flex-row-reverse" : "")
              }
            >
              {ICONS.slice(row * 6, row * 6 + 6).map((src, i) => {
                const index = row * 6 + i;
                return (
                  <SlideUpAnim
                    key={index}
                    isInView={isInView}
                    transition={{
                      delay: 0.3 + 0.1 * Math.abs(ICONS.length / 2 - index),
                    }}
                  >
                    <m.div
                      animate={{ y: -translateYs[index] + "%" }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.25,
                      }}
                      className="max-lg:pointer-events-none"
                      onMouseEnter={() => updateTranslateYValues(index)}
                    >
                      <Icon className={OPACITIES[index]} src={src} />
                    </m.div>
                  </SlideUpAnim>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Icon({ src, className = "" }: { src: string; className?: string }) {
  return (
    <img
      src={src}
      className={
        "aspect-square w-[16vw] max-w-[120px] rounded-lg xs:rounded-xl sm:w-[7.5vw] sm:min-w-[90px] " +
        className
      }
      alt="Icon for a tool"
    />
  );
}
