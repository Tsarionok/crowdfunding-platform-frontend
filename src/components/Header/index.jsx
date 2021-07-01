import React from 'react';
import Header from './Header';
// import { logout } from '../../redux/actions';
import './header.scss';

function HeaderContainer() {
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
    />
  );
}

export default HeaderContainer;
