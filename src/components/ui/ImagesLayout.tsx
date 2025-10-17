import type { ReactNode } from "react";

export default function ImagesLayout({
  img1,
  img2,
  bg1 = true,
  bg2 = true,
}: {
  img1: ReactNode;
  img2: ReactNode;
  bg1?: boolean;
  bg2?: boolean;
}) {
  return (
    <div className="relative grid lg:grid-cols-7">
      {/* img 1 */}
      <div
        className={
          "col-span-5 overflow-clip rounded-md lg:me-5 lg:aspect-5/3! lg:rounded-xl " +
          (bg1 ? " bg-white/50" : "")
        }
      >
        {img1}
      </div>

      {/* img 2 */}
      <div
        className={
          "absolute right-0 bottom-full col-span-2 overflow-clip rounded-md max-lg:w-[min(25vw,160px)] max-lg:-translate-y-6 max-sm:hidden lg:static lg:ms-2 lg:aspect-2/3! lg:rounded-xl " +
          (bg2 ? " bg-white/50" : "")
        }
      >
        {img2}
      </div>
    </div>
  );
}
