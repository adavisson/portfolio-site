import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React, { FC } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import Resume from "../../Resume.pdf";

const items: Array<{ route: string; icon: IconDefinition }> = [
  {
    route: "https://github.com/adavisson",
    icon: faGithub,
  },
  {
    route: "https://www.linkedin.com/in/andrew-davisson/",
    icon: faLinkedin,
  },
];

export const Footer: FC = () => {
  return (
    <div className="footer">
      <a href={Resume} className="nav-link" target="_blank">
        <FontAwesomeIcon icon={faFileLines} />
      </a>
      {items.length > 0 &&
        items.map((item) => (
          <Link to={item.route} className="nav-link">
            <FontAwesomeIcon icon={item.icon} />
          </Link>
        ))}
    </div>
  );
};
