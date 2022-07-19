import axios from "axios"

export const getAllPostsData = () => {
    return axios.get("/api/posts");
}

export const editPostData = (postData, token) => {
    return axios.post(
        `/api/posts/edit/${postData._id}`, 
        {
            postData
        },
        {
            headers: {authorization: token}
        }
    )
}

export const deletePostFromData = (token, postId) => {
    return axios.delete(
        `/api/posts/${postId}`,
        {
            headers: {authorization: token}
        }
    )
}

export const getSinglePostData = (postId) => {
    return axios.get(
        `/api/posts/${postId}`
    )
}