import { GoHome, MdOutlineExplore, BiBookmark, IoMdNotificationsOutline, CgProfile} from "../../assests";

export const MenuBar = () => {
    return (
        <aside className="">
            <ul className="">
                <a>
                    <li className="">
                        <GoHome className=""/>
                        <span>Home</span>
                    </li>
                </a>
                <a>
                    <li className="">
                        <MdOutlineExplore className=""/>
                        <span>Explore</span>
                    </li>
                </a>
                <a>
                    <li className="">
                        <BiBookmark className=""/>
                        <span>Bookmarks</span>
                    </li>
                </a>
                <a>
                    <li className="">
                        <IoMdNotificationsOutline className=""/>
                        <span>Notification</span>
                    </li>
                </a>
                <a>
                    <li className="">
                        <CgProfile className=""/>
                        <span>Profile</span>
                    </li>
                </a>
            </ul>
            <button className="">Post</button>
        </aside>
    )
}