import { useRef, useState } from "react";
import CallToAction from "../components/sections/common/CallToAction";
import Hero from "../components/sections/common/Hero";
import Navbar from "../components/sections/common/navbar/Navbar";
import { TrustedBy } from "../components/sections/common/TrustedBy";
import Button from "../components/ui/Button";
import { GlassCard } from "../components/ui/Cards";
import GradientCircle, {
  BigEllipseGradient,
} from "../components/ui/GradientCircle";
import ImagesLayout from "../components/ui/ImagesLayout";
import { SectionSubTitle, TitleBlock } from "../components/ui/Titles";
import { useInView, useMotionValueEvent, useScroll } from "motion/react";
import { AnimatedText, SlideUpAnim, SlideUpSelf } from "../components/ui/Anims";
import TextSection from "../components/sections/common/TextSection";

export default function AboutPage() {
  const [transparentNavbar, setTransparentNavbar] = useState(true);
  const navbarBgTrigger = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: navbarBgTrigger,
    offset: ["end end", "start start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (val) =>
    setTransparentNavbar(val >= 1 ? false : true)
  );
  return (
    <>
      <Navbar textColor={"black"} transparentBg={transparentNavbar} />
      <main>
        <Hero
          className="text-black!"
          spacing="max"
          subtitle="WHO ARE GAIANT"
          title="We’re building the future of language AI"
          text="Gaiant empowers every developer and enterprise to build amazing products and capture true business value with language AI."
          button={
            <Button variant={"black"} arrow={"spaced"}>
              REQUEST A DEMO
            </Button>
          }
          background={
            <div className="absolute top-[240px] left-1/2 w-[500px] lg:w-[40vw] lg:min-w-[550px]">
              <GradientCircle blur={"lg"} />
            </div>
          }
        >
          <div ref={navbarBgTrigger} className="my-container side-padding">
            <ImagesLayout
              animationDelay={0.5}
              bg2={false}
              img1={
                <img
                  src="/people-on-laptop.jpg"
                  className="h-full w-full object-cover"
                />
              }
              img2={
                <div className="flex h-full w-full items-center justify-center bg-black/20 p-5 lg:p-8">
                  <img src="/AboutAttributes.svg" />
                </div>
              }
            />
          </div>
        </Hero>

        <OurStory />
        <OurMission />
        <TrustedBy />
        <CallToAction />
      </main>
    </>
  );
}

function OurStory() {
  return (
    <TextSection
      subtitle="OUR STORY"
      title="Gaiant enables enterprises that prioritize data security to deploy
            AI agents and automations at scale within their own infrastructure."
      content={
        <>
          We believe AI has the potential to eliminate most mundane tasks from
          daily work. To achieve this, we built Archē, an agentic AI platform
          that securely accesses all of the data you use in your work, because
          AI is only as good as the data you give it. By enabling private
          deployment, we give companies the confidence to put their data into
          AI, with the efficiency to offer a cost of ownership that makes sense
          at scale.
          <br />
          <br />
          We are expanding from serving a select group of customers to making
          Archē widely available, building on our work over the past few months.
          Leading organizations such as The lebanese Army, USJ, CFL, Beycom,
          Elites, Mitai and most recently ICGER are seeing the transformative
          impact of secure AI agents developed in Archē. These agents are being
          deployed across critical industries that underpin the global economy,
          including finance, healthcare, manufacturing, telecommunications,
          energy, and the public sector.
        </>
      }
    />
  );
}

const OUR_MISSION_CONTENT: { title: string; subtitle: string; text: string }[] =
  [
    {
      title: "We’re driven by cutting edge research",
      subtitle: "SHAPING THE FUTURE OF LANGUAGE",
      text: "Unifying research and product to create human-level language technology.",
    },
    {
      title: "We’re a collaborative team of experts",
      subtitle: "DRIVEN BY HUMAN INGENUITY",
      text: "Passionate ML/AI experts advancing language AI for everyone.",
    },
    {
      title: "We’re pioneering the future of language AI",
      subtitle: "TRANSFORMING BUSINESS THROUGH INTELLIGENCE",
      text: "Transformer-powered models delivering practical, scalable NLP solutions.",
    },
  ];
function OurMission() {
  return (
    <section className="side-padding my-container relative mt-[120px]">
      <BigEllipseGradient />

      <TitleBlock title="We're on a mission" subtitle="WHO IS GAIANT" />

      <div className="relative mt-16 grid grid-cols-1 gap-5 max-md:max-w-[520px] md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        {OUR_MISSION_CONTENT.map((card, i) => (
          <SlideUpSelf>
            <GlassCard className="max-w-none!" {...card} />
          </SlideUpSelf>
        ))}
      </div>
    </section>
  );
}
