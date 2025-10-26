import { Link } from "react-router-dom";
import { SlideUpAnim } from "../../../components/ui/Anims";
import Button from "../../../components/ui/Button";
import { useRef } from "react";
import { useInView } from "motion/react";
import ShareIcon from "../../../assets/share-icon.svg";

export default function ArticleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5%" });

  return (
    <section ref={sectionRef} className="my-container side-padding">
      <div className="relative mt-[140px]">
        {/* back button */}
        <SlideUpAnim
          isInView={isInView}
          className="top-0 left-0 mb-5 xl:absolute"
        >
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

        {/* content */}
        <div className="mx-auto max-w-[680px]">
          {/* title */}
          <div className="space-y-2.5">
            <SlideUpAnim isInView={isInView} transition={{ delay: 0.1 }}>
              <p className="text-[32px] leading-[36px] xs:text-[40px] xs:leading-[44px]">
                Why Language is the Next Frontier of Business Intelligence
              </p>
            </SlideUpAnim>
            <SlideUpAnim isInView={isInView} transition={{ delay: 0.2 }}>
              <p className="text-[18px] leading-[22px] xs:text-[22px] xs:leading-[27px]">
                Data alone is no longer enough—understanding and harnessing
                language is becoming the decisive edge for modern businesses.
              </p>
            </SlideUpAnim>

            <SlideUpAnim
              isInView={isInView}
              transition={{ delay: 0.3 }}
              className="my-8 flex items-center justify-between text-teal"
            >
              <p className="font-ibm text-[14px] xs:text-[15px]">
                GAIANT TEAM - SEP 19, 2025
              </p>

              <div className="flex gap-1 xs:gap-2">
                <p className="text-[13px] font-bold xs:text-[14px]">SHARE</p>
                <img
                  fetchPriority="high"
                  className="w-3.5 xs:w-4"
                  src={ShareIcon}
                  alt="share icon"
                />
              </div>
            </SlideUpAnim>
          </div>

          {/* image */}
          <SlideUpAnim
            isInView={isInView}
            transition={{ delay: 0.4 }}
            className="relative aspect-2/1!"
          >
            <img
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%)",
              }}
              fetchPriority="high"
              src="/images/people-walking.webp"
              alt="two people walking together in a hallway"
              className="h-full w-full object-contain"
            />
          </SlideUpAnim>

          {/* article */}
          <SlideUpAnim isInView={isInView} transition={{ delay: 0.5 }}>
            <article className="mt-8 text-[17px] leading-[26px] xs:text-[19px] xl:leading-[28px]">
              For decades, business intelligence has been about crunching
              numbers—sales figures, operational metrics, financial forecasts.
              But numbers without words miss the human dimension. Every email,
              call transcript, customer review, or policy document contains
              valuable signals. The next great leap in business intelligence is
              not about more data, but about smarter language.
              <br />
              <br />
              <span className="relative inline-block font-bold max-md:ps-5">
                “Language is the fabric of decision-making,” says Dr. Lina Aoun,
                a computational linguist. “It’s how people express intent,
                doubt, and nuance. Things spreadsheets can’t capture.”
                <div className="bg-dark-green-blue-gradient-vertical absolute top-1 bottom-1 left-0 w-1 md:-left-5" />
              </span>
              <br />
              <br />
              When organizations learn to analyze language with the same rigor
              they apply to numbers, they unlock hidden layers of insight.
              Patterns emerge: what customers really care about, where
              inefficiencies live, and how teams collaborate (or don’t).
              Language turns abstract strategy into lived reality.
              <br />
              <br />
              Consider a customer service department. Traditional BI might
              measure average call time or number of tickets resolved. Language
              intelligence, on the other hand, can reveal whether customers
              leave conversations reassured, confused, or loyal. It transforms
              raw dialogue into measurable business outcomes.
              <br />
              <br />
              <span className="relative inline-block font-bold max-md:ps-5">
                “Numbers tell you what happened. Language tells you why,”
                explains Samir Khoury, Head of Data at a global retail firm.
                “That distinction is what moves companies from reactive to
                predictive.”
                <div className="bg-dark-green-blue-gradient-vertical absolute top-1 bottom-1 left-0 w-1 md:-left-5" />
              </span>
              <br />
              <br />
              The practical impact is profound. It enables faster decisions
              powered by real-time analysis of reports and communications. It
              deepens customer intelligence by analyzing conversations, reviews,
              and surveys at scale. And it strengthens strategy alignment by
              mapping how employees talk about goals versus how leadership
              frames them.
              <br />
              <br />
              Language also brings inclusivity. As AI advances, businesses can
              translate insights across borders, bridging cultural and
              linguistic gaps that once slowed global growth.
              <br />
              <br />
              The companies that thrive tomorrow won’t just monitor dashboards
              of KPIs. They’ll listen to the language running through every
              corner of their organization. That’s the real frontier of
              intelligence—where data meets dialogue, and where business finally
              begins to sound human.
            </article>
          </SlideUpAnim>
        </div>
      </div>
    </section>
  );
}
