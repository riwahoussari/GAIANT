import { useEffect, useRef, useState } from "react";
import ArrowSvg from "../../../components/ui/ArrowSvg";
import { motion as m, AnimatePresence, useInView } from "motion/react";
import GradientCircle from "../../../components/ui/GradientCircle";
import { CenteredTitleBlock } from "../../../components/ui/Titles";
import { SlideUpAnim } from "../../../components/ui/Anims";
import { INDUSTRIES_PAGE_DATA } from "../../../lib/data";

const testimonials = INDUSTRIES_PAGE_DATA.TESTIMONIALS_SECTION.testimonials;
const longest_text = INDUSTRIES_PAGE_DATA.TESTIMONIALS_SECTION.testimonials
  .map((t) => t.text)
  .reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");

const longest_title = INDUSTRIES_PAGE_DATA.TESTIMONIALS_SECTION.testimonials
  .map((t) => t.title)
  .reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  // Auto-rotate every 12 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 12000);
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
          title={INDUSTRIES_PAGE_DATA.TESTIMONIALS_SECTION.title}
        />
      </div>

      {/* testimonials container */}
      <SlideUpAnim
        transition={{ delay: 0.3 }}
        isInView={isInView}
        className="bg-linear-white-transparent-70 relative mx-auto flex max-w-[1100px] flex-col items-center justify-center gap-8 rounded-[20px] max-sm:bg-none! sm:p-12"
      >
        {/* animated testimonial */}
        <div className="bg-linear-white-transparent-70 relative flex w-full max-w-[800px] flex-col justify-between gap-8 overflow-hidden rounded-[20px] p-8 text-center sm:pb-0">
          <AnimatePresence mode="wait">
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative flex flex-col justify-between gap-8 sm:p-8"
            >
              {/* placeholder to maintain same height for all testimonials */}
              <p
                aria-hidden
                style={{ visibility: "hidden" }}
                className="text-[19px] leading-[25px] opacity-0 xs:text-[21px] xs:leading-[27px]"
              >
                {longest_text}
              </p>

              {/* actual text */}
              <p className="absolute right-0 left-0 bg-red/0 text-[19px] leading-[25px] xs:text-[21px] xs:leading-[27px] sm:px-8">
                {testimonials[index].text}
              </p>

              <div className="space-y-1.5">
                <p className="text-16 leading-[19px]">
                  {testimonials[index].name}
                </p>

                {/* placeholder to maintain same height for all testimonials */}
                <div className="relative flex justify-center">
                  <p
                    aria-hidden
                    style={{ visibility: "hidden" }}
                    className="text-[13px] leading-[15px] xs:text-[14px] opacity-0"
                  >
                    {longest_title}
                  </p>
                  <p className="absolute top-0  text-[13px] leading-[15px] text-[#838383] xs:text-[14px]">
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
            <button aria-label="left arrow" onClick={prev}>
              <span className="hidden">Left Arrow</span>
              <ArrowSvg
                className="w-6 rotate-180 cursor-pointer duration-200 ease-in-out hover:-translate-x-1"
                color="black"
              />
            </button>
            <button aria-label="right arrow" onClick={next}>
              <span className="hidden">Right Arrow</span>
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
