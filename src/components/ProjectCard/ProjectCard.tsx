import React from 'react';
import Button from '../Button/Button';
import { FaGithub } from 'react-icons/fa';
export interface IProjectCardProps {
  name: string;
  description: string;
  ghLink: string;
  demoLink?: string;
}

const ProjectCard: React.FC<IProjectCardProps> = ({
  name,
  description,
  ghLink,
  demoLink,
}) => {
  return (
    <div className='project-card'>
      <h3>{name}</h3>
      <p>
        {description.length > 40
          ? `${description.slice(0, 35)}...`
          : description}
      </p>
      <div className='project-card-buttons'>
        <a href={ghLink}>
          <Button>
            <FaGithub />
          </Button>
        </a>
        {demoLink && (
          <a href={ghLink}>
            <Button>Demo</Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
