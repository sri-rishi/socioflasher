import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    userStatus: "idle",
    users: []
};

export const loadUsers = createAsyncThunk(
    "users/loadUsers", 
    async () => {
        const res = await axios.get("/api/users");
        return res
    }
);

const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: {
        [loadUsers.pending] : (state) => {
            state.userStatus = "loading"
        },
        [loadUsers.fulfilled]: (state,action) => {
            state.users = action.payload.data.users
            state.userStatus = "fulfilled"
        },
        [loadUsers.error]: (state) => {
            state.userStatus = "error"
        } 
    }
})

export default usersSlice.reducer