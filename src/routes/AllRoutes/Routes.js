import {Routes, Route} from "react-router-dom";
import { BookMarks, Explore, Feed, UserProfilePage, Login, SignUp} from "../../pages/index/index";
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
            <Route path="/userProfile" element={
                <AuthRequiresRoutes>
                    <Template>
                        <UserProfilePage />
                    </Template>
                </AuthRequiresRoutes>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}