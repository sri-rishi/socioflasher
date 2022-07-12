import axios from "axios";

const loginUserService = (email, password) => {
    return axios.post(
        "/api/auth/login", 
        {
            username: email,
            password: password
        })
}


export {loginUserService}