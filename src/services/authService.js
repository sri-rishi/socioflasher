import axios from "axios";

export const loginUserService = (email, password) => {
    return axios.post(
        "/api/auth/login", 
        {
            username: email,
            password: password
        })
}

export const signupUserService = (firstName, lastName, email, password) => {
    return axios.post(
        "/api/auth/signup",
        {
            firstName: firstName,
            lastName: lastName,
            username: email,
            password: password
        }
    )
}