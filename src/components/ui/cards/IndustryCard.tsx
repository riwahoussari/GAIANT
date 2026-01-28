import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import ArrowSvg from "../ArrowSvg";

export default function IndustryCard({
  imgSrc,
  id,
  title,
  text,
  textClassName,
  button = "none",
  className,
  fetchPriority,
}: {
  imgSrc: string;
  id: string;
  title: string;
  text?: string;
  textClassName?: string;
  button?: "none" | "button" | "arrow";
  className?: string;
  fetchPriority?: "high" | "low" | "auto" | undefined;
}) {
  const contentRef = useRef<HTMLDivElement>(null); // to calculate height for animation to work
  const [hovering, setHovering] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={"group relative overflow-clip text-white " + (className || "")}
    >
      <div
        className="h-full bg-black/25 transition-all duration-300 ease-in-out"
        style={{
          clipPath: hovering
            ? "polygon(0 0, 82% 0, 100% 20%, 100% 100%, 0 100%)"
            : "polygon(0 0, 100% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <img
          fetchPriority={fetchPriority}
          className="h-full w-full object-cover"
          src={imgSrc}
          alt={`Image representing ${title} industry`}
        />
      </div>

      {/* content */}
      <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-tr from-black/0 to-black/15 p-3 py-4 backdrop-blur-md xs:p-6">
        <p className="text-25">{title}</p>

        {(text || button !== "none") && (
          <div
            style={{
              height: hovering ? contentRef.current?.clientHeight || 0 : 0,
            }}
            className={
              "overflow-y-hidden text-xl transition-all duration-400 ease-in-out"
            }
          >
            <div ref={contentRef}>
              {text && <p className={"text-16 py-2 " + textClassName}>{text}</p>}
              {button === "button" && (
                <div className="flex justify-end">
                  <Link
                    aria-label={`Read more about ${title} industry`}
                    to={`/industries/${id}`}
                  >
                    <Button>
                      Read more
                      <span className="hidden"> about {title} industry</span>
                    </Button>
                  </Link>
                </div>
              )}
              {button === "arrow" && (
                <div className="flex justify-end ">
                  <Link
                    aria-label={`Read more about ${title} industry`}
                    to={`/industries/${id}`}
                  >
                    <ArrowSvg className={"w-[18px] stroke-[1.75px] aspect-square"} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
