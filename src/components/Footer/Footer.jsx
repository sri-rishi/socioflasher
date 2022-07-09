import {NavLink} from "react-router-dom"
import { Button } from "../index";
import {IoBookmarkOutline, GoHome, IoMdSearch, CgProfile} from "../../assests/index";

export const Footer = () => {
    const getActiveStyle = ({isActive}) => ({
        color: isActive && "rgb(56 189 248)"
    })
    return (
        <footer className="bottom-0 fixed shadow-top bg-white flex flex-row w-full justify-around py-5 px-4 text-2xl md:hidden">
            <NavLink to="/" style={getActiveStyle}>
                <Button className="hover:text-sky-400" icon={<GoHome />}/>
            </NavLink>
            <NavLink to="/explore" style={getActiveStyle}>
                <Button className="hover:text-sky-400" icon={<IoMdSearch />}/>
            </NavLink>
            <NavLink to="/bookmarks" style={getActiveStyle}>
                <Button className="hover:text-sky-400" icon={<IoBookmarkOutline />}/>
            </NavLink>
            <NavLink to="/userProfile" style={getActiveStyle}>
                <Button className="hover:text-sky-400" icon={<CgProfile />} />
            </NavLink>
        </footer>
    )
}