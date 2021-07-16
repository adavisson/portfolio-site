import React from 'react';

interface IButtonProps {
  secondary?: boolean;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  secondary = false,
  onClick,
  children,
}) => {
  const className = secondary ? 'secondary button' : 'primary button';

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
