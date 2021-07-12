import { ADD_PROJECT, ADD_PROJECTS, REMOVE_PROJECT, ADD_CURRENT_PROJECT, REMOVE_PROJECTS } from '../actions/types';

const initState = {
    currentProject: null,
    projects: []
};

export default function projectReducer(state = initState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, payload]
            };
        case ADD_PROJECTS:
            return {
                ...state,
                projects: [...payload]    
            }
        case ADD_CURRENT_PROJECT:
            return {
                ...state,
                currentProject: payload
            }
        case REMOVE_PROJECT:
            return state.filter((project) => project.id !== payload);
        case REMOVE_PROJECTS:
            return {
                ...state,
                projects: []
            }
        default: 
            return state;
    }
}