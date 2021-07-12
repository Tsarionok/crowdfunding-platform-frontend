import axios from 'axios';
import { configContentType } from '../helpers';
import { ADD_CATEGORIES, REMOVE_CATEGORY } from '../actions/types';
import { addErrors } from './error';

export const addCategory = (category) => async (dispatch) => {
    try {
        await axios.post('https://localhost:44334/api/Categories', JSON.stringify({ name: category }), configContentType());
        dispatch(getCategories());
    } catch (err) {
        const errors = err && err.response && err.response.data && err.response.data.errors;
        if (errors) {
            dispatch(addErrors(errors));
        }
    }
}

export const getCategories = () => async dispatch => {
    try {
        const res = await axios.get('https://localhost:44334/api/Categories');
        dispatch({ type: ADD_CATEGORIES, payload: res.data });
    } catch (err) {
        const errors = err && err.response && err.response.data && err.response.data.errors;
        if (errors) {
            dispatch(addErrors(errors));
        }
    }
}

export const removeCategory = (id) => async dispatch => {
    try {
        await axios.delete(`https://localhost:44334/api/Categories/${id}`);
        dispatch(getCategories());
    } catch (err) {
        const errors = err && err.response && err.response.data && err.response.data.errors;
        if (errors) {
            dispatch(addErrors(errors));
        }
    }
}