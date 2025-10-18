import { useState, type ReactNode } from "react";
import { CenteredTitleBlock } from "../../ui/Titles";

const TABS = ["Vault", "Legal", "Sales", "Finance", "Operations", "HR"];
export default function ArcheFeatures() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <section className="side-padding my-container flex flex-col items-center gap-y-8 overflow-x-clip sm:gap-y-14">
      {/* title */}
      <CenteredTitleBlock
        title="Make AI work for you"
        text="No matter the role or industry, Archē handles the repetitive work so
          your people can focus on the big picture"
      />

      {/* tabs */}
      <div className="grid grid-cols-2 items-center justify-items-stretch gap-2 rounded-full px-3 py-2.5 text-center max-sm:flex-wrap xs:grid-cols-3 sm:flex sm:justify-between sm:border-1 lg:gap-8">
        {TABS.map((tab, i) => (
          <Tab
            key={i}
            active={selectedTab === i}
            onClick={() => setSelectedTab(i)}
          >
            {tab}
          </Tab>
        ))}
      </div>
      {/* image */}
      <div className="relative">
        <img
          src="/doctorTyping.jpg"
          className="absolute top-0 right-0 w-[85%] md:w-[52%]"
          alt=""
        />
        <img src="/AIWorking.svg" className="relative w-full max-md:hidden" />
        <img src="/AIWorkingMobile.svg" className="relative w-full md:hidden" />
      </div>
    </section>
  );
}

function Tab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <p
      onClick={onClick}
      className={
        "rounded-full cursor-pointer px-5 py-2 text-[16px] max-sm:border-1 xs:text-[17px] duration-200 ease-in-out " +
        (active ? " bg-black text-white" : " bg-transparent text-black")
      }
    >
      {children}
    </p>
  );
}
