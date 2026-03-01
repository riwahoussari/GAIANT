import { Link } from "react-router-dom";
import ArrowSvg from "../ArrowSvg";
import GaiantLogoSvg from "../GaiantLogoSvg";
import type { TArticle } from "../../../lib/types";

export default function ArticleCard({
  mainImg: { src, srcset },
  id,
  title,
  className,
  fetchPriority,
  withLogo = false,
}: TArticle & {
  className?: string;
  fetchPriority?: "high" | "low" | "auto" | undefined;
}) {
  return (
    <Link
      to={`/news/${id}`}
      className="group w-full cursor-pointer"
      aria-label={`Read more about ${title}`}
    >
      <div
        className={
          "lg-rounded relative aspect-440/342 overflow-clip text-black " +
          (className || "")
        }
      >
        <div
          className="relative z-1 h-full bg-black/25"
          style={{
            clipPath: `url(#bottomRightClip)`,
          }}
        >
          <img
            loading="lazy"
            fetchPriority={fetchPriority}
            className="h-full w-full object-cover duration-200 ease-in-out group-hover:scale-110"
            src={src}
            sizes="(max-width: 606px) 100vw, (max-width: 1024px) 550px, (max-width: 1280px) 50vw, (max-width: 1830px) 33vw, 610px"
            srcSet={srcset}
            alt={`Image representing ${title}`}
          />
          {withLogo && (
            <div className="max-w-[200px absolute top-2/3 left-1/2 z-1 w-1/2 -translate-1/2">
              <GaiantLogoSvg
                color="white"
                className="h-full w-full object-contain"
              />
            </div>
          )}
        </div>

        {/* content */}
        <div className="bg-linear-white-transparent-70 absolute top-0 right-0 left-0 z-2 p-5 backdrop-blur-[20px] sm:p-7 lg:p-8">
          <p className="text-25">{title}</p>
        </div>

        {/* arrow */}
        <ArrowSvg
          className="absolute right-0 bottom-1 z-0 w-6 -translate-x-[150%] scale-0 stroke-[1px] opacity-0 duration-200 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 xs:w-8"
          color="black"
        />
      </div>
    </Link>
  );
}
