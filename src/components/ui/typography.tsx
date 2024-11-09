import React from "react";

type props = {
  children: React.ReactNode;
  gradient?: boolean;
  color?: string;
};

export const Title: React.FC<props> = ({ children, gradient }) => {
  const h1Styles = gradient
    ? {
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }
    : {};

  return (
    <h1
      className={`text-5xl md:text-7xl font-bold text-center text-black  ${
        gradient ? "bg-gradient-to-r from-primary to-secondary" : ""
      }`}
      style={h1Styles}
    >
      {children}
    </h1>
  );
};

export const Body: React.FC<props> = ({ children }) => {
  return <p className="text-2xl  text-textPrimary ">{children}</p>;
};
