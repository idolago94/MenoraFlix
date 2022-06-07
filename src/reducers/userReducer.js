import { xor } from 'lodash';
import { LOGIN, LOGOUT, TOGGLE_FAV_MOVIE, SET_FAV_MOVIES_SHOW } from '../actions/types';

const initialState = {
  isConnected: false,
  favouriteMovies: [],
  shownMovies: []
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
    case LOGOUT:
      return {
        ...state,
        isConnected: action.payload
      };
    case TOGGLE_FAV_MOVIE:
      return {
        ...state,
        favouriteMovies: xor(state.favouriteMovies, [action.payload])
      };
    case SET_FAV_MOVIES_SHOW:
      return {
        ...state,
        shownMovies: state.favouriteMovies
      };
    default:
      return state;
  }
}

export default userReducer;