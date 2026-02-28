import Navbar from "../../components/sections/navbar/Navbar";
import CallToAction from "../../components/sections/CallToAction";
import NextRead from "./components/NextRead";
import { PageMeta } from "../../components/ui/PageMeta";
import { Link, useParams } from "react-router-dom";
import { ARTICLES } from "../../lib/articles";
import NotFoundPage from "../NotFoundPage";
import type { TArticle } from "../../lib/types";
import JsonContent from "../../components/ui/JsonContent";
import { SlideUpAnim } from "../../components/ui/Anims";
import Button from "../../components/ui/Button";
import { useInView } from "motion/react";
import { useRef } from "react";
import ArrowSvg from "../../components/ui/ArrowSvg";

export default function ArticlePage() {
  const { id } = useParams();
  const ARTICLE = ARTICLES.find(
    (a) => a.id.toLowerCase() === id?.toLowerCase()
  );

  if (!ARTICLE || !id) return <NotFoundPage />;
  return <Page key={ARTICLE.id} ARTICLE={ARTICLE} />;
}

function Page({ ARTICLE }: { ARTICLE: TArticle }) {
  const divRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(divRef, { once: true, margin: "-5%" });
  return (
    <>
      <PageMeta title={ARTICLE.title} description={ARTICLE.overview} />
      <Navbar transparentBg={false} />
      <main key={ARTICLE.title}>
        <div className="h-[530px] w-dvw">
          <img {...ARTICLE.mainImg} className="h-full w-full object-cover" />
        </div>

        <section ref={divRef} className="my-container max-w-[min(100vw,1470px)]! overflow-x-clip">
          <article className="relative z-1">
            <div className="relative z-1 grid lg:grid-cols-2">
              {/* back button + Title */}
              <div className="side-padding pt-5">
                <SlideUpAnim isInView={isInView} className="mb-8">
                  <Link to="/news">
                    <Button
                      arrow={"back"}
                      className="bg-transparent! px-0!"
                      variant={"secondary"}
                    >
                      BACK TO BLOG
                    </Button>
                  </Link>
                </SlideUpAnim>

                <SlideUpAnim transition={{ delay: 0.1 }} isInView={isInView}>
                  <h1 className="max-w-[630px] text-[36px] leading-[40px] xs:text-[40px] xs:leading-[44px]">
                    {ARTICLE.title}
                  </h1>
                </SlideUpAnim>
              </div>

              {/* article description box */}
              <div className="side-padding pt-8 pb-12 lg:bg-white/50 lg:p-12! xl:p-20!">
                <SlideUpAnim transition={{ delay: 0.2 }} isInView={isInView}>
                  <p className="text-[20px] leading-[24px]! xs:text-[22px] xs:leading-[27px]!">
                    {ARTICLE.overview}
                  </p>
                </SlideUpAnim>
              </div>
            </div>

            <div className="side-padding">
              {/* Author + Date */}
              <SlideUpAnim
                className="relative"
                transition={{ delay: 0.3 }}
                isInView={isInView}
              >
                <div className="flex items-end justify-between flex-wrap gap-y-4 pt-8 relative z-1">
                  <div>
                    <p className="text-25">{ARTICLE.author}</p>
                    <p className="font-ibm! text-[17px] leading-[31px] text-[#186167]">
                      {ARTICLE.date.string}
                    </p>
                  </div>
                  <ShareButton className="lg:hidden" />
                </div>
              </SlideUpAnim>

              {/* article */}
              <div className="flex justify-between max-lg:flex-col-reverse">
                <div className="relative z-1 lg:w-[55%] xl:w-1/2">
                  <JsonContent className="max-w-[680px]!" {...ARTICLE} />
                  <br />
                  <p className="text-16 max-w-[680px] text-[#7B7B7B] italic">
                    Gaiant is an AI engineering and infrastructure company
                    operating in the MENA region. We design and deploy bespoke
                    AI systems for large enterprises across government,
                    financial services, retail, healthcare, and industrial
                    sectors.
                  </p>
                </div>

                <div className="max-lg:h-0">
                  <div className="top-20 flex flex-col items-end gap-6 max-lg:mt-6 lg:sticky xl:gap-8">
                    <GradientCircle />

                    <ShareButton className="max-lg:hidden" />
                    <NewsLetter />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
        <NextRead />
        <CallToAction />
      </main>
    </>
  );
}

function NewsLetter() {
  return (
    <div className="lg-rounded relative w-full max-w-[380px] bg-white/50 p-5 max-lg:hidden xl:max-w-[410px]">
      <p className="text-[28px] leading-[31px]">AI waits for no one.</p>
      <p className="text-[18px] leading-[31px] xl:text-[20px]">
        We’ll keep you up to date with the latest.
      </p>
      <p className="mt-[20px] max-w-[320px] text-[14px] leading-[22px] text-light-gray">
        Enter your business email below to receive updates from Gaiant. You can
        unsubscribe at any time.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Email Received!");
        }}
        className="relative mt-[25px] flex items-center justify-between pb-3"
      >
        <input
          placeholder="Email Address"
          className="w-full text-[18px] outline-none"
        />
        <button
          aria-label="Submit"
          className="cursor-pointer hover:opacity-60"
          type="submit"
        >
          <span className="hidden">Submit</span>
          <ArrowSvg color="black" className="w-[18px]" />
        </button>
        <div className="bg-dark-green-700-blue-gradient absolute right-0 bottom-0 left-0 h-[2px] rounded-full" />
      </form>
    </div>
  );
}

function ShareButton({ className }: { className?: string }) {
  return (
    <button
      className={
        "group relative inline-flex cursor-pointer items-center justify-between gap-2.5 overflow-clip rounded-full bg-white/50 px-5 py-2.5 text-sm font-bold text-black duration-200 ease-in-out hover:opacity-70" +
        " " +
        className
      }
    >
      <div className="absolute top-1/2 right-0 left-0 z-0 h-0.5 -translate-y-1/2 bg-purple-500/0" />
      <ArrowSvg
        color={"black"}
        className={"w-[18px] -translate-y-0.5 -rotate-45 stroke-[1.2px]"}
      />
      <span className={"-translate-y-[1px]"}>Share Article</span>
    </button>
  );
}

function GradientCircle() {
  return (
    <div className="absolute top-0 right-0 z-0 w-dvw max-w-[1328px] translate-x-1/4 translate-y-[200px] xs:translate-y-[120px] sm:translate-y-[30px] md:-translate-y-[100px] opacity-50 max-sm:scale-150 xs:opacity-60 sm:opacity-70 md:translate-x-1/3 lg:-translate-y-1/2 md:opacity-80 2xl:scale-110">
      <img
        src="/gradients/circle-news.png"
        className="h-full w-full object-contain"
      />
    </div>
  );
}
