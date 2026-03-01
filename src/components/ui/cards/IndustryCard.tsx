import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ArrowSvg from "../ArrowSvg";

export default function IndustryCard({
  imgSrc,
  imgSrcSet,
  imgSizes,
  imgClassName,
  id,
  title,
  text,
  textClassName,
  button = "none",
  className,
  fetchPriority,
  loading
}: {
  imgSrc: string;
  imgSrcSet?: string;
  imgSizes?: string;
  imgClassName?: string;
  id: string;
  title: string;
  text?: string;
  textClassName?: string;
  button?: "none" | "button" | "arrow";
  className?: string;
  fetchPriority?: "high" | "low" | "auto" | undefined;
  loading?: "eager" | "lazy" | undefined;
}) {
  const contentRef = useRef<HTMLDivElement>(null); // to calculate height for animation to work
  const [hovering, setHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={
        "group lg-rounded relative overflow-clip text-white " +
        (className || "")
      }
    >
      <div
        className="h-full bg-black/25 transition-all duration-300 ease-in-out"
        style={{
          clipPath: `url(#topRightClip)`,
        }}
      >
        <img
          loading={loading}
          fetchPriority={fetchPriority}
          className={"h-full w-full object-cover " + imgClassName}
          src={imgSrc}
          srcSet={imgSrcSet}
          sizes={imgSizes}
          alt={`Image representing ${title} industry`}
        />
      </div>

      {/* content */}
      <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-tr from-black/0 to-black/15 p-3 py-4 backdrop-blur-md xs:p-6">
        <p className="text-25-new flex min-h-[54px] items-center transition-all duration-400 ease-in-out group-hover:min-h-0! xs:min-h-[62px]">
          {title}
        </p>

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
              {text && (
                <p className={"text-16 py-2 " + textClassName}>{text}</p>
              )}

              <div className="flex justify-end">
                <Link
                  aria-label={`Read more about ${title} industry`}
                  to={`/industries/${id}`}
                >
                  <ArrowSvg
                    className={"aspect-square w-[18px] stroke-[1.75px]"}
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
