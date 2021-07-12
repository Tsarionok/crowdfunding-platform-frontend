import {
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_PROFILE,
  } from '../actions/types';
  
  const initState = {
    user: null,
    isAuthenticated: null,
    roles: null,
    token: localStorage.getItem('token'),
  };
  
  export default function authReducer(state = initState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          user: payload,
        };
      case LOGIN_SUCCESS:
        localStorage.setItem('token', payload.token);
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
        };
      case REGISTER_FAIL:
      case AUTH_ERROR:
      case LOGIN_FAIL:
        localStorage.removeItem('token');
        return {
          ...state,
          isAuthenticated: false,
          token: null,
        };
      case LOGOUT:
      case CLEAR_PROFILE:
        localStorage.removeItem('token');
        return {
          ...state,
          isAuthenticated: false,
          token: null,
          user: null,
          roles: null
        };
      default:
        return state;
    }
  }