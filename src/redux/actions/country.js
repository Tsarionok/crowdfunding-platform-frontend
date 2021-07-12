import axios from 'axios';
import { configContentType } from '../helpers';
import { ADD_COUNTRIES, REMOVE_COUNTRY } from '../actions/types';
import { addErrors } from './error';

export const addCountry = (country) => async (dispatch) => {
    try {
        await axios.post('https://localhost:44334/api/Countries', JSON.stringify({ name: country }), configContentType());
        dispatch(getCountries());
    } catch (err) {
        const errors = err && err.response && err.response.data && err.response.data.errors;
        if (errors) {
            dispatch(addErrors(errors));
        }
    }
}

export const getCountries = () => async dispatch => {
    try {
        const res = await axios.get('https://localhost:44334/api/Countries');
        dispatch({ type: ADD_COUNTRIES, payload: res.data });
    } catch (err) {
        const errors = err && err.response && err.response.data && err.response.data.errors;
        if (errors) {
            dispatch(addErrors(errors));
        }
    }
}

export const removeCountry = (id) => async dispatch => {
    try {
        await axios.delete(`https://localhost:44334/api/Countries/${id}`);
        dispatch(getCountries());
    } catch (err) {
        const errors = err && err.response && err.response.data && err.response.data.errors;
        if (errors) {
            dispatch(addErrors(errors));
        }
    }
}