import { Button, UserImage, SearchBox } from "../index/index";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const FollowBar = () => {
    const {users} = useSelector(store => store?.users);
    const {user} = useSelector(store => store?.auth);

    const shownUsers = users?.filter(person => person._id !== user._id);

    return (
        <div className="hidden w-1/4 lg:flex flex-col gap-8 fixed top-0 right-0 items-start p-4 xl:px-8">
                <div className="w-full flex flex-col items-center gap-4">
                    <SearchBox />
                    
                    <div className="w-full flex flex-col w-full bg-white rounded gap-4 py-2 px-4">
                        <div className="flex flex-col gap-4">
                            <div className="border-b py-2 px-1">
                                <p>People to follow</p>
                            </div>

                            {
                                [...shownUsers]?.slice(0, 4).map(({_id, firstName, lastName, profilePic}) => (
                                    <div 
                                        key={_id}
                                        className="flex flex-row items-center justify-between py-2 px-1 hover:bg-slate-100"
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                            <UserImage 
                                                imgSrc={
                                                    profilePic && profilePic
                                                }
                                                alt={
                                                    firstName && firstName
                                                }
                                            />
                                            <p className="font-semibold text-sm">{`${firstName} ${lastName}`}</p>
                                        </div>
                                        <Button className="bg-sky-600 py-1 px-3 rounded-2xl text-white hover:bg-sky-700" text={"Follow"}/>
                                    </div>
                                ) )
                            }
                        </div>
                    </div>
                </div>
            </div>
    )
}