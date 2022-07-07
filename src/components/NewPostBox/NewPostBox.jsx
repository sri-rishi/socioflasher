import { Button } from "../index"

export const NewPostBox = () => {
    return (
        <div className="hidden w-full max-w-lg p-4 border md:flex flex-col gap-4 bg-white rounded">
            <div className="flex flex-row gap-4">
                <div className="w-8">
                    <img className="w-full rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkg3YrRehU5lvlYruB90y6K6cF4eyTsMk2iZhcG0N28iHyXrG0_VvlFeBxjcq3rhyl-Po&usqp=CAU" alt="" />
                </div>
                <div className="w-full h-full">
                    <textarea className="resize-none w-full h-full border-b outline-transparent p-2" name="newPost" id="newPost" placeholder="What's on your mind"></textarea>
                </div>
            </div>
            <div className="flex flex-row justify-end w-full">
                <Button className={"font-semibold bg-sky-600 py-1 px-6 rounded-2xl text-white hover:shadow-md"} text={"Post"}/>
            </div>
        </div>
    )
}