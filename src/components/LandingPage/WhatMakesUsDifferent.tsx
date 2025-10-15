import GradientCircle from "../shared/GradientCircle";
import { SectionSubTitle, SectionTitle } from "../shared/Titles";

export default function WhatMakesUsDifferent() {
  return (
    <section className="mt-[110px] overflow-x-clip">
      {/* Titles */}
      <div className="my-container side-padding flex grid-cols-3 flex-col gap-5 lg:grid lg:gap-8">
        <SectionSubTitle className="pt-3 lg:mb-[110px]">
          WHAT MAKES US DIFFERENT
        </SectionSubTitle>
        <SectionTitle className="col-span-2 mb-6 max-w-[470px] sm:mb-9">
          Turning complex AI into your clear advantage
        </SectionTitle>
      </div>

      {/* description and cards */}
      <div className="my-container side-padding grid-cols-3 gap-8 lg:grid">
        {/* section description */}
        <p className="max-w-[310px] text-[15px] max-lg:hidden xs:text-[17px]">
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
        <div className="relative col-span-2 grid gap-5 max-lg:mt-[30px] max-sm:mt-[0] sm:grid-cols-2">
          <div className="-translate-x- absolute bottom-1/2 -z-1 w-[500px] translate-y-1/2 opacity-70 max-sm:left-0 sm:right-0 sm:translate-x-1/2 lg:w-[40vw] lg:min-w-[550px]">
            <GradientCircle blur={"lg"} />
          </div>

          <p className="pe-6 pt-4 text-[15px] max-lg:mb-[30px] xs:text-[17px] lg:hidden lg:max-w-[310px]">
            We bring clarity to complexity, combining secure deployment,
            tailored solutions, and ongoing support to give your business a
            lasting advantage.
            <br />
            <br />
            <span className="font-bold">
              With us, AI isn’t just technology — it’s your edge in a changing
              world.
            </span>
          </p>

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
    <div className="max-w-[466px] bg-white/50 p-3 xs:p-6">
      {/* title & circle */}
      <div className="relative flex items-end justify-end gap-2">
        <p className="text-25 absolute bottom-0 left-0 z-1">{title}</p>
        <div className="aspect-square w-[33%] min-w-[80px] rounded-full border-2 border-red" />
      </div>
      {/* text */}
      <div className="mt-8 space-y-2 xs:mt-10 xs:space-y-3 2xl:mt-16 2xl:space-y-4">
        <p className="font-ibm! text-[11px] leading-[21px] font-semibold text-teal xs:text-[12px]">
          {subtitle}
        </p>
        <p className="text-[15px] leading-[21px] xs:text-[16px]">{text}</p>
      </div>
    </div>
  );
}
