import React from 'react';

interface IButtonProps {
  text?: string;
  secondary?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  text = 'submit',
  secondary = false,
}) => {
  const className = secondary ? 'secondary button' : 'primary button';

  return <div className={className}>{text}</div>;
};

export default Button;
