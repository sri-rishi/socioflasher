import { Post, NewPostBox} from "../../components/index/index";
import { useSelector } from "react-redux";
import "./feed.css";

export const Feed = () => {
    const {users} = useSelector(store => store?.users);
    const {user} = useSelector(store => store?.auth);
    const {allPosts} = useSelector(store => store?.post);

    const userPosts = allPosts?.filter(person => person.username === user.username);

    return (
        <>
            <NewPostBox imgSrc={user.profilePic} firstName={user.firstName}/>
            <div className="w-full flex flex-col items-center gap-4">
                {
                   userPosts.length !== 0 ?
                   userPosts.map(post => (
                    <Post key={post._id} post={post}/>
                   )) :
                   <p>Start following to see some post</p>
                }
            </div>
        </>
    )
}