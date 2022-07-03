import { Button } from "../index";
import { GiFeather } from "../../assests";

export const FloatPostBtn = ({onClick}) => {
    return (
        <Button onClick={() => onClick && onClick()} className={"fixed z-30 bottom-20 right-6 rounded-full w-14 h-14 bg-sky-600 flex flex-row items-center justify-center text-xl text-white shadow-all"} icon={<GiFeather />}/>
    )
}