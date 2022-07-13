import { Post, ProfileBox } from "../../components/index/index";
import { useSelector } from "react-redux";

export const ProfilePage = () => {
    const {user} = useSelector(store => store?.auth);

    return (
        <>
            <ProfileBox 
                imgSrc={user.profilePic} 
                firstName={user.firstName} 
                lastName={user.lastName}
                userHandler={user.userHandler}
                bio={user.bio}
                link={user.link}
            />
            <div className="w-full flex flex-col items-center gap-4">
                <Post />
                <Post />
                <Post />
            </div>
        </>
    )
}