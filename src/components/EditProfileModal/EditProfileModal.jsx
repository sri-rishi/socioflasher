import { Button } from "../index";
import { FaTimes, TbCameraPlus } from "../../assests";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserDetails } from "../../features/auth/authSlice";

export const EditProfileModal = ({setShowEditProfile}) => {
    const {user, authStatus} = useSelector(store => store?.auth);
    const dispatch = useDispatch()
    const [userNewDetails, setUserNewDetails] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        bio: user.bio,
        link: user.link
    })

    const saveEditData = () => {
        if(
            userNewDetails.firstName!== "" &&
            userNewDetails.lastName !== "" &&
            userNewDetails.bio !== "" &&
            userNewDetails.link !== ""
        ) {
            dispatch(updateUserDetails({...userNewDetails}));
            setShowEditProfile(false);
        }
    }

    return (
        <div className="flex flex-col w-full max-w-xl bg-white items-center gap-4 text-slate-700 font-semibold p-4 border-2 border-slate-700 rounded-xl">
            <div className="w-full flex flex-row items-center justify-between p-4 border-b-2 border-slate-700">
                <p className="text-xl">Edit Profile</p>
                <Button 
                    onClick={() => setShowEditProfile(false)} 
                    className={"text-2xl text-gray-600"} 
                    icon={<FaTimes />} 
                />
            </div>
            <div className="w-full flex flex-row items-center justify-center">
                <div className="w-32 relative rounded-full">
                    <img 
                        className="w-full rounded-full" 
                        src="https://st2.depositphotos.com/1006318/8387/v/450/depositphotos_83877466-stock-illustration-businessman-profile-icon.jpg" 
                        alt="profile pic" 
                    />
                    <Button 
                        className={"text-2xl font-bold text-white border-2 border-white bg-blend-lighten bg-gray-500 rounded-full p-2 right-0 absolute bottom-0 bg-opacity-75"} 
                        icon={<TbCameraPlus />}
                    />
                </div>
            </div>
            <div className="w-4/5 flex flex-col gap-4 items-center">
                <label htmlFor="edit-firstName" className="w-full flex flex-col gap-2 border-2 border-slate-700 rounded-xl p-2">
                    <span>FirstName</span>
                    <input 
                        className="focus:outline-transparent" 
                        type="text" 
                        name="edit-firstName" 
                        value={userNewDetails.firstName}
                        onChange={(e) => setUserNewDetails(details => ({...details, firstName: e.target.value}))}
                    />
                </label>
                <label htmlFor="edit-lastName" className="w-full flex flex-col gap-2 border-2 border-slate-700 rounded-xl p-2">
                    <span>LastName</span>
                    <input 
                        className="focus:outline-transparent" 
                        type="text" 
                        name="edit-lastName" 
                        value={userNewDetails.lastName}
                        onChange={(e) => setUserNewDetails(details => ({...details, lastName: e.target.value}))}
                    />
                </label>
                <label htmlFor="edit-bio" className="w-full flex flex-col gap-2 border-2 border-slate-700 rounded-xl p-2">
                    <span>Bio</span>
                    <textarea 
                        className="focus:outline-transparent resize-none" 
                        name="edit-bio" 
                        id="edit-bio" 
                        value={userNewDetails.bio}
                        onChange={(e) => setUserNewDetails(details => ({...details, bio: e.target.value}))}
                    ></textarea>
                </label>
                <label htmlFor="edit-portfolio" className="w-full flex flex-col gap-2 border-2 border-slate-700 rounded-xl p-2">
                    <span>Portfolio</span>
                    <input 
                        className="focus:outline-transparent" 
                        type="text" 
                        name="edit-portfolio" 
                        value={userNewDetails.link}
                        onChange={(e) => setUserNewDetails(details => ({...details, link: e.target.value}))}
                    />
                </label>
            </div>
            <div className="w-4/5 flex flex-row justify-end">
                <Button
                    className={"bg-slate-700 px-8 py-1.5 text-white rounded hover:bg-slate-800"} 
                    text="Save"
                    onClick={() => saveEditData()}
                />
            </div>
        </div>
    )
}