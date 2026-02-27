import { useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { SlideUpAnim } from "./Anims";

export default function ImagesLayout({
  img1,
  img2,
  bg1 = true,
  bg2 = true,
  animationDelay,
  reverse = false,
}: {
  img1: ReactNode;
  img2: ReactNode;
  bg1?: boolean;
  bg2?: boolean;
  animationDelay?: number;
  reverse?: boolean;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(divRef, { once: true });
  return (
    <div
      ref={divRef}
      className="relative grid grid-cols-3 gap-2 md:gap-5 lg:gap-0 lg:grid-cols-7 min-h-[256px]"
    >
      {/* img 1 */}
      <SlideUpAnim
        className={
          "h-full w-full " +
          (reverse ? " col-span-1 lg:col-span-2 lg:pe-2 " : " col-span-2 lg:col-span-5 lg:pe-5 ")
        }
        initial={{ y: "100px" }}
        transition={{ delay: animationDelay || 0, duration: 0.6 }}
        isInView={isInView}
      >
        <div
          className={
            "flex h-full w-full items-center justify-center overflow-clip lg-rounded " +
            (bg1 ? "bg-white/50" : "")
          }
        >
          {img1}
        </div>
      </SlideUpAnim>

      {/* img 2 */}
      <SlideUpAnim
        initial={{ y: "100px" }}
        transition={{ delay: (animationDelay || 0) + 0.2, duration: 0.6 }}
        isInView={isInView}
        className={
          "h-full w-full " +
          (reverse ? " col-span-2 lg:col-span-5 lg:ps-5 " : " col-span-1 lg:col-span-2 lg:ps-2 ")
        }
      >
        <div
          className={
            "flex h-full w-full items-center justify-center overflow-clip lg-rounded " +
            (bg2 ? "bg-white/50" : "")
          }
        >
          {img2}
        </div>
      </SlideUpAnim>
    </div>
  );
}
