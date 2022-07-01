import {IoMdSearch} from "../../assests"
import { Button } from "../index"

export const SearchBox = () => {
    return (
        <div className="search-box flex-row gap-10-px align-items-center">
            <Button className={"border-none bg-transparent"} icon={<IoMdSearch className="mt-5-px"/>} />
            <input className="search-input border-none bg-transparent" placeholder="Search Posts, People, anything"/>
        </div>
    )
}