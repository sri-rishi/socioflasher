import {IoMdSearch} from "../../assests"
import { Button } from "../index"

export const SearchBox = () => {
    return (
        <div className="flex flex-row items-center p-2 border-2 border-slate-200 rounded-md bg-white w-full gap-2">
            <Button className={"text-2xl"} icon={<IoMdSearch className=""/>} />
            <input className="outline-transparent w-full" placeholder="Search Posts, People, anything"/>
        </div>
    )
}