import React from 'react';
import { adminSections } from './admin-sections';
import { Tab } from '../..';
import './admin.scss';

function Admin({ activeTab, setActiveTab }) {
  return (
    <div>
      <Tab
        activeTab={activeTab}
        tabElements={adminSections} 
        setActiveTab={setActiveTab} />
    </div>
  )
}

export default Admin;
