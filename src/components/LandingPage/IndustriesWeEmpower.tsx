import Button from "../shared/Button";
import ArrowSvg from "../shared/ArrowSvg";
import { SectionSubTitle, SectionTitle } from "../shared/Titles";

export default function IndustriesWeEmpower() {
  return (
    <section className="side-padding overflow-x-hidden mt-[100px]">
      {/* title */}
      <div className="flex justify-between items-start">
        <div>
          <SectionSubTitle>TAILORED TO EVERY SECTOR</SectionSubTitle>
          <SectionTitle>Industries We Empower</SectionTitle>
        </div>
        <Button arrow={"normal"} variant={"secondary"}>
          SEE ALL
        </Button>
      </div>

      {/* cards */}
      <div className=" mt-[40px]">
        <div className="flex items-start gap-5 w-max">
          <Card
            title="Healthcare & Life Sciences"
            text="Advancing patient care and biological research"
            button
            imgSrc="/industries/Industries-1.jpg"
          />
          <Card
            title="Retail & Consumer Goods"
            imgSrc="/industries/Industries-2.jpg"
          />
          <Card
            title="Banking & Financial Services"
            imgSrc="/industries/Industries-3.jpg"
          />
          <Card title="Education" imgSrc="/industries/Industries-4.jpg" />
        </div>
      </div>

      {/* slider */}
      <div className="flex gap-5 items-center justify-center mt-10">
        <ArrowSvg color="var(--color-teal)" className="rotate-180 w-3.5" />
        <div className="flex items-center justify-center gap-3">
          <div className="rounded-full w-[134px] h-1 bg-dark-green-blue-gradient" />
          <div className="rounded-full w-[593px] h-1 bg-black/25" />
        </div>
        <ArrowSvg color="var(--color-teal)" className="w-3.5" />
      </div>
    </section>
  );
}

function Card({
  imgSrc,
  title,
  text,
  button = false,
}: {
  imgSrc: string;
  title: string;
  text?: string;
  button?: boolean;
}) {
  return (
    <div className="group relative text-white w-[410px] h-[390px] cursor-pointer overflow-clip">
      <div
        className="bg-black/25 h-full"
        style={{
          clipPath: "polygon(0 0, 82% 0, 100% 18%, 100% 100%, 0 100%)",
        }}
      >
        <img className=" w-full object-cover" src={imgSrc} />
      </div>

      {/* content */}
      <div className="absolute bottom-0 left-0 right-0 py-4 p-6 backdrop-blur-md bg-gradient-to-tr from-black/0 to-black/15">
        <p className="text-[25px] leading-[47px]">{title}</p>

        {text && (
          <p className="text-[16px] leading-[21px] max-w-1/2 mt-1">{text}</p>
        )}
        {button && (
          <div className="flex justify-end">
            <Button>READ MORE</Button>
          </div>
        )}
      </div>
    </div>
  );
}
