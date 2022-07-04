import {  FeedPost, FollowBar, MenuBar, Navbar, Footer, FloatPostBtn} from "../../components/index/index";

export const Feed = () => {
    return (
        <div>
            <Navbar />
            <div className="md:flex w-full">
                <MenuBar />
                <main className="mt-20 md:mt-0 mb-40 md:ml-1/6 py-4 flex md:w-5/6 flex-col items-center gap-4">
                    <FeedPost/>
                    <FeedPost/>
                    <FeedPost/>
                    <FloatPostBtn />
                </main>
                {/* <FollowBar /> */}
            </div>
            <Footer />
        </div>
    )
}