import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import usersReducer from "../features/ProfilePage/userSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer
    }
})
