import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPostsData } from "../../services/postService";

const initialState = {
    allPosts: []
}

export const getAllPosts = createAsyncThunk(
    "posts/getAllPosts", 
    async () => {
        const response = await getAllPostsData();
        return response.data
    }
)

const postSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: {
        [getAllPosts.pending]: (state) => {
            state.postStatus = "pending";
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.postStatus = "fulfilled";
            state.allPosts = action.payload.posts;
        },
        [getAllPosts.rejected]: (state, action) => {
            state.postStatus = "error";
            state.error = action.payload;
        }
    }
})


export default postSlice.reducer;