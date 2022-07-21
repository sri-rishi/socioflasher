import axios from "axios"

export const getUsersData = () => {
    return axios.get("/api/users")
};


export const editUserDetails = (userData, token) => {
    return axios.post(
        "/api/users/edit", 
        {
           userData
        },
        {
            headers: {authorization: token}
        }
    )
}