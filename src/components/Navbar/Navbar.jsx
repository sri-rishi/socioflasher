export const Navbar = () => {
    return(
        <nav className="w-full flex flex-row items-center gap-4 py-3 px-4 bg-gray-300 fixed z-50 top-0 shadow md:hidden">
            <div className="w-10">
                <img className="w-full rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkg3YrRehU5lvlYruB90y6K6cF4eyTsMk2iZhcG0N28iHyXrG0_VvlFeBxjcq3rhyl-Po&usqp=CAU" alt="user" />
                </div>
            <h1 className="text-2xl font-semibold">socio<span className="text-sky-400">Flasher</span></h1>
        </nav>
    )
}