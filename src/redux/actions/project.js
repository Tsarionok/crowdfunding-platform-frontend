import axios from 'axios';
import { ADD_PROJECT, ADD_PROJECTS } from './types';
import { configContentType } from '../helpers';

export const addProject = ({ 
  name,
  categoryId,
  description,
  mainPhoto,
  startFundraisingDate,
  finalFundraisingDate,
  currentDonationSum,
  totalDonationSum
 }) => async (dispatch) => {
     const body = JSON.stringify({ 
         name, 
         categoryId, 
         description, 
         mainPhoto, 
         startFundraisingDate, 
         finalFundraisingDate,
         currentDonationSum,
         totalDonationSum
    })
    try {
        await axios.post('https://localhost:44334/api/Projects', body, configContentType());
        dispatch(getAllProjects());
    } catch (error) {
        
    }
}

export const getCurrentProject = (id) => async dispatch => {
    try {
        
    } catch (error) {
        
    }
}



export const getAllProjects = () => async dispatch => {
    try {
        const res = await axios.get('https://localhost:44334/api/Projects');
        dispatch({ type: ADD_PROJECT, payload: res.data });
    } catch (err) {
        
    }
}

export const removeCurrentProject = () => async dispatch => {
    
}