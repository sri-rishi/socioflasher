import { createAsyncThunk , createSlice} from "@reduxjs/toolkit";
import { loginUserService } from "../../services/authService";


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

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.authStatus = "pending"
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
        }
    }
})

export default authSlice.reducer