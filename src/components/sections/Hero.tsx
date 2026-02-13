import { useInView } from "motion/react";
import { useRef } from "react";
import { AnimatedText, SlideUpAnim } from "../ui/Anims";

// interface HeroProps {
//   title: string;
//   subtitle?: string;
//   text: string;
//   spacing?: "min" | "max";
//   titleWidths?: { lg: string; xl: string };
//   button: React.ReactNode;
//   background?: React.ReactNode;
//   children?: React.ReactNode;
//   className?: string;
// }

// export default function Hero({
//   title,
//   subtitle,
//   text,
//   spacing = "min",
//   titleWidths,
//   button,
//   background,
//   className,
//   children,
// }: HeroProps) {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(heroRef, { once: true });

//   return (
//     <section
//       ref={heroRef}
//       className={"relative text-white " + (className || "")}
//     >
//       {/* gradients bg */}
//       <div className="absolute top-0 right-0 bottom-0 left-0 z-0 overflow-x-clip">
//         {background}
//       </div>

//       {/* text content */}
//       <div className="side-padding my-container relative pt-[200px] pb-[140px] xl:pt-[280px]">
//         {subtitle && (
//           <p className="mb-5 font-ibm! text-[16px] xs:text-[18px]">
//             <AnimatedText transition={{ delay: 0.8 }} isInView={isInView}>
//               {subtitle}
//             </AnimatedText>
//           </p>
//         )}
//         <div
//           className={
//             "flex flex-col lg:flex-row max-lg:max-w-[600px] " +
//             (spacing === "min"
//               ? " lg:gap-[40px] xl:gap-[56px]"
//               : " lg:gap-[20px] xl:gap-[70px]")
//           }
//         >
//           <h1
//             className={
//               "text-[min(12vw,50px)] leading-[calc(min(12vw,50px)+7px)] xs:text-[58px] xs:leading-[65px] xl:text-[69px] xl:leading-[76px] " +
//               (spacing === "min"
//                 ? " max-w-[580px] lg:w-6/10 xl:max-w-[680px]"
//                 : ` xl:min-w-[${titleWidths?.xl || "800px"}] xl:max-w-[${titleWidths?.xl || "800px"}] lg:min-w-[${titleWidths?.lg || "600px"}] lg:max-w-[${titleWidths?.lg || "600px"}] `)
//             }
//           >
//             <AnimatedText transition={{ duration: 0.4 }} isInView={isInView}>
//               {title}
//             </AnimatedText>
//           </h1>
//           <div>
//             <SlideUpAnim
//               transition={{ duration: 0.5, delay: 0.7 }}
//               isInView={isInView}
//             >
//               <p
//                 className={
//                   "mt-[18px] text-[min(4.3vw,18px)] leading-[calc(min(4.3vw,18px)+6px)] xs:text-[20px] xs:leading-[28px] xl:text-[23px] xl:leading-[31px] " +
//                   (spacing === "min"
//                     ? " max-w-[324px] xl:max-w-[370px]"
//                     : " max-w-[440px] xl:max-w-[500px]")
//                 }
//               >
//                 {text.split(" ").map((word, i) => {
//                   if (word === "<br>") {
//                     return <br key={i} />;
//                   } else if (word == "<sm:br>") {
//                     return <br key={i} className="max-sm:hidden" />;
//                   }
//                   return word + " ";
//                 })}
//               </p>
//             </SlideUpAnim>
//             <SlideUpAnim isInView={isInView} transition={{ delay: 1 }}>
//               <div className="mt-[80px] xl:mt-[110px]">{button}</div>
//             </SlideUpAnim>
//           </div>
//         </div>
//       </div>

//       {children}
//     </section>
//   );
// }

interface HeroProps {
  title: string;
  subtitle?: string;
  text: string;
  button: React.ReactNode;
  background?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;

