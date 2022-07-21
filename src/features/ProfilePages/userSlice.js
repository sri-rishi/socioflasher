import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getUsersData } from "../../services/usersService"

const initialState = {
    users: [],
}

export const getUsers = createAsyncThunk(
    "users/getUsersData", 
    async () => {
        const response = await getUsersData();
        return response.data
    }
);

const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: {
        [getUsers.pending]: (state) => {
            state.usersStatus = "pending";
        },
        [getUsers.fulfilled]: (state, action) => {
            state.usersStatus = "fulfilled";
            state.users = action.payload.users;
        },
        [getUsers.rejected]: (state, action) => {
            state.usersStatus = "error";
            state.error = action.payload;
        },
    }
})

export default usersSlice.reducer;