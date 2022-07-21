import { Post,Button, UserImage } from "../../components/index";
import { useSelector } from "react-redux";

export const SinglePost = () => {
    const {singlePost} = useSelector(store => store?.post);
    const {user} = useSelector(store => store?.auth);
    
    return (
        <div className="flex flex-col gap-4">
            <Post key={singlePost?._id} post={singlePost}/>
            <div className="flex flex-row w-full items-center gap-2 p-4 border rounded bg-white">
                <UserImage imgSrc={user.profilePic} width={"w-10"}/>
                <input className="w-full outline-transparent" placeholder="Add comments"/>
                <Button className="text-sky-600 font-semibold hover:text-sky-900" text={"Post"}/>
            </div>
            <div>
               {/* comments will come here */}
            </div>
        </div>
    )
}