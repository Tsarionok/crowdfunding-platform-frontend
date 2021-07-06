import React from 'react';
import SingleProject from './SingleProject';

const SingleProjectPage = {
  component: SingleProjectContainer,
  path: '/projects/:projectId'
}

function SingleProjectContainer() {
  return (
    <SingleProject />
  )
}

export default SingleProjectPage;
