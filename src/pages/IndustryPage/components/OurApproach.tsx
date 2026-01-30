import { useInView } from "motion/react";
import { useRef } from "react";
import { TitleBlock } from "../../../components/ui/Titles";
import { SlideUpAnim } from "../../../components/ui/Anims";

export default function OurApproach({
  content,
}: {
  content: {
    title: string;
    subtitle: string;
    text: string;
    video: string;
  };
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  return (
    <section ref={sectionRef} className="side-padding my-container mt-[120px]">
      <div className="grid grid-cols-1 items-end gap-5 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-5 2xl:gap-8">
        <TitleBlock title={content.title} subtitle={content.subtitle} />
        <SlideUpAnim
          isInView={isInView}
          transition={{ delay: 0.2 }}
          className="xl:col-span-2"
        >
          <p className="text-16 max-w-[432px]">{content.text}</p>
        </SlideUpAnim>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-5 max-md:max-w-[520px] md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-5 2xl:gap-8 ">
        <SlideUpAnim
          initial={{ y: "50px" }}
          className="col-span-2 xl:col-start-2"
          isInView={isInView}
          transition={{ delay: 0.3 }}
        >
          <img
            src={content.video}
            alt="Image demonstrating our approach"
            className="w-full"
          />
        </SlideUpAnim>
      </div>
    </section>
  );
}
