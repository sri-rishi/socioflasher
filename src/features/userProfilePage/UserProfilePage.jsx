import { Post, ProfileBox } from "../../components/index"

export const UserProfilePage = () => {
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