import { GoHome, MdOutlineExplore, IoBookmarkOutline, RiNotificationLine,CgProfile, logo, GiFeather, IoMdSearch, FiLogOut} from "../../assests";
import { Button} from "../index";

export const MenuBar = () => {
    return (
        <aside className="hidden md:flex fixed h-screen top-0 flex-col md:gap-2 w-1/6 mt-16 md:m-0 items-end p-4 bg-white">
            <header className="flex flex-row justify-end w-full">
                <div className="w-16">
                    <img className="w-full object-cover" src={logo} alt="logo" />
                </div>
                <h1 className="md:hidden text-lg font-semibold">socio<span className="text-sky-400">Flasher</span></h1>
            </header>
            <ul className="flex flex-col md:gap-1">
                <a>
                    <li className="flex flex-row items-center p-4 hover:text-sky-400">
                        <GoHome className="text-2xl"/>
                        <span className="md:hidden">Home</span>
                    </li>
                </a>
                <a>
                    <li className="flex flex-row items-center p-4 hover:text-sky-400">
                        <IoMdSearch className="text-2xl"/>
                    </li>
                </a>
                <a>
                    <li className="md:hidden flex flex-row items-center p-4 hover:text-sky-400">
                        <MdOutlineExplore className="text-2xl"/>
                        <span className="md:hidden">Explore</span>
                    </li>
                </a>
                <a>
                    <li className="flex flex-row items-center p-4 hover:text-sky-400">
                        <IoBookmarkOutline className="text-2xl"/>
                        <span className="md:hidden">Bookmarks</span>
                    </li>
                </a>
                <a>
                    <li className="flex flex-row items-center p-4 hover:text-sky-400">
                        <RiNotificationLine className="text-2xl font-bold"/>
                        <span className="md:hidden">Notification</span>
                    </li>
                </a>
                <a>
                    <li className="flex flex-row items-center p-4 hover:text-sky-400">
                        <CgProfile className="text-2xl"/>
                        <span className="md:hidden">Profile</span>
                    </li>
                </a>
                <a>
                    <li className="flex flex-row items-center p-4 hover:text-sky-400">
                        <FiLogOut className="text-2xl"/>
                    </li>
                </a>
            </ul>
            <div className="flex flex-col">
                <Button className={`rounded-full w-14 h-14 bg-sky-600 flex flex-row items-center justify-center text-xl text-white shadow-2xl`} icon={<GiFeather />}/>
                <Button className="md:hidden text-xl font-semibold bg-sky-600 py-2 px-6 rounded-2xl" text={"Post"}/>
            </div>
        </aside>
    )
}