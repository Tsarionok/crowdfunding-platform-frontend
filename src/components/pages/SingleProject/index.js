import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleProject from './SingleProject';

const SingleProjectPage = {
  component: SingleProjectContainer,
  path: '/projects/:projectId'
}

function SingleProjectContainer() {

  const [state, setState] = React.useState({ progressValue: 10, rating: 1 });

  const handleRatingChange = React.useCallback(() => {
  }, []);

  return (
    <SingleProject 
      {...state}
      handleRatingChange={handleRatingChange} 
    />
  )
}

export default SingleProjectPage;
