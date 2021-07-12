import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateProject from './CreateProject';
import { getCategories } from '../../../redux/actions';

const CreateProjectPage = {
  component: CreateProjectContainer,
  path: '/create-project'
}

function CreateProjectContainer() {
  const dispatch = useDispatch();

  const { category } = useSelector(state => state);

  const [state, setState] = React.useState({ 
    startDate: new Date(), 
    endDate: '',
    selectedCategory: '',
    projectName: '',
    description: '',
    totalDonationSum: ''
  }) ;

  React.useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const onSelectCategory = React.useCallback((e) => {
    setState(previousState => ({ ...previousState, selectedCategory: e.target.value }));
  }, []);


  const onChangeDate = React.useCallback((date) => {
    setState(previousState => ({ ...previousState, endDate: date }));
  }, []);

  const onChangeInput = React.useCallback((e) => {
    setState(previousState => ({ ...previousState, [e.target.name]: e.target.value }))
  }, []);

  const onCreateProject = React.useCallback(() => {
    console.log(state)
    setState({ description: '', totalDonationSum: '', projectName: '' })
  }, [state]);

  return <CreateProject 
    {...state} 
    categories={category}
    onSelectCategory={onSelectCategory}
    onChangeDate={onChangeDate} 
    onChangeInput={onChangeInput}
    onCreateProject={onCreateProject}
  />
}

export default CreateProjectPage;
