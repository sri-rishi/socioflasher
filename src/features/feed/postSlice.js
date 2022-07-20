import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewPostInData, deletePostFromData, editPostData, getAllPostsData, getSinglePostData } from "../../services/postService";

const initialState = {
    allPosts: [],
    singlePost: {}
}

export const getAllPosts = createAsyncThunk(
    "posts/getAllPosts", 
    async () => {
        const response = await getAllPostsData();
        return response.data
    }
)

export const editPost = createAsyncThunk(
    "posts/editPost",
    async (postData) => {
        const token = localStorage.getItem("token");
        const response = await editPostData(postData, token);
        return response.data;
    },
)

export const deletePost = createAsyncThunk(
    "post/deletePost",
    async (postId) => {
        const token = localStorage.getItem("token");
        const response = await deletePostFromData(token, postId);
        return response.data;
    } 
)

export const getSinglePost = createAsyncThunk(
    "post/getsinglePost",
    async (postId) => {
        const response = await getSinglePostData(postId);
        return response.data;
    }
)

export const addNewPost = createAsyncThunk(
    "post/addNewPost",
    async (postData) => {
        const token = localStorage.getItem("token");
        const response = await addNewPostInData(postData, token);
        return response.data;
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
        },
        [editPost.pending]: (state) => {
            state.postStatus = "pending"
        },
        [editPost.fulfilled]: (state, action) => {
            state.postStatus = "fulfilled";
            state.allPosts = action.payload.posts;
        },
        [editPost.rejected]: (state, action) => {
            state.postStatus = "error";
            state.error = action.payload;
        },
        [deletePost.pending]: (state) => {
            state.postStatus = "pending";
        },
        [deletePost.fulfilled]: (state, action) => {
            state.postStatus = "fulfilled";
            state.allPosts = action.payload.posts
        },
        [deletePost.rejected]: (state, action) => {
            state.postStatus = "error";
            state.error = action.payload;
        },
        [getSinglePost.pending]: (state) => {
            state.postStatus = "pending";
        },
        [getSinglePost.fulfilled]: (state, action) => {
            state.postStatus = "fulfilled";
            state.singlePost = action.payload.post;
        },
        [getSinglePost.rejected]: (state, action) => {
            state.postStatus = "error";
            state.error = action.payload;
        }, 
        [addNewPost.pending]: (state) => {
            state.postStatus = "pending";
        },
        [addNewPost.fulfilled]: (state, action) => {
            state.postStatus = "fulfilled";
            state.allPosts = action.payload.posts;
        },
        [addNewPost.rejected]: (state, action) => {
            state.postStatus = "error";
            state.error = action.payload;
        }
    }
})


export default postSlice.reducer;