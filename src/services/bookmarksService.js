import axios from "axios"

export const getBookmarksFromData = (token) => {
    return axios.get(
        `/api/users/bookmark`,
        {
            headers: {authorization: token}
        }
    )
}

export const addUserBookmarks = (postId, token) => {
    return axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
            headers: {authorization: token}
        }
    )
};

export const removeUserBookmarks = (postId, token) => {
    return axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        {
            headers: {authorization: token}
        }
    )
};