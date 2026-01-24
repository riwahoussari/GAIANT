import { useInView } from "motion/react";
import { useRef } from "react";
import { SectionTitle } from "../../../components/ui/Titles";
import { AnimatedText, SlideUpSelf } from "../../../components/ui/Anims";
import { CAREERS_PAGE_DATA } from "../../../lib/data";
import SimpleCard from "../../../components/ui/cards/SimpleCard";

export default function OpenRoles() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });
  return (
    <section
      id="open_roles"
      ref={sectionRef}
      className="relative z-2 mt-[120px] scroll-m-[120px] overflow-x-clip"
    >

      <div className="my-container side-padding">
        <div className="relative mb-5 xs:mb-8">
          <SectionTitle>
            <AnimatedText isInView={isInView}>
              {CAREERS_PAGE_DATA.OPEN_ROLES.title}
            </AnimatedText>
          </SectionTitle>
        </div>

        <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {CAREERS_PAGE_DATA.OPEN_ROLES.cards.map((role, i) => (
            <SlideUpSelf key={i}>
              <SimpleCard
                {...role}
                key={i}
                className="min-h-[180px] max-md:max-w-[424px] xs:min-h-[250px]"
              />
            </SlideUpSelf>
          ))}
        </div>
      </div>
    </section>
  );
}
