import { TOGGLE_FAV_MOVIE } from './types';

export const ToggleFavMovie = (movie) => {
  return {
    type: TOGGLE_FAV_MOVIE,
    payload: movie
  }
}