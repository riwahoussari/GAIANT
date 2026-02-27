import React, { useRef, useState } from "react";
import type { TImg, TJsonContentObj } from "../../lib/types";
import { SlideUpAnim } from "./Anims";
import { useInView } from "motion/react";

export default function JsonContent({
  content,
  className,
}: {
  content: TJsonContentObj[];
  className?: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(divRef, { once: true, margin: "-5%" });
  return (
    <div ref={divRef}>
      <SlideUpAnim
        // initial={{ y: "50px" }}
        isInView={isInView}
        transition={{ delay: 0.4 }}
        className={"text-19 max-w-[680px] leading-[28px]! " + className}
      >
        {content.map((obj, i) => {
          if (obj.type === "heading") {
            return (
              <React.Fragment key={i}>
                <br />
                <h3 className="text-24 font-bold">{obj.content}</h3>
                <br />
              </React.Fragment>
            );
          } else if (obj.type === "text") {
            return (
              <React.Fragment key={i}>
                {obj.content.map((text, j) => (
                  <React.Fragment key={j}>
                    {text.split("<br>").map((line, k) => (
                      <>
                        <p>
                          {line.split("<b>").map((part, l) => (
                            <span className={l % 2 !== 0 ? "font-bold" : ""}>
                              {part}
                            </span>
                          ))}
                        </p>
                        {k !== text.split("<br").length - 1 && <br />}
                      </>
                    ))}
                    <br />
                  </React.Fragment>
                ))}
              </React.Fragment>
            );
          } else if (obj.type === "list") {
            return (
              <React.Fragment key={i}>
                <ul className="list-disc ps-6">
                  {obj.content.map((text, j) => (
                    <li key={j}>{text}</li>
                  ))}
                </ul>
                <br />
              </React.Fragment>
            );
          } else if (obj.type === "image") {
            return (
              <React.Fragment key={i}>
                <ShimmeringImage img={obj.content} />
                <br />
              </React.Fragment>
            );
          }
        })}
      </SlideUpAnim>
    </div>
  );
}

function ShimmeringImage({ img }: { img: TImg }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <img
      className={
        "lg-rounded w-full object-contain " +
        (imgLoaded ? "" : " shimmer aspect-video w-full")
      }
      {...img}
      onLoad={() => setImgLoaded(true)}
    />
  );
}
