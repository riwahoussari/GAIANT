import AccordionSection, { type TAccordionContent } from "../../../components/sections/AccordionSection";

 export default function FeaturesSection({
  content,
}: {
  content: {
    title: string;
    subtitle: string;
    text?: string;
    imgFront: { src: string; alt: string };
    imgBack: { src: string; alt: string };
    accordionContent: TAccordionContent[];
  };
}) {
  return (
    <AccordionSection
      title={content.title}
      subtitle={content.subtitle}
      text={content.text}
      img={
        <div>
          <img
            src={content.imgBack.src}
            alt={content.imgBack.alt}
          />
          <img
            src={content.imgFront.src}
            alt={content.imgFront.alt}
            className="absolute top-0 left-0 z-1"
          />
        </div>
      }
      accordionContent={content.accordionContent}
    />
  );
}
