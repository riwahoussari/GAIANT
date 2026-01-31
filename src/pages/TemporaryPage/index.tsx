import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import ArrowSvg from "../../components/ui/ArrowSvg";
import {
  SectionSubTitle,
  SectionTitle,
  TitleBlock,
} from "../../components/ui/Titles";
import { INDUSTRIES } from "../../lib/data";
import { useHeroNoImage } from "../../lib/PreloaderContext";
import { AnimatedText, SlideUpAnim } from "../../components/ui/Anims";
import GradientCircle from "../../components/ui/GradientCircle";
import { useInView } from "motion/react";
import type { TAccordionContent } from "../../components/sections/AccordionSection";
import FeaturesSection from "../IndustryPage/components/FeaturesSection";

export default function TemporaryPage() {
  useHeroNoImage();
  return (
    <main className="relative z-2">
      <h1 className="my-20 mt-40 text-center text-2xl text-red">
        Default Title Block{" "}
        <span className="block text-lg">
          becomes vertical for screens {"<"} 1024px
        </span>
      </h1>
      {INDUSTRIES.map((industry, i) => (
        <section
          key={i}
          className={"side-padding my-container relative z-2 mt-[100px]"}
        >
          {/* titles */}
          <div className="flex flex-col gap-14 lg:flex-row lg:items-end xl:gap-16 2xl:gap-44 lg:[&>div]:w-1/2">
            <div className="relative overflow-visible">
              <TitleBlock
                title={industry.features.title}
                subtitle={industry.features.subtitle}
              />
            </div>
            {industry.features.text && (
              <div className="max-w-[560px] pb-2 lg:pb-0.5">
                <p className="text-16">{industry.features.text}</p>
              </div>
            )}
          </div>
        </section>
      ))}

      <h1 className="my-20 mt-40 text-center text-2xl text-red">
        Default Title Block{" "}
        <span className="block text-lg">
          what it looks like with the full section
        </span>
      </h1>
      <FeaturesSection content={INDUSTRIES[2].features} />

      <h1 className="my-20 mt-40 text-center text-2xl text-blue-500">
        New Title Block{" "}
        <span className="block text-lg">
          becomes vertical for screens {"<"} 1280px
        </span>
      </h1>
      {INDUSTRIES.map((industry, i) => (
        <section
          key={i}
          className={"side-padding my-container relative z-2 mt-[100px]"}
        >
          {/* titles */}
          <div className="flex flex-col gap-14 xl:flex-row xl:items-end xl:gap-16 2xl:gap-44 xl:[&>div]:w-1/2">
            <div className="relative overflow-visible">
              <TitleBlock
                title={industry.features.title}
                subtitle={industry.features.subtitle}
              />
            </div>
            {industry.features.text && (
              <div className="max-w-[560px] pb-2 lg:pb-0.5">
                <p className="text-16">{industry.features.text}</p>
              </div>
            )}
          </div>
        </section>
      ))}

      <h1 className="my-20 mt-40 text-center text-2xl text-blue-500">
        New Title Block{" "}
        <span className="block text-lg">
          what it looks like with the full section
        </span>
      </h1>
      <AccordionSection
        img={
          <div>
            <img
              src={INDUSTRIES[0].features.imgBack.src}
              alt={INDUSTRIES[0].features.imgBack.alt}
            />
            <img
              src={INDUSTRIES[0].features.imgFront.src}
              alt={INDUSTRIES[0].features.imgFront.alt}
              className="absolute top-0 left-0 z-1"
            />
          </div>
        }
        {...INDUSTRIES[2].features}
      />
    </main>
  );
}

