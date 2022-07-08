import { Outlet } from "react-router-dom"
import { Header, FloatPostBtn, FollowBar, MenuBar, Navbar, Footer} from "../../components/index"

export const Template = () => {
    return (
        <div>
            <div className="w-full">
            <Navbar />
            <div className="md:flex w-full flex-row relative">
                <MenuBar />
                <main className="main w-full mt-16 pt-4 md:pt-0 flex flex-col items-center gap-4 border-x md:mt-0 md:w-5/6 md:ml-1/6">
                    <Header />
                    <div className="w-full flex flex-col items-center gap-4"> 
                        <Outlet />
                    </div>
                    <FloatPostBtn />
                </main>
                <FollowBar />
            </div>
            <Footer />
        </div>
        </div>
    )
}