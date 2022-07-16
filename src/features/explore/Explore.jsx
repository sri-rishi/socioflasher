import { Post, Button} from "../../components/index";
import { IoMdSearch } from "../../assests";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const Explore = () => {
    const {user, token} = useSelector(store => store?.auth);
    const {allPosts} = useSelector(store => store?.post);

    const postToShown = allPosts?.filter(post => post.username !== user.username);

    
    return (
        <>  
            <div className="flex flex-row items-center p-2 border-2 border-slate-200 rounded-md bg-white max-w-lg w-full gap-2 lg:hidden">
                <Button className={"text-2xl"} icon={<IoMdSearch className=""/>} />
                <input className="outline-transparent w-full" placeholder="Search Posts, People, anything"/>
            </div>
            <div className="w-full flex flex-col items-center gap-4">
                {
                    postToShown.length !== 0?
                    postToShown.map((post) => (
                        <Post key={post._id} post={post}/>
                    ))
                    : <></>
                }
            </div>
        </>
    )
}