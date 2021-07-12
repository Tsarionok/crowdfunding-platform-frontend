import { combineReducers } from 'redux';
import auth from './auth';
import error from './error';
import success from './success';
import country from './country';
import category from './category';
import city from './city';
import donation from './donation';
import project from './project';

export default combineReducers({ 
    auth,
    error, 
    success, 
    city, 
    category, 
    country,
    donation,
    project
});