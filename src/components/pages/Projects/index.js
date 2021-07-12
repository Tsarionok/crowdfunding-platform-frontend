import React from 'react';
import Projects from './Projects';

const ProjectsPage = {
  component: ProjectsContainer,
  path: '/projects'
}

function ProjectsContainer() {
  return (
    <Projects cardsRows={[{}, {}, {}, {}, {}].reduce((p, c, i) => {
      return i % 3 ? [...p.slice(0, -1), [...p[p.length - 1], c]] : [...p, [c]];
    }, [])}/>
  )
}

export default ProjectsPage;
