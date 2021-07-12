import { ADD_CATEGORY, ADD_CATEGORIES, REMOVE_CATEGORY } from '../actions/types';

const initState = [];

export default function categoryReducer(state = initState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_CATEGORY:
            return [...state, payload];
        case ADD_CATEGORIES:
            return [...payload];
        case REMOVE_CATEGORY:
            return state.filter((category) => category.id !== payload);
        default: 
            return state;
    }
}