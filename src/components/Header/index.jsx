import React from 'react';
import Header from './Header';
import {
  useLocation
} from "react-router-dom";
// import { logout } from '../../redux/actions';
import './header.scss';

function HeaderContainer() {
  const location = useLocation();
  const [isActive, setIsActive] = React.useState(false);

  const toggleDrawer = React.useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  const onHeaderItemClick = React.useCallback(() => {
  }, []);

  return (
    <Header
      onHeaderItemClick={onHeaderItemClick}
      toggleDrawer={toggleDrawer}
      isAuthenticated={false}
      isActive={isActive}
      location={location}
    />
  );
}

export default HeaderContainer;
