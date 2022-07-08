import { Button, ProfileImage } from "../index";
import {FiLogOut} from "../../assests"

export const Navbar = () => {
    return(
        <nav className="w-full flex flex-row items-center justify-between py-3 px-4 bg-white fixed z-50 top-0 shadow md:hidden">
            <div className="flex flex-row items-center gap-4">
                <ProfileImage />
                <h1 className="text-2xl font-semibold">socio<span className="text-sky-400">Flasher</span></h1>
            </div>
            <Button className={"text-2xl hover:text-sky-400"} icon={<FiLogOut />}/>
        </nav>
    )
}