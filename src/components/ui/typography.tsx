import React from "react";
import clsx from "clsx";

type props = {
  children: React.ReactNode;
  gradient?: boolean;
  color?: string;
  className?: string;
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

export const Title2: React.FC<props> = ({ children }) => {
  return (
    <h2 className="text-4xl md:text-5xl font-bold text-center text-black">
      {children}
    </h2>
  );
};

export const CardTitle: React.FC<props> = ({ children, className }) => {
  return (
    <h3 className={clsx("text-xl font-bold text-primary", className)}>
      {children}
    </h3>
  );
};

export const CardDescription: React.FC<props> = ({ children }) => {
  return <p className="text-lg text-textPrimary text-left">{children}</p>;
};

export const Body: React.FC<props> = ({ children }) => {
  return <p className="text-2xl  text-textPrimary ">{children}</p>;
};
