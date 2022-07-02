import { ProfileImage } from "../index"

export const Navbar = () => {
    return(
        <nav className="w-full flex flex-row items-center gap-4 py-3 px-4 bg-gray-300 fixed z-50 top-0 shadow md:hidden">
            <ProfileImage />
            <h1 className="text-2xl font-semibold">socio<span className="text-sky-400">Flasher</span></h1>
        </nav>
    )
}