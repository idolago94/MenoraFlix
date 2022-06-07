import { SET_NEW_MOOVIES } from './types';

export const SetNewMovies = (movies) => {
    return {
        type: SET_NEW_MOOVIES,
        payload: movies
    }
}