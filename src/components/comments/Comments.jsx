import { useSelector, useDispatch } from "react-redux"
import { Button, UserImage } from "../index";
import { BsThreeDots, FaTimes, BsCheckLg} from "../../assests";
import { useState } from "react";
import {Link} from "react-router-dom";
import { deleteComment, editComment } from "../../features/feed/postSlice";

export const CommentBox = ({comment, postId}) => {
    const {
        _id,
        username,
        text,
    } = comment
    const {users} = useSelector(store => store?.users);
    const {user} = useSelector(store => store?.auth);
    const userInfo = users?.find(person => person.username === username);
    const [showCommentMenu, setShowCommentMenu] = useState(false);
    const [commentValue, setCommentValue] = useState(text);
    const [disableInput, setDisableInput] = useState(true);
    const dispatch = useDispatch();
    

    const editCommentHandler = () => {
        setDisableInput(false);
        setShowCommentMenu(false);
    }

    const saveEditedComment = () => {
        dispatch(editComment({ commentData: commentValue, commentId: _id, postId: postId, }));
        setCommentValue("");
        setDisableInput(value => value === false)
    }

    const closeMenu = () => {
        setCommentValue(text)
        setDisableInput(value => value === false)
    }

    const deleteCommentHandler = () => {
        dispatch(deleteComment({postId: postId, commentId: _id}));
    }

    return (
        <div className="flex flex-col border rounded px-4 py-2 bg-white">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2.5">
                    <UserImage imgSrc={userInfo?.profilePic} alt={userInfo?.firstName} width={"w-10"}/>
                    <Link 
                        to={
                            userInfo?.username === user?.username ? 
                            "/profile" : 
                            `/userProfile/${userInfo._id}`
                        }
                    >
                        <div className="flex flex-row items-center gap-1.5">
                            <p className="text-lg font-medium">{`${userInfo?.firstName} ${userInfo.lastName}`}</p>
                            <p className="font-medium text-gray-400">@{userInfo?.userHandler}</p>
                        </div>
                    </Link>
                </div>
                {
                    userInfo.username === user.username ? 
                    <div className="relative">
                        <Button 
                            className={"rounded-full p-2 text-xl text-gray-400 hover:bg-gray-400 hover:text-white"} 
                            icon={<BsThreeDots />}
                            onClick={() => setShowCommentMenu(dispaly => !dispaly)}
                        />
                        <ul 
                            className={`${showCommentMenu ? "flex" : "hidden"} flex-col items-center absolute top-full right-4 font-semibold text-gray-500 bg-white border border-gray-400`}
                        >
                            <li 
                                className="px-4 py-2 border-b border-gray-400 hover:text-gray-700 hover:cursor-pointer"
                                onClick={() => editCommentHandler()}
                            >
                                Edit 
                            </li>
                            <li 
                                className="px-4 py-2 text-red-400 border-gray-400 hover:text-red-700 hover:cursor-pointer"
                                onClick={() => deleteCommentHandler()}
                            >
                                Delete
                            </li>
                        </ul>
                    </div>
                    : <></>
                }
            </div>
            <div className="flex flex-row items-center justify-between">
                {
                    disableInput ?
                    <p className="p-4">
                        {text}
                    </p>
                    :
                    <input 
                    className="p-4 w-full bg-transparent outline-transparent"
                    value={commentValue} 
                    onChange={(e) => setCommentValue(e.target.value)}
                />
                }
                <div className={`${!disableInput ? "flex" : "hidden"} flex-row items-center gap-4`}>
                    <Button 
                        className={"text-sm bg-gray-700 p-2 rounded-full text-white"} 
                        icon={<BsCheckLg />}
                        onClick={() => saveEditedComment()}
                    />
                    <Button 
                        className={"text-sm bg-gray-700 p-2 rounded-full text-white"} icon={<FaTimes />}
                        onClick={() => closeMenu()}
                    />
                </div>
            </div>
        </div>
    )
}