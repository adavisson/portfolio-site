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
    <div className='navbar'>
      <span>
        <Link to='/' className='nav-brand'>
          <h2>Andrew Davisson</h2>
        </Link>
      </span>
      <span>
        {items.length > 0 &&
          items.map(item => {
            return (
              <Link to={item.route} className='nav-link'>
                {item.label}
              </Link>
            );
          })}
      </span>
    </div>
  );
};

export default Navbar;
