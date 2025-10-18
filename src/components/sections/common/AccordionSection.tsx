import {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { Arrow2Svg } from "../../ui/ArrowSvg";
import GradientCircle from "../../ui/GradientCircle";
import { TitleBlock } from "../../ui/Titles";
import { useInView } from "motion/react";
import { SlideUpAnim } from "../../ui/Anims";

type TAccordionContent = {
  title: string;
  subtitle?: string;
  list?: string[];
};

export default function AccordionSection({
  title,
  subtitle,
  text,
  img,
  accordionContent,
  className,
  button,
  withGradient = true,
}: {
  title: string;
  subtitle: string;
  text?: string;
  img: ReactNode;
  accordionContent: TAccordionContent[];
  className?: string;
  button?: ReactNode;
  withGradient?: boolean;
}) {
  const [selected, setSelected] = useState<number | undefined>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  return (
    <section
      ref={sectionRef}
      className={"side-padding my-container mt-[100px] " + (className || "")}
    >
      {/* titles */}
      <div className="flex gap-4 max-lg:flex-col lg:items-end lg:justify-between lg:gap-16">
        <div className="w-full max-w-[700px] lg:w-1/2">
          <TitleBlock title={title} subtitle={subtitle} />
        </div>
        {text && (
          <SlideUpAnim
            isInView={isInView}
            transition={{ delay: 0.1 }}
            className="w-full max-w-[550px] pb-2 lg:w-1/2 xl:w-[40%]"
          >
            <p className="text-16">{text}</p>
          </SlideUpAnim>
        )}
        {button && (
          <SlideUpAnim
            isInView={isInView}
            transition={{ delay: 0.1 }}
            className="flex w-full max-w-[550px] pb-2 lg:w-1/2 lg:justify-end xl:w-[40%]"
          >
            {button}
          </SlideUpAnim>
        )}
      </div>

      {/* content */}
      <div className="relative mt-[40px] flex justify-between gap-16 max-lg:flex-col">
        {withGradient && (
          <div className="absolute right-1/2 bottom-1/2 z-0 translate-1/2 opacity-60">
            <GradientCircle blur={"lg"} />
          </div>
        )}
        {/* image */}
        <SlideUpAnim
          isInView={isInView}
          className="relative w-full max-w-[700px] lg:w-1/2"
        >
          {img}
        </SlideUpAnim>
        {/* Accordion */}
        <SlideUpAnim
          isInView={isInView}
          transition={{ delay: 0.2 }}
          className="relative flex w-full max-w-[550px] flex-col lg:w-1/2 xl:w-[40%]"
        >
          {accordionContent.map((item, i) => (
            <AccordionItem
              selected={selected === i}
              onClick={() => setSelected(i)}
              key={i}
              {...item}
            />
          ))}
        </SlideUpAnim>
      </div>
    </section>
  );
}

function AccordionItem({
  title,
  subtitle,
  list,
  selected = false,
  onClick,
  ...props
}: {
  title: string;
  subtitle?: string;
  list?: string[];
  selected?: boolean;
  onClick: () => void;
} & HTMLAttributes<HTMLDivElement>) {
  const contentRef = useRef<HTMLDivElement>(null); // to calculate height for animation to work
  const [contentHeight, setContentHeight] = useState(
    contentRef.current?.clientHeight
  );
  useEffect(() => {
    setContentHeight(contentRef.current?.clientHeight);
  }, [contentRef.current, contentRef]);
  return (
    <div className="relative" {...props}>
      {/* border top */}
      <div
        className={
          "absolute top-0 right-0 left-0 h-[2px] rounded-full" +
          (selected ? " bg-dark-green-blue-gradient" : " bg-black/25")
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
                    <Arrow2Svg className="w-3 xs:w-4" />
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
