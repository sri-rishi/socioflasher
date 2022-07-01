import {  FeedSection, FollowBar, MenuBar, Navbar } from "../../components/index";

export const Home = () => {
    return (
        <div>
            <Navbar />
            <main className="">
                <MenuBar />
                <FeedSection/>
                <FollowBar />
            </main>
        </div>
    )
}