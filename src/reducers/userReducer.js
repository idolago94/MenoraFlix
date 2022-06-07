import { xor } from 'lodash';
import { LOGIN, LOGOUT, TOGGLE_FAV_MOVIE } from '../actions/types';

const initialState = {
  isConnected: false,
  favouriteMovies: []
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
    default:
      return state;
  }
}

export default userReducer;