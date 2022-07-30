import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCommentData, deleteCommentOfPost, editCommentData} from "../../services/commentsService";
import { 
    addNewPostInData, 
    deletePostFromData, 
    editPostData, 
    getAllPostsData,  
    dislikePostCall, 
    likePostCall 
} from "../../services/postService";

const initialState = {
    allPosts: [],
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
    "posts/deletePost",
    async (postId) => {
        const token = localStorage.getItem("token");
        const response = await deletePostFromData(token, postId);
        return response.data;
    } 
)

export const addNewPost = createAsyncThunk(
    "posts/addNewPost",
    async (postData) => {
        const token = localStorage.getItem("token");
        const response = await addNewPostInData(postData, token);
        return response.data;
    }
);

export const editComment = createAsyncThunk(
    "posts/editComment",
    async ({commentData, commentId, postId}) => {
        const token = localStorage.getItem("token");
        const response = await editCommentData(commentData, commentId, postId, token);
        return response.data;
    } 
)

export const addComment = createAsyncThunk(
    "posts/addComment",
    async ({commentData, postId}) => {
        const token = localStorage.getItem("token");
        const response = await addCommentData(commentData, postId, token);
        return response.data;
    }
);

export const deleteComment = createAsyncThunk(
    "posts/deleteComment",
    async({postId, commentId}) => {
        const token = localStorage.getItem("token");
        const response = await deleteCommentOfPost(postId, commentId, token);
        return response.data;
    }
)

export const likeDislikePost = createAsyncThunk(
    "posts/likeDislikePost",
    async ({postId, isLiked}) => {
        const token = localStorage.getItem("token");
        const response = 
            isLiked 
            ? await dislikePostCall(postId, token)
            : await likePostCall(postId, token);

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
        },
        [editComment.pending]: (state) => {
            state.postStatus = "pending";
        },
        [editComment.fulfilled]: (state, action) => {
            state.postStatus = "fulfilled";
            state.allPosts = action.payload.posts;
        },
        [editComment.rejected]: (state, action) => {
            state.postStatus = "error";
            state.error = action.payload;
        },
        [addComment.pending]: (state) => {
            state.postStatus = "pending";
        },
        [addComment.fulfilled]: (state, action) => {
            state.postStatus = "fulfilled";
            state.allPosts = action.payload.posts;
        },
        [addComment.rejected]: (state, action) => {
            state.postStatus = "error";
            state.error = action.payload;
        },
        [deleteComment.pending]: (state) => {
            state.postStatus = "pending";
        },
        [deleteComment.fulfilled]: (state, action) => {
            state.postStatus = "fulfilled";
            state.allPosts = action.payload.posts;
        },
        [deleteComment.rejected]: (state, action) => {
            state.postStatus= "error";
            state.error = action.payload;
        },
        [likeDislikePost.pending]: (state) => {
            state.postStatus = "pending";
        },
        [likeDislikePost.fulfilled]: (state, action) => {
            state.postStatus = "fulfilled";
            state.allPosts = action.payload.posts;
        },
        [likeDislikePost.rejected]: (state, action) => {
            state.postStatus = "error";
            state.error = action.payload;
        },
    }
})


export default postSlice.reducer;