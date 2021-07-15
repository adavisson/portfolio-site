import React from 'react';

interface IButtonProps {
  text?: string;
  secondary?: boolean;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  text = 'submit',
  secondary = false,
  onClick,
}) => {
  const className = secondary ? 'secondary button' : 'primary button';

  return (
    <div className={className} onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
