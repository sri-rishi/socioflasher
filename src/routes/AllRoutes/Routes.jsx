import {Routes, Route} from "react-router-dom";
import { Feed } from "../../pages/index";
import { Template } from "../index";

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Template />}>
                <Route path="/" element={<Feed />} />
            </Route>
        </Routes>
    )
}