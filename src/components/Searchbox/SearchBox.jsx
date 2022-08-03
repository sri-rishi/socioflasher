import {IoMdSearch} from "../../assests"
import { Button } from "../index";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const SearchBox = () => {
    const {users} = useSelector((state) => state?.users);
    const {user} = useSelector((state) => state?.auth);
    const [suggestions, setSuggestions] = useState([]);
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    let timerId = useRef();
    useEffect(() => {
    clearTimeout(timerId.current);
    if (input.trim().length > 0)
        timerId.current = setTimeout(() => {
        setSuggestions(
            users?.filter((eleUser) =>
            `${eleUser.firstName} ${eleUser.lastName}`.toLowerCase().includes(input.toLowerCase())
            )
        );
        }, 500);
    }, [input]);
    return (
        <div className="flex flex-row items-center p-2 border-2 border-slate-200 rounded-md bg-white max-w-xl w-full gap-2 relative">
            <Button className={"text-2xl"} icon={<IoMdSearch className=""/>} />
            <input
            className="grow focus:outline-none sm:text-sm"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {input.trim().length > 0 && (
          <ul className="absolute w-5/6 top-12 left-12 bg-white z-10 rounded-xl shadow-xl md:left-8 max-h-40 overflow-y-auto border-b-2 border-blue-400">
            {suggestions.length > 0 ? (
                suggestions.map((userInfo) => (
                    <li
                    key={userInfo._id}
                    className="px-4 py-2 flex items-center cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                        user.userHandler === userInfo?.userHandler
                        ? navigate("/profile")
                        : navigate(`/userProfile/${userInfo._id}`);
                        setInput("");
                    }}
                    >
                    <img
                        src={userInfo?.profilePic}
                        className="h-6 rounded-full sm:h-4"
                        alt={userInfo?.userHandler}
                    />
                    <span className="grow text-md text-gray-500   mr-1  ml-2 sm:text-sm ">
                        {`${userInfo?.firstName} ${userInfo?.lastName}`}
                    </span>
                    </li>
                ))
                ) : (
                <p className="px-4 py-2 sm:text-sm">No Search found</p>
                )}
            </ul>
            )}
        </div>
    )
}