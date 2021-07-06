import React from 'react';
import Projects from './Projects';

const ProjectsPage = {
  component: ProjectsContainer,
  path: '/projects'
}

function ProjectsContainer() {
  return (
    <Projects />
  )
}

export default ProjectsPage;
