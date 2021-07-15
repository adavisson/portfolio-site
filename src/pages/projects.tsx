import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { projects } from '../data/projects';
import Modal from '../components/Modal/Modal';
import '../styles/styles.scss';

const ProjectsPage: React.FC = () => {
  const [showModal, setShoModal] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>(projects[0].name);
  const [modalDescription, setModalDescription] = useState<string>(
    projects[0].description,
  );

  const handleClick = (project: { name: string; description: string }) => {
    setModalTitle(project.name);
    setModalDescription(project.description);
    setShoModal(true);
  };

  return (
    <main>
      <title>Projects</title>
      <div className='projects-content'>
        <h1>Projects</h1>
        {projects.map(project => {
          return (
            <div onClick={() => handleClick(project)}>
              <ProjectCard
                name={project.name}
                description={project.description}
                ghLink={project.ghLink}
              />
            </div>
          );
        })}
        <br />
        <Modal
          show={showModal}
          title={modalTitle}
          description={modalDescription}
          onClose={() => setShoModal(false)}
        />
      </div>
    </main>
  );
};

export default ProjectsPage;
