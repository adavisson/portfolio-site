import React from 'react';

interface IButtonProps {
  secondary?: boolean;
}

const Button: React.FC<IButtonProps> = ({ secondary = false }) => {
  const className = secondary ? 'secondary button' : 'primary button';

  return <div className={className}>button</div>;
};

export default Button;
