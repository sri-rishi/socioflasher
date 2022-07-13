import { Post, NewPostBox} from "../../components/index/index";
import { useSelector } from "react-redux";
import "./feed.css";

export const Feed = () => {
    const {users} = useSelector(store => store?.users);
    const {user} = useSelector(store => store?.auth);

    return (
        <>
            <NewPostBox imgSrc={user.profilePic} alt={user.firstName}/>
            <div className="w-full flex flex-col items-center gap-4">
                <Post/>
                <Post/>
                <Post/>
            </div>
        </>
    )
}