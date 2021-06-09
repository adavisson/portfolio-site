import { Link } from 'gatsby';
import React from 'react';

export interface INavbarProps {
  items?: Array<{
    label: string;
    route: string;
  }>;
}

const Navbar: React.FC<INavbarProps> = ({ items = [] }) => {
  return (
    <div>
      {items.length > 0 &&
        items.map(item => {
          return <Link to={item.route}>{item.label}</Link>;
        })}
    </div>
  );
};

export default Navbar;
