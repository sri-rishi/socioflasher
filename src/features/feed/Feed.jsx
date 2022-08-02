import { Post, UserImage, Button} from "../../components/index/index";
import { useDispatch, useSelector } from "react-redux";
import "./feed.css";
import { openNewPostModal } from "../../components/NewPostBox/newPostBoxSlice";
import { useEffect, useState } from "react";

export const Feed = () => {
    const {user} = useSelector(store => store?.auth);
    const {allPosts} = useSelector(store => store?.post);
    const dispatch = useDispatch();
    const [shownPosts, setShownPosts] = useState([])

    useEffect(() => {
        if(allPosts) {
            setShownPosts(
                allPosts
                .filter(singlePost => 
                    singlePost?.username === user?.username 
                    || user?.following?.find(person => singlePost?.username === person?.username)
                )
            )
        }
    }, [user, allPosts])
    
   

    return (
        <>
            <div 
                className="w-full flex flex-row items-center justify-between max-w-xl bg-white px-4 py-2 rounded border"
                onClick={() => dispatch(openNewPostModal())}
            >
                <div className="flex fle-row items-center gap-4">
                    <UserImage imgSrc={user.profilePic} alt={user.firstName} width={"w-10"}/>
                    <input 
                        className="focus:outline-transparent w-full bg-transparent hover:cursor-text" 
                        placeholder={`What's on your mind, ${user.firstName}`} 
                        disabled
                    />
                </div>
                <Button 
                    className={"font-semibold bg-sky-600 py-1 px-6 rounded-2xl text-white hover:bg-sky-700"} 
                    text={"Add"}
                    />
            </div>
            <div className="w-full flex flex-col items-center gap-4">
                {
                   shownPosts.length !== 0 ?
                   shownPosts.map(post => (
                    <Post key={post._id} post={post}/>
                   )) :
                   <p>Start following to see some post</p>
                }
            </div>
        </>
    )
}