import type { TargetAndTransition, Transition } from "motion";
import { motion as m, useInView } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function AnimatedText({
  isInView,
  children,
  transition,
}: {
  isInView: boolean;
  children: string;
  transition?: Transition<any> | undefined;
}) {
  const [ended, setEnded] = useState(false);
  const end = () => {
    setTimeout(() => {
      setEnded(true);
    }, 100);
  };
  const words = children.split(" ");
  console.log(children, ended);

  return (
    <>
      {words.map((word, i) => {
        if (word === "<br>") {
          return <br key={i} />;
        } else if (word == "<sm:br>") {
          return <br key={i} className="max-sm:hidden" />;
        }
        return (
          <span
            key={i}
            className={"inline-block " + (ended ? "" : " overflow-y-clip")}
          >
            <m.span
              initial={{ y: "100%" }}
              animate={{ y: isInView ? "0%" : "100%" }}
              transition={{
                duration: transition?.duration || 0.3,
                ease: "easeInOut",
                delay: 0.075 * i + (transition?.delay || 0),
              }}
              className="inline-block whitespace-pre"
              onAnimationComplete={() => {
                if (i == words.length - 1 && isInView) end();
              }}
            >
              {word}{" "}
            </m.span>
          </span>
        );
      })}
    </>
  );
}

export function SlideUpAnim({
  children,
  isInView,
  transition,
  initial,
  className,
}: {
  children: ReactNode;
  isInView: boolean;
  transition?: Transition<any> | undefined;
  initial?: TargetAndTransition | undefined;
  className?: string;
}) {
  return (
    <m.div
      className={className}
      initial={{ y: "30px", opacity: 0, ...initial }}
      animate={
        isInView
          ? { y: "-0%", opacity: 1 }
          : { y: "30px", opacity: 0, ...initial }
      }
      transition={{ duration: 0.5, ease: "easeInOut", ...transition }}
    >
      {children}
    </m.div>
  );
}

export function SlideUpSelf({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-5%" });

  return (
    <div className={"h-full " + (className || "")} ref={cardRef}>
      <SlideUpAnim className="flex h-full items-stretch" isInView={isInView}>
        {children}
      </SlideUpAnim>
    </div>
  );
}
