import React from 'react';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';
import './donate-history.scss';

function DonateHistory({ donations }) {
  console.log(donations)

  return (
    <div className="DonateHistoryPage">
      <h3>Donation History</h3>
      <div>
        { donations && donations.map(({ projectName, projectLink, sum, description }) => (
          <div className="DonateHistoryPage__Card" key={v4()}>
            <div className="DonateHistoryPage__CardHeadingRow">
              <h5>
                <Link to={projectLink}>
                  {projectName}
                </Link>
              </h5>
              <div className="DonateHistoryPage__CloseButton">x</div>
            </div>
            <div className="DonateHistoryPage__CardMainInfo">
              <div>Sum: {sum}$</div>
              <div>
                <div>Description:</div>
                <div>{description}</div>
              </div>
            </div>
          </div>
        )) }
      </div>
    </div>
  )
}

export default DonateHistory;
