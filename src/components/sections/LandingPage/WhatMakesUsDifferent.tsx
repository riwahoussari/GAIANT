import { GlassCard } from "../../ui/Cards";
import GradientCircle from "../../ui/GradientCircle";
import { SectionSubTitle, SectionTitle } from "../../ui/Titles";

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
          <div className="-translate-x- absolute bottom-1/2 -z-1 w-[500px] translate-y-1/2 opacity-70 max-sm:left-0 max-sm:scale-y-200 sm:right-0 sm:translate-x-1/2 lg:w-[40vw] lg:min-w-[550px]">
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

          <GlassCard
            title="Transparency"
            subtitle="WE BUILD AI YOU CAN TRUST."
            text="Clear processes, explainable outcomes, and full visibility at every stage"
          />
          <GlassCard
            title="Transparency"
            subtitle="WE BUILD AI YOU CAN TRUST."
            text="Clear processes, explainable outcomes, and full visibility at every stage"
          />
          <GlassCard
            title="Transparency"
            subtitle="WE BUILD AI YOU CAN TRUST."
            text="Clear processes, explainable outcomes, and full visibility at every stage"
          />
          <GlassCard
            title="Transparency"
            subtitle="WE BUILD AI YOU CAN TRUST."
            text="Clear processes, explainable outcomes, and full visibility at every stage"
          />
        </div>
      </div>
    </section>
  );
}
