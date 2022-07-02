import { GoHome, MdOutlineExplore, IoBookmarkOutline, IoMdNotificationsOutline, CgProfile} from "../../assests";

export const MenuBar = () => {
    return (
        <aside className="flex flex-col w-1/4 items-center">
            <header>
                <h1 className="text-3xl font-semibold">socio<span className="text-sky-400">Flasher</span></h1>
            </header>
            <ul className="">
                <a>
                    <li className="flex flex-row items-center ">
                        <GoHome className=""/>
                        <span>Home</span>
                    </li>
                </a>
                <a>
                    <li className="flex flex-row items-center ">
                        <MdOutlineExplore className=""/>
                        <span>Explore</span>
                    </li>
                </a>
                <a>
                    <li className="flex flex-row items-center ">
                        <IoBookmarkOutline className=""/>
                        <span>Bookmarks</span>
                    </li>
                </a>
                <a>
                    <li className="flex flex-row items-center ">
                        <IoMdNotificationsOutline className=""/>
                        <span>Notification</span>
                    </li>
                </a>
                <a>
                    <li className="flex flex-row items-center ">
                        <CgProfile className=""/>
                        <span>Profile</span>
                    </li>
                </a>
            </ul>
            <button className="flex flex-row items-center ">Post</button>
        </aside>
    )
}