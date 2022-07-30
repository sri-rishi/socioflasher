import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addUserBookmarks, getBookmarksFromData, removeUserBookmarks } from "../../services/bookmarksService";

const initialState = {
    bookmarkPosts: []
};

export const getBookmarks = createAsyncThunk(
    "bookmarks/getBookmarks",
    async () => {
        const token = localStorage.getItem("token");
        const response = await getBookmarksFromData(token);
        return response.data
    }
)

export const addRemoveBookmarks = createAsyncThunk(
    "bookmarks/addRemoveBookmarks",
    async ({postId, isBookmarked}) => {
        const token = localStorage.getItem("token");
        const response = 
                isBookmarked ?
                await removeUserBookmarks(postId, token):
                await addUserBookmarks(postId, token);
                
        return response.data;               
    }
);

const bookmarkSlice = createSlice({
    name: "bookmarks",
    initialState,
    extraReducers: {
        [getBookmarks.pending]: (state) => {
            state.bookmarkStatus = "pending";
        },
        [getBookmarks.fulfilled]: (state, action) => {
            state.bookmarkStatus = "fulfilled";
            state.bookmarkPosts = action.payload.bookmarks;
        },
        [getBookmarks.rejected]: (state, action) => {
            state.bookmarkStatus = "error";
            state.error = action.payload;
        },
        [addRemoveBookmarks.pending]: (state) => {
            state.bookmarkStatus = "pending";
        },
        [addRemoveBookmarks.fulfilled]: (state, action) => {
            state.bookmarkStatus = "fulfilled";
            state.bookmarkPosts = action.payload.bookmarks;
        },
        [addRemoveBookmarks.rejected]: (state, action) => {
            state.bookmarkStatus = "error";
            state.error = action.payload
        }
    }
});

export default bookmarkSlice.reducer;