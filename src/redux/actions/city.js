import axios from 'axios';
import { configContentType } from '../helpers';
import { REMOVE_CITY, ADD_CITIES } from '../actions/types';
import { addErrors } from './error';

export const addCity = (city, countryId) => async (dispatch) => {
    try {

        await axios.post('https://localhost:44334/api/Cities', JSON.stringify({ name: city, countryId }), configContentType());
        dispatch(getCities());
    } catch (err) {
        const errors = err && err.response && err.response.data && err.response.data.errors;
        if (errors) {
            dispatch(addErrors(errors));
        }
    }
}

export const getCities = () => async (dispatch) => {
    try {
        const res = await axios.get('https://localhost:44334/api/Cities');
        dispatch({ type: ADD_CITIES, payload: res.data });
    } catch (err) {
        const errors = err && err.response && err.response.data && err.response.data.errors;
        if (errors) {
            dispatch(addErrors(errors));
        }
    }
}

export const removeCity = (id) => async dispatch => {
    try {
        await axios.delete(`https://localhost:44334/api/Cities/${id}`);
        dispatch({ type: REMOVE_CITY, payload: { id } })
    } catch (err) {
        const errors = err && err.response && err.response.data && err.response.data.errors;
        if (errors) {
            dispatch(addErrors(errors));
        }
    }
}