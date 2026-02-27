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
        initial={{ y: "50px" }}
        isInView={isInView}
        className={"leading-normal! text-18 max-w-[760px] " + className}
      >
        {content.map((obj, i) => {
          if (obj.type === "heading") {
            return (
              <React.Fragment key={i}>
                <br />
                <h3 className="font-bold text-24">{obj.content}</h3>
                <br />
              </React.Fragment>
            );
          } else if (obj.type === "text") {
            return (
              <React.Fragment key={i}>
                {obj.content.map((text, j) => (
                  <React.Fragment key={j}>
                    <p>{text}</p>
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
        "w-full object-contain lg-rounded " + (imgLoaded ? "" : " shimmer aspect-video w-full ")
      }
      {...img}
      onLoad={() => setImgLoaded(true)}
    />
  );
}
