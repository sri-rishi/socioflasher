import { GoHome, MdOutlineExplore, IoBookmarkOutline, CgProfile, logo, GiFeather, IoMdSearch, FiLogOut} from "../../assests";
import { Button} from "../index";

export const MenuBar = () => {
    return (
        <aside className="hidden md:flex fixed h-screen top-0 flex-col md:gap-2 w-1/6 mt-16 md:m-0 items-end px-4 py-2 bg-slate-100 xl:items-center">
            <header className="flex flex-row justify-end xl:items-center xl:justify-around w-full px-2">
                <div className="w-16 xl:w-14">
                    <img className="w-full object-cover" src={logo} alt="logo" />
                </div>
                <h1 className="hidden text-2xl font-semibold xl:flex">socio<span className="text-sky-400">Flasher</span></h1>
            </header>
            <ul className="flex flex-col md:gap-1 py-6">
                <a className="cursor-pointer">
                    <li className="flex flex-row items-center p-4 gap-4 hover:text-sky-400 hover:bg-white hover:shadow-md rounded-full xl:rounded-2xl">
                        <GoHome className="text-2xl mb-0.5"/>
                        <span className="hidden xl:flex text-lg">Home</span>
                    </li>
                </a>
                <a>
                    <li className="flex flex-row items-center p-4 hover:bg-white hover:text-sky-400 hover:shadow-md xl:hidden rounded-full">
                        <IoMdSearch className="text-2xl"/>
                    </li>
                </a>
                <a>
                    <li className="hidden xl:flex flex-row items-center gap-4 p-4 hover:text-sky-400 hover:bg-white hover:shadow-md rounded-full xl:rounded-2xl">
                        <MdOutlineExplore className="text-2xl"/>
                        <span className="hidden xl:flex text-lg">Explore</span>
                    </li>
                </a>
                <a>
                    <li className="flex flex-row items-center p-4 gap-4 hover:text-sky-400 hover:bg-white hover:shadow-md rounded-full xl:rounded-2xl">
                        <IoBookmarkOutline className="text-2xl"/>
                        <span className="hidden xl:flex text-lg">Bookmarks</span>
                    </li>
                </a>
                <a>
                    <li className="flex flex-row items-center p-4 gap-4 hover:text-sky-400 hover:bg-white hover:shadow-md rounded-full xl:rounded-2xl">
                        <CgProfile className="text-2xl"/>
                        <span className="hidden xl:flex text-lg">Profile</span>
                    </li>
                </a>
                <a>
                    <li className="flex flex-row items-center p-4 gap-4 hover:text-sky-400 hover:bg-white hover:shadow-md rounded-full xl:rounded-2xl">
                        <FiLogOut className="text-2xl"/>
                        <span className="hidden xl:flex text-lg">Logout</span>
                    </li>
                </a>
            </ul>
            <div className="xl:w-full flex flex-col xl:items-center ">
                <Button className={`rounded-full w-14 h-14 bg-sky-600 flex flex-row items-center justify-center text-xl text-white hover:shadow-2xl xl:hidden`} icon={<GiFeather />}/>
                <Button className="hidden w-full font-semibold bg-sky-600 py-2 px-6 rounded-3xl text-white hover:hover:bg-sky-700 xl:inline" text={"Post"}/>
            </div>
        </aside>
    )
}