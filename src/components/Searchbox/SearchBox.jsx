import {IoMdSearch} from "../../assests"
import { Button } from "../index"

export const SearchBox = () => {
    return (
        <div className="">
            <Button className={""} icon={<IoMdSearch className=""/>} />
            <input className="" placeholder="Search Posts, People, anything"/>
        </div>
    )
}