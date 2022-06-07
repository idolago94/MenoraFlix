import { SET_REC_MOOVIES, SET_NEW_MOOVIES } from '../actions/types';

const initialState = {
    newMovies: [],
    recommendMovies: []
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REC_MOOVIES:
            return {
                ...state,
                recommendMovies: action.payload
            };
        case SET_NEW_MOOVIES:
            return {
                ...state,
                newMovies: action.payload
            };
        default:
            return state;
    }
}

export default moviesReducer;