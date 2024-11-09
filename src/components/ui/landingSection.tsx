import clsx from "clsx";
import React from "react";

type LandingSectionProps = {
  children: React.ReactNode;
  background?: boolean;
};

const LandingSection: React.FC<LandingSectionProps> = ({
  children,
  background,
}) => {
  return (
    <section
      className={clsx(
        "min-h-40 w-screen py-12 px-2 text-center flex items-center justify-center",
        {
          "bg-gradient-to-b from-teal-100 via-blue-100 to-white": background,
        }
      )}
    >
      <div className="flex flex-col gap-8 items-center justify-center w-9/12">
        {children}
      </div>
    </section>
  );
};

export default LandingSection;
