import userReducer from './reducers/userReducer';
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        user: userReducer
    }
});