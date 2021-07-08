import React from 'react';
import Admin from './Admin';

const AdminPage = {
  path: '/admin-panel',
  component: AdminContainer
}

function AdminContainer() {
  const [state, setState] = React.useState({ activeTab: 'categories' })

  const setActiveTab = React.useCallback((activeTab) => {
    setState(previousState => ({ ...previousState, activeTab }))
  }, []);

  return (
    <Admin activeTab={state.activeTab} setActiveTab={setActiveTab} />
  )
}

export default AdminPage;
