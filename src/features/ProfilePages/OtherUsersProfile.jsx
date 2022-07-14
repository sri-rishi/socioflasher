import { useParams } from "react-router-dom";
import { Post, ProfileBox } from "../../components/index/index";
import { useSelector } from "react-redux";

export const OtherUsersProfile = () => {
    const {userId} = useParams();
    const {users} = useSelector(store => store?.users);

    const otherUser = users.find(person => person._id === userId);

    console.log(otherUser);

    return (
        <>
            <ProfileBox 
                imgSrc={otherUser?.profilePic} 
                firstName={otherUser?.firstName} 
                lastName={otherUser?.lastName}
                userHandler={otherUser?.userHandler}
                bio={otherUser?.bio}
                link={otherUser?.link}
            />
            <div className="w-full flex flex-col items-center gap-4">
                <Post />
                <Post />
                <Post />
            </div>
        </>
    )
}