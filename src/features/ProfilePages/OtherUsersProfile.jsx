import { useParams } from "react-router-dom";
import { Post, ProfileBox } from "../../components/index/index";
import { useSelector } from "react-redux";

export const OtherUsersProfile = () => {
    const {userId} = useParams();
    const {users} = useSelector(store => store?.users);
    const {allPosts} = useSelector(store => store?.post);

    const otherUser = users?.find(person => person._id === userId);

    const otherUserPost = allPosts?.filter(post => post.username === otherUser.username);

    return (
        <>
            <ProfileBox 
                id={otherUser?._id}
                imgSrc={otherUser?.profilePic} 
                firstName={otherUser?.firstName} 
                lastName={otherUser?.lastName}
                userHandler={otherUser?.userHandler}
                bio={otherUser?.bio}
                link={otherUser?.link}
            />
            <div className="w-full flex flex-col items-center gap-4">
                {
                    otherUserPost.length !== 0 ?
                    otherUserPost.map((post) => (
                        <Post key={post._id} post={post}/>
                    )) :<></>
                }
            </div>
        </>
    )
}