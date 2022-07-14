import { EditProfileModal, Post, ProfileBox } from "../../components/index/index";
import { useSelector } from "react-redux";
import { useState } from "react";

export const ProfilePage = () => {
    const {user} = useSelector(store => store?.auth);
    const [showEditProfile, setShowEditProfile] = useState(false)

    return (
        <>
            <ProfileBox 
                id={user?._id}
                imgSrc={user?.profilePic} 
                firstName={user?.firstName} 
                lastName={user?.lastName}
                userHandler={user?.userHandler}
                bio={user?.bio}
                link={user?.link}
                setShowEditProfile={setShowEditProfile}
            />
            <div className="w-full flex flex-col items-center gap-4">
                <Post />
                <Post />
                <Post />
            </div>
            <div className={`${showEditProfile ? "flex": "hidden" } w-full flex-row items-center justify-center fixed inset-0 z-40 bg-gray-50 bg-opacity-50`}>
                <EditProfileModal setShowEditProfile={setShowEditProfile}/>
            </div>
        </>
    )
}