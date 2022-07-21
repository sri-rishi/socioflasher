import {Routes, Route} from "react-router-dom";
import { BookMarks, Explore, Feed, ProfilePage, Login, SignUp, OtherUsersProfile, SinglePost} from "../../features/index/index";
import { AuthRequiresRoutes } from "../AuthRequires/AuthRquiresRoutes";
import { Template } from "../TemplateRoute/Template";

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={
                <AuthRequiresRoutes>
                    <Template>
                        <Feed />
                    </Template>
                </AuthRequiresRoutes>
            } />
            <Route path="/explore" element={
                <AuthRequiresRoutes>
                    <Template>
                        <Explore />
                    </Template>
                </AuthRequiresRoutes>
            } />
            <Route path="/bookmarks" element={
                <AuthRequiresRoutes>
                    <Template>
                        <BookMarks />
                    </Template>
                </AuthRequiresRoutes>
            } />
            <Route path="/profile" element={
                <AuthRequiresRoutes>
                    <Template>
                        <ProfilePage />
                    </Template>
                </AuthRequiresRoutes>
            } />
            <Route path="/userProfile/:userId" element={
                <AuthRequiresRoutes>
                    <Template>
                        <OtherUsersProfile />
                    </Template>
                </AuthRequiresRoutes>
            } />
            <Route path="/post/:postId" element={
                <AuthRequiresRoutes>
                    <Template>
                        <SinglePost />
                    </Template>
                </AuthRequiresRoutes>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}