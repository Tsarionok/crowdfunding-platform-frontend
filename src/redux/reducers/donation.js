import { ADD_DONATION, ADD_DONATIONS, REMOVE_DONATION } from '../actions/types';

const initState = [];

export default function donationReducer(state = initState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_DONATIONS:
            return [...payload];
        case ADD_DONATION:
            return [...state, payload];
        case REMOVE_DONATION:
            return state.filter((donation) => donation.id !== payload);
        default: 
            return state;
    }
}