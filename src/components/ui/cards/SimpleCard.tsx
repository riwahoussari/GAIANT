export default function SimpleCard({
  title,
  text,
  className,
}: {
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={
        "flex w-full flex-col justify-between gap-8 bg-white px-3 py-5 text-black xs:px-5 xs:py-8 " +
        (className || "")
      }
    >
      <p className="text-25 max-w-[360px]">{title}</p>
      <p className="text-[16px] leading-[21px] xs:text-[17px]">{text}</p>
    </div>
  );
}