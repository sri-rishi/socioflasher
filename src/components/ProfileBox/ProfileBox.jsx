import { Button } from "../index";

export const ProfileBox = () => {
    return (
        <div className="flex flex-row justify-around w-full max-w-lg bg-white py-4">
            <div className="w-36 h-36 p-4">
                <img className="w-full rounded-full" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkg3YrRehU5lvlYruB90y6K6cF4eyTsMk2iZhcG0N28iHyXrG0_VvlFeBxjcq3rhyl-Po&usqp=CAU"} alt="user" />
            </div>
            <div className="flex flex-col gap-4 p-4">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                        <p className="font-bold text-xl">User Name</p>
                        <p className="text-gray-400">@user123</p>
                    </div>
                    <Button className={"bg-slate-700 px-4 py-1.5 text-white rounded hover:bg-slate-800"} text={"Edit"}/>
                </div>
                <p className="text-gray-700 font-medium">
                    An aspiring web developer
                </p>
                <div className="flex flex-row  gap-4 text-gray-700 font-medium">
                    <p>3 posts</p>
                    <p>3 Followers</p>
                    <p>3 Following</p>
                </div>
                <a className="text-sky-600" href="https://neog-lms.vercel.app/docs/prds/social-media-app" target="_blank">
                    <p>https://neog-lms.vercel.app/docs/prds/social-media-app</p>
                </a>
            </div>
        </div>
    )
}