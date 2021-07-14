import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout: React.FC<{}> = ({ children }) => {
  const items = [
    {
      label: 'projects',
      route: '/projects',
    },
    {
      label: 'blog',
      route: '/blog',
    },
  ];

  return (
    <>
      <Navbar items={items} />
      {children}
    </>
  );
};

export default Layout;
