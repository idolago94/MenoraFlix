import { SET_REC_MOOVIES } from './types';

export const SetRecMovies = (movies) => {
    return {
        type: SET_REC_MOOVIES,
        payload: movies
    }
}