import axios from "axios";

export const editCommentData = (commentData, commentId, postId, token) => {
    return axios.post(
        `/api/comments/edit/${postId}/${commentId}`,
        {
            commentData
        }, 
        {
            headers: {authorization: token}
        }
    )
};

export const addCommentData = (commentData, postId, token) => {
    return axios.post(
        `/api/comments/add/${postId}`,
        {
            commentData
        },
        {
            headers: {authorization: token}
        }
    )
};

export const deleteCommentOfPost = (postId, commentId, token) => {
    return axios.delete(
        `/api/comments/delete/${postId}/${commentId}`,
        {
            headers: {authorization: token}
        }
    )
}
