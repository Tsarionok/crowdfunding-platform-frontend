import React from 'react';
import DonateHistory from './DonateHistory';

const DonateHistoryPage = {
  path: '/donate-history',
  component: DonateHistoryContainer
}

function DonateHistoryContainer() {
  return (
    <div>
      <DonateHistory donations={
        [
          { 
            projectName: 'Project', 
            projectLink: '/projects/1', 
            sum: 100, 
            description: 'sss'
          },
          { 
            projectName: 'Project', 
            projectLink: '/projects/1', 
            sum: 100, 
            description: 'sss'
          }
        ]
      }
      />
    </div>
  )
}

export default DonateHistoryPage;
