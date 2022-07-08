import { Post, SearchBox } from "../../components/index"

export const Explore = () => {
    
    return (
        <>  
            <SearchBox />
            <div className="w-full flex flex-col items-center gap-4">
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </>
    )
}