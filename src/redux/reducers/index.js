import { combineReducers } from 'redux';
import auth from './auth';
import error from './error';
import success from './success';

export default combineReducers({ auth, error, success });