import type { HTMLAttributes } from "react";
import { Arrow2Svg } from "../shared/ArrowSvg";
import GradientCircle from "../shared/GradientCircle";
import { SectionSubTitle, SectionTitle } from "../shared/Titles";

export default function WhatThisMeans() {
  return (
    <section className="side-padding mt-[150px]">
      {/* titles */}
      <div>
        <SectionSubTitle>REDEFINING YOUR WORK DAY</SectionSubTitle>
        <SectionTitle>What this means for you</SectionTitle>
      </div>

      {/* content */}
      <div className="mt-[40px] flex justify-between gap-16 relative">
        <div className="absolute right-1/2 bottom-1/2 translate-1/2 z-0">
          <GradientCircle blur={"lg"} />
        </div>
        <div className="w-1/2 relative">
          <img src="/AiChatDemo2.svg" />
        </div>
        <div className="relative flex flex-col w-[40%]">
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
          "absolute top-0 left-0 right-0 h-[2px] rounded-full" +
          (active ? " bg-dark-green-blue-gradient" : " bg-black/25")
        }
      />

      {/* content */}
      <p className="text-[25px] my-4">{title}</p>
      {subtitle && (
        <p className="my-5 text-teal text-[12px] font-ibm! font-semibold">
          {subtitle}
        </p>
      )}
      {list && (
        <div className="space-y-[21px] mb-8">
          {list.map((string, i) => (
            <div key={i} className="flex items-center gap-7">
              <Arrow2Svg className="w-4" />
              <p className="text-[16px] leading-[21px]">{string}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
