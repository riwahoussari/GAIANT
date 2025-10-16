import Button from "../../ui/Button";

export function IndustryCard({
  imgSrc,
  title,
  text,
  button = false,
  className,
}: {
  imgSrc: string;
  title: string;
  text?: string;
  button?: boolean;
  className?: string;
}) {
  return (
    <div
      className={"group relative overflow-clip text-white " + (className || "")}
    >
      <div
        className="h-full bg-black/25"
        style={{
          clipPath: "polygon(0 0, 82% 0, 100% 20%, 100% 100%, 0 100%)",
        }}
      >
        <img className="w-full object-cover" src={imgSrc} />
      </div>

      {/* content */}
      <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-tr from-black/0 to-black/15 p-3 py-4 backdrop-blur-md xs:p-6">
        <p className="text-25">{title}</p>

        {text && <p className="text-16 my-2 max-w-[180px] xs:mt-4">{text}</p>}
        {button && (
          <div className="flex justify-end">
            <Button>READ MORE</Button>
          </div>
        )}
      </div>
    </div>
  );
}
