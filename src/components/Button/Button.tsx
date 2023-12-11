import React, { PropsWithChildren } from "react";

interface ButtonProps {
  secondary?: boolean;
  onClick?: () => void;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  secondary = false,
  onClick,
  children,
}) => {
  const className = secondary ? "secondary button" : "primary button";

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
