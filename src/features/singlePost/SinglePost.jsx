import { Post,Button, UserImage, CommentBox } from "../../components/index";
import { useSelector } from "react-redux";
import {useParams} from "react-router-dom"

export const SinglePost = () => {
    const {postId} = useParams();
    const { allPosts} = useSelector(store => store?.post);
    const {user} = useSelector(store => store?.auth);

    const postInfo = allPosts?.find(post => post._id === postId);

    if(!postInfo) {
        return  <h1>Loading</h1>;
    }

    return (
        <div className="flex flex-col gap-4">
            <Post key={postInfo?._id} post={postInfo}/>
            <div className="flex flex-row w-full items-center gap-2 p-4 border rounded bg-white">
                <UserImage imgSrc={user.profilePic} width={"w-10"}/>
                <input className="w-full outline-transparent" placeholder="Add comments"/>
                <Button className="text-sky-600 font-semibold hover:text-sky-900" text={"Post"}/>
            </div>
            <div>
               {/* {
                singlePost.comments.length !== 0 ?
                singlePost.comments.map(comment => (
                    <CommentBox key={comment._id} comment={comment}/>
                )) 
                : <></> 
               } */}
            </div>
        </div>
    )
}