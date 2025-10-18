import type { Transition } from "motion";
import { motion as m } from "motion/react";
import { useState, type ReactNode } from "react";

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
    setTimeout(() => setEnded(true), 100);
  };
  const words = children.split(" ");
  return (
    <>
      {words.map((word, i) => {
        if (word === "\\n") {
          return <br key={i} />;
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
                delay: 0.5 + 0.075 * i + (transition?.delay || 0),
              }}
              className="inline-block whitespace-pre"
              onAnimationEnd={() => {
                if (i == words.length - 1) end();
              }}
              onAnimationComplete={() => {
                if (i == words.length - 1) end();
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
}: {
  children: ReactNode;
  isInView: boolean;
  transition?: Transition<any> | undefined;
}) {
  return (
    <m.div
      initial={{ y: "30px", opacity: 0 }}
      animate={isInView ? { y: "-0%", opacity: 1 } : { y: "30px", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", ...transition }}
    >
      {children}
    </m.div>
  );
}
