import { ToastContainer } from "react-toastify"
import { Header, FloatPostBtn, FollowBar, MenuBar, Navbar, Footer, NewPostBox} from "../../components/index";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {BallTriangle} from "react-loader-spinner";

export const Template = ({children}) => {
    const [loader, setLoader] = useState(true)
    const location = useLocation();

    useEffect(() => {
        document.title = location.pathname === "/" ? "SocioFlasher" : location.pathname.slice(1);
    }, []);

    useEffect(() => {
        setLoader(true);
        setTimeout(() => setLoader(false), 5000);
    }, [location.pathname])

    return (
        <div>
            <div className="w-full">
            <Navbar />
            <ToastContainer />
            <div className="md:flex w-full flex-row relative">
                <MenuBar />
                <NewPostBox />
                <main className="main w-full min-h-screen mt-16 pt-4 md:pt-0 flex flex-col items-center gap-4 border-x md:mt-0 md:w-5/6 md:ml-1/6">
                    <Header path={location.pathname}/>
                    <div className="w-full flex flex-col items-center pb-36 md:pb-4 gap-4"> 
                        {
                            loader ?
                            <div className="flex flex-row items-center justify-center top-1/2 absolute">
                                <BallTriangle 
                                    color="#00BFFF" 
                                    height={120} 
                                    width={120}
                                />
                            </div>
                            :
                            children
                        }
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