import { useRef } from "react";
import AccordionSection from "../components/sections/common/AccordionSection";
import CallToAction from "../components/sections/common/CallToAction";
import Hero from "../components/sections/common/Hero";
import Button from "../components/ui/Button";
import { GlassCard, SimpleCard } from "../components/ui/Cards";
import GradientCircle, {
  BigEllipseGradient,
} from "../components/ui/GradientCircle";
import { SectionTitle, TitleBlock } from "../components/ui/Titles";
import { OPEN_ROLES } from "../lib/constants";
import Navbar from "../components/sections/common/navbar/Navbar";
import { AnimatedText, SlideUpSelf } from "../components/ui/Anims";
import TextSection from "../components/sections/common/TextSection";
import { useInView } from "motion/react";
import { HeroImgBackground } from "../components/ui/Backgrounds";

export default function CareersPage() {
  return (
    <>
      <Navbar transparentBg={false} />
      <main>
        <Hero
          spacing="max"
          title="Work with us, change <sm:br> business forever"
          subtitle="WORKING AT GAIANT"
          text="Join a team of thinkers and doers pushing the boundaries to reshape what's possible."
          button={
            <Button arrow={"spaced"} className="xl:mb-20">
              SEE OPEN ROLES
            </Button>
          }
          background={
            <HeroImgBackground
              blur=" blur-[max(0.5vw,5px)] "
              src="/images/team-discussing.webp"
              className="object-bottom"
            />
          }
        />

        <LifeAtGaiant />
        <DoYouFit />
        <WhatsInItForYou />
        <OpenRoles />
        <CallToAction />
      </main>
    </>
  );
}

const LIFE_AT_GAIANT: { title: string; subtitle: string; text: string }[] = [
  {
    title: "A mission with meaning",
    subtitle: "SHAPE THE FUTURE OF LANGUAGE INTELLIGENCE",
    text: "Every project contributes to redefining how businesses understand people.",
  },
  {
    title: "A team that listens",
    subtitle: "COLLABORATION ROOTED IN TRUST AND RESPECT",
    text: "Your ideas guide decisions in a culture of open dialogue.",
  },
  {
    title: "A place to grow",
    subtitle: "CONTINUOUS LEARNING, MENTORSHIP & CAREER EVOLUTION",
    text: "We invest in your growth with guidance, opportunities, and freedom.",
  },
];
function LifeAtGaiant() {
  return (
    <section className="side-padding my-container relative mt-[40px]">
      <BigEllipseGradient />

      <TitleBlock title="Life At Gaiant" subtitle="WHAT SHOULD YOU EXPECT?" />

      <div className="relative mt-16 grid grid-cols-1 gap-5 max-md:max-w-[520px] md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        {LIFE_AT_GAIANT.map((card, i) => (
          <SlideUpSelf key={i}>
            <GlassCard className="w-full max-w-none!" {...card} />
          </SlideUpSelf>
        ))}
      </div>
    </section>
  );
}

function DoYouFit() {
  return (
    <TextSection
      subtitle="DO YOU FIT"
      title="We want Gaiant to be the place where everyone does the best work of
            their career."
      content={
        <>
          So we make thoughtful decisions about how we work, the perks we
          provide, and how we create a diverse and inclusive work environment.
          We also foster technical creativity and innovation through internal
          hackathons, demos, tech talks, and achievement recognition programs
          that form a cornerstone of our culture at Gaiant.
          <br />
          <br />
          Join us and work alongside some of the world’s best talent from the
          likes of Apple, Meta AI, Amazon and Google Brain, as well as full-time
          staff adjunct professors from Stanford, Oxford, University of Toronto,
          and UCL London.
        </>
      }
    />
  );
}

function WhatsInItForYou() {
  return (
    <AccordionSection
      className="mt-[140px]!"
      withGradient={false}
      title="Smarter moves with fewer resources"
      subtitle="TRUSTED BY FINANCIAL LEADERS"
      button={
        <Button variant={"black"} arrow={"spaced"}>
          SEE OPEN ROLES
        </Button>
      }
      img={<img src="/images/man-in-online-meeting.webp" />}
      accordionContent={[
        {
          title: "Work Flexibility",
          subtitle: "ON YOUR OWN TERMS",
          list: [
            "We proudly support a remote work culture worldwide",
            "We offer centralized hubs to give teams a place to meet and innovate",
            "We respect that life gets busy – no penalties or apologies ",
            "Quality work matters most, whether it’s from a desk or the Bahamas",
          ],
        },
        {
          title: "Bonuses and Equity",
          subtitle: "ON YOUR OWN TERMS",
          list: [
            "We proudly support a remote work culture worldwide",
            "We respect that life gets busy – no penalties or apologies ",
            "Quality work matters most, whether it’s from a desk or the Bahamas",
          ],
        },
        {
          title: "Health Coverage",
          subtitle: "ON YOUR OWN TERMS",
          list: [
            "We proudly support a remote work culture worldwide",
            "We offer centralized hubs to give teams a place to meet and innovate",
            "We respect that life gets busy – no penalties or apologies ",
          ],
        },
      ]}
    />
  );
}

function OpenRoles() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  return (
    <section ref={sectionRef} className="relative mt-[120px] overflow-x-clip">
      <div className="absolute top-10 left-0 z-0 -translate-x-1/3 opacity-50">
        <GradientCircle
          className="origin-top blur-[max(6vw,60px)]! max-md:scale-200 max-sm:scale-300"
          colorr={"teal"}
        />
      </div>

      <div className="absolute right-0 bottom-0 z-0 translate-x-8/10 translate-y-1/4 opacity-50">
        <GradientCircle className="blur-[max(6vw,60px)]!" colorr={"teal"} />
      </div>

      <div className="my-container side-padding">
        <div className="relative mb-5 xs:mb-8">
          <SectionTitle>
            <AnimatedText isInView={isInView}>
              Open roles at Gaiant
            </AnimatedText>
          </SectionTitle>
        </div>

        <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {OPEN_ROLES.map((role, i) => (
            <SlideUpSelf>
              <SimpleCard
                {...role}
                key={i}
                className="min-h-[180px] max-md:max-w-[424px] xs:min-h-[250px]"
              />
            </SlideUpSelf>
          ))}
        </div>
      </div>
    </section>
  );
}
