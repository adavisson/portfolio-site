import { Link } from "gatsby";
import React from "react";

const items = [
  {
    label: "projects",
    route: "/projects",
  },
  {
    label: "blog",
    route: "/blog",
  },
];

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <span>
        <Link to="/" className="nav-brand">
          <h2>Andrew Davisson</h2>
        </Link>
      </span>
      <span>
        {items.length > 0 &&
          items.map((item) => {
            return (
              <Link to={item.route} className="nav-link">
                {item.label}
              </Link>
            );
          })}
      </span>
    </div>
  );
};

export default Navbar;
