import type { HTMLAttributes } from "react";
import { Arrow2Svg } from "../shared/ArrowSvg";
import GradientCircle from "../shared/GradientCircle";
import { SectionSubTitle, SectionTitle, TitleBlock } from "../shared/Titles";

export default function WhatThisMeans() {
  return (
    <section className="side-padding my-container mt-[150px]">
      {/* titles */}
      <div>
        <TitleBlock
          title="What this means for you"
          subtitle="REDEFINING YOUR WORK DAY"
        />
      </div>

      {/* content */}
      <div className="relative mt-[40px] flex justify-between gap-16 max-lg:flex-col">
        <div className="absolute right-1/2 bottom-1/2 z-0 translate-1/2">
          <GradientCircle blur={"lg"} />
        </div>
        {/* image */}
        <div className="relative w-full max-w-[700px] lg:w-1/2">
          <img src="/AiChatDemo2.svg" />
        </div>
        {/* Accordion */}
        <div className="relative flex w-full max-w-[550px] flex-col lg:w-1/2 xl:w-[40%]">
          <AccordionItem
            title="For your work"
            subtitle="WHERE WE MAKE A DIFFERENCE"
            list={[
              "Turns complex data into clear, actionable insights",
              "Adapts to the tools and systems you already use",
              "Supports collaboration across teams and departments",
              "Scales with your projects as they grow",
            ]}
            active
          />
          <AccordionItem title="For your time" />
          <AccordionItem title="For your results" />
        </div>
      </div>
    </section>
  );
}

function AccordionItem({
  title,
  subtitle,
  list,
  active = false,
  ...props
}: {
  title: string;
  subtitle?: string;
  list?: string[];
  active?: boolean;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="relative" {...props}>
      {/* border top */}
      <div
        className={
          "absolute top-0 right-0 left-0 h-[2px] rounded-full" +
          (active ? " bg-dark-green-blue-gradient" : " bg-black/25")
        }
      />

      {/* content */}
      <p className="text-25 my-4">{title}</p>
      {subtitle && (
        <p className="my-5 font-ibm! text-[11px] font-semibold text-teal xs:text-[12px]">
          {subtitle}
        </p>
      )}
      {list && (
        <div className="mb-8 space-y-[21px]">
          {list.map((string, i) => (
            <div key={i} className="flex items-center gap-5 xs:gap-7">
              <Arrow2Svg className="w-3 xs:w-4" />
              <p className="text-16">{string}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
