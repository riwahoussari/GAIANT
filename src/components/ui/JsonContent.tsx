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
                <h3 className="font-bold">{obj.content}</h3>
                <br />
              </React.Fragment>
            );
          } else if (obj.type === "text") {
            return (
              <React.Fragment key={i}>
                {obj.content.map((text, j) => (
                  <React.Fragment key={j}>
                    {text.split("<br>").map((line, k) => (
                      <p>
                        <span>
                          {line.split("<b>").map((part, l) => (
                            <span className={l % 2 !== 0 ? "font-bold" : ""}>
                              {part}
                            </span>
                          ))}
                        </span>
                        {k !== text.split("<br").length - 1 && <br />}
                      </p>
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
                    <li key={j}>
                      {text.split("<b>").map((part, l) => (
                        <span className={l % 2 !== 0 ? "font-bold" : ""}>
                          {part}
                        </span>
                      ))}
                    </li>
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
          } else if (obj.type === "table") {
            return (
              <div className="max-sm:overflow-x-scroll max-sm:overflow-y-hidden">
                <table className="text-[15px] max-sm:w-max xs:text-[16px] xs:leading-[26px] min-[1400px]:w-max min-[1400px]:text-[17px] min-[1400px]:leading-[28px] sm:max-w-[min(870px,100vw)]">
                  <thead>
                    <tr className="relative">
                      {obj.content.head.map((title, j) => (
                        <th
                          style={{ maxWidth: "94px" }}
                          className="max-w-20! px-2 py-5 text-start min-[1400px]:px-3.5 min-[1400px]:py-7"
                          key={j}
                        >
                          <span
                            style={{
                              maxWidth: obj.content.headCols[j] + 28 + "px",
                            }}
                            className="inline-block"
                          >
                            {title}
                          </span>
                        </th>
                      ))}

                      <div className="bg-dark-green-700-blue-gradient absolute right-0 -bottom-px left-0 h-0.5" />
                    </tr>
                  </thead>
                  <tbody>
                    {obj.content.rows.map((row, i) => (
                      <tr className="relative" key={i}>
                        {row.map((data, j) => (
                          <td
                            style={{
                              maxWidth: obj.content.cols[j] + 28 + "px",
                            }}
                            className="px-2 py-5 min-[1400px]:px-3.5 min-[1400px]:py-7"
                            key={j}
                          >
                            {data}
                          </td>
                        ))}

                        <div className="bg-dark-green-700-blue-gradient absolute right-0 -bottom-px left-0 h-0.5" />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
