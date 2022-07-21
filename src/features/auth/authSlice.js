import { createAsyncThunk , createSlice} from "@reduxjs/toolkit";
import { loginUserService, signupUserService } from "../../services/authService";
import { editUserDetails } from "../../services/usersService";


const initialState = {
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
}

export const loginUser = createAsyncThunk(
    "auth/loginUser", 
    async({email, password}) => {
        const response = await loginUserService(email, password);
        return response.data
});

export const signupUser = createAsyncThunk(
    "auth/signupUser", 
    async({firstName, lastName, email, password}) => {
        const response = await signupUserService(firstName, lastName, email, password);
        return response.data
    }
)

export const updateUserDetails = createAsyncThunk(
    "auth/updateUserDetails",
    async (userData) => {
        const token = localStorage.getItem("token");
        const response = await editUserDetails(userData, token);
        return response.data
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logoutUser:() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return {
                token: null,
                user: null
            }
        }
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.authStatus = "pending";
        },
        [loginUser.fulfilled]: (state, action) => {
            state.authStatus = "fulfilled";
            state.token = action.payload.encodedToken;
            state.user = action.payload.foundUser;
            localStorage.setItem("token", state.token);
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        [loginUser.rejected]: (state, action) => {
            state.authStatus = "error";
            state.error = action.payload;
        },
        [signupUser.pending]: (state) => {
            state.authStatus = "pending";
        },
        [signupUser.fulfilled]: (state, action) => {
            state.authStatus = "fulfilled";
            state.token = action.payload.encodedToken;
            state.user = action.payload.createdUser;
            localStorage.setItem("token", state.token);
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        [signupUser.rejected]: (state, action) => {
            state.authStatus = "error";
            state.error = action.payload;
        },
        [updateUserDetails.pending]: (state) => {
            state.authStatus = "pending";
        },
        [updateUserDetails.fulfilled]: (state, action) => {
            state.authStatus = "fulfilled";
            state.user = action.payload.user;
            localStorage.setItem("user", JSON.stringify(state.user))
        },
        [updateUserDetails.rejected]: (state, action) => {
            state.authStatus = "error";
            state.error = action.payload;
        }
    }
})

export const {logoutUser} = authSlice.actions;

export default authSlice.reducer;