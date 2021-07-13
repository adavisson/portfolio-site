import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';

export interface INavbarProps {
  items?: Array<{
    label: string;
    route: string;
  }>;
}

const Navbar: React.FC<INavbarProps> = ({ items = [] }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => setOffset(window.pageYOffset));
  }, []);

  return (
    <div className={`navbar ${offset >= 100 ? 'sticky' : ''}`}>
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
