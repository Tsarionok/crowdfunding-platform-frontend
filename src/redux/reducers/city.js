import { ADD_CITY, ADD_CITIES, REMOVE_CITY } from '../actions/types';

const initState = [];

export default function cityReducer(state = initState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_CITY:
            return [...state, payload];
        case ADD_CITIES:
            return [...payload];
        case REMOVE_CITY:
            return state.filter((city) => city.id !== payload);
        default: 
            return state;
    }
}