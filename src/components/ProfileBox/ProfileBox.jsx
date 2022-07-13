import { GiBiohazard } from "react-icons/gi";
import { Button } from "../index";

export const ProfileBox = ({
    imgSrc, 
    firstName,
    lastName,
    userHandler,
    bio,
    link
}) => {
    return (
        <div className="flex flex-row justify-evenly w-full max-w-lg bg-white py-4 border rounded">
            <div className="w-36 h-36 p-2">
                <img className="w-full rounded-full" src={imgSrc && imgSrc} alt={`${firstName} pic`} />
            </div>
            <div className="flex flex-col gap-8 p-2">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                        <p className="font-bold text-xl">{`${firstName} ${lastName}`}</p>
                        <p className="text-gray-400">{`@${userHandler}`}</p>
                    </div>
                    <Button className={"bg-slate-700 px-4 py-1.5 text-white rounded hover:bg-slate-800"} text={"Edit"}/>
                </div>
                <p className="text-gray-700 font-medium">
                    {bio}
                </p>
                <div className="flex flex-row  gap-4 text-gray-700 font-medium">
                    <p>3 posts</p>
                    <p>3 Followers</p>
                    <p>3 Following</p>
                </div>
                <a className="text-sky-600" href="https://neog-lms.vercel.app/docs/prds/social-media-app" target="_blank" rel="noopener noreferrer">
                    <p>{link}</p>
                </a>
            </div>
        </div>
    )
}