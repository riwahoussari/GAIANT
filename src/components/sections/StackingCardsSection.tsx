import { useRef, type ReactNode } from "react";
import {
  motion as m,
  MotionValue,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import Lottie from "lottie-react";
import { TitleBlock } from "../ui/Titles";
import { SlideUpAnim } from "../ui/Anims";

export default function StackingCardsSection({
  background,
  title,
  text,
  cards,
  light = false,
  cardStyle
}: {
  background: ReactNode;
  title: string;
  text: string;
  cards: {
    subtitle?: string;
    title: string;
    text: string;
    textWidth?: string;
    animation: unknown;
  }[];
  light?: boolean;
  cardStyle?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardsContainerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative z-2 mt-[128px] mb-20 overflow-x-clip"
    >
      {/* bg */}
      {background}

      <div
        className="side-padding my-container py-[10px]"
        style={{ paddingBottom: `${(cards.length + 1) * (light ? 25 : 50)}px` }}
      >
        {/* title */}
        <div className="relative mb-12 max-w-[520px] space-y-3 sm:space-y-5">
          <TitleBlock title={title} />
          <SlideUpAnim isInView={isInView} transition={{ delay: 0.2 }}>
            <p className="text-16">{text}</p>
          </SlideUpAnim>
        </div>

        {/* card */}
        <div
          ref={cardsContainerRef}
          className={light ? "text-black" : "text-white"}
        >
          {cards.map((card, i) => (
            <Card
              key={i}
              content={card}
              progress={scrollYProgress}
              index={i}
              isInView={isInView}
              cardsLength={cards.length}
              cardStyle={cardStyle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  isInView,
  index,
  progress,
  content,
  cardsLength,
  cardStyle
}: {
  isInView: boolean;
  progress: MotionValue<number>;
  index: number;
  content: {
    subtitle?: string;
    title: string;
    titleSize?: string;
    text: string;
    textWidth?: string;
    animation: unknown;
    animClass?: string;
    contentWidth?: number;
  };
  cardsLength: number;
  cardStyle?: string;
}) {
  const scaleRange = [index * (1 / (cardsLength + 1)), 1];
  const targetScale = 1 - (cardsLength + 1 - index) * 0.01;
  const scale = useTransform(progress, scaleRange, [1, targetScale]);

  return (
    <div
      className="sticky top-20"
      style={{ marginTop: `-${index == 0 ? 0 : 66}px` }}
    >
      <m.div
        style={{
          scale,

          top: `${index * 50}px`,
        }}
        className={
          "bg-linear-white-transparent-70 lg-rounded relative mb-4 flex origin-top items-center justify-between gap-x-5 gap-y-0 px-4 pt-10 backdrop-blur-[100px] max-lg:flex-col sm:px-12 sm:pt-16 xl:px-20 xl:py-16 " + cardStyle
        }
      >
        {/* text */}
        <div
          className={
            "origin-left max-lg:text-center xl:scale-115 2xl:scale-130 " +
            content.contentWidth
          }
        >
          {content.subtitle && (
            <SlideUpAnim isInView={isInView} transition={{ delay: 0.3 }}>
              <p className="font-ibm! text-[11px] xs:text-[12px]">
                {content.subtitle}
              </p>
            </SlideUpAnim>
          )}
          <SlideUpAnim isInView={isInView} transition={{ delay: 0.4 }}>
            <p
              className={
                "max-lg:mx-auto text-[50px] xs:text-[60px] " + content.titleSize
              }
            >
              {" "}
              {content.title}
            </p>
          </SlideUpAnim>
          <SlideUpAnim isInView={isInView} transition={{ delay: 0.5 }}>
            <p className={"text-16 " + content.textWidth}>
              {content.text.includes("All instantly.") ? (
                <>
                  <span>{content.text.replace("All instantly.", "")}</span>
                  <span className="max-xs:whitespace-nowrap">
                    All instantly.
                  </span>
                </>
              ) : content.text.includes("your data.") ? (
                <>
                  <span>{content.text.replace("your data.", "")}</span>
                  <span className="max-xs:whitespace-nowrap">your data.</span>
                </>
              ) : (
                content.text
              )}
            </p>
          </SlideUpAnim>
        </div>
        {/* animation */}
        <SlideUpAnim
          className="bg- w-full max-w-[700px] min-w-[320px] lg:w-6/10"
          isInView={isInView}
          transition={{ delay: 0.4 }}
        >
          <Lottie
            animationData={content.animation}
            className={"h-full w-full object-contain " + content.animClass } 
            autoplay
            muted
            loop
          />
        </SlideUpAnim>
      </m.div>
    </div>
  );
}
