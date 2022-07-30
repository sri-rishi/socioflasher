import { useDispatch } from "react-redux";
import {Link, NavLink} from "react-router-dom"
import { GoHome, MdOutlineExplore, IoBookmarkOutline, CgProfile, logo, GiFeather, IoMdSearch, FiLogOut} from "../../assests";
import { Button} from "../index";
import { logoutUser } from "../../features/auth/authSlice";
import { openNewPostModal } from "../NewPostBox/newPostBoxSlice";

export const MenuBar = () => {

    const dispatch = useDispatch();

    const getActiveStyle = ({isActive}) => ({
        background: isActive && "white",
        color: isActive && "rgb(56 189 248)",
        boxShadow: isActive && "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        borderRadius: isActive && "1rem",
    });

    return (
        <aside className="hidden md:flex fixed h-screen top-0 flex-col md:gap-2 w-1/6 mt-16 md:m-0 items-end px-4 py-2 bg-slate-100 xl:items-center">
            <Link to="/">
                <header className="flex flex-row justify-end xl:items-center xl:justify-around w-full px-2">
                    <div className="w-16 xl:w-14">
                        <img className="w-full object-cover" src={logo} alt="logo" />
                    </div>
                    <h1 className="hidden text-2xl font-semibold xl:flex">socio<span className="text-sky-400">Flasher</span></h1>
                </header>
            </Link>
            <ul className="flex flex-col md:gap-1 py-6">
                <NavLink to="/" style={getActiveStyle}>
                    <li className="flex flex-row items-center p-4 gap-4 hover:text-sky-400 hover:bg-white hover:shadow-md rounded-2xl">
                        <GoHome className="text-2xl mb-0.5"/>
                        <span className="hidden xl:flex text-lg">Home</span>
                    </li>
                </NavLink> 
                <NavLink to="/explore" style={getActiveStyle}>
                    <li className="flex flex-row items-center p-4 hover:bg-white hover:text-sky-400 hover:shadow-md xl:hidden rounded-2xl">
                        <IoMdSearch className="text-2xl"/>
                    </li>
                </NavLink>
                <NavLink to="/explore" style={getActiveStyle}>
                    <li className="hidden xl:flex flex-row items-center gap-4 p-4 hover:text-sky-400 hover:bg-white hover:shadow-md rounded-2xl">
                        <MdOutlineExplore className="text-2xl"/>
                        <span className="hidden xl:flex text-lg">Explore</span>
                    </li>
                </NavLink>
                <NavLink to="/bookmarks" style={getActiveStyle}>
                    <li className="flex flex-row items-center p-4 gap-4 hover:text-sky-400 hover:bg-white hover:shadow-md rounded-2xl">
                        <IoBookmarkOutline className="text-2xl"/>
                        <span className="hidden xl:flex text-lg">Bookmarks</span>
                    </li>
                </NavLink>
                <NavLink to="/profile" style={getActiveStyle}>
                    <li className="flex flex-row items-center p-4 gap-4 hover:text-sky-400 hover:bg-white hover:shadow-md rounded-2xl">
                        <CgProfile className="text-2xl"/>
                        <span className="hidden xl:flex text-lg">Profile</span>
                    </li>
                </NavLink>
                <li 
                    className="flex flex-row items-center p-4 gap-4 hover:text-sky-400 hover:bg-white hover:shadow-md rounded-2xl"
                    onClick={() => dispatch(logoutUser())}
                >
                    <FiLogOut className="text-2xl"/>
                    <span className="hidden xl:flex text-lg">Logout</span>
                </li>
                
            </ul>
            <div className="xl:w-full flex flex-col xl:items-center ">
                <Button 
                    className={`rounded-full w-14 h-14 bg-sky-600 flex flex-row items-center justify-center text-xl text-white hover:shadow-2xl xl:hidden`} 
                    icon={<GiFeather />}
                    onClick={() => dispatch(openNewPostModal())}
                />
                <Button 
                    className="hidden w-full font-semibold bg-sky-600 py-2 px-6 rounded-3xl text-white hover:hover:bg-sky-700 xl:inline" 
                    text={"Post"}
                    onClick={() => dispatch(openNewPostModal())}
                />
            </div>
        </aside>
    )
}