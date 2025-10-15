import Button from "../shared/Button";
import ArrowSvg from "../shared/ArrowSvg";
import { SectionSubTitle, SectionTitle } from "../shared/Titles";

export default function BlogPosts() {
  return (
    <section className="side-padding overflow-x-hidden mt-[140px]">
      {/* title */}
      <div className="flex justify-between items-start">
        <div>
          <SectionSubTitle>INSIGHTS AND IDEAS</SectionSubTitle>
          <SectionTitle>Our latest thinking</SectionTitle>
        </div>
        <Button arrow={"normal"} variant={"secondary"}>
          SEE ALL
        </Button>
      </div>

      {/* cards */}
      <div className=" mt-[40px]">
        <div className="flex items-start gap-5 w-max">
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
    <div className="group relative text-white w-[415px] h-[390px] cursor-pointer overflow-clip">
      <div
        className="bg-black/25 h-full"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 82%, 82% 100%, 0 100%)",
        }}
      >
        <img className=" w-full object-cover" src={imgSrc} />
      </div>

      {/* content */}
      <div className="absolute top-0 left-0 right-0 py-4 p-6 backdrop-blur-[1000px] bg-linear-white-transparent">
        <p className="text-[12px] leading-[31px] font-ibm!">{subtitle}</p>
        <p className="text-[25px] leading-[31px]">{title}</p>
      </div>

      {/* button */}
      <Button className="absolute bottom-1 left-2" variant={"ghost"}>
        READ MORE
      </Button>
      {/* arrow */}
      <ArrowSvg
        className="absolute bottom-1 z-1 right-0 w-8 stroke-[1px]"
        color="black"
      />
    </div>
  );
}
