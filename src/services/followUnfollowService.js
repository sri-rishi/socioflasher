import axios from "axios"

export const followUser = (followedUserId, token) => {
    return axios.post(
        `/api/users/follow/${followedUserId}`,
        {},
        {
            headers: {authorization: token}
        }
    )
};

export const unfollowUser = (followedUserId, token) => {
    return axios.post(
        `/api/users/unfollow/${followedUserId}`,
        {},
        {
            headers: {authorization: token}
        }
    )
}