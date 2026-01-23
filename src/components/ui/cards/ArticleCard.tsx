import { Link } from "react-router-dom";
import Button from "../Button";
import ArrowSvg from "../ArrowSvg";

export default function ArticleCard({
  imgSrc,
  title,
  subtitle,
  className,
  fetchPriority,
}: {
  imgSrc: string;
  title: string;
  subtitle: string;
  className?: string;
  fetchPriority?: "high" | "low" | "auto" | undefined;
}) {
  return (
    <Link
      to={`/news/${title}`}
      className="group w-full cursor-pointer"
      aria-label={`Read more about ${title}`}
    >
      <div className={"relative overflow-clip text-white " + (className || "")}>
        <div
          className="h-full bg-black/25"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 82%, 82% 100%, 0 100%)",
          }}
        >
          <img
            fetchPriority={fetchPriority}
            className="w-full object-cover duration-200 ease-in-out group-hover:scale-110"
            src={imgSrc}
            alt={`Image representing ${title}`}
          />
        </div>

        {/* content */}
        <div className="bg-linear-white-transparent-70 absolute top-0 right-0 left-0 p-6 py-4 backdrop-blur-[1000px]">
          <p className="font-ibm! text-[12px] leading-[31px]">{subtitle}</p>
          <p className="text-25">{title}</p>
        </div>

        {/* button */}
        <Button className="absolute bottom-1 left-2" variant={"ghost"}>
          Read more
        </Button>
        {/* arrow */}
        <ArrowSvg
          className="absolute right-0 bottom-1 z-1 w-6 -translate-x-1 stroke-[1px] duration-200 ease-in-out group-hover:translate-x-0 xs:w-8"
          color="black"
        />
      </div>
    </Link>
  );
}