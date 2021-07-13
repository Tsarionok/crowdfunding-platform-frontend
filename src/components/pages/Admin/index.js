import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdminSections } from './admin-sections';
import { getCities, getCountries, getCategories } from '../../../redux/actions';
import { Tab } from '../..';
import './admin.scss';

const AdminPage = {
  path: '/admin-panel',
  component: AdminContainer,
  auth: true,
  isPrivate: true,
  accessFor: ['editor', 'admin']
}

function AdminContainer() {
  const dispatch = useDispatch();
  const { auth, category, city, country } = useSelector(state => state);

  const [state, setState] = React.useState({ activeTab: 'categories' });

  React.useEffect(() => {
      dispatch(getCategories());
      dispatch(getCountries());
      dispatch(getCities());
  }, [dispatch]);

  const setActiveTab = React.useCallback((activeTab) => {
    setState(previousState => ({ ...previousState, activeTab }))
  }, []);

  return (
    <Tab
      activeTab={state.activeTab}
      tabElements={getAdminSections({ categories: category, cities: city, countries: country })} 
      setActiveTab={setActiveTab} 
    />
  )
}

export default AdminPage;
