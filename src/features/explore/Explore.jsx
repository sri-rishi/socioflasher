import { Post, Button} from "../../components/index";
import { useSelector } from "react-redux";
import { ExploreSearchBox } from "./ExploreSearchBox";

export const Explore = () => {
    const {user} = useSelector(store => store?.auth);
    const {allPosts} = useSelector(store => store?.post);

    const postToShown = allPosts?.filter(post => post.username !== user.username);

    return (
        <>  
            <ExploreSearchBox />
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