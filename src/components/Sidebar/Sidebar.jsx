import { GoHome, MdOutlineExplore, BiBookmark, IoMdNotificationsOutline, CgProfile} from "../../assests";

export const Sidebar = () => {
    return (
        <aside className="sidebar flex-column gap-1">
            <ul className="flex-column gap-1">
                <a>
                    <li className="sidebar-items flex-row align-items-center gap-1">
                        <GoHome className="mt-3-px"/>
                        <span>Home</span>
                    </li>
                </a>
                <a>
                    <li className="sidebar-items flex-row align-items-center gap-1">
                        <MdOutlineExplore className="mt-3-px"/>
                        <span>Explore</span>
                    </li>
                </a>
                <a>
                    <li className="sidebar-items flex-row align-items-center gap-1">
                        <BiBookmark className="mt-3-px"/>
                        <span>Bookmarks</span>
                    </li>
                </a>
                <a>
                    <li className="sidebar-items flex-row align-items-center gap-1">
                        <IoMdNotificationsOutline className="mt-3-px"/>
                        <span>Notification</span>
                    </li>
                </a>
                <a>
                    <li className="sidebar-items flex-row align-items-center gap-1">
                        <CgProfile className="mt-3-px"/>
                        <span>Profile</span>
                    </li>
                </a>
            </ul>
            <button className="post-btn btn border-none">Post</button>
        </aside>
    )
}