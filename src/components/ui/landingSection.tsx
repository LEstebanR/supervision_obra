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
        "flex flex-col gap-2 items-center min-h-40 justify-center w-screen",
        { "bg-gradient-to-b from-teal-100 via-blue-100 to-white": background }
      )}
    >
      <div>{children}</div>
    </section>
  );
};

export default LandingSection;
