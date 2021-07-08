import React from 'react';
import CreateProject from './CreateProject';

const CreateProjectPage = {
  component: CreateProjectContainer,
  path: '/create-project'
}

function CreateProjectContainer() {
  const [state, setState] = React.useState({ startDate: new Date(), endDate: '' }) 


  const onChangeDate = React.useCallback((date) => {
    setState(previousState => ({ ...previousState, endDate: date }));
  }, []);

  return <CreateProject {...state} onChangeDate={onChangeDate} />
}

export default CreateProjectPage;
