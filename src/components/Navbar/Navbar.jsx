import { Button, UserImage } from "../index";
import {FiLogOut} from "../../assests"
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/auth/authSlice";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(store => store?.auth);
    return(
        <nav className="w-full flex flex-row items-center justify-between py-3 px-4 bg-white fixed z-50 top-0 shadow md:hidden">
            <div className="flex flex-row items-center gap-4">
                <UserImage imgSrc={user.profilePic} alt={user.firstName} width={"w-10"}/>
                <Link to="/">
                    <h1 className="text-2xl font-semibold">socio<span className="text-sky-400">Flasher</span></h1>
                </Link>
            </div>
            <Button 
                className={"text-2xl hover:text-sky-400"}  
                icon={<FiLogOut />}
                onClick={() => dispatch(logoutUser())}
            />
        </nav>
    )
}