import GradientCircle from "../shared/GradientCircle";
import { SectionSubTitle, SectionTitle } from "../shared/Titles";

export default function WhatMakesUsDifferent() {
  return (
    <section className=" mt-[110px] side-padding overflow-x-clip">
      {/* Titles */}
      <div className="grid grid-cols-3 gap-5">
        <SectionSubTitle className="mb-[110px] pt-3">
          WHAT MAKES US DIFFERENT
        </SectionSubTitle>
        <SectionTitle className="mb-9 col-span-2">
          Turning complex AI into your clear advantage
        </SectionTitle>
      </div>

      {/* description and cards */}
      <div className="grid grid-cols-3 gap-5">
        {/* section description */}
        <p className="text-[17px] w-[66%]">
          We bring clarity to complexity, combining secure deployment, tailored
          solutions, and ongoing support to give your business a lasting
          advantage.
          <br />
          <br />
          <span className="font-bold">
            With us, AI isn’t just technology — it’s your edge in a changing
            world.
          </span>
        </p>

        {/* cards */}
        <div className="col-span-2 gap-5 grid grid-cols-2 relative ">
          <div className="absolute -z-1 right-0 bottom-1/2 translate-1/2 w-[40vw] opacity-70">
            <GradientCircle blur={"lg"} />
          </div>

          <Card
            title="Transparency"
            subtitle="WE BUILD AI YOU CAN TRUST."
            text="Clear processes, explainable outcomes, and full visibility at every stage"
          />
          <Card
            title="Transparency"
            subtitle="WE BUILD AI YOU CAN TRUST."
            text="Clear processes, explainable outcomes, and full visibility at every stage"
          />
          <Card
            title="Transparency"
            subtitle="WE BUILD AI YOU CAN TRUST."
            text="Clear processes, explainable outcomes, and full visibility at every stage"
          />
          <Card
            title="Transparency"
            subtitle="WE BUILD AI YOU CAN TRUST."
            text="Clear processes, explainable outcomes, and full visibility at every stage"
          />
        </div>
      </div>
    </section>
  );
}

function Card({
  title,
  subtitle,
  text,
}: {
  title: string;
  subtitle: string;
  text: string;
}) {
  return (
    <div className="p-6 bg-white/50">
      <div className="flex justify-between items-end">
        <p className="text-[25px]">{title}</p>
        <div className="border-2 border-red-500 rounded-full w-[33%] aspect-square" />
      </div>
      <div className="mt-16 space-y-4">
        <p className="font-ibm! font-semibold text-[12px] leading-[21px] text-teal">
          {subtitle}
        </p>
        <p className="text-[16px] leading-[21px]">{text}</p>
      </div>
    </div>
  );
}
