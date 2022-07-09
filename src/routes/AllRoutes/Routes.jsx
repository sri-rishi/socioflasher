import {Routes, Route} from "react-router-dom";
import { Explore, Feed, UserProfilePage} from "../../pages/index";
import { Template } from "../index";

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Template />}>
                <Route path="/" element={<Feed />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/userProfile" element={<UserProfilePage />} />
            </Route>
        </Routes>
    )
}