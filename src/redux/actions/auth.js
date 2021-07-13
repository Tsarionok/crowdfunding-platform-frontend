import axios from 'axios';
import { setAuthToken, configContentType } from '../helpers';
import { addErrors } from './error';
import {
    REGISTER_FAIL,
    AUTH_ERROR,
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_PROFILE,
    GET_CURRENT_USER,
    REMOVE_USER
  } from './types';

export const loadUser = (id) => async (dispatch) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get(`https://localhost:44334/api/Users/${id}`);
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        dispatch(addErrors(errors));
      }
      dispatch({ type: AUTH_ERROR });
    }
  };

  export const register = ({ email, password, passwordConfirm }) => async (dispatch) => {
    const body = JSON.stringify({ email, password, passwordConfirm });
    try {
      await axios.post('https://localhost:44334/api/Users', body, configContentType());
    } catch (err) {
      const errors = err && err.response && err.response.data && err.response.data.errors;
      if (errors) {
        dispatch(addErrors(errors));
      }
      dispatch({ 
        type: REGISTER_FAIL,
      });
    }
  };
  
  export const login = ({ email, password }) => async (dispatch) => {
    const body = JSON.stringify({ email, password, rememberMe: true });
    try {
      const res = await axios.post('https://localhost:44334/api/Users/login', body, configContentType());
      const { token, isAuthenticated, user, roles } = res.data;
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { isAuthenticated, user, roles, token: `Bearer ${token}` },
      }); 
      dispatch(loadUser(res.data.id));
    } catch (err) {
      const errors = err && err.response && err.response.data && err.response.data.errors;
      if (errors) {
        dispatch(addErrors(errors));
      }
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

  export const getCurrentUser = (id) => async (dispatch) => {
      try {
        const res = await axios.get(`https://localhost:44334/api/Users/${id}`);
        dispatch({
            type: GET_CURRENT_USER,
            payload: res.data
        });   
      } catch (err) {
      }
  }

  export const deleteUser = (id) => async (dispatch) => {
    try {
        await axios.delete(`https://localhost:44334/api/Users/${id}`);
        dispatch({
            type: REMOVE_USER
        });   
      } catch (err) {
        console.log(err);
      }
  }

  export const changePassword = ({ id, newPassword, oldPassword }, history) => async (dispatch) => {
    try {
        const body = JSON.stringify({ id, newPassword, oldPassword });
        await axios.post('https://localhost:44334/api/Users/change-password', body, configContentType());
        history.push('/sign-in')
      } catch (err) {
        console.log(err);
      }
  }

  export const updateUser = (userData) => async (dispatch) => {
    try {
      const body = JSON.stringify(userData);
      await axios.post('https://localhost:44334/api/Users/edit', body, configContentType());
      if (userData.id)
        dispatch(getCurrentUser(userData.id));
    } catch (err) {
      console.log(err);
    }
  }

  export const logout = () => (dispatch) => {
    dispatch({
      type: CLEAR_PROFILE,
    });
    dispatch({ type: LOGOUT });
    localStorage.clear();
  };