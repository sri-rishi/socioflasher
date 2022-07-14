import axios from "axios"

export const getUsersData = () => {
    return axios.get("/api/users")
};