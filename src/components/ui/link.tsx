import Link from "next/link";
import React from "react";

type CustomLinkProps = {
  href: string;
  children?: React.ReactNode;
  type?: "icon" | "text";
  icon?: React.ReactNode;
  target?: string;
};

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  children,
  type,
  icon,
  target,
}) => {
  if (type === "icon") {
    return (
      <Link
        className="font-medium text-textSecondary hover:text-primary transition-colors"
        href={href}
        target={target}
      >
        {icon}
      </Link>
    );
  }

  return (
    <Link
      className="text-sm font-medium text-textSecondary hover:text-primary  transition-colors hover:underline hover:decoration-dashed hover:underline-offset-4 decoration-2 "
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
