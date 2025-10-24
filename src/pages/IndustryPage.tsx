import Hero from "../components/sections/common/Hero";
import AccordionSection from "../components/sections/common/AccordionSection";
import Button from "../components/ui/Button";
import { TitleBlock } from "../components/ui/Titles";
import { GlassCard } from "../components/ui/Cards";
import GradientCircle from "../components/ui/GradientCircle";
import CallToAction from "../components/sections/common/CallToAction";
import { TrustedBy } from "../components/sections/common/TrustedBy";
import Navbar from "../components/sections/common/navbar/Navbar";
import { SlideUpAnim, SlideUpSelf } from "../components/ui/Anims";
import { useInView } from "motion/react";
import { useRef } from "react";
import { HeroImgBackground } from "../components/ui/Backgrounds";

export default function () {
  return (
    <>
      <Navbar transparentBg={false} />
      <main>
        <Hero
          spacing="max"
          title="AI for faster decisions <sm:br> and lower risk"
          titleWidths={{lg: "580px", xl: "700px"}}
          subtitle="BANKING & FINANCIAL SERVICES"
          text="Speed decision-making, detect fraud, and automate reporting with secure, scalable AI — cutting costs while surfacing high-value insights."
          button={
            <Button arrow={"spaced"} className="xl:mb-20">
              REQUEST A DEMO
            </Button>
          }
          background={
            <HeroImgBackground src="/industries/Industries-banking.webp" />
          }
        />
        <AccordionSection
          title="Smarter moves with fewer resources"
          subtitle="TRUSTED BY FINANCIAL LEADERS"
          text="AI often adds people and process. Done right, it finds fraud, streamlines ops, and makes services human — real impact without the extra overhead."
          img={
            <div>
              <img src="/images/man-on-laptop.webp" />
              <img
                className="absolute top-0 left-0 z-1"
                src="/demos/ai-prompt.svg"
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
            },
            {
              title: "Reduce busywork",
              subtitle: "STRENGTHEM TRUST AND EFFICIENCY",
              list: [
                "Detect fraud and protect sensitive data",
                "Automate reporting with precision and speed",
                "Ensure compliance across every transaction",
                "Deliver clear insights for smarter decisions",
              ],
            },
            {
              title: "Automate common support tickets",
              subtitle: "STRENGTHEM TRUST AND EFFICIENCY",
              list: [
                "Detect fraud and protect sensitive data",
                "Automate reporting with precision and speed",
                "Ensure compliance across every transaction",
                "Deliver clear insights for smarter decisions",
              ],
            },
          ]}
        />
        <UseCases />
        <OurApproach />
        <TrustedBy />
        <CallToAction />
      </main>
    </>
  );
}

const USE_CASES_CONTENT: { title: string; subtitle: string; text: string }[] = [
  {
    title: "Transparency",
    subtitle: "WE BUILD AI YOU CAN TRUST.",
    text: "Clear processes, explainable outcomes, and full visibility at every stage",
  },
  {
    title: "Transparency",
    subtitle: "WE BUILD AI YOU CAN TRUST.",
    text: "Clear processes, explainable outcomes, and full visibility at every stage",
  },
  {
    title: "Transparency",
    subtitle: "WE BUILD AI YOU CAN TRUST.",
    text: "Clear processes, explainable outcomes, and full visibility at every stage",
  },
  {
    title: "Transparency",
    subtitle: "WE BUILD AI YOU CAN TRUST.",
    text: "Clear processes, explainable outcomes, and full visibility at every stage",
  },
  {
    title: "Transparency",
    subtitle: "WE BUILD AI YOU CAN TRUST.",
    text: "Clear processes, explainable outcomes, and full visibility at every stage",
  },
  {
    title: "Transparency",
    subtitle: "WE BUILD AI YOU CAN TRUST.",
    text: "Clear processes, explainable outcomes, and full visibility at every stage",
  },
];
function UseCases() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  return (
    <section
      ref={sectionRef}
      className="side-padding my-container relative mt-[120px]"
    >
      <div className="absolute top-[calc(50%+100px)] left-1/2 z-0 -translate-1/2 opacity-70">
        <GradientCircle
          className="blur-[max(6vw,60px)]! max-md:scale-200 max-sm:scale-y-400"
          colorr={"teal"}
        />
      </div>

      {/* title */}
      <div className="relative grid grid-cols-1 items-end sm:gap-5 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        <TitleBlock title="Use Cases" subtitle="BANKING & FINANCIAL SERVICES" />
        <SlideUpAnim isInView={isInView} transition={{ delay: 0.2 }}>
          <p className="text-16 max-w-[292px]">
            See how leading firms are streamlining operations and scaling
            insight.
          </p>
        </SlideUpAnim>
        <SlideUpAnim isInView={isInView} transition={{ delay: 0.3 }}>
          <Button
            className="place-self-start max-sm:mt-3 xl:place-self-end"
            variant={"black"}
          >
            REQUEST A DEMO
          </Button>
        </SlideUpAnim>
      </div>

      {/* cards */}
      <div className="relative mt-16 grid grid-cols-1 gap-5 max-md:max-w-[520px] md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        {USE_CASES_CONTENT.map((useCase, i) => (
          <SlideUpSelf key={i}>
            <GlassCard className="max-w-none!" {...useCase} />
          </SlideUpSelf>
        ))}
      </div>
    </section>
  );
}

function OurApproach() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  return (
    <section ref={sectionRef} className="side-padding my-container mt-[120px]">
      <div className="grid grid-cols-1 items-end sm:gap-5 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        <TitleBlock
          title="Our Approach"
          subtitle="SYSTEMS THAT FIT, NOT FORCE"
        />
        <SlideUpAnim isInView={isInView} transition={{ delay: 0.2 }}>
          <p className="text-16 max-w-[292px]">
            We embed with your team, observe how work flows, and build systems
            that align with what’s already in motion.
          </p>
        </SlideUpAnim>
      </div>

      <div className="mt-16 grid max-md:max-w-[520px] xl:grid-cols-3">
        <SlideUpAnim
          initial={{ y: "50px" }}
          className="col-span-2 xl:col-start-2"
          isInView={isInView}
          transition={{ delay: 0.3 }}
        >
          <img src="/images/video-screenshot.webp" className="w-full" />
        </SlideUpAnim>
      </div>
    </section>
  );
}
