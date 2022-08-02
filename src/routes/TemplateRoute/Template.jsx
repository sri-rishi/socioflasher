import { ToastContainer } from "react-toastify"
import { Header, FloatPostBtn, FollowBar, MenuBar, Navbar, Footer, NewPostBox} from "../../components/index";
import 'react-toastify/dist/ReactToastify.css';

export const Template = ({children}) => {
    return (
        <div>
            <div className="w-full">
            <Navbar />
            <ToastContainer />
            <div className="md:flex w-full flex-row relative">
                <MenuBar />
                <NewPostBox />
                <main className="main w-full min-h-screen mt-16 pt-4 md:pt-0 flex flex-col items-center gap-4 border-x md:mt-0 md:w-5/6 md:ml-1/6">
                    <Header />
                    <div className="w-full flex flex-col items-center pb-36 md:pb-4 gap-4"> 
                        {children}
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