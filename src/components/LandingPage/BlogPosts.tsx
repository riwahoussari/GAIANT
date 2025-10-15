import Button from "../shared/Button";
import ArrowSvg from "../shared/ArrowSvg";
import { TitleBlock } from "../shared/Titles";

export default function BlogPosts() {
  return (
    <section className="my-container side-padding mt-[140px] max-xl:overflow-x-hidden">
      {/* title */}

      <TitleBlock
        title="Our latest thinking"
        subtitle="INSIGHTS AND IDEAS"
        button="SEE ALL"
      />

      {/* cards */}
      <div className="mt-[40px] xl:overflow-x-hidden">
        <div className="flex w-max items-start gap-5">
          <Card
            title="How AI is Reshaping Decision-Making Across Industries"
            subtitle="GAIANT TEAM - SEP 19, 2025"
            imgSrc="/blogs/blog-1.jpg"
          />
          <Card
            title="From Hype to Help: Making AI Practical for Everyday Work"
            subtitle="GAIANT TEAM - SEP 19, 2025"
            imgSrc="/blogs/blog-2.jpg"
          />
          <Card
            title="The Future of Efficiency: Why AI Is Your Next Teammate"
            subtitle="GAIANT TEAM - SEP 19, 2025"
            imgSrc="/blogs/blog-3.jpg"
          />
          <Card
            title="How AI is Reshaping Decision-Making Across Industries"
            subtitle="GAIANT TEAM - SEP 19, 2025"
            imgSrc="/blogs/blog-4.jpg"
          />
        </div>
      </div>
    </section>
  );
}

function Card({
  imgSrc,
  title,
  subtitle,
}: {
  imgSrc: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="group aspcet-415/390! relative w-[300px] overflow-clip text-white xs:w-[360px] lg:w-[410px]">
      <div
        className="h-full bg-black/25"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 82%, 82% 100%, 0 100%)",
        }}
      >
        <img className="w-full object-cover" src={imgSrc} />
      </div>

      {/* content */}
      <div className="bg-linear-white-transparent absolute top-0 right-0 left-0 p-6 py-4 backdrop-blur-[1000px]">
        <p className="font-ibm! text-[12px] leading-[31px]">{subtitle}</p>
        <p className="text-25">{title}</p>
      </div>

      {/* button */}
      <Button className="absolute bottom-1 left-2" variant={"ghost"}>
        READ MORE
      </Button>
      {/* arrow */}
      <ArrowSvg
        className="absolute right-0 bottom-1 z-1 w-6 stroke-[1px] xs:w-8"
        color="black"
      />
    </div>
  );
}
