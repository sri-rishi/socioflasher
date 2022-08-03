import { Button, EditPostModal, UserImage, } from "../index/index";
import { RiHeart3Line, IoBookmarkOutline, BsThreeDots, TbMessageCircle2, AiFillHeart, IoBookmark} from "../../assests";
import { useDispatch, useSelector } from "react-redux";
import { useState} from "react";
import { deletePost, likeDislikePost,} from "../../features/feed/postSlice";
import { Link } from "react-router-dom";
import { addRemoveBookmarks } from "../../features/bookmarks/bookmarksSlice";

export const Post = ({post}) => {
    const {
        _id,
        username,
        content,
        media,
        comments,
        likes: {likeCount, likedBy},
        createdAt,
    } = post

    const {users} = useSelector(store => store?.users);
    const {user} = useSelector(store => store?.auth);
    const {bookmarkPosts} = useSelector(store => store?.bookmarks)
    const [showFullContent, setShowFullContent] = useState(false);
    const [showPostMenu, setShowPostMenu] = useState(false);
    const [showEditPost, setShowEditPost] = useState(false);
    const dispatch = useDispatch();

    const userDetails = users?.find(person => person.username === username);
    const isLike = likedBy?.some(person => person.username === user.username);
    const isBookmark = bookmarkPosts?.some(savedPost => savedPost.username === user.username);

    const editMenuHandler = () => {
        setShowEditPost(dispaly => !dispaly);
        setShowPostMenu(dispaly => !dispaly);
    }  

    const likeHandler = () => {
        dispatch(likeDislikePost({postId: _id, isLiked: isLike ? true : false}))
    }

    const bookmarkHandler = () => {
        dispatch(addRemoveBookmarks({postId: _id, isBookmarked: isBookmark ? true : false}));
    }

    const postTime = () => {
        const date = new Date(createdAt);
        const postDate = date.getDate() +
        " " +
        date.toLocaleString("default", { month: "long" }) +
        ", " +
        date.getFullYear();
        return postDate;
    } 
    
    return (
        <div className="flex flex-col border w-full gap-4 bg-white max-w-xl rounded py-4">
            <div className="flex flex-row items-center justify-between px-3">
                <div className="flex flex-row items-center gap-2.5">
                    <UserImage imgSrc={userDetails?.profilePic} width={"w-14"}/>
                    <div className="flex flex-col">
                        <Link 
                            to={
                                userDetails?.username === user?.username ? 
                                "/profile" : 
                                `/userProfile/${userDetails._id}`
                            }
                        >
                            <div className="flex flex-row items-center gap-1.5">
                                <p className="text-lg font-medium">{`${userDetails?.firstName} ${userDetails.lastName}`}</p>
                                <p className="font-medium text-gray-400">@{userDetails?.userHandler}</p>
                            </div>
                        </Link>
                        <small className="text-gray-600">{postTime()}</small>
                    </div>
                </div>
                
                {
                    userDetails.username === user.username ? 
                    <div className="relative">
                        <Button 
                            className={"rounded-full p-2 text-xl text-gray-400 hover:bg-gray-400 hover:text-white"} 
                            icon={<BsThreeDots />}
                            onClick={() => setShowPostMenu(dispaly => !dispaly)}
                        />
                        <ul 
                            className={`${showPostMenu ? "flex" : "hidden"} flex-col items-center absolute top-full right-4 font-semibold text-gray-500 bg-white border border-gray-400`}
                        >
                            <li 
                                className="px-4 py-2 border-b border-gray-400 hover:text-gray-700 hover:cursor-pointer"
                                onClick={() => editMenuHandler()}
                            >
                                Edit 
                            </li>
                            <li 
                                className="px-4 py-2 text-red-600 hover:cursor-pointer"
                                onClick={() => dispatch(deletePost(_id))}
                            >
                                Delete
                            </li>
                        </ul>
                    </div>
                    : <></>
                }
                <div 
                    className={
                        `${showEditPost ? "flex" : "hidden"} w-full flex-row items-center justify-center fixed inset-0 z-40 bg-gray-50 bg-opacity-50`
                    }
                >
                    <EditPostModal setShowEditPost={setShowEditPost} post={post}/>
                </div>
            </div>
            
            <div className="flex flex-col gap-4 px-3">
                <Link className="w-full" to={`/post/${_id}`}>
                    {
                        media ?
                        <div className="w-full px-8 py-4">
                            <img className="w-full object-cover" src={media} alt="feed cover" />
                        </div>
                        : <></>
                    }
                    <div className="text-left flex flex-col gap-2 px-3">
                        {
                            !showFullContent && content.length > 250?
                            <p>
                                {[...content].slice(0, 250)}... 
                            </p>
                            : content 
                        }
                        {
                            content.length > 250 &&
                            <span 
                                className="text-gray-400 hover:cursor-pointer" 
                                onClick={() => setShowFullContent(fullContent => !fullContent)}
                            >
                                {showFullContent ? "Show less" : "Show more"}
                            </span>
                        }
                    </div>
                </Link>   
                <div className="flex flex-row items-center justify-around px-3">
                    <div className="flex flex-row items-center gap-2">
                        <Button 
                            className={"hover:text-gray-600 text-xl"} 
                            icon={
                                isLike ? 
                                <AiFillHeart className="text-red-600"/>
                                :
                                <RiHeart3Line />
                            }
                            onClick={() => likeHandler()}
                        />
                        <p className="font-semibold">{likeCount > 0 && likeCount}</p>
                    </div>
                    <Button 
                        className={"hover:text-gray-600 text-xl font-black"} 
                        icon={isBookmark ? <IoBookmark /> : <IoBookmarkOutline />}
                        onClick={() => bookmarkHandler()}
                    />

                    <Link to={`/post/${_id}`}>
                        <div className="flex flex-row items-center gap-2">
                            <Button className={"hover:text-gray-600 text-xl"} icon={<TbMessageCircle2 />} />
                            <p className="font-semibold">{comments.length > 0 && comments.length}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}