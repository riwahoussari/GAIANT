import CallToAction from "../components/sections/common/CallToAction";
import { IndustryCard } from "../components/ui/Cards";
import Hero from "../components/sections/common/Hero";
import ArrowSvg from "../components/ui/ArrowSvg";
import Button from "../components/ui/Button";
import GradientCircle from "../components/ui/GradientCircle";
import { CenteredTitleBlock } from "../components/ui/Titles";
import { INDUSTRIES } from "../lib/constants";
import Navbar from "../components/sections/common/navbar/Navbar";
import {
  motion as m,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  useInView,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SlideUpAnim, SlideUpSelf } from "../components/ui/Anims";

export default function IndustriesPage() {
  const [transparentNavbar, setTransparentNavbar] = useState(true);
  const navbarBgTrigger = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: navbarBgTrigger,
    offset: ["start end", "start start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (val) =>
    setTransparentNavbar(val >= 1 ? false : true)
  );

  // cards slide up animation
  return (
    <>
      <Navbar textColor={"black"} transparentBg={transparentNavbar} />
      <main>
        <Hero
          className="text-black!"
          spacing="max"
          subtitle="INDUSTRIES"
          title="Solutions designed for any industry need"
          text="Every organization faces unique challenges. Our AI adapts, scales, and delivers value across fields — streamlining operations and enabling smarter decisions, all while fitting the way you work."
          button={
            <Button variant={"black"} arrow={"spaced"}>
              REQUEST A DEMO
            </Button>
          }
          background={
            <div className="absolute top-[240px] left-0 w-[500px] -translate-x-1/4 opacity-70 lg:w-[40vw] lg:min-w-[550px]">
              <GradientCircle blur={"lg"} />
            </div>
          }
        />

        {/* Cards */}
        <section
          ref={navbarBgTrigger}
          className="side-padding my-container grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {INDUSTRIES.map((industry, i) => (
            <SlideUpSelf key={i}>
              <IndustryCard
                className="aspect-11/9! w-full"
                title={industry.name}
                text={industry.description}
                button={!!industry.description}
                imgSrc={industry.img}
              />
            </SlideUpSelf>
          ))}
        </section>

        <TestimonialSection />
        <CallToAction />
      </main>
    </>
  );
}

const testimonials = [
  {
    text: "“Gaiant transformed how we work — reports that used to take days now take minutes. Accuracy is solid, integrations were painless, and our team actually trusts the insights. ROI within two months.”",
    name: "Maya Hage",
    title: "Head of Operations, NovaHealth",
    image: "/images/woman-profile.jpg",
  },
  {
    text: "“Since implementing Gaiant, our support response time dropped by 50%. The automation and AI suggestions are game-changers. Our customers notice the difference.”",
    name: "Jordan Lee",
    title: "Customer Experience Manager, BrightCom",
    image: "/images/woman-profile.jpg",
  },
  {
    text: "“We tried multiple tools before, but none were as seamless and insightful as Gaiant. It adapts to our workflow and delivers exactly what we need — effortlessly.”",
    name: "Ava Patel",
    title: "Operations Director, FinSight",
    image: "/images/woman-profile.jpg",
  },
];

function TestimonialSection() {
  const [index, setIndex] = useState(0);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  return (
    <section
      ref={sectionRef}
      className="my-container side-padding relative mt-[130px]"
    >
      {/* background gradient */}
      <div className="absolute top-1/2 left-1/2 z-0 -translate-1/2 opacity-40">
        <GradientCircle
          className="scale-y-200 -rotate-90 blur-[max(3vw,30px)]! max-sm:scale-x-200"
          colorr="teal"
        />
      </div>

      {/* section title */}
      <div className="relative mb-8">
        <CenteredTitleBlock
          title="Hear from our customers"
          text="Industry leaders trust Gaiant to deliver better customer experiences"
        />
      </div>

      {/* testimonials container */}
      <SlideUpAnim
        transition={{ delay: 0.3 }}
        isInView={isInView}
        className="bg-linear-white-transparent-70 relative mx-auto flex max-w-[1100px] flex-col items-center justify-center gap-8 rounded-[20px] max-sm:bg-none! sm:p-12"
      >
        {/* animated testimonial */}
        <div className="bg-linear-white-transparent-70 relative flex w-full max-w-[800px] flex-col justify-between gap-8 overflow-hidden rounded-[20px] p-8">
          <AnimatePresence mode="wait">
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col justify-between gap-8 sm:p-8"
            >
              <p className="text-[19px] leading-[25px] xs:text-[21px] xs:leading-[27px]">
                {testimonials[index].text}
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonials[index].image}
                  className="aspect-square w-11 rounded-sm object-cover"
                />
                <div>
                  <p className="text-16 leading-[19px]">
                    {testimonials[index].name}
                  </p>
                  <p className="text-[13px] leading-[15px] text-[#838383] xs:text-[14px]">
                    {testimonials[index].title}
                  </p>
                </div>
              </div>
            </m.div>
          </AnimatePresence>
        </div>

        {/* pagination + arrows */}
        <div className="flex w-full max-w-[800px] items-center justify-between max-sm:px-8">
          {/* dots */}
          <div className="flex gap-6 sm:gap-8">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`aspect-square w-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                  i === index ? "bg-black" : "bg-black/30 hover:bg-black/50"
                }`}
              />
            ))}
          </div>

          {/* arrows */}
          <div className="flex items-center gap-8">
            <button onClick={prev}>
              <ArrowSvg
                className="w-6 rotate-180 cursor-pointer duration-200 ease-in-out hover:-translate-x-1"
                color="black"
              />
            </button>
            <button onClick={next}>
              <ArrowSvg
                className="w-6 cursor-pointer duration-200 ease-in-out hover:translate-x-1"
                color="black"
              />
            </button>
          </div>
        </div>
      </SlideUpAnim>
    </section>
  );
}
