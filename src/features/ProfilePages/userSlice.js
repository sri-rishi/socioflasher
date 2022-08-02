import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { followUser, unfollowUser } from "../../services/followUnfollowService";
import { getUsersData } from "../../services/usersService"
import { updateUserDetails } from "../auth/authSlice";

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

export const followUnfollowUser = createAsyncThunk(
    "users/followUnfollowUser",
    async ({followUserId,dispatch,isFollowed}) => {
        const token = localStorage.getItem("token");
        const response = 
            isFollowed ?
            await unfollowUser(followUserId, token)
            : await followUser(followUserId, token);
        dispatch(updateUserDetails(response.data.user))
        return response.data;
    }
)

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
        [followUnfollowUser.pending]: (state) => {
            state.usersStatus = "pending";
        },
        [followUnfollowUser.fulfilled]: (state, action) => {
            state.usersStatus = "fulfilled";
            state.users = [...state.users].map((user) => {
                if (action.payload.followUser.username === user.username) {
                  return action.payload.followUser;
                }
                return user;
              });
        },
        [followUnfollowUser.rejected]: (state, action) => {
            state.usersStatus = "error";
            state.error = action.payload;
        }
    }
})

export default usersSlice.reducer;