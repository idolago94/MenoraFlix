import { LOGIN, LOGOUT } from '../actions/types';

const initialState = {
  isConnected: false
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
    case LOGOUT:
      return {
        ...state,
        isConnected: action.payload
      };
    default:
      return state;
  }
}

export default userReducer;