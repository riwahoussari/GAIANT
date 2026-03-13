import { useRef, useState } from "react";
import Navbar from "../../components/sections/navbar/Navbar";
import { SlideUpAnim } from "../../components/ui/Anims";
import { PageMeta } from "../../components/ui/PageMeta";
import { useInView, useMotionValueEvent, useScroll } from "motion/react";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  const [transparentNavbar, setTransparentNavbar] = useState(true);
  const navbarBgTrigger = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: navbarBgTrigger,
    offset: ["end end", "start start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (val) =>
    setTransparentNavbar(val >= 1 ? false : true)
  );

  return (
    <>
      <PageMeta
        title="Contact Gaiant | Get in Touch With Our Team"
        description="Request a demo to explore how Gaiant’s secure, enterprise-ready AI will help your team move faster."
      />
      <Navbar textColor="black" transparentBg={transparentNavbar} />
      <main>
        <Page navbarTriggerRef={navbarBgTrigger} />
      </main>
    </>
  );
}

function Page({
  navbarTriggerRef,
}: {
  navbarTriggerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const isInView = useInView(navbarTriggerRef, { once: true, margin: "-10%" });

  return (
    <section ref={navbarTriggerRef} className="bg-primary relative pt-36 pb-[calc(80px+240px)] -mb-60 overflow-clip">
      <div className="my-container side-padding relative flex justify-between gap-6 pt-10 max-xl:flex-col max-xl:items-center">
        {/* text */}
        <SlideUpAnim
          isInView={isInView}
          className="text-16-5 relative z-2 max-w-[510px]"
        >
          <div>
            <p className="mb-1 font-ibm! text-[18px] leading-[32px]">
              GET IN TOUCH
            </p>
            <h1 className="text-[40px] leading-[47px]">
              Let’s make AI work for you
            </h1>
            <p className="mt-[22px] max-w-[430px]">
              Request a demo to explore how Gaiant’s secure, enterprise-ready AI
              will help your team move faster.
            </p>
          </div>
          <CheckList />
        </SlideUpAnim>

        {/* form */}
        <SlideUpAnim
          className="w-full max-w-[600px] xl:w-1/2 xl:max-w-[800px]"
          isInView={isInView}
          initial={{ y: "50px" }}
        >
          <ContactForm />
        </SlideUpAnim>
      </div>
    </section>
  );
}

function CheckList() {
  const list = [
    {
      text: "Explore how Gaiant’s AI solutions adapt to your organization’s real-world use cases",
    },
    {
      text: "Identify the right approach for your infrastructure and security needs",
    },
    {
      text: "See how Gaiant helps take AI from concept to production, efficiently and responsibly",
    },
  ];

  return (
    <div className="mt-[28px] flex max-w-[510px] flex-col gap-5">
      {list.map((l, i) => (
        <div key={i} className="flex items-start gap-3">
          <div
            aria-hidden
            className="aspect-square w-4 flex-none translate-y-1 rounded-md text-[#5C86AE]"
          >
            <svg
              className="h-full w-full"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.08521 8.57872L6.88156 10.8936L11.915 5.10638"
                stroke="#5C86AE"
                strokeWidth="1.3"
              />
              <circle
                cx="8"
                cy="8"
                r="7.35"
                stroke="#5C86AE"
                strokeWidth="1.3"
              />
            </svg>
          </div>
          <p>{l.text}</p>
        </div>
      ))}
    </div>
  );
}
