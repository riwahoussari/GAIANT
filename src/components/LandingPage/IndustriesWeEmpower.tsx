import Button from "../shared/Button";
import ArrowSvg from "../shared/ArrowSvg";
import { TitleBlock } from "../shared/Titles";

export default function IndustriesWeEmpower() {
  return (
    <section className="side-padding my-container mt-[100px] max-xl:overflow-x-hidden">
      {/* title */}
      <TitleBlock
        subtitle="TAILORED TO EVERY SECTOR"
        title="Industries We Empower"
        button="SEE ALL"
      />

      {/* cards */}
      <div className="mt-[40px] xl:overflow-x-hidden">
        <div className="flex w-max items-start gap-5">
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
      <div className="mx-auto mt-10 flex w-9/10 max-w-[580px] items-center justify-center gap-3 sm:gap-5 lg:w-1/2 lg:min-w-[580px]">
        <ArrowSvg
          color="var(--color-teal)"
          className="w-6 rotate-y-180 cursor-pointer 2xl:-translate-y-[1px]"
        />
        <div className="flex w-full items-center justify-center gap-1.5 sm:gap-3">
          <div className="bg-dark-green-blue-gradient h-1 w-[20%] rounded-full" />
          <div className="h-1 w-[80%] rounded-full bg-black/25" />
        </div>
        <ArrowSvg
          color="var(--color-teal)"
          className="w-6 cursor-pointer 2xl:-translate-y-[1px]"
        />
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
    <div className="group relative aspect-41/39! w-[300px] overflow-clip text-white xs:w-[360px] lg:w-[410px]">
      <div
        className="h-full bg-black/25"
        style={{
          clipPath: "polygon(0 0, 82% 0, 100% 18%, 100% 100%, 0 100%)",
        }}
      >
        <img className="w-full object-cover" src={imgSrc} />
      </div>

      {/* content */}
      <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-tr from-black/0 to-black/15 p-3 py-4 backdrop-blur-md xs:p-6">
        <p className="text-25 mb-2 xs:mb-4">{title}</p>

        {text && <p className="text-16 mb-2 max-w-[180px]">{text}</p>}
        {button && (
          <div className="flex justify-end">
            <Button>READ MORE</Button>
          </div>
        )}
      </div>
    </div>
  );
}
