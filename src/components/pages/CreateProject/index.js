import React from 'react';
import CreateProject from './CreateProject';

const CreateProjectPage = {
  component: CreateProjectContainer,
  path: '/create-project'
}

function CreateProjectContainer() {
  return <CreateProject />
}

export default CreateProjectPage;
