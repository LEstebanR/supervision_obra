import clsx from "clsx";
import Link from "next/link";

type ButtonProps = {
  children?: React.ReactNode;
  variant?: "solid" | "outline";
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "link" | "icon";
  href?: string;
  action?: () => void;
  icon?: React.ReactNode;
};

const defaultClasses =
  "p-2 rounded-sm border-2 text-lg hover:opacity-80 hover:shadow-lg transition-all duration-300 ";

const sizeClasses = {
  sm: "w-24",
  md: "w-32",
  lg: "w-40",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  color = "primary",
  size = "md",
  className,
  type,
  href,
  action,
  icon,
}) => {
  const variantClasses = {
    solid: `bg-${color} text-white border-${color} border-2 border-${color}`,
    outline: `border-${color} text-${color} border-2`,
  };

  const colorClasses = {
    primary: {
      solid: "bg-primary text-white border-primary",
      outline: "border-primary text-primary",
    },
    secondary: {
      solid: "bg-secondary text-secondary border-secondary",
      outline: "border-secondary text-secondary",
    },
  };

  if (type == "link") {
    return (
      <Link href={href || ""}>
        <button
          className={clsx(
            defaultClasses,
            variantClasses[variant],
            sizeClasses[size],
            colorClasses[color][variant]
          )}
        >
          {children}
        </button>
      </Link>
    );
  }

  if (type === "icon") {
    return (
      <button
        className={clsx(
          defaultClasses,
          variantClasses[variant],
          colorClasses,
          className
        )}
        onClick={action}
      >
        {icon}
      </button>
    );
  }

  return (
    <button
      className={clsx(
        defaultClasses,
        variantClasses[variant],
        sizeClasses[size],
        colorClasses[color][variant],
        className
      )}
      onClick={action}
    >
      {children}
    </button>
  );
};

export default Button;
