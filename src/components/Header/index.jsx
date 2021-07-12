import React from 'react';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import {
  useLocation
} from "react-router-dom";
import { logout } from '../../redux/actions';
import './header.scss';

function HeaderContainer() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isActive, setIsActive] = React.useState(false);

  const { auth: { isAuthenticated, roles } } = useSelector(state => state)

  const toggleDrawer = React.useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  const onHeaderItemClick = React.useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <Header
      onHeaderItemClick={onHeaderItemClick}
      toggleDrawer={toggleDrawer}
      isAuthenticated={isAuthenticated}
      roles={roles}
      isActive={isActive}
      location={location}
    />
  );
}

export default HeaderContainer;
