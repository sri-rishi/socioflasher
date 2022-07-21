import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Button, UserImage } from "../index";
import { FaTimes } from "../../assests";
import { closeNewPostModal } from "./newPostBoxSlice";
import { addNewPost } from "../../features/feed/postSlice";

export const NewPostBox = () => {
    const {newPostModalStatus} = useSelector(store => store?.newPostModal);
    const {user} = useSelector(store => store?.auth);
    const dispatch = useDispatch()
    const [newPostDetails, setNewPostDetails] = useState({
        content: ""
    });

    const postChangeHandler = (e) => {
        if(newPostDetails.content.length <= 275) {
            setNewPostDetails(details => ({...details, content: e.target.value}));
        }else {
            // this will go in toast
            alert("You have exceeded limit");
        }
    }

    const addNewPostHandler = () => {
        if(newPostDetails.content !== "") {
            dispatch(addNewPost(newPostDetails));
        }
        dispatch(closeNewPostModal())
    }

    return (
        <div className={
            `${newPostModalStatus ? "flex ": "hidden"} w-full flex-row items-center justify-center fixed inset-0 z-40 bg-gray-50 bg-opacity-50`}
        >
            <div className={`flex flex-col w-full h-2/5 gap-4 max-w-xl bg-white text-slate-700 font-semibold p-4 border-2 border-slate-700 rounded-xl`}>
                    <Button 
                        onClick={() => dispatch(closeNewPostModal())} 
                        className={"text-2xl text-gray-600"} 
                        icon={<FaTimes />} 
                    />
                <div className="w-full h-full flex flex-row gap-4">
                    <UserImage imgSrc={user.profilePic} alt={user.firstName} width={"w-14"}/>
                    <div className="w-full">
                        <textarea 
                            className="resize-none w-full h-full border-b outline-transparent p-2" 
                            name="newPost" 
                            id="newPost" 
                            placeholder={`What's on your mind, ${user.firstName}`}
                            value={newPostDetails.content}
                            onChange={(e) => postChangeHandler(e)}
                        ></textarea>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-8 justify-end w-full">
                    <p className="text-green-500 text-xl font-bold">{275 - newPostDetails.content.length}</p>
                    <Button 
                        className={"font-semibold bg-sky-600 py-1 px-6 rounded-2xl text-white hover:bg-sky-700"} 
                        text={"Post"}
                        onClick={() => addNewPostHandler()}
                    />
                </div>
            </div>
        </div>
    )
}