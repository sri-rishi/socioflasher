import { Button } from "../index";
import {IoBookmarkOutline, GoHome, MdOutlineExplore, IoMdNotificationsOutline} from "../../assests/index"

export const Footer = () => {
    return (
        <footer className="bottom-0 fixed shadow-top bg-white flex flex-row w-full justify-around py-5 px-4 text-2xl md:hidden">
            <Button className="hover:text-sky-400" icon={<GoHome />}/>
            <Button className="hover:text-sky-400" icon={<MdOutlineExplore />}/>
            <Button className="hover:text-sky-400" icon={<IoBookmarkOutline />}/>
            <Button className="hover:text-sky-400" icon={<IoMdNotificationsOutline />} />
        </footer>
    )
}