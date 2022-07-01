import { Button, FeedPostBox, Navbar, RightSideBox, Sidebar } from "../../components/index";

export const Home = () => {
    return (
        <div>
            <Navbar />
            <main className="">
                <Sidebar />
                <FeedPostBox />
                <RightSideBox />
            </main>
        </div>
    )
}