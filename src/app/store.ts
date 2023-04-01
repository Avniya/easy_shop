import uiReducer from '../features/ui/uiSlice';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';

const store = configureStore({
    reducer : {
        ui : uiReducer,
        user : userReducer
    }
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;