import clsx from "clsx";
import React from "react";

type LandingSectionProps = {
  children: React.ReactNode;
  background?: boolean;
  direction?: "up" | "down";
};

const LandingSection: React.FC<LandingSectionProps> = ({
  children,
  background,
  direction = "down",
}) => {
  return (
    <section
      className={clsx(
        "min-h-40 w-screen py-36 px-2 text-center flex items-center justify-center ",
        {
          "bg-gradient-to-b from-teal-100 via-blue-100 to-white":
            background && direction === "down",
          "bg-gradient-to-t from-teal-100 via-blue-100 to-white":
            background && direction === "up",
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
