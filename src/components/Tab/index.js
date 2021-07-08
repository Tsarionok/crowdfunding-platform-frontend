import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom';
import './tab.scss';

function Tab({ activeTab, setActiveTab, tabElements }) {
  return (
    <React.Fragment>
      <ul className="tab">
      { tabElements && tabElements.map(({ text, link }) => (
        <li 
          className={activeTab.toLowerCase() === text.toLowerCase() ? 'tab__element_active' : 'tab__element'} 
          key={uuidv4()}
          onClick={() => setActiveTab(text)}
        >
          <Link className="tab__link" to={ link || "#" }>
            { text }
          </Link>
        </li>
      )) } 
      </ul>
      { tabElements && (
        <div>
          { tabElements.find(({ text }) => activeTab.toLowerCase() === text.toLowerCase()) && tabElements.find(({ text }) => activeTab.toLowerCase() === text.toLowerCase()).component }
        </div>
      ) }
    </React.Fragment>
  )
}

export default Tab;
