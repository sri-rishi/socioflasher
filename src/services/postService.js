import axios from "axios"

export const getAllPostsData = () => {
    return axios.get("/api/posts");
}