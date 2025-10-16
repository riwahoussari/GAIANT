import { Fragment } from "react/jsx-runtime";
import Button from "./Button";
import type { ReactNode } from "react";

export function SectionTitle({
  children,
  className,
  big = false,
}: {
  children: ReactNode;
  className?: string;
  big?: boolean;
}) {
  return (
    <h2
      className={
        (big
          ? "text-[42px] leading-[44px] xs:text-[69px] xs:leading-[76px]"
          : "text-[32px] leading-[39px] xs:text-[40px] xs:leading-[47px]") +
        " " +
        className
      }
    >
      {children}
    </h2>
  );
}
export function SectionSubTitle({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <p className={"font-ibm! text-[11px] xs:text-[12px]" + " " + className}>
      {children}
    </p>
  );
}

export function TitleBlock({
  title,
  subtitle,
  button,
}: {
  title: string;
  subtitle?: string;
  button?: string;
}) {
  return (
    <div className="items-start justify-between sm:flex">
      <div className="space-y-2 max-sm:mb-6">
        {subtitle && <SectionSubTitle>{subtitle}</SectionSubTitle>}
        <SectionTitle>
          {title.split("\\n").map((string, i) => (
            <Fragment key={i}>
              {string}
              {i + 1 != title.split("\\n").length && <br />}
            </Fragment>
          ))}
        </SectionTitle>
      </div>
      {button && (
        <Button size={"sm"} arrow={"normal"} variant={"secondary"}>
          {button}
        </Button>
      )}
    </div>
  );
}

export function TitleBlock2({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <SectionTitle>{title}</SectionTitle>
      {subtitle && <p className="text-16">{subtitle}</p>}
    </div>
  );
}
