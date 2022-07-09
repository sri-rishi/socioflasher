import {Routes, Route} from "react-router-dom";
import { BookMarks, Explore, Feed, UserProfilePage} from "../../pages/index";
import { Template } from "../index";

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Template />}>
                <Route path="/" element={<Feed />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/userProfile" element={<UserProfilePage />} />
                <Route path="/bookmarks" element={<BookMarks />} />
            </Route>
        </Routes>
    )
}