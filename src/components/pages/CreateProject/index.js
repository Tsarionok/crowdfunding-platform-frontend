import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateProject from './CreateProject';
import { getCategories, addProject } from '../../../redux/actions';

const CreateProjectPage = {
  component: CreateProjectContainer,
  path: '/create-project',
  auth: true,
  isPrivate: true
}

function CreateProjectContainer() {
  const dispatch = useDispatch();

  const { category } = useSelector(state => state);

  const [state, setState] = React.useState({ 
    categoryId: 0,
    startDate: new Date(), 
    endDate: new Date(),
    selectedCategory: (category && category[0]) ? category[0].name: '',
    projectName: '',
    description: '',
    totalDonationSum: ''
  }) ;

  React.useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const onSelectCategory = React.useCallback((e) => {
    setState(previousState => ({ 
      ...previousState, 
      selectedCategory: e.target.value, 
      categoryId: category ? category.find((category) => category.name === e.target.value).id: 0
    }));
  }, [category]);


  const onChangeDate = React.useCallback((dateName, date) => {
    setState(previousState => ({ ...previousState, [dateName]: date }));
  }, []);

  const onChangeInput = React.useCallback((e) => {
    setState(previousState => ({ ...previousState, [e.target.name]: e.target.value }))
  }, []);

  const onCreateProject = React.useCallback(() => {
    dispatch(addProject({ 
      name: state.projectName, 
      categoryId: state.categoryId,
      description: state.description,
      mainPhoto: '',
      startFundraisingDate: state.startDate.toISOString(),
      finalFundraisingDate: state.endDate.toISOString(),
      currentDonationSum: 0,
      totalDonationSum: state.totalDonationSum
    }));
    setState({ description: '', totalDonationSum: '', projectName: '' });
  }, [dispatch, state]);

  const onPhotosChange = React.useCallback(() => {

  }, []);

  return <CreateProject 
    {...state} 
    categories={category}
    onSelectCategory={onSelectCategory}
    onChangeDate={onChangeDate} 
    onChangeInput={onChangeInput}
    onCreateProject={onCreateProject}
    onPhotosChange={onPhotosChange}
  />
}

export default CreateProjectPage;
