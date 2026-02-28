import { useInView } from "motion/react";
import { useRef } from "react";
import {
  AnimatedText,
  SlideUpAnim,
  SlideUpSelf,
} from "../../../components/ui/Anims";
import Button from "../../../components/ui/Button";
import ArticleCard from "../../../components/ui/cards/ArticleCard";
import { ARTICLES } from "../../../lib/articles";
import { Link } from "react-router-dom";

export default function ArticlesSection({
  className,
  navbarTriggerRef,
  fetchPriority,
}: {
  className?: string;
  navbarTriggerRef?: React.RefObject<HTMLDivElement | null>;
  fetchPriority?: "high" | "low" | "auto" | undefined;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  return (
    <section
      ref={navbarTriggerRef}
      className={
        "side-padding my-container relative z-2 mt-[120px] overflow-x-clip " +
        (className || "")
      }
    >
      <svg className="absolute" width="0" height="0">
        <defs>
          <clipPath id={"bottomRightClip"} clipPathUnits="objectBoundingBox">
            <path
              d={
                "M 0,0 L 1,0 L 1,0.76 A 0.05,0.08 0 0 1 0.98,0.82 L 0.86,0.98 A 0.06,0.05 0 0 1 0.82,1 L 0,1 Z"
              }
            />
          </clipPath>
        </defs>
      </svg>
      <svg className="absolute" width="0" height="0">
        <defs>
          <clipPath id={"bottomRightClipBig"} clipPathUnits="objectBoundingBox">
            <path
              d={
                "M 0,0 L 1,0 L 1,0.77 A 0.05,0.1 0 0 1 0.98,0.85 L 0.91,0.98 A 0.03,0.05 0 0 1 0.89,1 L 0,1 Z"
              }
            />
          </clipPath>
        </defs>
      </svg>

      {/* main article */}
      <div className="relative" ref={sectionRef}>
        <p className="mb-10 font-ibm! text-[16px] xs:text-[18px]">
          <AnimatedText isInView={isInView}>THE GAIANT BLOG</AnimatedText>
        </p>

        <div
          className={
            "flex flex-col gap-[20px] lg:flex-row lg:gap-[30px] xl:gap-[50px] 2xl:gap-[70px]"
          }
        >
          {/* img */}
          <div
            className={
              "relative aspect-2/1! max-w-[700px] lg:w-55/100 xl:max-w-[800px] 2xl:w-1/2"
            }
          >
            <SlideUpAnim
              className="aspect-2/1! h-full w-full object-contain"
              isInView={isInView}
              transition={{ delay: 0.2 }}
            >
              <Link to={`/news/${ARTICLES[0].id}`}>
                <img
                  {...ARTICLES[0].mainImg}
                  fetchPriority={fetchPriority}
                  src="/images/people-walking.webp"
                  alt="two people walking together in a hallway"
                  className="lg-rounded h-full w-full object-cover"
                  style={{
                    clipPath: "url(#bottomRightClipBig)",
                  }}
                />
              </Link>
            </SlideUpAnim>
          </div>

          {/* text */}
          <SlideUpAnim
            className="relative z-2 max-w-[550px] space-y-2 lg:w-45/100"
            isInView={isInView}
            transition={{ delay: 0.4 }}
          >
            <p className="font-ibm! text-[14px] leading-[30px] xs:text-[15px] xs:leading-[34px]">
              GAIANT TEAM - {ARTICLES[0].date.string}
            </p>
            <Link
              to={`/news/${ARTICLES[0].id}`}
              className={
                "text-[28px] leading-[33px] xs:text-[34px] xs:leading-[39px] block"
              }
            >
              {ARTICLES[0].title}
            </Link>
            <Link to={`/news/${ARTICLES[0].id}`} className="mt-5 xs:mt-[30px]">
              <Button
                arrow={"normal"}
                className="gap-4! bg-transparent! pl-0! backdrop-blur-[0px]!"
                variant={"secondary"}
              >
                READ FULL ARTICLE
              </Button>
            </Link>
          </SlideUpAnim>
        </div>
      </div>

      {/* other articles */}
      <div className="mt-11 grid grid-cols-1 gap-5 gap-y-10! xs:gap-8 sm:gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {ARTICLES.slice(1, 4).map((article, i) => (
          <div key={i}>
            <SlideUpSelf className="w-full max-w-[550px] lg:max-w-none">
              <ArticleCard
                className="w-full"
                fetchPriority={fetchPriority}
                key={i}
                {...article}
              />
            </SlideUpSelf>
          </div>
        ))}
      </div>
    </section>
  );
}