  // Layout control
  gap?: string; // e.g. "lg:gap-[40px] xl:gap-[56px]"
  titleWidth?: string; // e.g. "max-w-[580px] lg:w-6/10 xl:max-w-[680px]"
  textWidth?: string; // e.g. "max-w-[324px] xl:max-w-[370px]"
  padding?: string;
  subtitleClassName?: string;
  centered?: boolean;

  // Default spacing options (for backward compatibility)
  spacing?: "min" | "max";
}

export default function Hero({
  title,
  subtitle,
  subtitleClassName,
  text,
  button,
  background,
  children,
  className,
  spacing = "min",
  gap,
  titleWidth,
  textWidth,
  padding,
  centered = false,
}: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true });

  // Default values (preserving old behavior)
  const defaultGaps = "lg:gap-[32px] xl:gap-[32px] justify-between";

  const defaultTitleWidth =
    spacing === "min"
      ? "max-w-[580px] lg:w-6/10 xl:max-w-[680px]"
      : "lg:min-w-[550px] lg:max-w-[550px] xl:min-w-[800px] xl:max-w-[800px]";

  const defaultTextWidth =
    spacing === "min"
      ? "max-w-[324px] xl:max-w-[370px]"
      : "max-w-[440px] xl:max-w-[500px]";

  return (
    <section
      ref={heroRef}
      className={`relative z-2 text-white ${className || ""}`}
    >
      {/* background */}
      <div className="absolute inset-0 z-0 overflow-x-clip">{background}</div>

      {/* content */}
      <div
        className={
          "side-padding my-container relative pt-[200px] pb-[140px] xl:pt-[280px] " +
          (padding || "")
        }
      >
        {subtitle && (
          <p
            className={
              "mb-5 font-ibm! text-[16px] xs:text-[18px] " + subtitleClassName
            }
          >
            <AnimatedText transition={{ delay: 0.8 }} isInView={isInView}>
              {subtitle}
            </AnimatedText>
          </p>
        )}

        <div
          className={`flex flex-col max-lg:max-w-[660px] lg:flex-row ${
            gap || defaultGaps
          } ${centered ? "max-lg:mx-auto max-lg:items-center max-lg:justify-center max-lg:text-center" : ""}`}
        >
          {/* Title */}
          <h1
            className={`text-[min(12vw,50px)] leading-[calc(min(12vw,50px)+7px)] xs:text-[58px] xs:leading-[65px] xl:text-[69px] xl:leading-[76px] ${
              titleWidth || defaultTitleWidth
            }`}
          >
            <AnimatedText transition={{ duration: 0.4 }} isInView={isInView}>
              {title}
            </AnimatedText>
          </h1>

          {/* Text */}
          <div className="lg:w-[460px] xl:w-[530px]">
            <SlideUpAnim
              transition={{ duration: 0.5, delay: 0.7 }}
              isInView={isInView}
            >
              <p
                className={`mt-[18px] text-[min(4.3vw,18px)] leading-[calc(min(4.3vw,18px)+6px)] xs:text-[20px] xs:leading-[28px] xl:text-[23px] xl:leading-[31px] ${
                  textWidth || defaultTextWidth
                }`}
              >
                {text.split(" ").map((word, i) => {
                  if (word === "<br>") return <br key={i} />;
                  else if (word === "<sm:br>")
                    return <br key={i} className="max-sm:hidden" />;
                  else {
                    if (word.split("<bold>").length > 1) {
                      return (
                        <strong key={i}>{word.split("<bold>")[1] + " "}</strong>
                      );
                    }
                    return word + " ";
                  }
                })}
              </p>
            </SlideUpAnim>
          </div>
        </div>

        {/* button */}
        <div className={`flex ${gap || defaultGaps} ${centered ? "max-lg:justify-center" : ""}`}>
          <div className={"max-lg:hidden " + titleWidth}></div>
          <SlideUpAnim
            className="lg:w-[460px] xl:w-[530px]"
            isInView={isInView}
            transition={{ delay: 1 }}
          >
            <div className="mt-[40px] xl:mt-[60px]">{button}</div>
          </SlideUpAnim>
        </div>
      </div>

      {children}
    </section>
  );
}
