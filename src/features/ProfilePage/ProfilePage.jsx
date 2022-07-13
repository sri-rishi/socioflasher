import { Post, ProfileBox } from "../../components/index/index"

export const ProfilePage = () => {
    return (
        <>
            <ProfileBox />
            <div className="w-full flex flex-col items-center gap-4">
                <Post />
                <Post />
                <Post />
            </div>
        </>
    )
}