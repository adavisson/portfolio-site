import React from 'react';

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
      <p>
        <a href={ghLink}>GitHub</a>
      </p>
      {demoLink && (
        <p>
          <a href={ghLink}>Demo</a>
        </p>
      )}
    </div>
  );
};

export default ProjectCard;
