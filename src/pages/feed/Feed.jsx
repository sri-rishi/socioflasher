import {  FeedPost, FollowBar, MenuBar, Navbar, Footer, FloatPostBtn, NewPostBox} from "../../components/index/index";

export const Feed = () => {
    return (
        <div>
            <Navbar />
            <div className="md:flex w-full">
                <MenuBar />
                <main className="mt-20 md:mt-0 mb-40 md:ml-1/6 py-4 flex md:w-5/6 flex-col items-center gap-4 border-x">
                    <NewPostBox />
                    <div className="flex flex-col gap-4 p-2">
                        <FeedPost/>
                        <FeedPost/>
                        <FeedPost/>
                    </div>
                    <FloatPostBtn />
                </main>
                {/* <FollowBar /> */}
            </div>
            <Footer />
        </div>
    )
}