import { Post,Button, UserImage, CommentBox } from "../../components/index";
import { useSelector, useDispatch } from "react-redux";
import {useParams} from "react-router-dom"
import { useState } from "react";
import { addComment} from "../feed/postSlice";
import { BallTriangle } from "react-loader-spinner";

export const SinglePost = () => {
    const {postId} = useParams();
    const {allPosts} = useSelector(store => store?.post);
    const {user} = useSelector(store => store?.auth);
    const [newComment, setNewComment] = useState("");
    const dispatch = useDispatch();

    const postInfo = allPosts?.find(post => post._id === postId)

    const saveNewComment = () => {
       if(newComment !== "") {
            dispatch(addComment({commentData: newComment, postId: postId}));
       }
       setNewComment("")
    }

    if(!postInfo) {
        return (
            <div className="flex flex-row items-center justify-center top-1/2 absolute">
                <BallTriangle 
                    color="#00BFFF" 
                    height={100} 
                    width={100}
                />
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-4">
            <Post key={postInfo?._id} post={postInfo}/>
            <div className="flex flex-row w-full items-center gap-2 p-4 border rounded bg-white">
                <UserImage imgSrc={user?.profilePic} width={"w-10"}/>
                <input 
                    className="w-full outline-transparent" 
                    placeholder="Add comments"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <Button 
                    className="text-sky-600 font-semibold hover:text-sky-900" 
                    text={"Post"}
                    onClick={() => saveNewComment()}
                />
            </div>
            <div className="flex flex-col gap-4">
               {
                postInfo.comments?.length !== 0 ?
                postInfo.comments?.map(comment => (
                    <CommentBox key={comment._id} comment={comment} postId={postId}/>
                )) 
                : <></> 
               }
            </div>
        </div>
    )
}