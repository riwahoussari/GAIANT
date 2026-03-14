import { TitleBlock } from "../../../components/ui/Titles";
import { HORION_PAGE_DATA } from "../../../lib/data";
import { useEffect, useRef, useState } from "react";
import { motion as m } from "motion/react";
import { useIsMobile } from "../../../lib/useIsMobile";

const faqs = HORION_PAGE_DATA.FAQs.faqs;
const faqs1 = faqs.slice(0, Math.ceil(faqs.length / 2));
const faqs2 = faqs.slice(Math.ceil(faqs.length / 2));
const longestFaqIndex = faqs.reduce(
  (best, faq, i) => (faq.a.length > faqs[best].a.length ? i : best),
  0
);

export default function FAQs() {
  const [aHeight, setAHeight] = useState(0);

  const [selected, setSelected] = useState(faqs.length);

  const isMobile = useIsMobile(1024);

  return (
    <section className="my-container side-padding relative z-2 mt-[120px]">
      <div className="mb-6 justify-center max-lg:flex max-lg:text-center sm:mb-10 lg:mb-12">
        <TitleBlock {...HORION_PAGE_DATA.FAQs} />
      </div>

      <div className="grid items-start gap-5 lg:grid-cols-2 lg:gap-9">
        {[faqs1, faqs2].map((list, i) => (
          <div key={i} className="flex flex-col gap-5 lg:gap-9">
            {list.map((f, j) => {
              const index = i * faqs1.length + j;
              return (
                <FAQ
                  {...f}
                  setAHeight={
                    index === longestFaqIndex ? setAHeight : undefined
                  }
                  
                  key={index}
                  fullAHeight={aHeight}
                  selected={index === selected}
                  onClick={() => {
                    if (selected === index) {
                      setSelected(faqs.length);
                    } else setSelected(index);
                  }}
                  isMobile={isMobile}
                />
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ({
  q,
  a,
  setAHeight,
  fullAHeight,
  selected,
  onClick,
  isMobile,
}: {
  q: string;
  a: string;
  setAHeight?: React.Dispatch<React.SetStateAction<number>>;
  fullAHeight: number;
  selected: boolean;
  onClick: () => void;
  isMobile: boolean;
}) {
  const aRef = useRef<HTMLDivElement>(null);
  const [localHeight, setLocalHeight] = useState(0);

  useEffect(() => {
    if (!setAHeight) return;

    const handleResize = () => {
      setAHeight(aRef.current?.clientHeight || 0);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const handleResize = () => {
      setLocalHeight(aRef.current?.clientHeight || 0);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <div className="lg-rounded cursor-pointer md:hover:bg-[#5490b4]/10 duration-300 bg-white" onClick={onClick}>
      <div className="lg-rounded py-6  px-6 xl:ps-10 xl:pe-8 text-[20px]">
        <div className="flex gap-4 items-center justify-between">
          <p className="leading-[1.2]">{q}</p>
          <div className="aspect-square w-4 text-[#5490B4]">
            <Icon open={selected} />
          </div>
        </div>
      </div>
      <m.div
        animate={{
          height: selected
            ? isMobile
              ? localHeight || "auto"
              : fullAHeight || "auto"
            : 0,
        }}
        className="h-0 overflow-clip"
      >
        <div ref={aRef} className="lg-rounded px-6 xl:px-10 pb-6 text-[20px]">
          <p className="max-w-[620px] lg:max-w-[510px] text-[17px] leading-[24px]">{a}</p>
        </div>
      </m.div>
    </div>
  );
}

function Icon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-plus"
      aria-hidden
    >
      <path d="M5 12h14"></path>
      <path
        className={"origin-center duration-300 " + (open ? "-rotate-90" : "")}
        d="M12 5v14"
      ></path>
    </svg>
  );
}
