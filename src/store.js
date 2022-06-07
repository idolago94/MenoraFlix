import userReducer from './reducers/userReducer';
import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './reducers/moviesReducer';

export default configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer
    }
});