import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import usersReducer from "../features/ProfilePages/userSlice";
import postReducer from "../features/feed/postSlice";
import newPostModalReducer from "../components/NewPostBox/newPostBoxSlice";
import bookmarkReducer from "../features/bookmarks/bookmarksSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
        post: postReducer,
        newPostModal: newPostModalReducer,
        bookmarks: bookmarkReducer,
    }
})
