import { ADD_COUNTRY, REMOVE_COUNTRY, ADD_COUNTRIES } from '../actions/types';

const initState = [];

export default function countryReducer(state = initState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_COUNTRY:
            return [...state, payload];
        case ADD_COUNTRIES:
            return [...payload];
        case REMOVE_COUNTRY:
            return state.filter((country) => country.id !== payload);
        default: 
            return state;
    }
}