function AccordionSection({
  title,
  subtitle,
  text,
  img,
  accordionContent,
  className,
  withGradient = true,
}: {
  title: string;
  subtitle: string;
  text?: string;
  img: ReactNode;
  accordionContent: TAccordionContent[];
  className?: string;
  withGradient?: boolean;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selected, setSelected] = useState<number | undefined>(0);
  const [contentHeight, setContentHeight] = useState(240);

  useEffect(() => {
    const findTallest = () => {
      const heights = contentRefs.current.map((ref) => ref?.offsetHeight);
      const tallest = heights.reduce((acc, current) => {
        if (acc !== undefined && current !== undefined)
          return current > acc ? current : acc;
      }, 0);

      if (tallest) {
        setContentHeight(tallest);
      }
    };

    findTallest();
    window.addEventListener("resize", findTallest);
    return () => window.removeEventListener("resize", findTallest);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={
        "side-padding my-container relative z-2 mt-[100px] " + (className || "")
      }
    >
      {/* titles */}
      <div className="flex flex-col gap-14 xl:flex-row xl:items-end xl:gap-16 2xl:gap-44 xl:[&>div]:w-1/2">
        <div className="relative overflow-visible">
          <TitleBlock title={title} subtitle={subtitle} />
        </div>
        {text && (
          <SlideUpAnim
            isInView={isInView}
            transition={{ delay: 0.1 }}
            className="max-w-[560px] pb-2 lg:pb-0.5"
          >
            <p className="text-16">{text}</p>
          </SlideUpAnim>
        )}
      </div>

      {/* content */}
      <div className="relative mt-[40px] flex flex-col gap-14 lg:flex-row xl:gap-16 2xl:gap-44 lg:[&>div]:w-1/2">
        {withGradient && (
          <div className="absolute right-1/2 bottom-1/2 z-0 translate-1/2 opacity-60">
            <GradientCircle blur={"lg"} />
          </div>
        )}
        {/* image */}
        <SlideUpAnim isInView={isInView} className="relative">
          {img}
        </SlideUpAnim>
        {/* Accordion */}
        <SlideUpAnim
          isInView={isInView}
          transition={{ delay: 0.2 }}
          className="relative flex flex-col md:max-w-[555px]"
        >
          {accordionContent.map((item, i) => (
            <AccordionItem
              selected={selected === i}
              onClick={() => setSelected(i)}
              key={i}
              {...item}
              ref={(el) => {
                contentRefs.current[i] = el;
              }}
              contentHeight={contentHeight}
            />
          ))}
        </SlideUpAnim>
      </div>
    </section>
  );
}

type AccordionItemProps = {
  title: string;
  subtitle?: string;
  list?: string[];
  selected?: boolean;
  onClick: () => void;
  contentHeight: number;
} & HTMLAttributes<HTMLDivElement>;

const AccordionItem = forwardRef<HTMLDivElement | null, AccordionItemProps>(
  (
    {
      title,
      subtitle,
      list,
      selected = false,
      onClick,
      contentHeight,
      ...props
    },
    contentRef
  ) => {
    return (
      <div className="relative" {...props}>
        {/* border top */}
        <div
          className={
            "absolute top-0 right-0 left-0 h-[2px] rounded-full" +
            (selected ? " bg-dark-green-700-blue-gradient" : " bg-black/25")
          }
        />

        {/* content */}
        <p className="text-25 cursor-pointer py-4" onClick={onClick}>
          {title}
        </p>

        {(subtitle || list) && (
          <div
            style={{
              height: selected ? contentHeight || 0 : 0,
            }}
            className={
              "overflow-y-hidden text-xl transition-all duration-400 ease-in-out"
            }
          >
            <div ref={contentRef}>
              {subtitle && (
                <p className="py-5 font-ibm! text-[11px] font-semibold text-teal xs:text-[12px]">
                  {subtitle}
                </p>
              )}
              {list && (
                <div className="space-y-[21px] pb-8">
                  {list.map((string, i) => (
                    <div key={i} className="flex items-center gap-5 xs:gap-7">
                      <ArrowSvg
                        className="w-3.5 flex-none -rotate-45 xs:w-4.5"
                        color="black"
                      />
                      <p className="text-16">{string}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
);
