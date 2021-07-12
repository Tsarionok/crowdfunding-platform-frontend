import {} from '';
import { configContentType } from '../helpers';

export const addCurrentProject = ({ 
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
    await axios.post('https://localhost:44334/api/Projects', body, configContentType());
    dispatch(getAllProjects());
}

export const getCurrentProject = () => async dispatch => {

}

export const getAllProjects = () => async dispatch => {
    try {
        const res = await axios.get('https://localhost:44334/api/Projects');
        dispatch({ type: '', payload: res.data });
    } catch (err) {
        
    }
}

export const removeCurrentProject = () => async dispatch => {
    
}