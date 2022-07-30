import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBookmarks } from "./bookmarksSlice";
import {Post} from "../../components/Post/Post";

export const BookMarks = () => {
    const {bookmarkPosts} = useSelector(store => store?.bookmarks)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBookmarks());
    }, [bookmarkPosts])
    
    return (
        <> 
            {
                bookmarkPosts.length !== 0 ?
                bookmarkPosts.map((post) => (
                    <Post key={post._id} post={post}/>
                ))
                :
                <p className="text-2xl">You haven't bookmarked any post</p>
            }
        </>
    )
}