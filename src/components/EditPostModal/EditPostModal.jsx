import { FaTimes } from "../../assests";
import { useDispatch, useSelector } from "react-redux"
import { Button, UserImage } from "../index";
import { useState } from "react";
import { editPost } from "../../features/feed/postSlice";

export const EditPostModal = ({setShowEditPost, post}) => {
    const {user} = useSelector(store => store?.auth);
    const [editedDetails, setEditedDetails] = useState(post);
    const dispatch = useDispatch();

    const saveEditedData = () => {
        if(editedDetails !== "" ) {
            dispatch(editPost(editedDetails));
        }
        setShowEditPost(display => !display);
    }


    return (
        <div className="flex flex-col w-1/2 h-1/2 max-w-lg bg-white gap-4 text-slate-700 font-semibold p-4 border-2 border-slate-700 rounded-xl">
            <div className="flex flex-row items-center justify-between">
                <UserImage imgSrc={user?.profilePic} width={"w-12"}/>
                <Button 
                    className={"text-3xl"}
                    icon={<FaTimes />}
                    onClick={()=> setShowEditPost(display => !display)}
                />
            </div>
            <textarea 
                className="resize-none h-full border-2 border-slate-400 p-4 rounded-xl focus:outline-slate-400" name="edit-post-textarea" 
                id="edit-post-textarea"
                value={editedDetails.content}
                onChange={(e) => setEditedDetails(details => ({...details, content: e.target.value}))}
            ></textarea>
            <div className="text-right">
                <Button
                    className={"bg-slate-700 px-8 py-1.5 text-white rounded hover:bg-slate-800"} 
                    text="Save"
                    onClick={() => saveEditedData()}
                />
            </div>
        </div>
    )
}