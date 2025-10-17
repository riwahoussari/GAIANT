import Hero from "../components/sections/common/Hero";
import AccordionSection from "../components/sections/common/AccordionSection";
import Button from "../components/ui/Button";
import { TitleBlock } from "../components/ui/Titles";
import { GlassCard } from "../components/ui/Cards";
import GradientCircle from "../components/ui/GradientCircle";
import CallToAction from "../components/sections/common/CallToAction";
import { TrustedBy } from "../components/sections/common/TrustedBy";

export default function () {
  return (
    <main>
      <Hero
        spacing="max"
        title="AI for faster decisions and lower risk"
        subtitle="BANKING & FINANCIAL SERVICES"
        text="Speed decision-making, detect fraud, and automate reporting with secure, scalable AI — cutting costs while surfacing high-value insights."
        button={
          <Button arrow={"spaced"} className="xl:mb-20">
            REQUEST A DEMO
          </Button>
        }
        background={
          <div className="relative h-full">
            <div className="h-full w-[120vw]! -translate-x-[10vw] -translate-y-[10%] blur-[max(1vw,10px)]">
              <img
                src="/industries/Industries-banking.jpg"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        }
      />
      <AccordionSection
        title="Smarter moves with fewer resources"
        subtitle="TRUSTED BY FINANCIAL LEADERS"
        text="AI often adds people and process. Done right, it finds fraud, streamlines ops, and makes services human — real impact without the extra overhead."
        img={
          <div>
            <img src="/industries/man-on-laptop.jpg" />
            <img
              className="absolute top-0 left-0 z-1"
              src="/industries/AIPrompt.svg"
            />
          </div>
        }
        accordionContent={[
          {
            title: "Improve knowledge management",
            subtitle: "STRENGTHEM TRUST AND EFFICIENCY",
            list: [
              "Detect fraud and protect sensitive data",
              "Automate reporting with precision and speed",
              "Ensure compliance across every transaction",
              "Deliver clear insights for smarter decisions",
            ],
            active: true,
          },
          {
            title: "Reduce busywork",
          },
          {
            title: "Automate common support tickets",
          },
        ]}
      />
      <UseCases />
      <OurApproach />
      <TrustedBy />
      <CallToAction />
    </main>
  );
}

function UseCases() {
  return (
    <section className="side-padding my-container relative mt-[120px]">
      <div className="absolute top-[calc(50%+100px)] left-1/2 z-0 -translate-1/2 opacity-70">
        <GradientCircle
          className="blur-[max(6vw,60px)]! max-md:scale-200 max-sm:scale-y-400"
          colorr={"teal"}
        />
      </div>

      {/* title */}
      <div className="relative grid grid-cols-1 items-end sm:gap-5 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        <TitleBlock title="Use Cases" subtitle="BANKING & FINANCIAL SERVICES" />
        <p className="text-16 max-w-[292px]">
          See how leading firms are streamlining operations and scaling insight.
        </p>
        <Button
          className="place-self-start max-sm:mt-3 xl:place-self-end"
          variant={"black"}
        >
          REQUEST A DEMO
        </Button>
      </div>

      {/* cards */}
      <div className="relative mt-16 grid grid-cols-1 gap-5 max-md:max-w-[520px] md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        <GlassCard
          className="max-w-none!"
          title="Transparency"
          subtitle="WE BUILD AI YOU CAN TRUST."
          text="Clear processes, explainable outcomes, and full visibility at every stage"
        />
        <GlassCard
          className="max-w-none!"
          title="Transparency"
          subtitle="WE BUILD AI YOU CAN TRUST."
          text="Clear processes, explainable outcomes, and full visibility at every stage"
        />
        <GlassCard
          className="max-w-none!"
          title="Transparency"
          subtitle="WE BUILD AI YOU CAN TRUST."
          text="Clear processes, explainable outcomes, and full visibility at every stage"
        />
        <GlassCard
          className="max-w-none!"
          title="Transparency"
          subtitle="WE BUILD AI YOU CAN TRUST."
          text="Clear processes, explainable outcomes, and full visibility at every stage"
        />
        <GlassCard
          className="max-w-none!"
          title="Transparency"
          subtitle="WE BUILD AI YOU CAN TRUST."
          text="Clear processes, explainable outcomes, and full visibility at every stage"
        />
        <GlassCard
          className="max-w-none!"
          title="Transparency"
          subtitle="WE BUILD AI YOU CAN TRUST."
          text="Clear processes, explainable outcomes, and full visibility at every stage"
        />
      </div>
    </section>
  );
}

function OurApproach() {
  return (
    <section className="side-padding my-container mt-[120px]">
      <div className="grid grid-cols-1 items-end sm:gap-5 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        <TitleBlock
          title="Our Approach"
          subtitle="SYSTEMS THAT FIT, NOT FORCE"
        />
        <p className="text-16 max-w-[292px]">
          We embed with your team, observe how work flows, and build systems
          that align with what’s already in motion.
        </p>
      </div>

      <div className="mt-16 grid max-md:max-w-[520px] xl:grid-cols-3">
        <div className="col-span-2 xl:col-start-2">
          <img src="/industries/video-screenshot.jpg" className="w-full" />
        </div>
      </div>
    </section>
  );
}
